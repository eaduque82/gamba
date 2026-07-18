"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import Button from "@/components/ui/Button";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-carbon-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=2000&q=80"
          alt="Chaqueta corporativa GAMBA WORKWEAR"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-950 via-carbon-950/85 to-carbon-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-carbon-950/40" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pt-28 pb-16"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-7">
          <span className="h-px w-10 bg-gold-500" />
          <span className="tag-label text-xs text-gold-400">Dotaciones Empresariales Premium</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display uppercase leading-[0.98] text-white max-w-4xl text-[clamp(2.4rem,6.5vw,5.2rem)]"
        >
          Hay prendas que abrigan.{" "}
          <span className="text-gold-400">Y otras que representan</span> a todo un equipo.
        </motion.h1>

        <motion.p variants={item} className="mt-7 max-w-xl text-steel-300 text-base md:text-lg font-light leading-relaxed">
          Fabricamos dotaciones empresariales premium diseñadas para fortalecer la
          identidad y protección de su organización.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#contacto" variant="primary" icon={<ArrowRight size={16} />}>
            Solicitar Cotización
          </Button>
          <Button href="#productos" variant="secondary" icon={<Play size={14} />}>
            Ver Catálogo
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
          {[
            ["+15 años", "de trayectoria industrial"],
            ["100%", "fabricación colombiana"],
            ["+120", "empresas dotadas"],
          ].map(([num, label]) => (
            <div key={label} className="flex items-baseline gap-2">
              <span className="font-display text-2xl text-white">{num}</span>
              <span className="text-xs text-steel-400 max-w-[9rem]">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="tag-label text-[10px] text-steel-400">Descubra más</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
