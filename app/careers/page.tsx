import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollProgress } from "@/components/scroll-progress"
import { Careers } from "@/components/careers"

export const metadata: Metadata = {
  title: "Join Us — Careers at Black Tigers Goa",
  description:
    "Join Goa's most trusted security force. We're hiring Security Guards, Supervisors, Event Officers, and Close Protection Officers. Apply online or walk in to our Mapusa HQ.",
  keywords: [
    "security guard jobs Goa",
    "security jobs Mapusa",
    "Black Tigers Goa hiring",
    "security officer vacancy Goa",
    "join security company Goa",
  ],
}

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <SiteNavbar />

      {/* Page hero banner */}
      <div className="relative pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-tactical-grid opacity-50" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.12), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-14 text-center">
          <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan/25 bg-cyan/[0.07] backdrop-blur-sm mb-5">
            <span className="relative flex w-2 h-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-80" />
              <span className="relative w-2 h-2 rounded-full bg-cyan" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-cyan/90">
              Now Hiring · Multiple Positions
            </span>
          </span>
          <h1
            className="font-display font-bold text-white tracking-tight leading-[1.06]"
            style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)" }}
          >
            Build a Career in Security.
            <br />
            <span
              className="text-cyan"
              style={{ textShadow: "0 0 24px rgba(34,211,238,0.4)" }}
            >
              Protect What Matters.
            </span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-foreground/65 text-base leading-relaxed">
            Opportunities for trained professionals and fresh recruits across
            Goa. Competitive pay, uniform, and career growth guaranteed.
          </p>
        </div>
      </div>

      <Careers />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
