import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getDb } from "@/lib/mongodb"
import { ObjectId } from "mongodb"

function unauthorized() {
  return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
}

export async function PATCH(_req: Request, { params }: { params: { id: string } }) {
  const cookieStore = await cookies()
  const isAdmin = cookieStore.get("admin_auth")?.value === "1"
  if (!isAdmin) return unauthorized()

  const body = await _req.json().catch(() => ({}))
  const read = typeof body.read === "boolean" ? body.read : undefined
  if (typeof read === "undefined") {
    return NextResponse.json({ success: false, message: "Missing 'read' boolean in body" }, { status: 400 })
  }

  try {
    const db = await getDb()
    const _id = new ObjectId(params.id)
    const res = await db.collection("requests").updateOne({ _id }, { $set: { read } })
    if (res.matchedCount === 0) return NextResponse.json({ success: false, message: "Not found" }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ success: false, message: "Invalid ID or server error" }, { status: 400 })
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const cookieStore = await cookies()
  const isAdmin = cookieStore.get("admin_auth")?.value === "1"
  if (!isAdmin) return unauthorized()

  try {
    const db = await getDb()
    const _id = new ObjectId(params.id)
    const res = await db.collection("requests").deleteOne({ _id })
    if (res.deletedCount === 0) return NextResponse.json({ success: false, message: "Not found" }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ success: false, message: "Invalid ID or server error" }, { status: 400 })
  }
}
