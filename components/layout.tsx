import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

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
