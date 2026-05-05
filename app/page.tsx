import { SiteNavbar } from "@/components/site-navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Careers } from "@/components/careers"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <SiteNavbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Careers />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
