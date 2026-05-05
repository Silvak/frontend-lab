import { ChevronDown } from "lucide-react"
import { useState } from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { techStack } from "@/data/techStack"
import { cn } from "@/lib/utils"

import { TechIcon } from "./techIcons"

function TechGrid({ items }: { items: typeof techStack }) {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
      {items.map((item) => (
        <li key={item.id}>
          <div className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-card/40 px-3 py-2.5 ring-1 ring-border/50">
            <TechIcon
              name={item.icon}
              className="size-5 shrink-0 text-foreground/80"
              title={item.label}
            />
            <span className="truncate text-xs font-medium text-foreground sm:text-sm">
              {item.label}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function TechStackSection() {
  const [open, setOpen] = useState(false)

  const featured = techStack.filter((t) => t.featured)
  const rest = techStack.filter((t) => !t.featured)
  const restCount = rest.length

  return (
    <section
      id="tecnologias"
      className="scroll-mt-20 space-y-6 py-10"
      aria-labelledby="tech-heading"
    >
      <div className="space-y-1">
        <h2
          id="tech-heading"
          className="text-lg font-medium tracking-tight text-foreground"
        >
          Tecnologías
        </h2>
        <p className="text-sm text-muted-foreground">
          Herramientas y stack que uso en entornos profesionales y en los que tengo
          un dominio consolidado —desde producto frontend hasta tooling y despliegue.
        </p>
      </div>

      <TechGrid items={featured} />

      <Collapsible open={open} onOpenChange={setOpen} className="space-y-3">
        <div className="flex justify-center border-t border-border/60 pt-4">
          <CollapsibleTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className={cn(
                "h-auto gap-1.5 px-3 py-2 text-sm font-normal text-muted-foreground",
                "hover:bg-transparent hover:text-foreground",
                "focus-visible:ring-2 focus-visible:ring-ring/50",
              )}
              aria-label={
                open
                  ? "Ocultar el resto de tecnologías y dejar solo las principales"
                  : `Mostrar ${restCount} tecnologías adicionales`
              }
            >
              <span>
                {open ? "Solo principales" : `+${restCount} más`}
              </span>
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 opacity-70 transition-transform duration-200",
                  open && "rotate-180",
                )}
                aria-hidden
              />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-1">
          <TechGrid items={rest} />
        </CollapsibleContent>
      </Collapsible>

      <Separator className="opacity-60" />
    </section>
  )
}
