import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { experience } from "@/data/cv"

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-20 space-y-6 py-10"
      aria-labelledby="experience-heading"
    >
      <div className="space-y-1">
        <h2
          id="experience-heading"
          className="text-lg font-medium tracking-tight text-foreground"
        >
          Experiencia
        </h2>
        <p className="text-sm text-muted-foreground">
          Trayectoria y responsabilidades destacadas
        </p>
      </div>

      <ul className="space-y-4">
        {experience.map((job, index) => {
          const showCompany =
            index === 0 || job.company !== experience[index - 1].company

          return (
            <li key={job.id}>
              <Card className="border-border/80 shadow-none ring-1 ring-border/60">
                <CardHeader className="border-b border-border/50 pb-3">
                  {showCompany ? (
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {job.company}
                    </p>
                  ) : null}
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <CardTitle className="text-base">{job.title}</CardTitle>
                    <p className="text-xs text-muted-foreground sm:text-right">
                      {job.period}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {job.employmentType}
                    {job.remote ? " · remoto" : ""}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground marker:text-foreground/30">
                    {job.bullets.map((b) => (
                      <li key={b.text.slice(0, 48)} className="pl-0.5">
                        <span className="-ml-0.5">{b.text}</span>
                      </li>
                    ))}
                  </ul>
                  {job.skillsNote ? (
                    <p className="mt-4 text-xs text-muted-foreground">
                      {job.skillsNote}
                    </p>
                  ) : null}
                </CardContent>
              </Card>
            </li>
          )
        })}
      </ul>

      <Separator className="opacity-60" />
    </section>
  )
}
