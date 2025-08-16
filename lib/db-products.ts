// filepath: /Users/zaid/Downloads/livestock-website/lib/db-products.ts
import { getDb } from "./mongodb"
import type { Product } from "./types"

const COLLECTION = "products"

async function getCollection() {
  const db = await getDb()
  const col = db.collection<Product>(COLLECTION)
  // Ensure a unique index on id for fast lookups and to keep slugs unique
  await col.createIndex({ id: 1 }, { unique: true })
  return col
}

export async function getAllProducts(): Promise<Product[]> {
  const col = await getCollection()
  return col.find({}).sort({ name: 1 }).toArray()
}

export async function getProductsByType(type: Product["type"]): Promise<Product[]> {
  const col = await getCollection()
  return col.find({ type }).sort({ name: 1 }).toArray()
}

export async function getProductById(id: string): Promise<Product | null> {
  const col = await getCollection()
  return col.findOne({ id })
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export async function createProduct(data: Omit<Product, "id"> & Partial<Pick<Product, "id">>) {
  const col = await getCollection()
  const id = data.id && data.id.trim() !== "" ? data.id : slugify(data.name)
  const doc: Product = {
    id,
    name: data.name,
    type: data.type,
    image: data.image || "",
    description: data.description,
    breed: data.breed,
    origin: data.origin,
    careInstructions: data.careInstructions,
    price: data.price,
    availability: data.availability,
  }
  await col.insertOne(doc)
  return doc
}

export async function updateProduct(id: string, data: Partial<Omit<Product, "id">>) {
  const col = await getCollection()
  await col.updateOne({ id }, { $set: data })
  return getProductById(id)
}

export async function deleteProduct(id: string) {
  const col = await getCollection()
  await col.deleteOne({ id })
  return { id }
}
