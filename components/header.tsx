"use client";

import { signOut, useSession } from "next-auth/react";

const Header = ({ title }: { title: string }) => {
  const { data: session, status } = useSession();
  return (
    <div className="flex justify-between px-4 pt-4 items-center">
      <h2>{title}</h2>
      <div className="gap-2 items-center hidden md:flex">
        <h2>Welcome back, {session?.user?.name}</h2>

        <button
          className="border p-2 bg-red-500 rounded-lg text-white"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
