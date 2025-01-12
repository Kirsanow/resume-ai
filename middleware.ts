import { auth as middleware } from "@/lib/auth";
import { NextResponse } from "next/server";

export default middleware((req) => {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
