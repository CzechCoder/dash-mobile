import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function Index() {
  const { data: session, status } = useSession();

  const router = useRouter();

  const redirect = useCallback(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [router, status]);

  useEffect(() => {
    redirect();
  }, []);

  return <></>;
}
