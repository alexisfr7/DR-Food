"use client";

import { Reveal, SectionHeader } from "./Reveal";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Instagram, Utensils, Bike, Star } from "lucide-react";
import { kiosksAsset } from "@/lib/gallery-data";

const actions = [
  { icon: Utensils, label: "Réserver", href: "tel:+33961281151", tag: "Sur place" },
  { icon: Bike, label: "Se faire livrer", href: "https://www.ubereats.com", tag: "Uber Eats" },
  { icon: MapPin, label: "Itinéraire", href: "https://maps.google.com/?q=3+Place+de+la+Porte+de+Vanves+75014+Paris", tag: "Google Maps" },
  { icon: Phone, label: "Appeler", href: "tel:+33961281151", tag: "09 61 28 11 51" },
];

export function ContactSection() {
  return (
    <section id="infos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="Infos pratiques"
          title={
            <>
              Rendez-vous à <span className="text-gradient font-display font-normal">DR Food</span>.
            </>
          }
          desc="On vous accueille sept jours sur sept, jusqu'à 02h du matin. Sur place, à emporter ou en livraison."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-card">
              <img
                src={kiosksAsset.url}
                alt="Bornes de commande DR Food"
                className="h-full max-h-[520px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 sm:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/70">
                      Notre boutique
                    </div>
                    <div className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      3 Place de la Porte de Vanves
                    </div>
                    <div className="text-sm text-white/80">75014 Paris</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-semibold text-white">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400" />
                    Ouvert · ferme à 02h
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal delay={0.05}>
              <div className="grid grid-cols-1 gap-3 rounded-3xl border border-white/10 glass p-5 sm:p-6">
                <InfoRow icon={Clock} title="Horaires" value="Tous les jours · 11h30 → 02h00" />
                <InfoRow icon={Phone} title="Téléphone" value="09 61 28 11 51" href="tel:+33961281151" />
                <InfoRow icon={MapPin} title="Adresse" value="3 Pl. de la Porte de Vanves, 75014 Paris" />
                <InfoRow icon={Star} title="Notes" value="Google 4,7 · Uber Eats 4,4" />
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-3">
              {actions.map((a, i) => (
                <motion.a
                  key={a.label}
                  href={a.href}
                  target={a.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 glass p-5"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-primary-foreground shadow-glow">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-sm font-bold">{a.label}</div>
                  <div className="text-xs text-muted-foreground">{a.tag}</div>
                </motion.a>
              ))}
            </div>

            <Reveal delay={0.2}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 glass p-5 transition hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-primary-foreground shadow-glow">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Suivez-nous</div>
                    <div className="text-xs text-muted-foreground">@drfood sur Instagram</div>
                  </div>
                </div>
                <span className="text-muted-foreground">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof Clock;
  title: string;
  value: string;
  href?: string;
}) {
  const Comp = href ? "a" : "div";
  return (
    <Comp
      href={href}
      className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl px-2 py-2 transition hover:bg-white/5"
    >
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5">
        <Icon className="h-4 w-4 text-brand" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="truncate text-sm font-semibold">{value}</div>
      </div>
    </Comp>
  );
}
