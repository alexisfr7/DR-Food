"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { interiorAsset, storefrontAsset, brandBoxAsset } from "@/lib/gallery-data";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 60]);

  return (
    <section id="histoire" ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="Notre histoire"
          title={
            <>
              Un <span className="text-gradient font-display font-normal">Docteur</span> qui vous
              prescrit du plaisir.
            </>
          }
          desc="DR Food est né d'une envie simple, servir la meilleure street food de Paris, sans compromis sur les produits, la générosité et l'accueil. Chaque burger, chaque panuozzo, chaque dessert est préparé avec soin, comme une ordonnance de gourmandise."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <motion.div style={{ y: y1 }} className="lg:col-span-7">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-card">
                <img
                  src={storefrontAsset.url}
                  alt="Devanture DR Food, Porte de Vanves"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/70">Notre maison</div>
                  <div className="mt-1 text-xl font-bold text-white">
                    3 Place de la Porte de Vanves, Paris 14
                  </div>
                </div>
              </div>
            </Reveal>
          </motion.div>

          <motion.div style={{ y: y2 }} className="grid gap-6 lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-card">
                <img
                  src={interiorAsset.url}
                  alt="Salle intérieure DR Food"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 shadow-card">
                <img
                  src={brandBoxAsset.url}
                  alt="Packaging DR Food"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: "4,7", l: "Note Google" },
            { k: "206+", l: "Avis clients" },
            { k: "02h", l: "Ouvert tard" },
            { k: "100%", l: "Fait maison" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 glass p-5 sm:p-6">
                <div className="text-3xl font-black tracking-tight sm:text-4xl">
                  <span className="text-gradient">{s.k}</span>
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground sm:text-sm">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
