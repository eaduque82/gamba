"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";

export default function About() {
  return (
    <section id="nosotros" className="relative bg-carbon-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>Nosotros</Eyebrow>
          <h2 className="font-display uppercase text-[clamp(1.8rem,3.5vw,2.8rem)] text-white leading-tight">
            Confeccionamos identidad, no solo uniformes
          </h2>
          <p className="mt-6 text-steel-300 leading-relaxed">
            GAMBA WORKWEAR nace en Colombia con un propósito claro: convertir la
            dotación empresarial en una herramienta de protección, pertenencia
            y reputación. Nuestro taller integra patronaje, confección y bordado
            computarizado bajo un mismo techo, garantizando control total sobre
            cada prenda que entregamos.
          </p>
          <p className="mt-4 text-steel-300 leading-relaxed">
            Trabajamos con sectores de construcción, logística, transporte,
            minería e industria, entendiendo las exigencias reales de cada
            operación para proponer materiales y cortes a la medida.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              ["15+", "Años de experiencia"],
              ["120+", "Empresas dotadas"],
              ["30K+", "Prendas al año"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-3xl md:text-4xl text-gold-400">{num}</p>
                <p className="text-xs text-steel-400 mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] cut-corner-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
            alt="Taller de confección GAMBA WORKWEAR"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 border border-gold-500/30" />
        </motion.div>
      </div>
    </section>
  );
}
