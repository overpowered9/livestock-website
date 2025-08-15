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

export const products: Product[] = [
  // Goats
  {
    id: "beetal-goat",
    name: "Beetal Goat",
    type: "goat",
    image: "/beetal-goat.png",
    description: "Premium Beetal goats known for their excellent milk production and meat quality.",
    breed: "Beetal",
    origin: "Punjab, Pakistan",
    careInstructions:
      "Requires proper shelter, clean water, and balanced feed. Regular veterinary checkups recommended.",
    price: "PKR 45,000 - 65,000",
    availability: "available",
  },
  {
    id: "boer-goat",
    name: "Boer Goat",
    type: "goat",
    image: "/boer-goat.png",
    description: "High-quality Boer goats imported for superior meat production and breeding.",
    breed: "Boer",
    origin: "South Africa (Imported)",
    careInstructions: "Adaptable to various climates. Needs protein-rich feed and adequate grazing space.",
    price: "PKR 80,000 - 120,000",
    availability: "available",
  },
  {
    id: "kamori-goat",
    name: "Kamori Goat",
    type: "goat",
    image: "/kamori-goat.png",
    description: "Traditional Kamori goats with distinctive long ears and excellent milk yield.",
    breed: "Kamori",
    origin: "Sindh, Pakistan",
    careInstructions: "Heat-tolerant breed. Requires mineral supplements and regular hoof trimming.",
    price: "PKR 35,000 - 55,000",
    availability: "available",
  },

  // Cows
  {
    id: "sahiwal-cow",
    name: "Sahiwal Cow",
    type: "cow",
    image: "/sahiwal-cow.png",
    description: "Indigenous Sahiwal cattle known for high milk production and heat tolerance.",
    breed: "Sahiwal",
    origin: "Punjab, Pakistan",
    careInstructions: "Requires spacious shelter, quality fodder, and regular milking schedule.",
    price: "PKR 150,000 - 250,000",
    availability: "available",
  },
  {
    id: "holstein-friesian",
    name: "Holstein Friesian",
    type: "cow",
    image: "/holstein-cow.png",
    description: "High-yielding Holstein Friesian cattle for commercial dairy operations.",
    breed: "Holstein Friesian",
    origin: "Netherlands (Imported)",
    careInstructions: "Needs cool environment, high-quality feed, and professional dairy management.",
    price: "PKR 300,000 - 450,000",
    availability: "available",
  },
  {
    id: "red-sindhi-cow",
    name: "Red Sindhi Cow",
    type: "cow",
    image: "/red-sindhi-cow.png",
    description: "Hardy Red Sindhi cattle adapted to local climate with good milk production.",
    breed: "Red Sindhi",
    origin: "Sindh, Pakistan",
    careInstructions: "Heat-resistant breed. Requires balanced nutrition and clean water supply.",
    price: "PKR 120,000 - 200,000",
    availability: "available",
  },

  // Vegetables
  {
    id: "organic-tomatoes",
    name: "Organic Tomatoes",
    type: "vegetable",
    image: "/organic-tomatoes.png",
    description: "Fresh organic tomatoes grown using sustainable farming practices.",
    origin: "Punjab Farms",
    careInstructions: "Store in cool, dry place. Best consumed within 5-7 days.",
    price: "PKR 80 per kg",
    availability: "seasonal",
  },
  {
    id: "fresh-onions",
    name: "Fresh Onions",
    type: "vegetable",
    image: "/fresh-onions.png",
    description: "High-quality onions with excellent storage life and flavor.",
    origin: "Sindh Farms",
    careInstructions: "Store in ventilated area away from moisture.",
    price: "PKR 60 per kg",
    availability: "available",
  },
  {
    id: "organic-potatoes",
    name: "Organic Potatoes",
    type: "vegetable",
    image: "/organic-potatoes.png",
    description: "Premium organic potatoes perfect for cooking and processing.",
    origin: "Balochistan Farms",
    careInstructions: "Store in dark, cool place to prevent sprouting.",
    price: "PKR 50 per kg",
    availability: "available",
  },

  // Honey
  {
    id: "acacia-honey",
    name: "Pure Acacia Honey",
    type: "honey",
    image: "/acacia-honey.png",
    description: "Raw, unprocessed acacia honey with natural enzymes and minerals.",
    origin: "Northern Pakistan",
    careInstructions: "Store at room temperature. Crystallization is natural.",
    price: "PKR 1,200 per kg",
    availability: "available",
  },
  {
    id: "wildflower-honey",
    name: "Wildflower Honey",
    type: "honey",
    image: "/wildflower-honey.png",
    description: "Multi-floral honey collected from diverse wildflower sources.",
    origin: "Kashmir Valley",
    careInstructions: "Keep sealed and away from direct sunlight.",
    price: "PKR 1,500 per kg",
    availability: "seasonal",
  },
]

export function getProductsByType(type: Product["type"]) {
  return products.filter((product) => product.type === type)
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}
