"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"

export function About() {
  const { t } = useLanguage()

  const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "React",
    "Node.js",
    "Express",
    "Bootstrap",
    "PostgreSQL",
    "Git",
    "GitHub",
    "VS Code",
    "Next.js",
    "Tailwind",
    "MySQL",
    "Generative AI",
    "Prompt Engineering",
    "API REST",
    "Swagger",
    "Postman",
    "Cypress",
    "Manual Testing",
    "Functional Testing",
    "Regression Testing",
    "E2E Testing",
    "Agile/Scrum",
    "Test Case Design",
    "Bug Reporting"
  ]

  return (
    <section id="about" className="py-20 sm:py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-section">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-balance">
            {t("aboutTitle").split(" ")[0]}{" "}
            <span className="text-primary">{t("aboutTitle").split(" ")[1] || "Me"}</span>
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-16">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-section order-2 md:order-1">
              <div className="aspect-square max-w-sm mx-auto">
                <Image
                  src="/cvFoto.jpeg"
                  alt="Emiliano Langorta - Full Stack Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                  priority
                />
              </div>
            </div>

            <div className="animate-section space-y-4 sm:space-y-6 order-1 md:order-2">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                {t("aboutDescription")}
              </p>
            </div>
          </div>

          <div className="animate-section">
            <h4 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-foreground text-center">
              {t("technologiesTitle")}
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="animate-card bg-background border-2 border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default font-medium text-sm sm:text-base px-3 sm:px-4 py-2 shadow-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 animate-section">
            <div>
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground text-center sm:text-left">
                {t("educationTitle")}
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-background/80 rounded-xl p-4 sm:p-5 border border-primary/10 shadow-sm">
                  <p className="font-semibold text-foreground text-sm sm:text-base">{t("techDegree")}</p>
                  <p className="text-sm text-primary font-medium">{t("techInstitution")}</p>
                </div>
                <div className="bg-background/80 rounded-xl p-4 sm:p-5 border border-primary/10 shadow-sm">
                  <p className="font-semibold text-foreground text-sm sm:text-base">{t("bootcamp")}</p>
                  <p className="text-sm text-primary font-medium">{t("bootcampInstitution")}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground text-center sm:text-left">
                {t("languagesTitle")}
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-background/80 rounded-xl p-4 sm:p-5 border border-primary/10 shadow-sm">
                  <p className="font-semibold text-foreground text-sm sm:text-base">Español</p>
                  <p className="text-sm text-primary font-medium">{t("spanishLevel")}</p>
                </div>
                <div className="bg-background/80 rounded-xl p-4 sm:p-5 border border-primary/10 shadow-sm">
                  <p className="font-semibold text-foreground text-sm sm:text-base">English</p>
                  <p className="text-sm text-primary font-medium">
                    {t("englishLevel")} - {t("englishCert")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
