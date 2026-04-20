"use client"

import { useEffect, useState } from "react"
import { LanguageSelector } from "./language-selector"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="text-base sm:text-lg md:text-xl font-bold text-foreground">Emiliano Langorta</div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:block text-sm text-muted-foreground">emi.lng711@gmail.com</div>
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </header>
  )
}
