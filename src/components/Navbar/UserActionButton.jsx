"use client";

import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import { GithubLogo } from "@phosphor-icons/react";

const UserActionButton = async () => {
  const user = await authUserSession();

  const firstName = user?.name.split(" ")[0];

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <>
      {user ? (
        <div className="relative inline-block text-left w-40 md:w-auto">
          <div className="kyz-dropdown inline-block relative">
            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center gap-3">
              <Image
                src={user.image}
                alt="profile-image"
                width={250}
                height={250}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-normal">{firstName}</span>
            </button>
            <ul className="kyz-dropdown__menu absolute hidden bg-owned-dark-200 w-full shadow text-owned-light-500">
              <li>
                <Link
                  href="/users/dashboard"
                  className="py-3 px-4 block text-sm text-owned-grey-500 hover:text-owned-primary-500 transition-all"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href={actionUrl}
                  className="py-3 px-4 block text-sm text-owned-grey-500 hover:text-owned-primary-500 transition-all"
                >
                  {actionLabel}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link
          href={actionUrl}
          className="w-40 md:w-auto text-sm text-center border rounded-md px-2 py-1 inline-flex items-center justify-center gap-1 hover:bg-owned-dark-500 transition-all"
        >
          <GithubLogo size={20} color="#f3f2f2" />
          {actionLabel}
        </Link>
      )}
    </>
  );
};

export default UserActionButton;
