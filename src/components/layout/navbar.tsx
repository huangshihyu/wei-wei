import Link from "next/link"
import { Button } from "@/components/ui/button"

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/spreadsheet", label: "試算表" },
]

export function Navbar() {
  return (
    <header className="h-14 border-b flex items-center px-6 gap-6 sticky top-0 z-50 bg-background">
      <span className="font-bold text-lg">MyPortfolio</span>
      <nav className="flex gap-2">
        {links.map((link) => (
          <Button key={link.href} variant="ghost" asChild>
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </nav>
    </header>
  )
}