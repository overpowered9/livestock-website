import { NextResponse } from "next/server"
import { deleteProduct, getProductById, updateProduct } from "@/lib/db-products"
import { revalidatePath, revalidateTag } from "next/cache"

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
    // Invalidate cached reads and pages
    revalidateTag("products")
    revalidatePath("/livestock")
    revalidatePath(`/livestock/${params.id}`)
    return NextResponse.json({ success: true, data: updated })
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e.message || "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await deleteProduct(params.id)
    // Invalidate cached reads and pages
    revalidateTag("products")
    revalidatePath("/livestock")
    revalidatePath(`/livestock/${params.id}`)
    return NextResponse.json({ success: true })
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e.message || "Failed to delete product" }, { status: 500 })
  }
}
