import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";
  const path = request.nextUrl.pathname;

  // Skip redirection for sitemap.xml and robots.txt
  if (path === "/sitemap.xml" || path === "/robots.txt") {
    return NextResponse.next();
  }

  // Redirect www to non-www
  if (hostname.startsWith("www.")) {
    const newHostname = hostname.replace(/^www\./, "");
    url.host = newHostname;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images folder)
     * - public files (other public files)
     */
    "/((?!_next/static|_next/image|favicon.ico|images|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)",
  ],
};
