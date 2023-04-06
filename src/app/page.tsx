import type { Metadata } from "next";
import Link from "next/link";

import Heading from "@/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

export const metadata: Metadata = {
  title: "nxt-txt | Home",
  description: "Text similarity checker app created using Next.js 13",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl w-full mx-auto h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <Heading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          >
            Text Similarity.
            <br />
            Made with Next 13.
          </Heading>

          <Paragraph className="max-w-xl lg:text-left">
            A simple text similarity checking API created to test out Next.js 13
            functionalities. Get started with a free{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              API key
            </Link>
            .
          </Paragraph>

          <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute"></div>
        </div>
      </div>
    </div>
  );
}
