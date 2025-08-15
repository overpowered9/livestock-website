import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                  fill="currentColor"
                />
              </svg>
            </div>
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
