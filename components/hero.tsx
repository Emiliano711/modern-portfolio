"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function Hero() {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5",
        )
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .fromTo(
          socialRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.2",
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          {t("heroTitle").split(" ")[0]} {t("heroTitle").split(" ")[1]}
          <span className="text-primary block">{t("heroTitle").split(" ")[2]}</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed"
        >
          {t("heroSubtitle")}
        </p>

        <p className="text-base sm:text-lg text-muted-foreground/80 mb-12 max-w-xl mx-auto text-pretty">
          {t("heroDescription")}
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            onClick={() => scrollToSection("work")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            {t("viewWork")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="border-border hover:bg-muted px-8 py-3 text-lg"
          >
            {t("getInTouch")}
          </Button>
        </div>

        <div ref={socialRef} className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Emiliano711"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/emilng711/"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:emi.lng711@gmail.com"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <ArrowDown className="w-6 h-6 mx-auto" />
        </button>
      </div>
    </section>
  )
}
