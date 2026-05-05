import logoImg from "@/assets/logo.png"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { navItems } from "@/data/cv"
import { useActiveSectionHash } from "@/hooks/useActiveSectionHash"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const activeHash = useActiveSectionHash(navItems)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-3xl items-center gap-3 px-4">
        <a
          href="#inicio"
          className="flex shrink-0 items-center transition-opacity duration-200 hover:opacity-80"
          aria-label="Ir al inicio"
        >
          <img
            src={logoImg}
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-md object-contain"
            decoding="async"
          />
        </a>
        <nav
          className="-mx-1 flex min-h-0 max-w-[min(100%,28rem)] flex-1 items-center justify-end gap-1 overflow-x-auto overflow-y-visible py-1.5 px-1 sm:max-w-none"
          aria-label="Secciones del CV"
        >
          {navItems.map((item) => {
            const isActive = activeHash === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "shrink-0 rounded-md px-2.5 py-2 text-sm font-medium leading-none ring-1 ring-transparent transition-all duration-200 ease-out",
                  "text-foreground/80 hover:bg-muted hover:text-foreground",
                  isActive &&
                    "bg-muted text-foreground shadow-sm ring-border/70",
                )}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
