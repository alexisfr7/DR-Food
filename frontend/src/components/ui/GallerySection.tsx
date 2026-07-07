"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { SectionHeader } from "./Reveal";
import { gallery } from "@/lib/gallery-data";

export function GallerySection() {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const paused = useRef(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!paused.current && lightbox === null) {
        setIndex((i) => (i + 1) % gallery.length);
      }
    }, 4000);
    return () => window.clearInterval(id);
  }, [lightbox]);

  const open = useCallback((i: number) => setLightbox(i), []);
  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(() => setLightbox((i) => (i === null ? i : (i + 1) % gallery.length)), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  return (
    <section id="galerie" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="Galerie"
          title={
            <>
              L'ambiance <span className="text-gradient font-display font-normal">DR Food</span> en images.
            </>
          }
          desc="Un aperçu de nos plats, de notre boutique et de l'univers visuel de la marque. Cliquez sur une image pour l'agrandir."
        />

        {/* Carousel mobile */}
        <div
          className="mt-10 lg:hidden"
          onTouchStart={() => (paused.current = true)}
          onTouchEnd={() => (paused.current = false)}
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-card">
            <div className="relative aspect-[4/5]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={gallery[index].url}
                    alt={gallery[index].alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pb-6">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">
                      {index + 1} / {gallery.length}
                    </div>
                    <div className="mt-1 text-base font-semibold text-white">
                      {gallery[index].caption}
                    </div>
                  </div>
                  <button
                    onClick={() => open(index)}
                    aria-label="Agrandir"
                    className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full glass"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-between gap-3 p-3">
              <button
                onClick={() => setIndex((i) => (i - 1 + gallery.length) % gallery.length)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10"
                aria-label="Précédent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-1.5">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Image ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-brand" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setIndex((i) => (i + 1) % gallery.length)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10"
                aria-label="Suivant"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop mosaic */}
        <div
          className="mt-10 hidden lg:block"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div className="grid auto-rows-[180px] grid-cols-6 gap-3">
            {gallery.map((g, i) => {
              const layouts = [
                "col-span-3 row-span-2",
                "col-span-2 row-span-2",
                "col-span-1 row-span-2",
                "col-span-2 row-span-1",
                "col-span-2 row-span-2",
                "col-span-2 row-span-1",
                "col-span-2 row-span-2",
                "col-span-4 row-span-2",
              ];
              const highlight = i === index;
              return (
                <motion.button
                  key={g.url}
                  onClick={() => open(i)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.01 }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 ${layouts[i]}`}
                >
                  <img
                    src={g.url}
                    alt={g.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
                  <motion.div
                    animate={{ opacity: highlight ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="pointer-events-none absolute inset-0 ring-2 ring-brand"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-0.5 line-clamp-1 text-sm font-semibold text-white">
                      {g.caption}
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full glass opacity-0 transition group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
            />
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex max-h-[92vh] w-full max-w-6xl flex-col"
            >
              <div className="flex items-center justify-between px-1 pb-3 text-white">
                <div className="text-xs uppercase tracking-[0.25em] text-white/60">
                  {(lightbox ?? 0) + 1} / {gallery.length}
                </div>
                <button
                  onClick={close}
                  className="grid h-11 w-11 place-items-center rounded-full glass"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40">
                <img
                  src={gallery[lightbox].url}
                  alt={gallery[lightbox].alt}
                  className="max-h-[78vh] w-full object-contain"
                />
                <button
                  onClick={prev}
                  aria-label="Précédent"
                  className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full glass text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Suivant"
                  className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full glass text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-3 text-center text-sm text-white/80">
                {gallery[lightbox].caption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
