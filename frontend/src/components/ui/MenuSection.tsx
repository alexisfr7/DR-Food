"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionHeader } from "./Reveal";
import { menu } from "@/lib/menu-data";

export function MenuSection() {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((m) => m.id === active)!;

  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_400px_at_80%_0%,color-mix(in_oklab,var(--brand)_25%,transparent),transparent)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="La carte"
          title={
            <>
              Notre menu <span className="text-gradient font-display font-normal">signature</span>.
            </>
          }
          desc="Panuozzo italien, smash burger US, entrées gourmandes et desserts maison. Une carte pensée pour se faire plaisir, midi comme soir."
        />

        <div className="mt-10">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            {menu.map((c) => {
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`relative shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "border-transparent text-primary-foreground"
                      : "border-white/10 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="menu-pill"
                      className="absolute inset-0 rounded-full bg-brand-gradient shadow-glow"
                      transition={{ type: "spring", stiffness: 340, damping: 32 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <span>{c.title}</span>
                    <span className={`text-[10px] ${isActive ? "opacity-70" : "opacity-50"}`}>
                      {c.items.length}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              {current.items.map((it, i) => (
                <motion.article
                  key={it.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 glass p-5 sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                       style={{ background: "radial-gradient(600px 200px at var(--x,50%) 0%, color-mix(in oklab, var(--brand) 18%, transparent), transparent)" }} />
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold sm:text-xl">{it.name}</h3>
                      {it.desc && (
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {it.desc}
                        </p>
                      )}
                      {it.tag && (
                        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                          {it.tag}
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      {it.priceXL ? (
                        <div className="flex flex-col items-end gap-0.5 text-sm">
                          <span className="font-bold text-foreground">{it.price}</span>
                          <span className="text-muted-foreground">{it.priceL}</span>
                          <span className="text-gradient font-bold">{it.priceXL}</span>
                        </div>
                      ) : (
                        <span className="whitespace-nowrap text-lg font-black text-gradient">
                          {it.price}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-xs text-muted-foreground">
            * Prix indicatifs, susceptibles d'évoluer. Sauces au choix, allergènes disponibles sur demande.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
