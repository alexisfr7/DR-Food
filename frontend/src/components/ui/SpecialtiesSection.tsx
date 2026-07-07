"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeader } from "./Reveal";
import { Flame, Sandwich, IceCream, Utensils } from "lucide-react";

const specs = [
  {
    icon: Flame,
    title: "Smash burger",
    desc: "Steak smashé minute, croûte caramélisée, cheddar fondu, buns briochés. La signature qui a fait notre réputation.",
  },
  {
    icon: Sandwich,
    title: "Panuozzo italien",
    desc: "Pain italien croustillant garni généreusement, viandes marinées maison et légumes frais.",
  },
  {
    icon: Utensils,
    title: "Starters gourmands",
    desc: "Tenders, donuts mozza, chili cheese, tempura. Les incontournables à partager (ou pas).",
  },
  {
    icon: IceCream,
    title: "Desserts maison",
    desc: "Tiramisus déclinés, diplomate fraise, tarte Nutella coco. La touche finale qu'on n'oublie pas.",
  },
];

export function SpecialtiesSection() {
  return (
    <section id="specialites" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="Nos spécialités"
          title={
            <>
              Quatre univers, une seule <span className="text-gradient font-display font-normal">obsession</span>.
            </>
          }
          desc="Chaque catégorie est travaillée comme une recette à part entière, avec des produits sélectionnés et une exécution rigoureuse."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 glass p-6"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-gradient opacity-20 blur-2xl transition group-hover:opacity-40" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-glow">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 glass p-6 sm:p-10">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Notre promesse
                </div>
                <p className="mt-3 max-w-2xl text-xl font-medium leading-snug sm:text-2xl">
                  Des produits frais, une préparation minute, et cette petite touche de folie qui rend
                  chaque bouchée <span className="text-gradient font-display">inoubliable</span>.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-gradient text-2xl font-black text-primary-foreground shadow-glow">
                  DR
                </div>
                <div>
                  <div className="font-bold">L'équipe DR Food</div>
                  <div className="text-xs text-muted-foreground">Paris 14, depuis toujours</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
