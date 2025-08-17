import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SafeImage } from "@/components/ui/safe-image"
import { FlaskConical, Dna, Microscope, Globe2, ShieldCheck, Sparkles, Truck, Thermometer, ClipboardCheck, CalendarCheck, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Semen & Breeding Technology | D.A.D Private Limited",
  description:
    "Genetic improvement through high-health buck semen, professional goat AI services (cervical & laparoscopic) and embryo transfer for rapid progress.",
}

export default function SemenBreedingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.015em] text-foreground mb-3">
              Semen & Breeding Technology
            </h1>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto lg:mx-0">
              Accelerate genetic progress with high‑health buck semen, animal‑friendly AI, and expert embryo transfer.
              In collaboration with leading partners, we deliver proven, sustainable genetics tailored to local
              conditions.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button asChild size="lg" className="min-w-[180px]">
                <Link href="#semen">Explore Buck Semen</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[180px]">
                <Link href="#services">AI & ET Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-muted to-background">
            <SafeImage
              srcPrimary="/goatsimages/4goats.png"
              srcFallback="/placeholder.jpg"
              alt="Goat herd montage"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain object-center p-2"
            />
          </div>
        </div>
      </section>

      {/* Buck Semen */}
      <section id="semen" className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <FlaskConical className="w-5 h-5 text-primary" /> Buck Semen for Sustainable Genetics
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    Partner AI bucks originate from a global nucleus program recording performance of thousands of dairy
                    goats across environments and management systems. Selection targets healthy, efficient, problem‑free
                    animals with strong lifetime production.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Selection backed by multi‑country on‑farm data and academic collaboration</li>
                    <li>Emphasis on reduced antibiotic use and longevity</li>
                    <li>Genetics adapted to local environments worldwide</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-1 text-foreground font-medium">
                    <ShieldCheck className="w-4 h-4 text-primary" /> Highest Health Standards
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI stations follow strict, government‑recognized protocols with regular testing well beyond CL, CAE
                    and Paratuberculosis — enabling compliant global distribution.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-1 text-foreground font-medium">
                    <Globe2 className="w-4 h-4 text-primary" /> Worldwide Availability
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Semen from proven and young AI bucks is available internationally, with recommendations for the most
                    suitable sires for your region and goals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-1 text-foreground font-medium">
                    <Dna className="w-4 h-4 text-primary" /> Proven Results
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Expect fertile, healthy, productive, and durable goats — characteristics consistently delivered by
                    the buck lines we offer.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-1 text-foreground font-medium">
                    <Sparkles className="w-4 h-4 text-primary" /> Tailored Mating Advice
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get guidance on buck selection aligned with your breeding objectives, milk profile, and herd health
                    targets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Proven vs Young Bucks */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Proven AI Bucks</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>High reliability based on daughter performance and multi‑herd evaluations.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Stable proofs across environments</li>
                  <li>Predictable outcomes for key traits</li>
                  <li>Great for risk‑averse selection</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Young Genomic Bucks</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Early access to cutting‑edge genetics with strong genomic indicators.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Faster genetic gain potential</li>
                  <li>Great for top cows and strategic matings</li>
                  <li>Balanced with proven sires in herd plans</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Breeds & Adaptation */}
          <div className="mt-8 grid lg:grid-cols-3 gap-6 items-start">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Breeds & Adaptation</h3>
              <p className="text-sm text-muted-foreground">
                Whether you aim for milk components, resilience, or growth, we can recommend sires aligned to your
                environment and targets.
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Dairy focus with adaptable lines</li>
                <li>Options for meat and dual‑purpose goals</li>
                <li>Support for heat and management stressors</li>
              </ul>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Saanen Goat", srcP: "/goatsimages/saanen%20goat.jpg" },
                { name: "Boer Goat", srcP: "/goatsimages/boregoat.jpg" },
                { name: "Alpine Goat", srcP: "/goatsimages/alpinegoat.jpeg" },
                { name: "Toggenburg Goat", srcP: "/goatsimages/toggenberg.jpeg" },
              ].map((b) => (
                <Card key={b.name} className="overflow-hidden">
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent/10 to-muted">
                    <SafeImage
                      srcPrimary={b.srcP}
                      srcFallback="/placeholder.jpg"
                      alt={b.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain object-center p-2"
                    />
                  </div>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium leading-none">{b.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <Link href="/contact">Request Semen Availability</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/livestock">Browse Livestock</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI & ET Services */}
      <section id="services" className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[22px] font-bold tracking-[-0.015em] text-foreground">AI & Embryo Transfer Services</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Professional services designed to maximize conception rates and speed up genetic gain while prioritizing
              animal welfare.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Microscope className="w-5 h-5 text-primary" /> Goat Artificial Insemination (AI)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>
                  Experienced technicians provide animal‑friendly, professional insemination with support on planning,
                  mating advice, and synchronization schedules for optimal results.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cervical and laparoscopic AI options</li>
                  <li>Customized AI planning for faster genetic progress</li>
                  <li>Available across multiple regions</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded"><CalendarCheck className="w-3 h-3"/> Synchronization plans</span>
                  <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded"><ClipboardCheck className="w-3 h-3"/> Mating advice</span>
                  <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded"><CheckCircle2 className="w-3 h-3"/> Welfare‑first</span>
                </div>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/contact">Plan an AI Program</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Dna className="w-5 h-5 text-primary" /> Embryo Transfer (ET)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>
                  ET multiplies offspring from top females quickly, safely, and effectively. Our partners perform large
                  numbers of transfers annually, bringing deep expertise to your herd.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Rapid genetic progress from elite donors</li>
                  <li>Handled by experienced, specialized teams</li>
                  <li>Integrated with your breeding objectives</li>
                </ul>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/contact">Ask About ET Scheduling</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Process visuals */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6 text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">AI Process Overview</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Consultation and goal setting</li>
                  <li>Synchronization protocol</li>
                  <li>AI procedure (cervical/laparoscopic)</li>
                  <li>Pregnancy check and follow‑up</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">ET Workflow</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Donor selection & superovulation</li>
                  <li>Embryo collection & grading</li>
                  <li>Recipient synchronization</li>
                  <li>Transfer & pregnancy diagnosis</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Shipping & Storage</p>
                <ul className="list-disc list-inside space-y-1">
                  <li className="inline-flex items-center gap-2"><Truck className="w-4 h-4 text-primary"/> Global compliant logistics</li>
                  <li className="inline-flex items-center gap-2"><Thermometer className="w-4 h-4 text-primary"/> LN₂ tank handling guidance</li>
                  <li className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary"/> Certificates & test records on request</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner & Compliance */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Saanen Goat", srcP: "/goatsimages/saanen%20goat.jpg" },
                { name: "Boer Goat", srcP: "/goatsimages/boregoat.jpg" },
                { name: "Alpine Goat", srcP: "/goatsimages/alpinegoat.jpeg" },
                { name: "Toggenburg Goat", srcP: "/goatsimages/toggenberg.jpeg" },
              ].map((b) => (
                <div key={b.name} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-muted to-background border">
                  <SafeImage
                    srcPrimary={b.srcP}
                    srcFallback="/placeholder.jpg"
                    alt={b.name}
                    fill
                    sizes="(min-width: 768px) 15vw, 40vw"
                    className="object-contain object-center p-2"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-2">Health, Welfare & Regulatory Compliance</h3>
            <p className="text-sm text-muted-foreground">
              We collaborate with experienced partners that operate to high biosecurity standards. Facilities and
              processes are designed to meet strict government requirements for disease‑free status and export.
            </p>
            <ul className="mt-3 text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Regular screening beyond CL, CAE and Paratuberculosis</li>
              <li>Government‑recognized certifications and documentation</li>
              <li>Support with import permits and country‑specific rules</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Which AI method is right for my herd?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Cervical AI is common and cost‑effective; laparoscopic AI may be used when higher precision is desired
                or with challenging cervix anatomy. We’ll advise based on parity, timing, and targets.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">How do I plan synchronization?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We provide protocol options and schedules suited to your management calendar, including handling and
                welfare considerations to minimize stress.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">What paperwork is needed for imports?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Import permits and health certificates vary by country. Our team shares up‑to‑date requirements and
                prepares the necessary documentation with partners.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Do you support dairy and meat goals?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Yes. We tailor buck choices for milk volume, fat/protein, udder health, growth, and resilience traits,
                based on your production strategy.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/10">
            <CardContent className="p-6 sm:p-10 text-center">
              <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.015em] text-foreground mb-3">
                Ready to upgrade your herd’s genetics?
              </h3>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-6">
                Contact our team for semen availability, AI planning, or embryo transfer support. We’ll align
                recommendations with your environment and production goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Talk to a Specialist</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">Learn About Our Vision</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
