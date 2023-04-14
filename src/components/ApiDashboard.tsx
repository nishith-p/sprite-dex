import React from "react";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { formatDistance } from "date-fns";

import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { Input } from "@/ui/Input";
import Heading from "@/ui/Heading";
import Paragraph from "@/ui/Paragraph";
import Table from "@/ui/Table";
import ApiKeyOptions from "./ApiKeyOptions";

const ApiDashboard = async () => {
  const user = await getServerSession(authOptions);

  if (!user) notFound();

  const apiKeys = await db.apiKey.findMany({
    where: { userId: user.user.id },
  });

  const activeApiKey = apiKeys.find((key) => key.enabled);

  if (!activeApiKey) notFound();

  const userRequests = await db.apiRequest.findMany({
    where: {
      apiKeyId: {
        in: apiKeys.map((key) => key.id),
      },
    },
  });

  const serializableReq = userRequests.map((req) => ({
    ...req,
    timestamp: formatDistance(new Date(req.timestamp), new Date()),
  }));

  return (
    <div className="container flex flex-col gap-6">
      <Heading>Welcome back, {user.user.name}</Heading>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
        <Paragraph className="mt-2">Your API key:</Paragraph>
        <Input className="w-fit truncate" readOnly value={activeApiKey.key} />
        <ApiKeyOptions
          apiKeyId={activeApiKey.id}
          apiKeyKey={activeApiKey.key}
        />
      </div>

      <Paragraph className="text-center md:text-left mt-4 -mb-4">
        API usage history:
      </Paragraph>

      <Table userRequests={serializableReq} />
    </div>
  );
};

export default ApiDashboard;
