"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function ContactInfo() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-background overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-section text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">{t("contactTitle")}</h2>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="animate-card text-center p-6 sm:p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-300">
            <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">{t("emailLabel")}</h3>
            <p className="text-sm sm:text-base text-muted-foreground break-all">emi.lng711@gmail.com</p>
          </div>

          <div className="animate-card text-center p-6 sm:p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-300">
            <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">{t("phone")}</h3>
            <p className="text-sm sm:text-base text-muted-foreground">{t("phoneNumber")}</p>
          </div>

          <div className="animate-card text-center p-6 sm:p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">{t("location")}</h3>
            <p className="text-sm sm:text-base text-muted-foreground">{t("locationText")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
