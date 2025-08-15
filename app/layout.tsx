import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google"
import { Toaster } from "@/components/toaster"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "700", "800"],
})

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
  weight: ["400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: "D.A.D Private Limited - Premium Livestock & Agricultural Products",
  description:
    "Enhancement of livestock through proper nourishment. Quality livestock and agricultural products from Pakistan.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${notoSans.variable}`}>
      <head>
        <style>{`
          html {
            font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;
            --font-plus-jakarta: ${plusJakartaSans.variable};
            --font-noto-sans: ${notoSans.variable};
          }
        `}</style>
      </head>
      <body suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
