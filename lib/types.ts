// filepath: /Users/zaid/Downloads/livestock-website/lib/types.ts
export interface Product {
  id: string
  name: string
  type: "goat" | "cow" | "vegetable" | "honey"
  image: string
  description: string
  breed?: string
  origin?: string
  careInstructions?: string
  price?: string
  availability: "available" | "out-of-stock" | "seasonal"
}

export type RequestType = "contact" | "inquiry"

export interface BaseRequestDoc {
  _id?: any
  type: RequestType
  read: boolean
  createdAt: Date
  source: "web"
}

export interface ContactRequestDoc extends BaseRequestDoc {
  type: "contact"
  data: {
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
}

export interface ProductInquiryRequestDoc extends BaseRequestDoc {
  type: "inquiry"
  data: {
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
}

export type AnyRequestDoc = ContactRequestDoc | ProductInquiryRequestDoc
