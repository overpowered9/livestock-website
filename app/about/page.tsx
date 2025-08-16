import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Globe, Heart, Leaf } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[32px] font-bold leading-tight tracking-[-0.015em] text-foreground mb-3">
            About <span className="text-primary">D.A.D Private Limited</span>
          </h1>
          <p className="text-base font-normal leading-normal text-foreground max-w-3xl mx-auto">
            Dedicated to enhancing Pakistan's livestock industry through quality breeding, sustainable practices, and
            innovative agricultural solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-foreground leading-normal">
                <p className="text-base font-normal">
                  D.A.D Private Limited was founded with a vision to revolutionize Pakistan's livestock industry. We
                  recognized the immense potential of our agricultural sector and the need for quality livestock that
                  could compete on both national and international levels.
                </p>
                <p className="text-base font-normal">
                  Our journey began with a simple yet powerful mission: to enhance livestock through proper nourishment
                  and to source the best livestock, even from abroad, to give rise to Pakistan's livestock industry.
                  Today, we stand as a trusted partner for farmers, breeders, and agricultural businesses across the
                  country.
                </p>
                <p className="text-base font-normal">
                  Through strategic partnerships with GIC and Awais Livestock, we continue to promote and preserve
                  livestock quality while supporting sustainable agricultural practices that benefit both our customers
                  and the environment.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/pakistani-livestock-farm.png"
                alt="Pakistani agricultural landscape"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-foreground mb-6">Our Foundation</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-base font-medium leading-normal text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  To enhance Pakistan's livestock industry through proper nourishment, quality breeding, and sustainable
                  agricultural practices that support local farmers and contribute to food security.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-base font-medium leading-normal text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  To become Pakistan's leading livestock and agricultural company, recognized for quality, innovation,
                  and our commitment to revitalizing the nation's agricultural heritage.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-base font-medium leading-normal text-foreground">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  Quality, integrity, sustainability, and customer satisfaction guide everything we do. We believe in
                  ethical practices and building lasting relationships with our partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-foreground mb-6">What We Offer</h2>
            <p className="text-base font-normal leading-normal text-foreground max-w-3xl mx-auto">
              Comprehensive livestock and agricultural solutions tailored to meet the diverse needs of Pakistan's
              farming community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-medium leading-normal text-foreground mb-2">Premium Livestock</h3>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  High-quality goats and cows from local and imported breeds
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-medium leading-normal text-foreground mb-2">Organic Produce</h3>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  Fresh vegetables and natural honey from sustainable farms
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-medium leading-normal text-foreground mb-2">Expert Consultation</h3>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  Professional guidance on livestock care and farming practices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-medium leading-normal text-foreground mb-2">Quality Assurance</h3>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  Rigorous standards ensuring the best products for our customers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-foreground mb-6">Our Leadership</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img
                  src="/pakistani-ceo.png"
                  alt="CEO Muhammad Awais"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-base font-medium leading-normal text-foreground mb-2">Muhammad Awais</h3>
                <Badge variant="secondary" className="mb-3">
                  Chief Executive Officer
                </Badge>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  Visionary leader with over 15 years of experience in livestock management and agricultural development
                  in Pakistan.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img
                  src="/placeholder-user.jpg"
                  alt="Operations Manager"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-base font-medium leading-normal text-foreground mb-2">Dr. Fatima Khan</h3>
                <Badge variant="secondary" className="mb-3">
                  Head of Operations
                </Badge>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  Veterinary expert specializing in livestock health and breeding programs with international
                  certifications.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img
                  src="/placeholder-user.jpg"
                  alt="Agricultural Advisor"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-base font-medium leading-normal text-foreground mb-2">Ahmad Hassan</h3>
                <Badge variant="secondary" className="mb-3">
                  Agricultural Advisor
                </Badge>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  Agricultural scientist with expertise in sustainable farming practices and crop management systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
