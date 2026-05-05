import { Mail, MapPin } from "lucide-react"
import { FaLinkedin } from "react-icons/fa6"
import { SiGithub } from "react-icons/si"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { heroBadges, identity, links } from "@/data/cv"

export function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-20 space-y-6 pt-6 pb-2 sm:pt-10"
      aria-labelledby="hero-heading"
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {heroBadges.map((badge) => (
            <Badge
              key={badge.label}
              variant={badge.variant}
              className="font-normal"
            >
              {badge.label}
            </Badge>
          ))}
        </div>
        <h1
          id="hero-heading"
          className="text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
        >
          {identity.name}
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          {identity.headline}
          <span className="text-foreground/80"> · {identity.focus}</span>
        </p>
        <p className="text-sm text-muted-foreground">
          {identity.currentRole}
        </p>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4 shrink-0 opacity-70" aria-hidden />
          {identity.location}
        </p>
      </div>

      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {identity.heroBlurb}
      </p>

      <div className="flex flex-wrap gap-2">
        <Button asChild>
          <a
            href={links.linkedIn}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5"
          >
            <FaLinkedin className="size-4" aria-hidden />
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href={links.githubProfile}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5"
          >
            <SiGithub className="size-4" aria-hidden />
            GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href={`mailto:${links.email}`}
            className="inline-flex items-center gap-1.5"
          >
            <Mail className="size-4" aria-hidden />
            Correo
          </a>
        </Button>
      </div>

      <Separator className="opacity-60" />
    </section>
  )
}
