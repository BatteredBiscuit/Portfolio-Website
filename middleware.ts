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

  // Redirect non-www to www (reverse of previous logic)
  if (hostname === "hayden-oneill.io") {
    url.host = "www.hayden-oneill.io";

    // Use 308 permanent redirect with proper cache control
    return NextResponse.redirect(url, {
      status: 308,
      headers: {
        "Cache-Control": "max-age=3600",
      },
    });
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
