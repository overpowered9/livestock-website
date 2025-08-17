"use server"

import { getDb } from "@/lib/mongodb"
import type { ContactRequestDoc, ProductInquiryRequestDoc } from "@/lib/types"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  inquiryType: string
  subject: string
  message: string
  location?: string
}

interface ProductInquiryData {
  name: string
  email: string
  phone?: string
  location?: string
  quantity?: string
  message: string
  productName: string
  productBreed?: string
  productPrice?: string
  productAvailability: string
}

export async function sendContactForm(formData: ContactFormData) {
  try {
    const db = await getDb()
    const doc: ContactRequestDoc = {
      type: "contact",
      read: false,
      createdAt: new Date(),
      source: "web",
      data: { ...formData },
    }
    await db.collection("requests").insertOne(doc)
    return { success: true, message: "Your message has been received. We will get back to you shortly." }
  } catch (error) {
    console.error("Error saving contact form:", error)
    return { success: false, message: "Failed to submit. Please try again." }
  }
}

export async function sendProductInquiry(formData: ProductInquiryData) {
  try {
    const db = await getDb()
    const doc: ProductInquiryRequestDoc = {
      type: "inquiry",
      read: false,
      createdAt: new Date(),
      source: "web",
      data: { ...formData },
    }
    await db.collection("requests").insertOne(doc)
    return { success: true, message: "Your inquiry has been received. Our team will contact you soon." }
  } catch (error) {
    console.error("Error saving product inquiry:", error)
    return { success: false, message: "Failed to submit. Please try again." }
  }
}
