import { SiGoogle, SiPlatzi } from "react-icons/si"
import { TbBrandLinkedin } from "react-icons/tb"

import type { IssuerKind } from "@/data/cv"

const iconCls =
  "size-9 shrink-0 rounded-md border border-border/60 bg-muted/40 p-1.5 text-foreground"

export function IssuerIcon({
  kind,
  className,
}: {
  kind: IssuerKind
  className?: string
}) {
  switch (kind) {
    case "linkedin":
      return (
        <TbBrandLinkedin
          className={`${iconCls} ${className ?? ""}`}
          aria-hidden
          title="LinkedIn"
        />
      )
    case "platzi":
      return (
        <SiPlatzi
          className={`${iconCls} ${className ?? ""}`}
          aria-hidden
          title="Platzi"
        />
      )
    case "google":
      return (
        <SiGoogle
          className={`${iconCls} ${className ?? ""}`}
          aria-hidden
          title="Google"
        />
      )
    default:
      return null
  }
}
