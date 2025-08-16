import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { password } = await req.json()
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      return NextResponse.json({ success: false, message: "Server not configured" }, { status: 500 })
    }

    if (!password || password !== adminPassword) {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 })
    }

    const res = NextResponse.json({ success: true })
    res.cookies.set("admin_auth", "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours
    })
    return res
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e.message || "Login failed" }, { status: 500 })
  }
}
