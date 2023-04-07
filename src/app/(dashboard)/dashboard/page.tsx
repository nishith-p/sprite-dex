import React from "react";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import ApiDashboard from "@/components/ApiDashboard";
import RequestKey from "@/components/RequestKey";

export const metadata: Metadata = {
  title: "nxt-txt | Dashboard",
  description: "Dashboard of the nxt-txt web application",
};

const page = async () => {
  const user = await getServerSession(authOptions);

  if (!user) {
    return notFound();
  }

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id, enabled: true },
  });

  return (
    <div className="max-w-7xl mx-auto mt-16">
      {apiKey ? (
        // @ts-expect-error Server Component
        <ApiDashboard />
      ) : (
        <RequestKey />
      )}
    </div>
  );
};

export default page;