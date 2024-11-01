"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;

    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#fae27c] via-[#c3ebfa] to-[#cfceff]">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white p-10 rounded-xl shadow-xl flex flex-col gap-4 max-w-md w-full"
        >
          <h1 className="text-2xl font-semibold flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Web School Logo"
              width={32}
              height={32}
            />
            <span className="text-[#cfceff]">Web School</span>
          </h1>
          <h2 className="text-gray-600 text-sm mb-6">
            Sign in to your account
          </h2>

          <Clerk.GlobalError className="text-sm text-red-500" />

          <Clerk.Field name="identifier" className="flex flex-col gap-1">
            <Clerk.Label className="text-xs text-gray-600">
              Username
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="p-3 rounded-lg ring-1 ring-gray-300 focus:ring-[#fae27c] transition-all duration-200"
            />
            <Clerk.FieldError className="text-xs text-red-500" />
          </Clerk.Field>

          <Clerk.Field name="password" className="flex flex-col gap-1 mt-4">
            <Clerk.Label className="text-xs text-gray-600">
              Password
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="p-3 rounded-lg ring-1 ring-gray-300 focus:ring-[#fae27c] transition-all duration-200"
            />
            <Clerk.FieldError className="text-xs text-red-500" />
          </Clerk.Field>

          <SignIn.Action
            submit
            className="bg-[#fae27c] text-gray-800 font-medium rounded-lg text-sm py-2.5 mt-6 hover:bg-[#c3ebfa] transition-all duration-200"
          >
            Sign In
          </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
};

export default LoginPage;
