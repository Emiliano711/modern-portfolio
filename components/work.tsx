"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"

export function Work() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("qaSpecialist"),
      description: t("qaDescription"),
      image: "/qa-testing-dashboard.png",
      tags: ["Testing", "End-to-End", "Backend", "Quality Assurance"],
      period: t("qaDuration"),
      type: t("currentPosition"),
      company: t("qaCompany"),
    },
    {
      title: t("integrationSpecialist"),
      description: t("integrationDescription"),
      image: "/system-integration-dashboard.png",
      tags: ["Integration", "Data Mapping", "APIs", "System Architecture"],
      period: t("integrationDuration"),
      type: t("previousRole"),
      company: t("integrationCompany"),
    },
    {
      title: t("webDeveloper"),
      description: t("webDescription"),
      image: "/modern-web-development.png",
      tags: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
      period: t("webDuration"),
      type: t("freelanceType"),
      company: t("webCompany"),
    },
  ]

  return (
    <section id="work" className="py-24 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-section text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">{t("workTitle")}</h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="animate-card group overflow-hidden border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 w-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground text-xs">
                    {project.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground leading-tight">
                    {project.title} - {project.company}
                  </h3>
                </div>
                <p className="text-sm text-primary font-medium mb-3">{project.period}</p>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 whitespace-nowrap"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
