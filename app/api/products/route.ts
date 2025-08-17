import { NextResponse } from "next/server"
import { createProduct, getAllProducts, findProducts } from "@/lib/db-products"
import type { Product } from "@/lib/types"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)

    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10))
    const pageSize = Math.max(1, parseInt(searchParams.get("pageSize") || "20", 10))
    const type = (searchParams.get("type") as Product["type"] | null) || undefined
    const availability = (searchParams.get("availability") as Product["availability"] | null) || undefined
    const q = searchParams.get("q") || undefined
    const sort = (searchParams.get("sort") as "name" | "createdAt" | null) || undefined
    const order = (searchParams.get("order") as "asc" | "desc" | null) || undefined

    // If no query params provided, fall back to returning all (keeps backward compatibility)
    const hasQuery =
      searchParams.has("page") ||
      searchParams.has("pageSize") ||
      searchParams.has("type") ||
      searchParams.has("availability") ||
      searchParams.has("q") ||
      searchParams.has("sort") ||
      searchParams.has("order")

    if (!hasQuery) {
      const items = await getAllProducts()
      return NextResponse.json({ success: true, data: items })
    }

    const result = await findProducts({ page, pageSize, type, availability, q, sort, order })
    return NextResponse.json({ success: true, ...result })
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
