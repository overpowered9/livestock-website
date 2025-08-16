import { MongoClient } from "mongodb"

const uri: string = process.env.MONGODB_URI as string
if (!uri) {
  throw new Error("MONGODB_URI is not set. Add it to your .env.local file.")
}

let client: MongoClient | null = null
let clientPromise: Promise<MongoClient> | null = null

// In Next.js, use a global cached client in development to avoid creating multiple connections
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

export function getMongoClient(): Promise<MongoClient> {
  if (clientPromise) return clientPromise

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri)
      global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    client = new MongoClient(uri)
    clientPromise = client.connect()
  }
  return clientPromise!
}

export async function getDb(dbName = process.env.MONGODB_DB || "livestock") {
  const cli = await getMongoClient()
  return cli.db(dbName)
}
