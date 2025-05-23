import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for static files and NextAuth.js API routes
  if (
    pathname.includes('.')
    || pathname.startsWith('/_next/')
    || pathname.startsWith('/api/auth')
  ) {
    return NextResponse.next();
  }
  
  // Check if the path is protected
  const isProtectedPath = pathname.startsWith("/dashboard");
  
  // Get the authentication token
  const token = await getToken({ req: request });
  
  // If the path is protected and there's no token, redirect to login
  if (isProtectedPath && !token) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }
  
  // If the user is authenticated and tries to access login page, redirect to dashboard
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  
  // If the user is authenticated and accesses the root, redirect to dashboard
  if (token && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}