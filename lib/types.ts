// filepath: /Users/zaid/Downloads/livestock-website/lib/types.ts
export interface Product {
  id: string
  name: string
  type: "goat" | "cow" | "vegetable" | "honey"
  image: string
  description: string
  breed?: string
  origin?: string
  careInstructions?: string
  price?: string
  availability: "available" | "out-of-stock" | "seasonal"
}
