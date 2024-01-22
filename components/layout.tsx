import Sidebar from "@/components/sidebar";
import { Metadata } from "next";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

export const metadata: Metadata = {
  other: {
    "Content-Security-Policy": "upgrade-insecure-requests",
  },
};

const Layout = ({ children }: { children: ReactElement }) => {
  const pathname = usePathname();
  return pathname.includes("/dashboard") ? (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  ) : (
    <>{children}</>
  );
};

export default Layout;
