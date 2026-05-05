import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { certifications, education } from "@/data/cv"

import { IssuerIcon } from "./issuerIcons"

export function EducationSection() {
  return (
    <section
      id="educacion"
      className="scroll-mt-20 space-y-8 py-10"
      aria-labelledby="education-heading"
    >
      <div className="space-y-1">
        <h2
          id="education-heading"
          className="text-lg font-medium tracking-tight text-foreground"
        >
          Educación y certificaciones
        </h2>
        <p className="text-sm text-muted-foreground">
          Formación académica y credenciales
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-foreground">Educación</h3>
        <ul className="space-y-4">
          {education.map((item) => (
            <li key={item.id}>
              <Card className="border-border/80 shadow-none ring-1 ring-border/60">
                <CardHeader>
                  <CardTitle className="text-base">{item.degree}</CardTitle>
                  <CardDescription>{item.institution}</CardDescription>
                  {item.period ? (
                    <p className="text-xs text-muted-foreground">{item.period}</p>
                  ) : null}
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  {item.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-foreground">
          Licencias y certificaciones
        </h3>
        <ul className="space-y-4">
          {certifications.map((cert) => (
            <li key={cert.id}>
              <Card className="border-border/80 shadow-none ring-1 ring-border/60">
                <CardHeader className="pb-2">
                  <div className="flex gap-3">
                    <IssuerIcon kind={cert.issuerKind} />
                    <div className="min-w-0 flex-1 space-y-1">
                      <CardTitle className="text-base leading-snug">
                        {cert.name}
                      </CardTitle>
                      <CardDescription>
                        {cert.issuer} · Expedición: {cert.date}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-2">
                  {cert.credentialId ? (
                    <p className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </p>
                  ) : null}
                  <Button variant="link" className="h-auto p-0 text-sm" asChild>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1"
                    >
                      Ver credencial
                      <ExternalLink className="size-3.5" aria-hidden />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>

      <Separator className="opacity-60" />
    </section>
  )
}
