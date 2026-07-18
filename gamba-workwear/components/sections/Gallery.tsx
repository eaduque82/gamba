"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)),
    []
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, prev, next]);

  return (
    <section className="relative bg-carbon-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Eyebrow>Trabajos realizados</Eyebrow>
        <h2 className="font-display uppercase text-[clamp(1.8rem,3.5vw,2.8rem)] text-white leading-tight max-w-xl">
          Dotaciones entregadas a la medida
        </h2>

        <div className="mt-14 columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              onClick={() => setActiveIndex(i)}
              className={`relative block w-full overflow-hidden group focus-visible:outline-2 focus-visible:outline-gold-400 ${
                i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"
              }`}
              aria-label={`Ampliar imagen de galería ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Trabajo GAMBA WORKWEAR ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-carbon-950/0 group-hover:bg-carbon-950/30 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-carbon-950/95 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={close}
          >
            <button
              aria-label="Cerrar"
              onClick={close}
              className="absolute top-6 right-6 text-white hover:text-gold-400 transition-colors"
            >
              <X size={30} />
            </button>
            <button
              aria-label="Anterior"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 md:left-8 text-white hover:text-gold-400 transition-colors"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[activeIndex]}
                alt={`Trabajo GAMBA WORKWEAR ampliado ${activeIndex + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
            <button
              aria-label="Siguiente"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 md:right-8 text-white hover:text-gold-400 transition-colors"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
