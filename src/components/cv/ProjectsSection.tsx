import { ExternalLink } from "lucide-react"
import { SiGithub } from "react-icons/si"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/data/cv"

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-20 space-y-6 py-10"
      aria-labelledby="projects-heading"
    >
      <div className="space-y-1">
        <h2
          id="projects-heading"
          className="text-lg font-medium tracking-tight text-foreground"
        >
          Proyectos
        </h2>
        <p className="text-sm text-muted-foreground">
          Productos y librerías públicas donde aplico arquitectura, tooling y buenas prácticas —con código abierto en GitHub.
        </p>
      </div>

      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id}>
            <Card className="border-border/80 shadow-none ring-1 ring-border/60">
              <CardHeader>
                <div className="flex flex-wrap items-start gap-3">
                  <SiGithub
                    className="mt-0.5 size-8 shrink-0 text-foreground/85"
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <CardTitle className="text-base">{project.name}</CardTitle>
                      {project.period ? (
                        <CardDescription className="sm:text-right">
                          {project.period}
                        </CardDescription>
                      ) : null}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center justify-center gap-2 border-t-0 pt-0">
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5"
                  >
                    Repositorio
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                </Button>
                {project.demoUrl ? (
                  <Button asChild variant="ghost" size="sm">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5"
                    >
                      Sitio / docs
                      <ExternalLink className="size-3.5" aria-hidden />
                    </a>
                  </Button>
                ) : null}
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>

      <Separator className="opacity-60" />
    </section>
  )
}
