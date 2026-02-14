// export { auth as middleware } from "@/auth";

// export const config = {
//   matcher: ["/dashboard/:path*", "/jobs/post"],
// };
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token"); // or your cookie name
  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/jobs/post"],
};
