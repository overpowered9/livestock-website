// filepath: /Users/zaid/Downloads/livestock-website/app/api/products/[id]/route.ts
import { NextResponse } from "next/server"
import { deleteProduct, getProductById, updateProduct } from "@/lib/db-products"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const item = await getProductById(params.id)
    if (!item) return NextResponse.json({ success: false, message: "Not found" }, { status: 404 })
    return NextResponse.json({ success: true, data: item })
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e.message || "Failed to fetch product" }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json()
    const updated = await updateProduct(params.id, body)
    return NextResponse.json({ success: true, data: updated })
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e.message || "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await deleteProduct(params.id)
    return NextResponse.json({ success: true })
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e.message || "Failed to delete product" }, { status: 500 })
  }
}
