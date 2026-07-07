"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  align?: "left" | "center";
}) {
  const cls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-4 ${cls}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 glass px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.02] tracking-tight">
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{desc}</p>
        </Reveal>
      )}
    </div>
  );
}
