import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SafeImage } from "@/components/ui/safe-image"
import { Globe2, ShieldCheck, Truck, ClipboardCheck, CheckCircle2, Thermometer, Package, Ship, Plane } from "lucide-react"

export const metadata = {
  title: "Import & Export Services | D.A.D Private Limited",
  description:
    "International import/export solutions for livestock, wildlife (law-compliant), natural products and niche machinery — permits, health testing, quarantine, logistics, and documentation handled end-to-end.",
}

export default function ImportExportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.015em] text-foreground mb-3">
              Import & Export Services
            </h1>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto lg:mx-0">
              D.A.D Private Limited facilitates compliant international trade of livestock, select wildlife products
              within legal frameworks, natural agricultural products, and niche machinery. From permits and health
              testing to cold-chain logistics and final delivery, we manage the process end‑to‑end.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button asChild size="lg" className="min-w-[180px]"><Link href="#categories">What We Handle</Link></Button>
              <Button asChild variant="outline" size="lg" className="min-w-[180px]"><Link href="#process">How It Works</Link></Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-muted to-background">
            <SafeImage
              srcPrimary="/importexport.png"
              srcFallback="/placeholder.jpg"
              alt="Import & export logistics overview"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-foreground mb-4">What We Import & Export</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent/10 to-muted">
                <SafeImage
                  srcPrimary="/importexport/livestock-genetics.png"
                  srcFallback="/placeholder.jpg"
                  alt="Livestock and genetics visual"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Livestock & Genetics</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Goats, cattle and small ruminants, plus genetics (semen/embryos) with strict health documentation.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Health tests and quarantine</li>
                  <li>Compliance with destination rules</li>
                  <li>Welfare‑first handling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent/10 to-muted">
                <SafeImage
                  srcPrimary="/importexport/wildlife-compliance.png"
                  srcFallback="/placeholder.jpg"
                  alt="Wildlife compliance and permits visual"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Wildlife (Legal & Ethical)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Only where permitted under local and international law (e.g., CITES). Full transparency and permits.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Permit guidance & clearances</li>
                  <li>Traceability & documentation</li>
                  <li>Strict adherence to regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent/10 to-muted">
                <SafeImage
                  srcPrimary="/importexport/natural-products.png"
                  srcFallback="/placeholder.jpg"
                  alt="Natural agricultural products visual"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Natural Products</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Honey, fresh produce, and other agricultural products with quality control and cold‑chain options.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Export‑grade packing</li>
                  <li>Temperature management</li>
                  <li>Certificates of origin</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent/10 to-muted">
                <SafeImage
                  srcPrimary="/importexport/machinery-equipment.png"
                  srcFallback="/placeholder.jpg"
                  alt="Machinery and equipment visual"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Machinery & Equipment</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Specialized gear: handling, feeding, milking, processing, cool storage, and farm tools for the niche.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Sourcing & inspection</li>
                  <li>Spare parts & manuals</li>
                  <li>Freight & insurance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-foreground mb-4">End‑to‑End Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-1 text-foreground font-medium">
                  <ClipboardCheck className="w-4 h-4 text-primary" /> Regulatory & Permits
                </div>
                <p className="text-sm text-muted-foreground">Import permits, health certificates, CITES (where applicable) and customs coordination.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-1 text-foreground font-medium">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Health Testing & Quarantine
                </div>
                <p className="text-sm text-muted-foreground">Accredited labs, vaccination schedules, pre‑export quarantine and inspection.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-1 text-foreground font-medium">
                  <Truck className="w-4 h-4 text-primary" /> Multi‑modal Logistics
                </div>
                <p className="text-sm text-muted-foreground">Road, air and sea freight planning with export‑grade crating and route optimization.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-1 text-foreground font-medium">
                  <Thermometer className="w-4 h-4 text-primary" /> Cold‑Chain Management
                </div>
                <p className="text-sm text-muted-foreground">Temperature control for perishables with validated packing and monitoring.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-1 text-foreground font-medium">
                  <Package className="w-4 h-4 text-primary" /> Packing & Insurance
                </div>
                <p className="text-sm text-muted-foreground">Export packaging, labeling, insurance options and photographic documentation.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-1 text-foreground font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Destination Support
                </div>
                <p className="text-sm text-muted-foreground">Customs clearance coordination and post‑arrival guidance as needed.</p>
              </CardContent>
            </Card>
          </div>

          {/* Transport visual cards */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold inline-flex items-center gap-2"><Plane className="w-4 h-4 text-primary"/> Air Freight</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1">
                <ul className="list-disc list-inside space-y-1">
                  <li>Transit: typically 1–7 days door‑to‑door</li>
                  <li>Best for: live animals, urgent or high‑value cargo, temperature‑sensitive goods</li>
                  <li>Constraints: weight/size limits and higher cost per kg</li>
                  <li>Handling: IATA LAR compliance, livestock stowage, cold‑chain monitoring</li>
                  <li>Docs: Air Waybill (AWB), health certificates, permits</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold inline-flex items-center gap-2"><Ship className="w-4 h-4 text-primary"/> Sea Freight</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1">
                <ul className="list-disc list-inside space-y-1">
                  <li>Transit: typically 2–6 weeks depending on route</li>
                  <li>Best for: bulk volumes, machinery, non‑urgent shipments; cost‑efficient</li>
                  <li>Constraints: longer lead times, port schedules, potential demurrage</li>
                  <li>Handling: reefers for perishables, export‑grade crating, marine insurance</li>
                  <li>Docs: Bill of Lading (B/L), packing list, certificate of origin</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     
      {/* Visuals & Media */}
      <section id="visuals" className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-foreground mb-4">Visuals & Media</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-[16/9] bg-muted">
                <SafeImage srcPrimary="/importexport/routes-map.png" srcFallback="/placeholder.jpg" alt="Global routes map" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <CardHeader className="py-3">
                <CardTitle className="text-sm font-medium leading-none">Global Shipping Routes</CardTitle>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-[4/3] bg-muted">
                <SafeImage srcPrimary="/importexport/livestock-crates.png" srcFallback="/placeholder.jpg" alt="Export-grade livestock crates" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <CardHeader className="py-3">
                <CardTitle className="text-sm font-medium leading-none">Export‑Grade Livestock Crates</CardTitle>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-[4/3] bg-muted">
                <SafeImage srcPrimary="/importexport/reefer-container.png" srcFallback="/placeholder.jpg" alt="Reefer container handling" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <CardHeader className="py-3">
                <CardTitle className="text-sm font-medium leading-none">Reefer Container Handling</CardTitle>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-[4/3] bg-muted">
                <SafeImage srcPrimary="/importexport/documentation-desk.png" srcFallback="/placeholder.jpg" alt="Documentation and permits" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <CardHeader className="py-3">
                <CardTitle className="text-sm font-medium leading-none">Documentation & Permits Desk</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-4">
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-[16/9] bg-muted">
                <SafeImage srcPrimary="/importexport/machinery-montage.png" srcFallback="/placeholder.jpg" alt="Machinery & equipment montage" fill className="object-cover" sizes="100vw" />
              </div>
              <CardHeader className="py-3">
                <CardTitle className="text-sm font-medium leading-none">Machinery & Equipment Montage</CardTitle>
              </CardHeader>
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
                <li>Inquiry & requirements capture</li>
                <li>Feasibility & regulatory check <span className="inline-flex items-center gap-1 text-primary"><Globe2 className="w-3 h-3"/> destination rules</span></li>
                <li>Quotation with timelines and shipping options</li>
                <li>Contract & deposit</li>
                <li>Health testing, permits & documentation <span className="inline-flex items-center gap-1 text-primary"><ClipboardCheck className="w-3 h-3"/></span></li>
                <li>Crating, pickup and dispatch <span className="inline-flex items-center gap-1 text-primary"><Truck className="w-3 h-3"/></span></li>
                <li>Customs clearance & delivery</li>
                <li>Post‑arrival support</li>
              </ol>
            </CardContent>
          </Card>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild><Link href="/contact">Request a Quote</Link></Button>
            <Button asChild variant="outline"><Link href="/about">About D.A.D</Link></Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/10">
            <CardContent className="p-6 sm:p-10 text-center">
              <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.015em] text-foreground mb-3">
                Looking for a compliant, end‑to‑end export partner?
              </h3>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-6">
                Tell us your destination, product category, and preferred timelines. Our team will confirm feasibility and
                provide a detailed plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg"><Link href="/contact">Start Your Shipment</Link></Button>
                <Button asChild size="lg" variant="outline"><Link href="/livestock">Browse Livestock</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
