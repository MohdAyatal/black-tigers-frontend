"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2.5 mb-4",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-cyan" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-cyan" />
        </div>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/70 text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  )
}
