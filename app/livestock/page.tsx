import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductsByType } from "@/lib/db-products"

export default async function LivestockPage() {
  const [goats, cows, vegetables, honey] = await Promise.all([
    getProductsByType("goat"),
    getProductsByType("cow"),
    getProductsByType("vegetable"),
    getProductsByType("honey"),
  ])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col w-full">
          {/* Header */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-tight tracking-[-0.015em] text-foreground">
              Our Livestock & Products
            </h1>
          </div>
          <p className="text-base font-normal leading-normal text-foreground pb-3 pt-1 px-4">
            Discover our premium collection of livestock and agricultural products, carefully selected and maintained to
            the highest standards.
          </p>

          {/* Description Section */}
          <Card className="mx-4 mb-6">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Description</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Explore top-quality goats and cows bred for superior genetics and performance, alongside fresh farm
                vegetables and premium honey products. Each listing includes origin, availability, and care details.
              </p>
              <p>
                Pricing may vary due to seasonality and availability. If a price is not listed, please contact us for a
                personalized quote.
              </p>
            </CardContent>
          </Card>

          {/* Product Categories */}
          <Tabs defaultValue="goats" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="goats" className="text-sm font-medium">
                Goats ({goats.length})
              </TabsTrigger>
              <TabsTrigger value="cows" className="text-sm font-medium">
                Cows ({cows.length})
              </TabsTrigger>
              <TabsTrigger value="vegetables" className="text-sm font-medium">
                Vegetables ({vegetables.length})
              </TabsTrigger>
              <TabsTrigger value="honey" className="text-sm font-medium">
                Honey ({honey.length})
              </TabsTrigger>
            </TabsList>

            {/* Goats Tab */}
            <TabsContent value="goats">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {goats.map((product) => (
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
                        <p className="text-sm font-normal leading-normal text-muted-foreground">
                          {product.breed && product.origin
                            ? `${product.breed} • ${product.origin}`
                            : product.breed || `Origin: ${product.origin}`}
                        </p>
                      ) : null}
                      <p className="text-sm font-normal leading-normal text-muted-foreground mt-1 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-base font-semibold text-primary">{product.price || "Contact for price"}</span>
                        <Button asChild size="sm" className="min-w-[84px] h-10 px-4">
                          <Link href={`/livestock/${product.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Cows Tab */}
            <TabsContent value="cows">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {cows.map((product) => (
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
                        <p className="text-sm font-normal leading-normal text-muted-foreground">
                          {product.breed && product.origin
                            ? `${product.breed} • ${product.origin}`
                            : product.breed || `Origin: ${product.origin}`}
                        </p>
                      ) : null}
                      <p className="text-sm font-normal leading-normal text-muted-foreground mt-1 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-base font-semibold text-primary">{product.price || "Contact for price"}</span>
                        <Button asChild size="sm" className="min-w-[84px] h-10 px-4">
                          <Link href={`/livestock/${product.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Vegetables Tab */}
            <TabsContent value="vegetables">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {vegetables.map((product) => (
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
                      {product.origin ? (
                        <p className="text-sm font-normal leading-normal text-muted-foreground">Origin: {product.origin}</p>
                      ) : null}
                      <p className="text-sm font-normal leading-normal text-muted-foreground mt-1 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-base font-semibold text-primary">{product.price || "Contact for price"}</span>
                        <Button asChild size="sm" className="min-w-[84px] h-10 px-4">
                          <Link href={`/livestock/${product.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Honey Tab */}
            <TabsContent value="honey">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {honey.map((product) => (
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
                      {product.origin ? (
                        <p className="text-sm font-normal leading-normal text-muted-foreground">Origin: {product.origin}</p>
                      ) : null}
                      <p className="text-sm font-normal leading-normal text-muted-foreground mt-1 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-base font-semibold text-primary">{product.price || "Contact for price"}</span>
                        <Button asChild size="sm" className="min-w-[84px] h-10 px-4">
                          <Link href={`/livestock/${product.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
