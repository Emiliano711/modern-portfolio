"use client"

import { useLanguage } from "@/hooks/use-language"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      aria-label={t("language")}
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase font-medium">{language === "en" ? "EN" : "ES"}</span>
    </button>
  )
}
