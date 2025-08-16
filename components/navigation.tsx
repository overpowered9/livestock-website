"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navigation() {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-6">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] text-foreground">
              D.A.D Private Limited
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 justify-end gap-6 lg:gap-8">
            <div className="flex items-center gap-6 lg:gap-9">
              <Link href="/" className="text-sm font-medium leading-normal text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/livestock" className="text-sm font-medium leading-normal text-foreground hover:text-primary transition-colors">
                Livestock
              </Link>
              <Link href="/about" className="text-sm font-medium leading-normal text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium leading-normal text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <Button asChild size="sm" className="min-w-[84px] h-10 px-4">
              <Link href="/admin">Admin</Link>
            </Button>
          </div>

          {/* Mobile nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 grid gap-2">
                  <Link href="/" className="px-2 py-2 rounded-md hover:bg-muted">
                    Home
                  </Link>
                  <Link href="/livestock" className="px-2 py-2 rounded-md hover:bg-muted">
                    Livestock
                  </Link>
                  <Link href="/about" className="px-2 py-2 rounded-md hover:bg-muted">
                    About
                  </Link>
                  <Link href="/contact" className="px-2 py-2 rounded-md hover:bg-muted">
                    Contact
                  </Link>
                  <Button asChild className="mt-2">
                    <Link href="/admin">Admin</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
