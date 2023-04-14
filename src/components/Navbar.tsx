import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";

import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";
import ThemeToggle from "@/components/ThemeToggle";
import { buttonVariants } from "@/ui/Button";
import { authOptions } from "@/lib/auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    // border-b border-slate-300 dark:border-zinc-700 shadow-sm
    <div className="fixed backdrop-blur-sm bg-white-75 dark:bg-zinc-900 z-50 top-0 left-0 right-0 h-20 flex items-center justify-between">
      <div className="container w-full flex justify-between items-center mx-0 max-w-none">
        <Link href="/" className="text-slate-900 dark:text-slate-100">
          sprite-dex
        </Link>

        <div className="md:hidden">
          <ThemeToggle />
        </div>

        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>
          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href="/dashboard"
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
