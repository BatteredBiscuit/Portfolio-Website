import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const secretToken = process.env.NEXT_PUBLIC_SECRET_TOKEN;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow access to internal resources like _next, API routes, and favicon
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }

  // Check for token in query parameters and cookies
  const tokenFromQuery = request.nextUrl.searchParams.get('token');
  const tokenFromCookie = request.cookies.get('token')?.value;

  if (tokenFromQuery === secretToken || tokenFromCookie === secretToken) {
    const response = NextResponse.next();
    // If the token is provided via query, set it as a cookie for future requests.
    if (tokenFromQuery === secretToken) {
      response.cookies.set('token', secretToken, { path: '/' });
    }
    return response;
  }

  // If no valid token is found, return a 404 response.
  return new NextResponse('Not Found', { status: 404 });
}

// Apply this middleware to all routes except for the ones listed below.
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
