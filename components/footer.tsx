"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Emiliano Langorta.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Emiliano711"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/emilng711/"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:emi.lng711@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
