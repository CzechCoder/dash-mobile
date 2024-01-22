import { NextResponse } from "next/server";

export default function middleware(req: any) {
  const developmentMode: boolean = false;
  let verify = req.cookies.get(
    developmentMode
      ? "next-auth.session-token"
      : "__Secure-next-auth.session-token"
  );
  let url = req.url;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect(
      developmentMode
        ? "http://localhost:3000/login"
        : "https://mclaren-store-dashboard.vercel.app/login"
    );
  }
}
