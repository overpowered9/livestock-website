"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { sendContactForm } from "@/lib/email"
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    subject: "",
    message: "",
    location: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendContactForm(formData)

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        })
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          inquiryType: "",
          subject: "",
          message: "",
          location: "",
        })
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[32px] font-bold leading-tight tracking-[-0.015em] text-foreground mb-3">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-base font-normal leading-normal text-foreground max-w-3xl mx-auto">
            Get in touch with our team for inquiries about livestock, agricultural products, or partnership
            opportunities.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-foreground mb-6">Get In Touch</h2>
              <p className="text-base font-normal leading-normal text-foreground mb-8">
                We're here to help you with all your livestock and agricultural needs. Reach out to us through any of
                the following channels.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium leading-normal text-foreground mb-1">Email Address</h3>
                    <p className="text-sm font-normal leading-normal text-muted-foreground">d.a.dprivatelimited786@gmail.com</p>
                    <p className="text-sm font-normal leading-normal text-muted-foreground mt-1">We respond within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium leading-normal text-foreground mb-1">Phone Number</h3>
                    <p className="text-sm font-normal leading-normal text-muted-foreground">+92 309 7999999</p>
                    <p className="text-sm font-normal leading-normal text-muted-foreground mt-1">Available 9 AM - 6 PM (PKT)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium leading-normal text-foreground mb-1">Office Address</h3>
                    <p className="text-sm font-normal leading-normal text-muted-foreground">
                      Bahadur Pur
                      <br />
                      Multan, Punjab, Pakistan
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium leading-normal text-foreground mb-1">Business Hours</h3>
                    <div className="text-sm font-normal leading-normal text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-[22px] font-bold leading-tight tracking-[-0.015em] flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Send Us a Message
                </CardTitle>
                <p className="text-base font-normal leading-normal text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-base font-medium leading-normal text-foreground">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        placeholder="Enter your first name"
                        className="h-14 placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-base font-medium leading-normal text-foreground">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        placeholder="Enter your last name"
                        className="h-14 placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-medium leading-normal text-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="Enter your email"
                        className="h-14 placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-medium leading-normal text-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        className="h-14 placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-base font-medium leading-normal text-foreground">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Enter your company name"
                        className="h-14 placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType" className="text-base font-medium leading-normal text-foreground">Inquiry Type *</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                        required
                      >
                        <SelectTrigger className="h-14">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Registration">Registration</SelectItem>
                          <SelectItem value="livestock">Livestock Purchase</SelectItem>
                          <SelectItem value="agricultural">Agricultural Products</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="consultation">Expert Consultation</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="Job">Job</SelectItem>
                          <SelectItem value="hunting">Hunting</SelectItem>
                          <SelectItem value="semen&breeding">Semen & Breeding</SelectItem>
                          <SelectItem value="import-export">Import & Export</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-base font-medium leading-normal text-foreground">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      placeholder="Brief subject of your inquiry"
                      className="h-14 placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-medium leading-normal text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      placeholder="Please provide detailed information about your inquiry, including specific requirements, quantities, or any questions you may have."
                      rows={6}
                      className="placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-base font-medium leading-normal text-foreground">Your Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="City, Province (helps us provide better service)"
                      className="h-14 placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="text-base font-medium leading-normal text-foreground mb-2">What happens next?</h4>
                    <ul className="text-sm font-normal leading-normal text-muted-foreground space-y-1">
                      <li>• We'll review your inquiry within 24 hours</li>
                      <li>• Our team will contact you via your preferred method</li>
                      <li>• We'll provide detailed information and pricing</li>
                      <li>• Schedule a consultation if needed</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="flex-1 min-w-[84px] max-w-[480px] h-10 px-4 bg-primary text-primary-foreground text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 min-w-[84px] max-w-[480px] h-10 px-4 bg-transparent"
                      onClick={() =>
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          phone: "",
                          company: "",
                          inquiryType: "",
                          subject: "",
                          message: "",
                          location: "",
                        })
                      }
                    >
                      Clear Form
                    </Button>
                  </div>

                  <p className="text-xs font-normal leading-normal text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and consent to being contacted by D.A.D
                    Private Limited.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="text-center py-12">
              <h3 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-foreground mb-4">
                Ready to Transform Your Agricultural Business?
              </h3>
              <p className="text-base font-normal leading-normal text-muted-foreground max-w-2xl mx-auto mb-6">
                Join hundreds of satisfied customers who trust D.A.D Private Limited for their livestock and
                agricultural needs. Let's discuss how we can help you achieve your farming goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="min-w-[84px] max-w-[480px] h-12 px-5 bg-primary text-primary-foreground text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
                  Schedule a Consultation
                </Button>
                <Button size="lg" variant="outline" className="min-w-[84px] max-w-[480px] h-12 px-5">
                  Download Our Catalog
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
