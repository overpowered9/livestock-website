import { getDb } from "./mongodb"
import type { Product } from "./types"
import { unstable_cache } from "next/cache"

const COLLECTION = "products"

async function getCollection() {
  const db = await getDb()
  const col = db.collection<Product>(COLLECTION)
  // Ensure a unique index on id for fast lookups and to keep slugs unique
  await col.createIndex({ id: 1 }, { unique: true })
  // Helpful indexes for filtering/sorting/search
  await col.createIndex({ type: 1 })
  await col.createIndex({ availability: 1 })
  await col.createIndex({ name: 1 })
  await col.createIndex({ createdAt: -1 })
  // Text index for simple full-text search across key fields
  try {
    await col.createIndex({ name: "text", description: "text", breed: "text", origin: "text" })
  } catch {
    // ignore if text index not supported or already exists under different name
  }
  return col
}

// Non-cached implementations
async function _getAllProducts(): Promise<Product[]> {
  const col = await getCollection()
  return col.find({}, { projection: { _id: 0 } }).sort({ name: 1 }).toArray()
}

async function _getProductsByType(type: Product["type"]): Promise<Product[]> {
  const col = await getCollection()
  return col.find({ type }, { projection: { _id: 0 } }).sort({ name: 1 }).toArray()
}

async function _getProductById(id: string): Promise<Product | null> {
  const col = await getCollection()
  return col.findOne({ id }, { projection: { _id: 0 } })
}

// Cached, taggable exports with per-param cache keys
export async function getAllProducts(): Promise<Product[]> {
  return unstable_cache(_getAllProducts, ["getAllProducts"], { tags: ["products"] })()
}

export async function getProductsByType(type: Product["type"]): Promise<Product[]> {
  return unstable_cache(() => _getProductsByType(type), ["getProductsByType", type], { tags: ["products"] })()
}

export async function getProductById(id: string): Promise<Product | null> {
  return unstable_cache(() => _getProductById(id), ["getProductById", id], { tags: ["products"] })()
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
  const now = new Date()
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
    createdAt: now,
  }
  await col.insertOne(doc)
  return doc
}

export async function updateProduct(id: string, data: Partial<Omit<Product, "id" | "createdAt">>) {
  const col = await getCollection()
  // Do not allow setting undefined keys
  const $set: any = {}
  for (const [k, v] of Object.entries(data)) {
    if (typeof v !== "undefined") $set[k] = v
  }
  if (Object.keys($set).length === 0) {
    const current = await _getProductById(id)
    return current // no-op
  }
  const res = await col.updateOne({ id }, { $set })
  if (res.matchedCount === 0) return null
  return _getProductById(id)
}

export async function deleteProduct(id: string) {
  const col = await getCollection()
  await col.deleteOne({ id })
  return { id }
}

export interface ProductQueryOptions {
  page: number
  pageSize: number
  type?: Product["type"]
  availability?: Product["availability"]
  q?: string
  sort?: "name" | "createdAt"
  order?: "asc" | "desc"
}

export async function findProducts(opts: ProductQueryOptions) {
  const col = await getCollection()
  const filter: any = {}
  if (opts.type) filter.type = opts.type
  if (opts.availability) filter.availability = opts.availability
  let useText = false
  if (opts.q && opts.q.trim() !== "") {
    // Prefer text search; fall back to case-insensitive regex
    filter.$text = { $search: opts.q.trim() }
    useText = true
  }

  let sort: Record<string, 1 | -1> = { name: 1 }
  const dir: 1 | -1 = opts.order === "desc" ? -1 : 1
  if (opts.sort === "createdAt") sort = { createdAt: dir }
  else if (opts.sort === "name") sort = { name: dir }

  const page = Math.max(1, opts.page || 1)
  const pageSize = Math.min(Math.max(1, opts.pageSize || 20), 100)

  // When using $text, add score sorting if sort not specified
  const cursor = useText
    ? col
        .find(filter, { projection: { _id: 0, score: { $meta: "textScore" } as any } })
        .sort(opts.sort ? sort : { score: { $meta: "textScore" } as any })
    : col.find(filter, { projection: { _id: 0 } }).sort(sort)

  const total = await col.countDocuments(filter)
  const items = await cursor.skip((page - 1) * pageSize).limit(pageSize).toArray()

  return { items, total, page, pageSize }
}
