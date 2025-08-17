"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import type { Product } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Props = {
  goats: Product[]
  cows: Product[]
  vegetables: Product[]
  honey: Product[]
}

type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc" | "availability"

type AvailabilityFilter = "all" | Product["availability"]

export function LivestockBrowser({ goats, cows, vegetables, honey }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const validSorts: SortOption[] = ["name-asc", "name-desc", "price-asc", "price-desc", "availability"]
  const validAvail: AvailabilityFilter[] = ["all", "available", "seasonal", "out-of-stock"]

  const initialSort = ((): SortOption => {
    const s = searchParams.get("sort") as SortOption | null
    return s && validSorts.includes(s) ? s : "name-asc"
  })()
  const initialAvail = ((): AvailabilityFilter => {
    const a = searchParams.get("avail") as AvailabilityFilter | null
    return a && validAvail.includes(a) ? a : "all"
  })()
  const initialTab = searchParams.get("tab") || "goats"
  const initialQuery = searchParams.get("q") || ""

  const [query, setQuery] = React.useState(initialQuery)
  const [sort, setSort] = React.useState<SortOption>(initialSort)
  const [availability, setAvailability] = React.useState<AvailabilityFilter>(initialAvail)
  const [tab, setTab] = React.useState(initialTab)

  // Defer query to debounce filtering while typing
  const deferredQuery = React.useDeferredValue(query)

  const norm = (s?: string) => (s || "").toLowerCase()
  const q = norm(deferredQuery)
  const matches = (p: Product) => {
    if (!q) return true
    return [p.name, p.breed, p.origin, p.description].some((f) => norm(f).includes(q))
  }

  const priceToNumber = (price?: string) => {
    if (!price) return Number.POSITIVE_INFINITY
    const n = Number(String(price).replace(/[^0-9.]/g, ""))
    return Number.isFinite(n) && n >= 0 ? n : Number.POSITIVE_INFINITY
  }

  const availabilityOrder: Record<Product["availability"], number> = {
    available: 0,
    seasonal: 1,
    "out-of-stock": 2,
  }

  function sortItems(items: Product[]) {
    return [...items].sort((a, b) => {
      switch (sort) {
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "price-asc": {
          const pa = priceToNumber(a.price)
          const pb = priceToNumber(b.price)
          return pa - pb
        }
        case "price-desc": {
          const pa = priceToNumber(a.price)
          const pb = priceToNumber(b.price)
          return pb - pa
        }
        case "availability":
          return availabilityOrder[a.availability] - availabilityOrder[b.availability]
        default:
          return 0
      }
    })
  }

  function filterItems(items: Product[]) {
    return items.filter((p) => matches(p) && (availability === "all" || p.availability === availability))
  }

  const goatsFiltered = React.useMemo(() => sortItems(filterItems(goats)), [goats, deferredQuery, sort, availability])
  const cowsFiltered = React.useMemo(() => sortItems(filterItems(cows)), [cows, deferredQuery, sort, availability])
  const vegetablesFiltered = React.useMemo(() => sortItems(filterItems(vegetables)), [vegetables, deferredQuery, sort, availability])
  const honeyFiltered = React.useMemo(() => sortItems(filterItems(honey)), [honey, deferredQuery, sort, availability])

  // Sync state to URL (replace to avoid history spam)
  React.useEffect(() => {
    const params = new URLSearchParams()
    if (query) params.set("q", query)
    params.set("sort", sort)
    params.set("avail", availability)
    params.set("tab", tab)
    router.replace(`?${params.toString()}`, { scroll: false })
  }, [query, sort, availability, tab, router])

  const tabCounts = {
    goats: goatsFiltered.length,
    cows: cowsFiltered.length,
    vegetables: vegetablesFiltered.length,
    honey: honeyFiltered.length,
  }

  const renderGrid = (items: Product[]) => (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {items.map((product) => (
        <div key={product.id} className="flex flex-col gap-3 pb-3">
          <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <Badge
              className={`absolute top-3 right-3 ${
                product.availability === "available"
                  ? "bg-primary"
                  : product.availability === "seasonal"
                    ? "bg-accent text-accent-foreground"
                    : "bg-destructive"
              }`}
            >
              {product.availability}
            </Badge>
          </div>
          <div>
            {product.breed || product.origin ? (
              <p className="text-sm text-muted-foreground">
                {product.breed && product.origin
                  ? `${product.breed} • ${product.origin}`
                  : product.breed || `Origin: ${product.origin}`}
              </p>
            ) : null}
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-base font-semibold text-primary">{product.price || "Contact for price"}</span>
              <Button asChild size="sm" className="min-w-[84px] h-10 px-4">
                <Link href={`/livestock/${product.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
      {items.length === 0 && (
        <div className="col-span-full text-center text-sm text-muted-foreground py-8">No items match your search.</div>
      )}
    </div>
  )

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, breed, origin..."
          className="md:max-w-sm"
        />
        <div className="flex gap-2">
          <Select value={availability} onValueChange={(v: AvailabilityFilter) => setAvailability(v)}>
            <SelectTrigger className="w-[150px]"><SelectValue placeholder="Availability" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All availability</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="seasonal">Seasonal</SelectItem>
              <SelectItem value="out-of-stock">Out of stock</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={(v: SortOption) => setSort(v)}>
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="Sort by" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Name (A–Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z–A)</SelectItem>
              <SelectItem value="price-asc">Price (Low to High)</SelectItem>
              <SelectItem value="price-desc">Price (High to Low)</SelectItem>
              <SelectItem value="availability">Availability</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs value={tab} onValueChange={setTab} className="mt-3">
        <div className="px-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="goats">
              Goats
              <Badge variant="secondary" className="ml-2">{tabCounts.goats}</Badge>
            </TabsTrigger>
            <TabsTrigger value="cows">
              Cows
              <Badge variant="secondary" className="ml-2">{tabCounts.cows}</Badge>
            </TabsTrigger>
            <TabsTrigger value="vegetables">
              Vegetables
              <Badge variant="secondary" className="ml-2">{tabCounts.vegetables}</Badge>
            </TabsTrigger>
            <TabsTrigger value="honey">
              Honey
              <Badge variant="secondary" className="ml-2">{tabCounts.honey}</Badge>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="goats">{renderGrid(goatsFiltered)}</TabsContent>
        <TabsContent value="cows">{renderGrid(cowsFiltered)}</TabsContent>
        <TabsContent value="vegetables">{renderGrid(vegetablesFiltered)}</TabsContent>
        <TabsContent value="honey">{renderGrid(honeyFiltered)}</TabsContent>
      </Tabs>
    </div>
  )
}
