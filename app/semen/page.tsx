import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FlaskConical, Dna, Microscope, Globe2, ShieldCheck, Sparkles } from "lucide-react"

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
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.015em] text-foreground mb-3">
            Semen & Breeding Technology
          </h1>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Accelerate genetic progress in your herd with high-health buck semen, animal‑friendly AI, and expert embryo
            transfer. In collaboration with leading partners, we deliver proven, sustainable genetics tailored to local
            conditions.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="min-w-[180px]">
              <Link href="#semen">Explore Buck Semen</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[180px]">
              <Link href="#services">AI & ET Services</Link>
            </Button>
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
                    Our partner’s AI bucks come from a dedicated nucleus program that records performance of thousands of
                    dairy goats across different countries, climates, and management systems. The focus is on healthy,
                    efficient, problem‑free animals with strong lifetime production.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Selection backed by on‑farm data and academic collaboration</li>
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
                    AI stations follow strict, government‑recognized health protocols with regular testing well beyond
                    CL, CAE, and Paratuberculosis. This enables compliant global distribution.
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
                    Expect fertile, healthy, productive, and durable goats—characteristics consistently delivered by the
                    buck lines we offer.
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
                  ET is a proven way to multiply offspring from top females quickly, safely, and effectively. Our
                  partners perform large numbers of transfers annually, bringing deep expertise to your herd.
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
