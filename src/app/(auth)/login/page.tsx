import Link from "next/link";

import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import AuthForm from "@/components/AuthForm";

const page = () => {
  return (
    <div className="absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <Heading>Welcome Back!</Heading>
          <Paragraph>Please sign in using your Google account.</Paragraph>

          <AuthForm />
          <Link
            className={buttonVariants({
              variant: "ghost",
              className: "w-fit",
            })}
            href="/"
          >
            <Icons.ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
