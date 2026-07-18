"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/lib/data";

export default function CTA() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative bg-gradient-to-br from-carbon-950 via-carbon-900 to-carbon-950 py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #D4A034 0, #D4A034 1px, transparent 1px, transparent 40px)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-4xl px-6 md:px-10 text-center"
      >
        <span className="tag-label text-xs text-gold-400">Última fila</span>
        <h2 className="mt-5 font-display uppercase text-[clamp(2rem,5vw,3.6rem)] text-white leading-[1.05]">
          Solicite hoy mismo la dotación de su empresa
        </h2>
        <p className="mt-6 text-steel-300 max-w-xl mx-auto leading-relaxed">
          Un asesor le responderá directamente por WhatsApp con tiempos de
          entrega, precios y opciones de personalización para su equipo.
        </p>

        <motion.a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex items-center gap-3 bg-gold-400 hover:bg-white text-carbon-950 font-display uppercase text-lg md:text-xl px-10 py-5 cut-corner transition-colors duration-300"
        >
          <MessageCircle size={26} strokeWidth={2} />
          Escribir por WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}
