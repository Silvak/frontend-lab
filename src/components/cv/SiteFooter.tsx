import { Mail } from "lucide-react"
import { FaLinkedin } from "react-icons/fa6"
import { SiGithub } from "react-icons/si"

import { Button } from "@/components/ui/button"
import { identity, links } from "@/data/cv"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contacto"
      className="scroll-mt-20 space-y-6 py-12 pb-16"
      aria-labelledby="contact-heading"
    >
      <div className="space-y-1">
        <h2
          id="contact-heading"
          className="text-lg font-medium tracking-tight text-foreground"
        >
          Contacto
        </h2>
        <p className="text-sm text-muted-foreground">
          Enlaces directos para seguir la conversación
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button asChild variant="default">
          <a href={links.linkedIn} target="_blank" rel="noreferrer noopener">
            <FaLinkedin className="size-4" aria-hidden />
            LinkedIn
          </a>
        </Button>
        <Button asChild variant="outline">
          <a
            href={links.githubProfile}
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiGithub className="size-4" aria-hidden />
            GitHub
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={`mailto:${links.email}`}>
            <Mail className="size-4" aria-hidden />
            Correo
          </a>
        </Button>
      </div>

      <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
        © {year} {identity.name}. Todos los derechos reservados.
      </p>
    </footer>
  )
}
