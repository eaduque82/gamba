"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/lib/data";

export default function WhatsAppFloat() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center bg-gold-400 text-carbon-950 shadow-lg shadow-black/40 hover:bg-white transition-colors duration-300 cut-corner-sm"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </motion.a>
  );
}
