import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const links = [
  { href: "/", label: "🏠 Home" },
  { href: "/blog", label: "📝 Blog" },
  { href: "/spreadsheet", label: "🧮 試算表" },
]

export function Sidebar() {
  return (
    <aside className="w-56 shrink-0 border-r min-h-screen p-4 hidden md:block">
      <p className="text-sm font-semibold text-muted-foreground mb-3">選單</p>
      <Separator className="mb-3" />
      <nav className="flex flex-col gap-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm px-3 py-2 rounded-md hover:bg-muted transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}