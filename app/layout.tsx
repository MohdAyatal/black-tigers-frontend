import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Rajdhani } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: "Black Tigers Goa — Trained. Trusted. Always Alert.",
  description:
    "Professional security services for homes, businesses, and events in Goa. Background-verified guards, 24/7 monitoring, rapid response.",
  generator: "v0.app",
  keywords: [
    "security services Goa",
    "security guards Mapusa",
    "event security Goa",
    "VIP protection Goa",
    "Black Tigers Goa",
  ],
}

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${rajdhani.variable} bg-background`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
