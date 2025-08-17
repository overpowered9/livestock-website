"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function Navigation() {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 sm:gap-4">
            <Image
              src="/logos/image.png"
              alt="D.A.D Private Limited logo"
              width={32}
              height={32}
              priority
              className="h-7 w-7 sm:h-8 sm:w-8 rounded"
            />
            <div className="text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] text-foreground">
              D.A.D Private Limited
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 justify-end gap-6 lg:gap-8">
            <div className="hidden md:flex items-center gap-6 lg:gap-9">
              <Link href="/" className="text-sm font-medium leading-normal text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/livestock" className="text-sm font-medium leading-normal text-foreground hover:text-primary transition-colors">
                Livestock
              </Link>
              <Link href="/semen" className="text-sm font-medium leading-normal text-foreground hover:text-primary transition-colors">
                Semen & Breeding
              </Link>
              <Link href="/about" className="text-sm font-medium leading-normal text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium leading-normal text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            
          </div>

          {/* Mobile nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-4/5 sm:max-w-xs">
                <SheetHeader>
                  <SheetTitle className="text-base">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 p-4">
                  <SheetClose asChild>
                    <Link href="/" className="px-3 py-2 rounded text-foreground hover:bg-muted">Home</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/livestock" className="px-3 py-2 rounded text-foreground hover:bg-muted">Livestock</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/semen" className="px-3 py-2 rounded text-foreground hover:bg-muted">Semen & Breeding</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/about" className="px-3 py-2 rounded text-foreground hover:bg-muted">About</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/contact" className="px-3 py-2 rounded text-foreground hover:bg-muted">Contact</Link>
                  </SheetClose>
                  <div className="pt-2">
                    <SheetClose asChild>
                     
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
