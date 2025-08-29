"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { SafeImage } from "@/components/ui/safe-image"

type Slide = {
  key: string
  image: { src: string; alt: string }
  title: string
  body: string
  cta: { label: string; href: string }
  heading?: "h1" | "h2"
}

type HeroCarouselProps = {
  slides?: Slide[]
  autoplayMs?: number
  showDots?: boolean
  showProgress?: boolean
}

const DEFAULT_AUTOPLAY_MS = 5000

export function HeroCarousel({
  slides: slidesProp,
  autoplayMs = DEFAULT_AUTOPLAY_MS,
  showDots = true,
  showProgress = true,
}: HeroCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const autoplayMsRef = useRef(autoplayMs)

  // Keep ref in sync if prop changes
  useEffect(() => {
    autoplayMsRef.current = autoplayMs
  }, [autoplayMs])

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  const slides: Slide[] = slidesProp ?? [
    {
      key: "livestock",
      image: { src: "/hero/goat.jpg", alt: "Premium Livestock" },
      title: "Premium Livestock Excellence",
      body: "Discover our world-class Boer goats and premium livestock for your agricultural success.",
      cta: { label: "Explore Livestock", href: "/livestock" },
      heading: "h1",
    },
    {
      key: "semen",
      image: { src: "/hero/semenhero.png", alt: "Semen & Breeding Programs" },
      title: "Semen & Breeding Programs",
      body: "Access superior genetics and breeding services to elevate your herd.",
      cta: { label: "Explore Semen & Breeding", href: "/semen" },
      heading: "h2",
    },
    {
      key: "hunting",
      image: { src: "/hero/hunting.jpg", alt: "Hunting Experiences" },
      title: "Hunting Experiences",
      body: "Curated hunting journeys with expert guidance and support.",
      cta: { label: "Explore Hunting", href: "/hunting" },
      heading: "h2",
    },
    {
      key: "import-export",
      image: { src: "/hero/importe.jpg", alt: "Import & Export Services" },
      title: "Import & Export Services",
      body: "Reliable logistics and global sourcing for livestock and agri-products.",
      cta: { label: "Explore Import & Export", href: "/import-export" },
      heading: "h2",
    },
  ]

  // Update selected index and snaps when API is ready
  const onSelect = useCallback((embla?: CarouselApi) => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setProgress(0)
  }, [])

  useEffect(() => {
    if (!api) return
    setScrollSnaps(api.scrollSnapList())
    onSelect(api)
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  // Autoplay + progress
  useEffect(() => {
    if (!api || paused || reducedMotion) return
    const startedAt = Date.now()
    const tick = setInterval(() => {
      const elapsed = Date.now() - startedAt
      const duration = autoplayMsRef.current || DEFAULT_AUTOPLAY_MS
      const pct = Math.min(100, (elapsed / duration) * 100)
      setProgress(pct)
      if (elapsed >= duration) {
        api.scrollNext()
      }
    }, 50)
    return () => clearInterval(tick)
  }, [api, paused, reducedMotion, selectedIndex])

  return (
    <section
      className="relative rounded-lg mx-3 sm:mx-6 lg:mx-8 my-3 sm:my-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Live region for screen readers announcing current slide */}
      <p className="sr-only" aria-live="polite">
        {slides[selectedIndex]?.title}
      </p>

      <Carousel className="w-full" opts={{ loop: true }} setApi={setApi} aria-label="Featured content carousel">
        <CarouselContent>
          {slides.map((s, idx) => (
            <CarouselItem key={s.key}>
              <div className="relative min-h-[320px] sm:min-h-[480px] rounded-lg overflow-hidden">
                <SafeImage
                  srcPrimary={s.image.src}
                  srcFallback="/placeholder.jpg"
                  alt={s.image.alt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 py-10 sm:py-14">
                  {s.heading === "h1" ? (
                    <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4 md:mb-6">{s.title}</h1>
                  ) : (
                    <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4 md:mb-6">{s.title}</h2>
                  )}
                  <p className="text-base md:text-lg mb-6 md:mb-8 leading-normal max-w-2xl mx-auto">{s.body}</p>
                  <div className="flex justify-center">
                    <Button asChild size="lg" className="h-12 px-5 bg-primary text-primary-foreground text-base font-bold tracking-[0.015em] hover:bg-primary/90">
                      <Link href={s.cta.href}>{s.cta.label}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden sm:flex bg-white/20 text-white border-white hover:bg-white/30" />
        <CarouselNext className="hidden sm:flex bg-white/20 text-white border-white hover:bg-white/30" />
      </Carousel>

      {/* Progress bar */}
      {showProgress && !reducedMotion && (
        <div className="absolute left-0 right-0 bottom-0 h-1.5 bg-white/20 rounded-b-lg overflow-hidden">
          <div
            className="h-full bg-white/80 transition-[width] duration-75"
            style={{ width: `${progress}%` }}
            aria-hidden
          />
        </div>
      )}

      

      {/* Dots */}
      {showDots && (
        <div className="pointer-events-auto absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}: ${slides[i]?.title ?? ""}`}
              aria-current={i === selectedIndex ? "true" : undefined}
              onClick={() => api?.scrollTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === selectedIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"
              }`}
              title={slides[i]?.title}
            />
          ))}
        </div>
      )}
    </section>
  )
}
