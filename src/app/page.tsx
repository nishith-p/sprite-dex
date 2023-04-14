import type { Metadata } from "next";
import Link from "next/link";

import Heading from "@/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

export const metadata: Metadata = {
  title: "sprite-dex | Home",
  description: "Pokémon sprite fetching app created using Next.js 13",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden pt-24 pb-8 px-6">
      <div className="bg-[#edf0f6] dark:bg-[#151516] container max-w-none w-full mx-auto h-full rounded-3xl">
        <div className="h-full gap-6 flex flex-col justify-center items-start">
          <div className="lg:ml-10">
            <Heading size="lg" className="text-[#80868b] dark:text-zinc-400">
              <span className="text-black dark:text-slate-50">SpriteDex </span>{" "}
              can get you
              <br />
              any Pokémon sprite.
              <br />
            </Heading>
            <Paragraph className="mt-6 tracking-normal max-w-2xl text-left">
              Meet SpriteDex: A simple Pokémon sprite fetching API created to
              test out Next.js 13 functionalities. Get started with a free{" "}
              <Link
                href="/login"
                className="underline underline-offset-2 text-black dark:text-slate-50"
              >
                API key
              </Link>
              .
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}
