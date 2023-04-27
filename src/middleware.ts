import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
   const authorization = request.cookies.get("jwt-orders-auth-token");
   const refreshToken = request.cookies.get("jwt-orders-auth-refresh-token");

   if (!authorization) return NextResponse.redirect(new URL("/", request.url));
   return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
   matcher: ["/orders", "/home", "/profile"],
};
