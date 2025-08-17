import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getDb } from "@/lib/mongodb"

export async function GET(req: Request) {
  const cookieStore = await cookies()
  const isAdmin = cookieStore.get("admin_auth")?.value === "1"
  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const page = Number(searchParams.get("page") || 1)
  const pageSize = Math.min(Number(searchParams.get("pageSize") || 20), 100)
  const type = searchParams.get("type") as "contact" | "inquiry" | null
  const readParam = searchParams.get("read")

  const filter: any = {}
  if (type) filter.type = type
  if (readParam === "true") filter.read = true
  if (readParam === "false") filter.read = false

  const db = await getDb()
  const col = db.collection("requests")
  const total = await col.countDocuments(filter)
  const cursor = col
    .find(filter)
    .sort({ createdAt: -1 })
    .skip((page - 1) * pageSize)
    .limit(pageSize)

  const docs = await cursor.toArray()

  const items = docs.map((d: any) => ({
    ...d,
    _id: d._id?.toString?.() || d._id,
  }))

  return NextResponse.json({ success: true, items, total, page, pageSize })
}
