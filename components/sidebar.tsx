"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, MessageSquare, PlusCircle, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      icon: BarChart3,
      title: "Dashboard",
    },
    {
      href: "/campaigns/new",
      icon: PlusCircle,
      title: "New Campaign",
    },
    {
      href: "/message-generator",
      icon: MessageSquare,
      title: "Message Generator",
    },
    {
      href: "/settings",
      icon: Settings,
      title: "Settings",
    },
  ]

  return (
    <div className="flex h-full w-64 flex-col border-r bg-muted/40">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BarChart3 className="h-6 w-6" />
          <span>Campaign Manager</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={pathname === route.href ? "secondary" : "ghost"}
              className={cn(
                "justify-start gap-2 text-sm font-medium",
                pathname === route.href ? "bg-secondary" : "hover:bg-muted",
              )}
              asChild
            >
              <Link href={route.href}>
                <route.icon className="h-4 w-4" />
                {route.title}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  )
}
