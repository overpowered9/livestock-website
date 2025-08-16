import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="w-2/3 max-w-md">
            <Skeleton className="h-8 w-64" />
          </div>
        </div>
        <div className="pb-3 pt-1 px-4">
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        {/* Description Section */}
        <Card className="mx-4 mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-serif">
              <Skeleton className="h-6 w-40" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>

        <Tabs defaultValue="goats" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="goats">
              <Skeleton className="h-5 w-24" />
            </TabsTrigger>
            <TabsTrigger value="cows">
              <Skeleton className="h-5 w-20" />
            </TabsTrigger>
            <TabsTrigger value="vegetables">
              <Skeleton className="h-5 w-28" />
            </TabsTrigger>
            <TabsTrigger value="honey">
              <Skeleton className="h-5 w-16" />
            </TabsTrigger>
          </TabsList>

          {(["goats", "cows", "vegetables", "honey"] as const).map((tab) => (
            <TabsContent value={tab} key={tab}>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-3 pb-3">
                    <Skeleton className="w-full aspect-square rounded-lg" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-full" />
                      <div className="flex items-center justify-between mt-2">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-10 w-28" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
