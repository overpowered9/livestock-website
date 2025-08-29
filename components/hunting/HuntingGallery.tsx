"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { SafeImage } from "@/components/ui/safe-image"
import type { CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

type Props = {
  images: string[]
}

export function HuntingGallery({ images }: Props) {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [selected, setSelected] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setSelected(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  return (
    <Carousel opts={{ align: "center", loop: true }} setApi={setApi} className="w-full">
      <CarouselContent>
        {images.map((src, i) => {
          const isActive = i === selected
          return (
            <CarouselItem key={src} className="!basis-3/4 sm:!basis-1/2 md:!basis-1/3 lg:!basis-1/4">
              <Card
                className={cn(
                  "transition-all duration-300",
                  isActive ? "scale-100 opacity-100" : "scale-[0.95] opacity-80"
                )}
              >
                <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden rounded-md">
                  <SafeImage
                    srcPrimary={src}
                    srcFallback="/placeholder.jpg"
                    alt={`Hunting gallery image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 80vw"
                  />
                </div>
              </Card>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious className="-left-6" />
      <CarouselNext className="-right-6" />
    </Carousel>
  )
}
