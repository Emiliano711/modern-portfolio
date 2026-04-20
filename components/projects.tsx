"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

gsap.registerPlugin(ScrollTrigger)

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const projects = [
    {
      title: "GuitarLA",
      description: t("guitarDescription"),
      image: "/guitar-project.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://guitarpage.vercel.app/",
      githubUrl: "#",
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="animate-section py-20 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold md:text-5xl">{t("projectsTitle")}</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t("viewLive")}
                  </a>
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      {t("viewCode")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
