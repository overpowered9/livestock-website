// filepath: /Users/zaid/Downloads/livestock-website/app/api/products/seed/route.ts
import { NextResponse } from "next/server"
import { products as seed } from "@/lib/products"
import { getDb } from "@/lib/mongodb"

export async function POST() {
  try {
    const db = await getDb()
    const col = db.collection("products")

    const ops = seed.map((p) => ({
      updateOne: {
        filter: { id: p.id },
        update: { $setOnInsert: p },
        upsert: true,
      },
    }))

    const result = await col.bulkWrite(ops, { ordered: false })
    return NextResponse.json({ success: true, result })
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e.message || "Failed to seed" }, { status: 500 })
  }
}
