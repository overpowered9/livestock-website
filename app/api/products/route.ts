// filepath: /Users/zaid/Downloads/livestock-website/app/api/products/route.ts
import { NextResponse } from "next/server"
import { createProduct, getAllProducts } from "@/lib/db-products"

export async function GET() {
  try {
    const items = await getAllProducts()
    return NextResponse.json({ success: true, data: items })
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e.message || "Failed to load products" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    if (!body?.name || !body?.type || !body?.description || !body?.origin || !body?.availability) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }
    const doc = await createProduct(body)
    return NextResponse.json({ success: true, data: doc }, { status: 201 })
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e.message || "Failed to create product" }, { status: 500 })
  }
}
