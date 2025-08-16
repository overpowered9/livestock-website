import ProductDetailPageClient from "./ProductDetailPageClient"
import { getProductById, getProductsByType } from "@/lib/db-products"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  try {
    // If DB is empty at build time, this can return an empty list.
    const goats = await getProductsByType("goat")
    const cows = await getProductsByType("cow")
    const vegetables = await getProductsByType("vegetable")
    const honey = await getProductsByType("honey")
    return [...goats, ...cows, ...vegetables, ...honey].map((p) => ({ id: p.id }))
  } catch {
    return []
  }
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)
  if (!product) {
    notFound()
  }
  const related = (await getProductsByType(product!.type)).filter((p) => p.id !== product!.id).slice(0, 3)
  return <ProductDetailPageClient product={product!} related={related} />
}
