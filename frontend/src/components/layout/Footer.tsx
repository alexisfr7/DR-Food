"use client";

import { Instagram, Phone, MapPin } from "lucide-react";
import { scrollToId } from "@/components/ui/SmoothScroll";

export function Footer() {
  const cols = [
    {
      title: "Navigation",
      links: [
        { label: "Accueil", id: "accueil" },
        { label: "Notre histoire", id: "histoire" },
        { label: "Menu", id: "menu" },
        { label: "Spécialités", id: "specialites" },
        { label: "Galerie", id: "galerie" },
        { label: "Infos", id: "infos" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/10 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-glow">
                <span className="font-display text-xl leading-none">F</span>
              </span>
              <div>
                <div className="text-lg font-bold">DR Food</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Street food · Paris 14
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              Smash burgers, panuozzo italien et desserts maison. Une adresse pensée pour les vrais
              gourmands, à deux pas du métro Porte de Vanves.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white/5"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="tel:+33961281151"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white/5"
                aria-label="Appeler"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="https://maps.google.com/?q=3+Place+de+la+Porte+de+Vanves+75014+Paris"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:bg-white/5"
                aria-label="Itinéraire"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {c.title}
              </div>
              <ul className="mt-4 grid gap-2">
                {c.links.map((l) => (
                  <li key={l.id}>
                    <button
                      onClick={() => scrollToId(l.id)}
                      className="text-sm text-foreground/80 transition hover:text-foreground"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</div>
            <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
              <li>3 Pl. de la Porte de Vanves</li>
              <li>75014 Paris</li>
              <li>
                <a className="hover:text-foreground" href="tel:+33961281151">
                  09 61 28 11 51
                </a>
              </li>
              <li className="text-muted-foreground">Ouvert tous les jours · 11h30 → 02h</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} DR Food. Tous droits réservés.</div>
          <div>Fait avec passion, Porte de Vanves.</div>
        </div>
      </div>
    </footer>
  );
}
