import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProductsByType } from "@/lib/db-products"
import { LivestockBrowser } from "./LivestockBrowser"

export default async function LivestockPage() {
  const [goats, cows, vegetables, honey] = await Promise.all([
    getProductsByType("goat"),
    getProductsByType("cow"),
    getProductsByType("vegetable"),
    getProductsByType("honey"),
  ])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
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
              <CardTitle className="text-xl">Description</CardTitle>
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

          {/* Browser with search/sort/filter and tabs */}
          <LivestockBrowser goats={goats} cows={cows} vegetables={vegetables} honey={honey} />
        </div>
      </div>
    </div>
  )
}
