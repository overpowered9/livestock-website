"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { sendProductInquiry } from "@/lib/email"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Info, DollarSign, Loader2 } from "lucide-react"
import { useState } from "react"
import type { Product } from "@/lib/types"
import { SafeImage } from "@/components/ui/safe-image"

interface ProductPageProps {
  product: Product
  related: Product[]
}

export default function ProductDetailPageClient({ product, related }: ProductPageProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    quantity: "",
    message: `I am interested in ${product?.name}. Please provide more information about availability, pricing, and delivery options.`,
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const inquiryData = {
        ...formData,
        productName: product.name,
        productBreed: product.breed,
        productPrice: product.price,
        productAvailability: product.availability,
      }

      const result = await sendProductInquiry(inquiryData)

      if (result.success) {
        toast({
          title: "Inquiry Sent!",
          description: result.message,
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          quantity: "",
          message: `I am interested in ${product.name}. Please provide more information about availability, pricing, and delivery options.`,
        })
      } else {
        toast({ title: "Error", description: result.message, variant: "destructive" })
      }
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/livestock" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Livestock
            </Link>
          </Button>
        </div>

        {/* Section 1: Image left, details right (stacks on small screens) */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/30">
              <div className="absolute inset-0 p-3">
                <div className="relative h-full w-full">
                  <SafeImage
                    srcPrimary={product.image || "/placeholder.svg"}
                    srcFallback="/placeholder.svg"
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
              <Badge
                className={`absolute top-4 right-4 ${
                  product.availability === "available"
                    ? "bg-primary"
                    : product.availability === "seasonal"
                      ? "bg-accent text-accent-foreground"
                      : "bg-destructive"
                }`}
              >
                {product.availability}
              </Badge>
            </div>
          </div>

          {/* Right panel: Name, category, price, origin */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">{product.name}</h1>
              <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
                <Badge variant="secondary" className="capitalize">{product.type}</Badge>
                {product.breed && <Badge variant="outline" className="capitalize">{product.breed}</Badge>}
              </div>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Price</p>
                    <p className="text-lg text-primary font-bold">{product.price || "Contact for price"}</p>
                  </div>
                </div>
                {product.origin && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Origin</p>
                      <p className="text-muted-foreground">{product.origin}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 2: Description then Care Instructions */}
        <div className="mt-10 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
            </CardContent>
          </Card>

          {product.careInstructions && (
            <Card>
              <CardContent className="flex items-start gap-3 pt-4">
                <Info className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Care Instructions</p>
                  <p className="text-muted-foreground leading-relaxed">{product.careInstructions}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Inquiry Form */}
        <div className="mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl  flex items-center justify-center gap-2">
                <Mail className="w-6 h-6 text-primary" />
                Product Inquiry
              </CardTitle>
              <p className="text-muted-foreground">Interested in {product.name}? Send us your inquiry and we'll get back to you soon.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required placeholder="Enter your email" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" value={formData.location} onChange={(e) => handleInputChange("location", e.target.value)} placeholder="City, Province" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity Interested</Label>
                  <Input id="quantity" value={formData.quantity} onChange={(e) => handleInputChange("quantity", e.target.value)} placeholder="e.g., 2 animals, 10 kg, etc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} required rows={5} />
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Product Details:</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      <strong>Product:</strong> {product.name}
                    </p>
                    {product.breed && (
                      <p>
                        <strong>Breed:</strong> {product.breed}
                      </p>
                    )}
                    <p>
                      <strong>Price:</strong> {product.price || "Contact for price"}
                    </p>
                    <p>
                      <strong>Availability:</strong> {product.availability}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Inquiry"
                    )}
                  </Button>
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <Link href="/contact">Contact Us Directly</Link>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">By submitting this form, you agree to be contacted by D.A.D Private Limited regarding your inquiry.</p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            More {product.type === "goat" ? "Goats" : product.type === "cow" ? "Cows" : product.type === "vegetable" ? "Vegetables" : "Honey Products"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img src={relatedProduct.image || "/placeholder.svg"} alt={relatedProduct.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{relatedProduct.name}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">{relatedProduct.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">{relatedProduct.price || "Contact for price"}</span>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/livestock/${relatedProduct.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
