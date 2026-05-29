import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ContactInfo } from "@/components/contact-info"
import { Work } from "@/components/work"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <ContactInfo />
      <Work />
      <Projects />
      <Footer />
    </main>
  )
}
