import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Target, Heart, Globe, Award, TrendingUp, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[320px] sm:min-h-[480px] flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-lg mx-3 sm:mx-6 lg:mx-8 my-3 sm:my-6"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("/boer-goat.png")`,
        }}
      >
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4 md:mb-6">
            Premium Livestock Excellence
          </h1>
          <p className="text-base md:text-lg mb-6 md:mb-8 leading-normal max-w-2xl mx-auto">
            Discover our world-class Boer goats and premium livestock, raised with care and expertise to deliver the highest quality for your agricultural success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="min-w-[84px] max-w-[480px] h-12 px-5 bg-primary text-primary-foreground text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
              <Link href="/livestock">Explore Our Livestock</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-[84px] max-w-[480px] h-12 px-5 bg-white/10 border-white text-white hover:bg-white hover:text-foreground text-base font-bold leading-normal tracking-[0.015em]"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Vision Section - Interactive Component */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-[32px] font-bold leading-tight tracking-[-0.015em] text-foreground mb-4 sm:mb-6">
              Our Vision & Mission
            </h2>
            <p className="text-base font-normal leading-normal text-muted-foreground max-w-3xl mx-auto">
              We are committed to revolutionizing Pakistan's livestock industry through innovation, quality breeding, and sustainable practices.
            </p>
          </div>

          {/* Interactive Vision Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-4">
                  Quality Excellence
                </h3>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  We source and breed the finest livestock from around the world, ensuring every animal meets our rigorous quality standards for health, genetics, and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-4">
                  Sustainable Practices
                </h3>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  Our commitment to sustainable farming ensures healthy animals, environmental responsibility, and long-term success for farmers and the industry.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-4">
                  Global Standards
                </h3>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  We bring international best practices to Pakistan, helping local farmers compete globally while preserving traditional knowledge and values.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-4">
                  Industry Growth
                </h3>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  By enhancing livestock quality and providing expert guidance, we're building a stronger, more profitable agricultural sector for Pakistan's future.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-4">
                  Farmer Success
                </h3>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  We support farmers with comprehensive services, from livestock selection to care guidance, ensuring their success and prosperity.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-4">
                  Innovation Leadership
                </h3>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  We lead the industry through continuous innovation in breeding techniques, animal care, and sustainable farming practices.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Vision Statement */}
          <div className="mt-12 sm:mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/10">
              <CardContent className="p-6 sm:p-10 md:p-12">
                <h3 className="text-xl sm:text-2xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-4 sm:mb-6">
                  Our Vision Statement
                </h3>
                <p className="text-base sm:text-lg font-normal leading-normal text-foreground max-w-4xl mx-auto mb-6 sm:mb-8">
                  "To become Pakistan's leading livestock and agricultural company, recognized globally for our commitment to quality, innovation, and sustainable practices. We envision a future where Pakistani farmers have access to world-class livestock and expertise, enabling them to compete successfully in international markets while preserving our agricultural heritage."
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button asChild size="lg" className="min-w-[84px] max-w-[480px] h-12 px-5 bg-primary text-primary-foreground text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="min-w-[84px] max-w-[480px] h-12 px-5">
                    <Link href="/contact">Join Our Mission</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-[32px] font-bold leading-tight tracking-[-0.015em] text-foreground mb-3 sm:mb-6">Message from Our CEO</h2>
            <p className="text-base font-normal leading-normal text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our leadership about our commitment to excellence and the future of Pakistan's livestock industry.
            </p>
          </div>
          
          <Card className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-2 border-primary/10">
            <CardContent className="p-6 sm:p-10 md:p-12">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src="/danish.jpeg"
                      alt="Muhammad Awais - CEO of D.A.D Private Limited"
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-contain border-4 border-primary/20 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-base sm:text-lg">CD</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-2">
                      Chaudhary Danish
                    </h3>
                    <p className="text-lg font-medium leading-normal text-primary mb-1">Chief Executive Officer</p>
                    <p className="text-sm font-normal leading-normal text-muted-foreground">
                      D.A.D Private Limited
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p className="text-base font-normal">
                      "Dear valued partners and stakeholders,
                    </p>
                    
                    <p className="text-base font-normal">
                      As the CEO of D.A.D Private Limited, I am honored to lead a company that stands at the forefront of Pakistan's agricultural revolution. Our journey began with a simple yet powerful vision: to transform the livestock industry through innovation, quality, and sustainable practices.
                    </p>
                    
                    <p className="text-base font-normal">
                      Pakistan's agricultural sector has immense potential, and we are committed to unlocking it. Through strategic partnerships with industry leaders like GIC and Awais Livestock, we have created a comprehensive ecosystem that supports farmers, enhances livestock quality, and drives economic growth.
                    </p>
                    
                    <p className="text-base font-normal">
                      Our commitment goes beyond business success. We are dedicated to:
                    </p>
                    
                    <ul className="list-disc list-inside space-y-2 ml-4 text-base font-normal">
                      <li>Providing world-class livestock genetics and breeding programs</li>
                      <li>Implementing sustainable farming practices that protect our environment</li>
                      <li>Supporting local farmers with education, resources, and market access</li>
                      <li>Contributing to Pakistan's food security and economic development</li>
                    </ul>
                    
                    <p className="text-base font-normal">
                      The future of agriculture lies in innovation, collaboration, and responsible stewardship. At D.A.D Private Limited, we are not just building a business; we are building a legacy that will benefit generations to come.
                    </p>
                    
                    <p className="text-base font-normal">
                      I invite you to join us on this transformative journey. Together, we can create a more prosperous, sustainable, and food-secure Pakistan.
                    </p>
                    
                    <p className="text-base font-normal font-semibold">
                      Thank you for your trust and partnership.
                    </p>
                    
                    <p className="text-base font-normal">
                      Warm regards,<br />
                      <span className="font-semibold">Chaudhary Danish</span><br />
                      Chief Executive Officer
                    </p>
                  </div>
                  
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button asChild size="lg" className="min-w-[84px] max-w-[480px] h-12 px-5 bg-primary text-primary-foreground text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
                      <Link href="/about">Learn More About Our Story</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="min-w-[84px] max-w-[480px] h-12 px-5">
                      <Link href="/contact">Connect With Our Team</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strategic Partnership Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-[32px] font-bold leading-tight tracking-[-0.015em] text-foreground mb-4 sm:mb-6">
              Strategic Partnership
            </h2>
            <p className="text-base font-normal leading-normal text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
              A powerful collaboration between industry leaders to revolutionize Pakistan's livestock sector through innovation, quality, and sustainable practices.
            </p>
            
            {/* Partnership Logo Showcase */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 flex-wrap">
              <div className="group relative">
                <div className="w-24 h-24 bg-white rounded-2xl border-2 border-primary/20 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img
                    src="logos/9951FC41-18FC-4775-8B08-729DF54B28DA.jpeg"
                    alt="danish"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                    Global Investment
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                <div className="mx-2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
              </div>

              <div className="group relative">
                <div className="w-24 h-24 bg-white rounded-2xl border-2 border-primary/20 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img
                    src="/logos/image.png"
                    alt="D.A.D Private Limited"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                    Innovation Leader
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                <div className="mx-2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
              </div>

              <div className="group relative">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border-2 border-primary/20 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img
                    src="/logos/Logo-Goat-Improvement.png"
                    alt="Awais Livestock - Goat Improvement"
                    className="w-16 h-16 object-contain filter brightness-110"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                    Breeding Expert
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Tagline */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full px-6 sm:px-8 py-2.5 sm:py-3 inline-block border border-primary/20">
              <span className="text-primary font-semibold text-base sm:text-lg">Excellence • Innovation • Growth</span>
            </div>
          </div>

          {/* Partnership Cards */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-white via-white to-primary/5 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
                </div>
                
                <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <img
                    src="/logos/Logo-Goat-Improvement.png"
                    alt="Awais Livestock Logo"
                    className="w-14 h-14 object-contain filter brightness-110"
                  />
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-4">
                  GIC
                </h3>
                <p className="text-lg font-semibold text-blue-600 mb-3">Goat Improvement Company</p>
                <p className="text-sm font-normal leading-relaxed text-muted-foreground mb-6">
                  Strategic investment partner specializing in goat breeding programs, livestock genetics, and agricultural infrastructure development. Focused on enhancing goat production systems through modern breeding techniques and sustainable farming practices.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-blue-600 bg-blue-50 rounded-full px-3 py-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Goat Breeding Investment
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-blue-600 bg-blue-50 rounded-full px-3 py-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Genetic Improvement Programs
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-blue-600 bg-blue-50 rounded-full px-3 py-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Infrastructure Development
                  </div>
                
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-white via-white to-primary/10 overflow-hidden relative">
              <div className="h-1 bg-gradient-to-r from-primary to-accent"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full"></div>
                </div>
                
                <div className="w-20 h-20 bg-white rounded-2xl border-2 border-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg ring-2 ring-primary/20">
                  <img
                    src="/logos/image.png"
                    alt="D.A.D Private Limited Logo"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-4">
                  D.A.D Private Limited
                </h3>
                <p className="text-lg font-semibold text-primary mb-3">Innovation & Market Leader</p>
                <p className="text-sm font-normal leading-relaxed text-muted-foreground mb-6">
                  Leading livestock enhancement company specializing in premium breeding programs, innovative distribution networks, and comprehensive agricultural product development across Pakistan's rural and urban markets.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Premium Livestock Genetics
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Innovation Leadership
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    National Distribution
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-white via-white to-emerald-50 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full"></div>
                </div>
                
                
                <div className="w-20 h-20 bg-white rounded-2xl border-2 border-blue-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <img
                    src="/logos/9951FC41-18FC-4775-8B08-729DF54B28DA.jpeg"
                    alt="Awais livestock"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-4">
                  Awais Danish Livestock
                </h3>
                <p className="text-lg font-semibold text-emerald-600 mb-3">Breeding & Development Specialists</p>
                <p className="text-sm font-normal leading-relaxed text-muted-foreground mb-6">
                  Specialized livestock breeding and genetic improvement experts with extensive knowledge of local agricultural practices, traditional breeding methods, and modern genetic enhancement techniques.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full px-3 py-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Genetic Excellence Programs
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full px-3 py-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Global Market Expertise
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-full px-3 py-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Sustainable Breeding
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partnership Impact */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-4 sm:mb-6">
              Partnership Impact & Benefits
            </h3>
            <p className="text-base font-normal leading-normal text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8">
              Our strategic alliance creates a comprehensive ecosystem that drives innovation, ensures quality, and delivers sustainable growth across Pakistan's agricultural landscape.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <div className="text-2xl font-bold text-blue-600">🌍</div>
                </div>
                <h4 className="text-lg font-bold leading-normal text-foreground mb-2">Global Standards</h4>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  International quality benchmarks and best practices implementation
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-2xl font-bold text-primary">🚀</div>
                </div>
                <h4 className="text-lg font-bold leading-normal text-foreground mb-2">Innovation</h4>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  Cutting-edge breeding techniques and agricultural technology
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-500">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 transition-colors">
                  <div className="text-2xl font-bold text-emerald-600">🏛️</div>
                </div>
                <h4 className="text-lg font-bold leading-normal text-foreground mb-2">Local Expertise</h4>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  Deep understanding of Pakistani agricultural markets
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <div className="text-2xl font-bold text-accent">🌱</div>
                </div>
                <h4 className="text-lg font-bold leading-normal text-foreground mb-2">Sustainability</h4>
                <p className="text-sm font-normal leading-normal text-muted-foreground">
                  Long-term environmental and economic growth focus
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/20 overflow-hidden">
              <CardContent className="p-6 sm:p-10 md:p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-50"></div>
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight tracking-[-0.015em] text-foreground mb-3 sm:mb-4">
                    Join Our Partnership Ecosystem
                  </h3>
                  <p className="text-base font-normal leading-normal text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
                    Be part of Pakistan's agricultural transformation. Connect with us to explore partnership opportunities and learn how we can support your livestock and agricultural goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Button asChild size="lg" className="min-w-[84px] max-w-[480px] h-12 px-8 bg-primary text-primary-foreground text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                      <Link href="/contact">Partner With Us</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="min-w-[84px] max-w-[480px] h-12 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                      <Link href="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-10 sm:py-12 mt-8 sm:mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-4">D.A.D Private Limited</h3>
              <p className="text-gray-300 leading-relaxed">
                Enhancing Pakistan's livestock industry through quality breeding, proper nourishment, and sustainable
                agricultural practices.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/livestock" className="text-gray-300 hover:text-white transition-colors">
                    Livestock
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-300">Email: info@dadprivatelimited.com</p>
              <p className="text-gray-300 mt-2">Pakistan</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-gray-300">© 2024 D.A.D Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
