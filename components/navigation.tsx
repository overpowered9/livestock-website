"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logos/image.png"
              alt="D.A.D Private Limited logo"
              width={32}
              height={32}
              priority
              className="h-6 w-6 sm:h-7 sm:w-7 rounded"
            />
            <div className="text-lg font-bold leading-tight tracking-[-0.015em] text-foreground">
              D.A.D Private Limited
            </div>
          </Link>

          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
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
            <Button asChild variant="outline" size="sm" className="min-w-[84px] max-w-[480px] h-10 px-4 bg-primary text-primary-foreground text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
              <Link href="/admin">Admin</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
