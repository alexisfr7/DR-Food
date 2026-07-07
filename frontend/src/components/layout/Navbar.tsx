"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Instagram, Phone, MapPin } from "lucide-react";
import { scrollToId } from "@/components/ui/SmoothScroll";

const links = [
  { id: "accueil", label: "Accueil" },
  { id: "histoire", label: "Notre histoire" },
  { id: "menu", label: "Menu" },
  { id: "specialites", label: "Spécialités" },
  { id: "galerie", label: "Galerie" },
  { id: "infos", label: "Infos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 40);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-3 sm:py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-white/10 px-3 py-2 transition-all duration-500 sm:px-4 ${
              scrolled ? "glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : "bg-transparent"
            }`}
          >
            <button
              onClick={() => go("accueil")}
              className="flex min-w-0 items-center gap-2 text-left"
              aria-label="Retour en haut"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-gradient text-primary-foreground shadow-glow">
                <span className="font-display text-lg leading-none">F</span>
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-bold tracking-tight sm:text-base">DR Food</span>
                <span className="block truncate text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Street food Paris 14
                </span>
              </span>
            </button>

            <nav className="hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="tel:+33961281151"
                className="hidden h-9 w-9 place-items-center rounded-full border border-white/10 text-foreground transition hover:bg-white/10 sm:grid"
                aria-label="Appeler"
              >
                <Phone className="h-4 w-4" />
              </a>
              <button
                onClick={() => go("infos")}
                className="hidden rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03] sm:inline-flex"
              >
                Commander
              </button>
              <button
                onClick={() => setOpen(true)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 lg:hidden"
                aria-label="Ouvrir le menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-xl"
            />
            <motion.div
              initial={{ y: "-8%", opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: "-6%", opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-3 top-3 overflow-hidden rounded-3xl glass p-5 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-gradient">DR Food</span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-6 grid gap-1">
                {links.map((l, i) => (
                  <motion.button
                    key={l.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                    onClick={() => go(l.id)}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold hover:bg-white/5"
                  >
                    <span>{l.label}</span>
                    <span className="text-muted-foreground">→</span>
                  </motion.button>
                ))}
              </nav>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <a href="tel:+33961281151" className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium">
                  <Phone className="h-4 w-4" /> Appeler
                </a>
                <a
                  href="https://maps.google.com/?q=3+Place+de+la+Porte+de+Vanves+75014+Paris"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium"
                >
                  <MapPin className="h-4 w-4" /> Itinéraire
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="col-span-2 flex items-center justify-center gap-2 rounded-2xl bg-brand-gradient px-4 py-3 text-sm font-semibold text-primary-foreground"
                >
                  <Instagram className="h-4 w-4" /> Suivre @drfood
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
