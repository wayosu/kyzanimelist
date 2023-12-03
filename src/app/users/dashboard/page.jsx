"use client";

import { authUserSession } from "@/libs/auth-libs";
import { Bookmarks, ChatText } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = async () => {
  const user = await authUserSession();

  return (
    <>
      <div className="container mx-auto px-4 min-h-screen">
        <header className="py-4">
          <h1 className="text-2xl">Dashboard</h1>
          <div className="flex items-center gap-3 mt-3 w-full border rounded-md p-3">
            <Image
              src={user.image}
              alt="image-user"
              width={250}
              height={250}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-base md:text-lg">Welcome, {user.name}</h2>
              <h3 className="text-sm text-owned-grey-500">{user.email}</h3>
            </div>
          </div>
        </header>

        <div className="flex gap-3">
          <Link
            href="/users/dashboard/collection"
            className="block w-full bg-owned-primary-500 rounded-md p-2 text-center text-sm md:text-base hover:bg-owned-primary-400 transition-all"
          >
            <span className="flex items-center justify-center gap-1">
              <Bookmarks size={25} />
              <span>My Collection</span>
            </span>
          </Link>
          <Link
            href="/users/dashboard/comment"
            className="block w-full bg-owned-secondary-100 rounded-md p-2 text-center text-sm md:text-base hover:bg-owned-secondary-200 transition-all"
          >
            <span className="flex items-center justify-center gap-1">
              <ChatText size={25} />
              <span>My Comment</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
