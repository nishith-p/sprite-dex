"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";

import Button from "@/ui/Button";

interface SignInButtonProps {}

const SignInButton = (props: SignInButtonProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      //   toast({
      //     title: "Error signing in",
      //     message: "Please try again later",
      //     type: "error",
      //   });
    }
  };
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
