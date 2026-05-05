import { useId, useState } from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { aboutBody, aboutIntro, valueProps } from "@/data/cv"

export function AboutSection() {
  const [open, setOpen] = useState(false)
  const contentId = useId()

  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 space-y-6 py-10"
      aria-labelledby="about-heading"
    >
      <div className="space-y-1">
        <h2
          id="about-heading"
          className="text-lg font-medium tracking-tight text-foreground"
        >
          Sobre mí
        </h2>
        <p className="text-sm text-muted-foreground">
          Resumen y aptitudes principales
        </p>
      </div>

      <p className="max-w-2xl text-sm leading-relaxed text-foreground/90">
        {aboutIntro}
      </p>

      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleContent id={contentId} className="overflow-hidden">
          <div className="space-y-4 pt-2 pb-4">
            {aboutBody.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="max-w-2xl text-sm leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            <ul className="max-w-2xl space-y-3 text-sm text-muted-foreground">
              {valueProps.map((item) => (
                <li key={item.title} className="leading-relaxed">
                  <span className="font-medium text-foreground">
                    {item.title}:{" "}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleContent>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 px-0 text-muted-foreground hover:text-foreground"
            aria-expanded={open}
            aria-controls={contentId}
          >
            {open ? "Ver menos" : "Ver más"}
            <ChevronDown
              className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
              aria-hidden
            />
          </Button>
        </CollapsibleTrigger>
      </Collapsible>

      <Separator className="opacity-60" />
    </section>
  )
}
