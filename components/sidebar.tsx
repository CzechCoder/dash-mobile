import Link from "next/link";
import React, { FC, ReactElement, ReactNode } from "react";
import Image from "next/image";
import { SIDERBAR_ITEMS } from "@/data/sidebar-items";
import { useRouter } from "next/router";

interface SidebarIcon {
  link: string;
  icon: ReactNode;
  tooltip: string;
  currentPath: string;
}

const SidebarIcon: FC<SidebarIcon> = ({ link, icon, tooltip, currentPath }) => (
  <Link href={link}>
    <div
      className={`sidebar-icon group ${
        currentPath === link && "rounded-3xl bg-orange-500 text-white"
      }`}
    >
      {icon}
      <span className="sidebar-tooltip md:group-hover:scale-100 z-50">
        {tooltip}
      </span>
    </div>
  </Link>
);

const Sidebar = ({ children }: { children: ReactElement }) => {
  const router = useRouter();
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between z-50">
        <div className="flex flex-col items-center">
          <Link href="/dashboard">
            <div className="inline-block">
              <Image src="/images/logo.jpg" alt="" width={50} height={50} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200w w-full p-2"></span>
          {SIDERBAR_ITEMS.map((item) => (
            <SidebarIcon
              key={item.link}
              link={item.link}
              icon={item.icon}
              tooltip={item.tooltip}
              currentPath={router.pathname}
            />
          ))}
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
