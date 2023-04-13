import { z } from "zod";
import { NextApiRequest, NextApiResponse } from "next";
import { PokemonClient } from "pokenode-ts";

import { withMethods } from "@/lib/api-middlewares/with-methods";
import { db } from "@/lib/db";

const reqSchema = z.object({
  pokemonName: z.string().max(100),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body as unknown;
  const apiKey = req.headers.authorization;
  const api = new PokemonClient();

  if (!apiKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { pokemonName } = reqSchema.parse(body);

    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      },
    });

    if (!validApiKey) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const start = new Date();
    const { sprites } = await api.getPokemonByName(pokemonName);
    const duration = new Date().getTime() - start.getTime();

    if (sprites) {
      //@ts-ignore
      delete sprites.versions;
      delete sprites.other;
    }

    await db.apiRequest.create({
      data: {
        duration,
        method: req.method as string,
        path: req.url as string,
        status: 200,
        apiKeyId: validApiKey.id,
        usedApiKey: validApiKey.key,
      },
    });

    return res.status(200).json({ success: true, data: sprites });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues });
    }

    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default withMethods(["POST"], handler);
