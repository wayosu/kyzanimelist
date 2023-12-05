"use client";

import { GithubLogo } from "@phosphor-icons/react";
import Link from "next/link";

const SignInButton = () => {
  return (
    <Link
      href="/api/auth/signin"
      className="w-40 md:w-auto text-sm text-center border rounded-md px-2 py-1 inline-flex items-center justify-center gap-1 hover:bg-owned-dark-500 transition-all"
    >
      <GithubLogo size={20} />
      Sign In
    </Link>
  );
};

export default SignInButton;
