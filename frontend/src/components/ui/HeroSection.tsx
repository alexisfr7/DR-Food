"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, MapPin, Clock } from "lucide-react";
import { heroBurgerAsset, logoAsset } from "@/lib/gallery-data";
import { scrollToId } from "./SmoothScroll";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-hero pt-24 sm:pt-28"
    >
      {/* animated glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-purple/40 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-brand/40 blur-3xl"
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <motion.div style={{ opacity }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 glass px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="grid h-4 w-4 place-items-center rounded-full bg-brand-gradient">
              <Star className="h-2.5 w-2.5 text-primary-foreground" />
            </span>
            4,7 / 5 sur Google, 206 avis
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[clamp(2.6rem,8vw,5.5rem)] font-black leading-[0.95] tracking-tight"
          >
            Le street food<br />
            <span className="font-display text-gradient text-[1.15em] font-normal leading-none">
              qui vous soigne
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Smash burgers, panuozzo signature et desserts maison. Une adresse gourmande
            Porte de Vanves, pensée pour les vrais amateurs de bonne bouffe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollToId("menu")}
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
            >
              Voir le menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollToId("infos")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-white/5"
            >
              Nous rendre visite
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-4 text-sm"
          >
            {[
              { icon: Clock, label: "Ouvert", value: "Jusqu'à 02:00" },
              { icon: MapPin, label: "Adresse", value: "Porte de Vanves" },
              { icon: Star, label: "Note Uber Eats", value: "4,4 · 1,5k" },
            ].map((s) => (
              <div key={s.label} className="min-w-0">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <s.icon className="h-3.5 w-3.5" />
                  <span className="truncate text-[11px] uppercase tracking-wider">{s.label}</span>
                </div>
                <div className="mt-1 truncate font-semibold">{s.value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ y, scale }} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-card"
          >
            <img
              src={heroBurgerAsset.url}
              alt="Smash burger signature DR Food"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/50 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="animate-float absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl glass p-3 pr-4 shadow-glow sm:-left-6"
          >
            <img src={logoAsset.url} alt="DR Food" className="h-12 w-12 rounded-xl object-cover" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Signature</div>
              <div className="text-sm font-bold">Smash Original</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="absolute -right-2 top-6 rounded-2xl glass px-3 py-2 shadow-glow sm:-right-4"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-brand text-brand" />
              ))}
            </div>
            <div className="mt-0.5 text-[11px] text-muted-foreground">« Une tuerie » — Louis</div>
          </motion.div>
        </motion.div>
      </div>

      {/* marquee bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden border-y border-white/5 bg-black/20 py-3">
        <div className="animate-marquee flex whitespace-nowrap gap-10 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10">
              {["Smash burger", "★", "Panuozzo", "★", "Desserts maison", "★", "Ouvert jusqu'à 02h", "★", "Porte de Vanves", "★"].map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
