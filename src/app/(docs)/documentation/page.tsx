import React from "react";
import type { Metadata } from "next";

import Heading from "@/ui/Heading";
import Paragraph from "@/ui/Paragraph";
import DocumentationTabs from "@/components/DocumentationTabs";

import "simplebar-react/dist/simplebar.min.css";

export const metaData: Metadata = {
  title: "sprite-dex | Documentation",
  description:
    "Documentation of the Pokemon stripe fetching app created using Next.js 13",
};

const page = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <Heading>Making a request</Heading>
        <Paragraph>api/v1/sprites</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
