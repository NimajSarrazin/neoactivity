"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";


const GithubSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <button
      className="w-full"
      onClick={() => signIn("Github", { callbackUrl })}
    >
      Continue with Github
    </button>
  );
};

export default GithubSignInButton;
