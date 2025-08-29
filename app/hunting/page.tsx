import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SafeImage } from "@/components/ui/safe-image"
import { HuntingGallery } from "@/components/hunting/HuntingGallery"
import { Globe2, ShieldCheck, MapPin, Trophy, CalendarCheck, ClipboardCheck, Plane, Camera, Leaf } from "lucide-react"

export const metadata = {
  title: "Legal Hunting in South Africa | D.A.D x Sibulane Safaris",
  description:
    "Book ethical, fully-compliant hunting experiences in South Africa with our partner Sibulane Safaris. Licensed PHs, permits, fair chase, conservation-first.",
}

export default function HuntingPage() {
  const heroImg = "/hunting/e99446_04d77c6f12694d7d8126544f3fefe081~mv2.png"
  const speciesImages = [
    { name: "Greater Kudu", img: "/hunting/e99446_3b9277ad87d74797846a72ad05e1a832~mv2.png" },
    { name: "Impala", img: "/hunting/e99446_6073e4cc3ccc435980757a2b3e1cc91b~mv2.png" },
    { name: "Blue Wildebeest", img: "/hunting/e99446_b7fa1132e1a342b3a7967f808543d157~mv2.png" },
    { name: "Warthog", img: "/hunting/e99446_dc7d3e0531c3451b886c28c30c47b10d~mv2.png" },
  ]
  const galleryImages = [
    "/hunting/e99446_01b8d7cac4d84cd3a364a3c66d9b6373~mv2.png",
    "/hunting/e99446_032fcf1154174124ae87be9b902409c4~mv2.png",
    "/hunting/e99446_234b838db0ae4d569c3b129231f75d2d~mv2.png",
    "/hunting/e99446_26c68cfab6d14eb1ae722245f0eeb3a4~mv2.png",
    "/hunting/e99446_3315480dd2704f108767cf02f7d48b4c~mv2.png",
    "/hunting/e99446_3ebe810f72194b8e88fc05c3a2e501f0~mv2.png",
    "/hunting/e99446_4abaed27154840e0bf450c2c946cac71~mv2.png",
    "/hunting/e99446_4d0d81c87e93463fbc4081281f1e2d48~mv2.png",
    "/hunting/e99446_54c0b4e57e844515b171385bc32de2ac~mv2.png",
    "/hunting/e99446_655b3718bf664cdb8f794fd0f76f9661~mv2.png",
    "/hunting/e99446_676a8933d0e7429ba2bfa09d366c2b0e~mv2.png",
    "/hunting/e99446_889f4a5c26bb4a18bc6e41123d1536a1~mv2.png",
    "/hunting/e99446_95c2bef67a0a461a9e6532a9153a2b3b~mv2.png",
    "/hunting/e99446_9b47b87046ee42a9866af8b310f4acec~mv2.png",
    "/hunting/e99446_a420461f7de2409fa6928b26bfed3505~mv2.png",
    "/hunting/e99446_a79212ca99d849efa7f6bff6fa2af330~mv2.png",
    "/hunting/e99446_b989c0d7a778488cb58dbba65e2f0412~mv2.png",
    "/hunting/e99446_ca035e5fee504950a1200185ffed657a~mv2.png",
    "/hunting/e99446_cdd3ef78ed484152b985112dc3e09e6d~mv2.png",
    "/hunting/e99446_dae5e52a972a42bfa0259b27524d20ea~mv2.png",
    "/hunting/e99446_fb7fae19b14e44188a9c714e50cda6e1~mv2.png",
    "/hunting/e99446_fb866d35db974ce98f984e02cda86a69~mv2.png",
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.015em] text-foreground mb-3">
              Legal Hunting in South Africa
            </h1>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto lg:mx-0">
              Experience ethical, fair‑chase hunting with licensed professional hunters, responsible practices, and
              transparent permits — in partnership with Sibulane Safaris.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button asChild size="lg" className="min-w-[180px]"><Link href="#species">Species</Link></Button>
              <Button asChild variant="outline" size="lg" className="min-w-[180px]"><Link href="#process">How It Works</Link></Button>
            </div>
            <div className="mt-6 inline-flex items-center gap-3 rounded border px-3 py-2">
              <div className="relative w-10 h-10 rounded overflow-hidden bg-muted">
                <SafeImage srcPrimary="/hunting/logo.svg" srcFallback="/placeholder.jpg" alt="Sibulane Safaris" fill className="object-contain p-1" />
              </div>
              <div className="text-sm">
                In partnership with <a href="https://www.sibulanesafaris.com/" target="_blank" rel="noreferrer" className="text-primary underline">Sibulane Safaris</a>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-muted to-background">
            <SafeImage
              srcPrimary={heroImg}
              srcFallback="/placeholder.jpg"
              alt="South Africa hunting landscape"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{
            icon: Trophy, title: "Fair‑Chase Hunts", desc: "Pursuit under ethical standards with licensed PHs"
          }, {
            icon: ShieldCheck, title: "Fully Compliant", desc: "Permits, regulations, age & species rules respected"
          }, {
            icon: Leaf, title: "Conservation‑First", desc: "Fees support habitat management & local programs"
          }, {
            icon: MapPin, title: "Prime Concessions", desc: "Quality areas selected for safety and success"
          }].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-1 text-foreground font-medium">
                  <Icon className="w-4 h-4 text-primary" /> {title}
                </div>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Species */}
      <section id="species" className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-foreground mb-4">Popular Species</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {speciesImages.map((s) => (
              <Card key={s.name} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent/10 to-muted">
                  <SafeImage srcPrimary={s.img} srcFallback="/placeholder.jpg" alt={s.name} fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium leading-none">{s.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-foreground mb-4">Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Plains Game</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Curated species lists with daily rates and trophy fees. Custom itineraries available.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Licensed PH & tracker team</li>
                  <li>Lodge or tented accommodation</li>
                  <li>Airport transfers and meals</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Special Requests</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Species availability and quotas vary by region and season. We confirm feasibility and permits.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ethical standards and age assessments</li>
                  <li>Permit guidance and documentation</li>
                  <li>Professional taxidermy options</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Photographic Safaris</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Non‑hunting packages for families and groups focusing on wildlife viewing and culture.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Guided game drives and walks</li>
                  <li>Camera support and hides</li>
                  <li>Community experiences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-foreground mb-4">How It Works</h2>
          <Card>
            <CardContent className="pt-6 text-sm text-muted-foreground">
              <ol className="list-decimal list-inside space-y-1">
                <li>Inquiry & preferences <span className="inline-flex items-center gap-1 text-primary"><Camera className="w-3 h-3"/></span></li>
                <li>Date selection & quota check <span className="inline-flex items-center gap-1 text-primary"><CalendarCheck className="w-3 h-3"/></span></li>
                <li>Permits & compliance <span className="inline-flex items-center gap-1 text-primary"><ClipboardCheck className="w-3 h-3"/></span></li>
                <li>Travel planning & arrival <span className="inline-flex items-center gap-1 text-primary"><Plane className="w-3 h-3"/></span></li>
                <li>Guided hunt with licensed PH <span className="inline-flex items-center gap-1 text-primary"><Trophy className="w-3 h-3"/></span></li>
                <li>Field prep, taxidermy & shipping options</li>
              </ol>
            </CardContent>
          </Card>
          <div className="mt-6 grid lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary"/> Ethics & Compliance</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>Licensed Professional Hunters (PH) and outfitters</li>
                  <li>Fair‑chase only; no canned hunting</li>
                  <li>Age & species regulations strictly observed</li>
                  <li>Permits, tags, and CITES (where applicable)</li>
                  <li>Firearm import/export assistance or rental options</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base inline-flex items-center gap-2"><Globe2 className="w-4 h-4 text-primary"/> Travel & Stay</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>Pickup from designated airports</li>
                  <li>Comfortable lodges or tented camps</li>
                  <li>Meals, beverages, and daily laundry</li>
                  <li>Non‑hunter activities and add‑on tours</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild><Link href="/contact">Request Dates & Availability</Link></Button>
            <Button asChild variant="outline"><Link href="https://www.sibulanesafaris.com/" target="_blank" rel="noreferrer">Visit Partner Site</Link></Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-foreground mb-4">Gallery</h2>
          <HuntingGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/10">
            <CardContent className="p-6 sm:p-10 text-center">
              <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.015em] text-foreground mb-3">
                Ready to plan a compliant, ethical hunt?
              </h3>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-6">
                Share your target species, dates, and group size. We’ll confirm quotas, permits and a tailored plan with
                our partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg"><Link href="/contact">Start Your Booking</Link></Button>
                <Button asChild size="lg" variant="outline"><Link href="https://www.sibulanesafaris.com/" target="_blank" rel="noreferrer">Partner Details</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
