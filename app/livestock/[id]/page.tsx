import ProductDetailPageClient from "./ProductDetailPageClient"
import { products } from "@/lib/products"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductDetailPageClient params={params} />
}
