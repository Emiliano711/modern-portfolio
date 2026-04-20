"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-section text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Trabajemos <span className="text-primary">juntos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-section">
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Envíame un mensaje</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-input border-border focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-input border-border focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Cuéntame sobre tu proyecto..."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-input border-border focus:border-primary min-h-32 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="animate-section space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Información de contacto</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Estoy disponible para proyectos freelance y colaboraciones. No dudes en contactarme para discutir tu
                próximo proyecto.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">hola@miportfolio.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Teléfono</p>
                  <p className="text-muted-foreground">+34 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Ubicación</p>
                  <p className="text-muted-foreground">Madrid, España</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground">
                Tiempo de respuesta promedio: <span className="text-primary font-medium">24 horas</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
