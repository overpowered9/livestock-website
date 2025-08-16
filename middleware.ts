import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Allow next internals and public assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/admin/login") ||
    pathname.startsWith("/api/admin/logout") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  const isLoggedIn = req.cookies.get("admin_auth")?.value === "1"

  // Protect admin pages
  if (pathname.startsWith("/admin")) {
    // If not logged in, send to login
    if (!isLoggedIn && pathname !== "/admin/login") {
      const url = req.nextUrl.clone()
      url.pathname = "/admin/login"
      url.searchParams.set("from", pathname)
      return NextResponse.redirect(url)
    }

    // If logged in, avoid showing login page
    if (isLoggedIn && pathname === "/admin/login") {
      const url = req.nextUrl.clone()
      url.pathname = "/admin"
      return NextResponse.redirect(url)
    }
  }

  // Protect write operations on products API
  if (pathname.startsWith("/api/products")) {
    const method = req.method
    if (["POST", "PUT", "DELETE"].includes(method)) {
      if (!isLoggedIn) {
        return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}
