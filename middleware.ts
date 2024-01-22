import { NextResponse } from "next/server";

export default function middleware(req: any) {
  let verifyLocal = req.cookies.get("next-auth.session-token");
  let verify = req.cookies.get("__Secure-next-auth.session-token");
  let url = req.url;
  const loginLocal = "http://localhost:3000/login";
  const loginVercel = "https://mclaren-store-dashboard.vercel.app/login";

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect(loginVercel);
  }
}
