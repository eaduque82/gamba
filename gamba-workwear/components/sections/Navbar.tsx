"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-carbon-950/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-2.5 group">
          <span className="h-8 w-8 border border-gold-400 flex items-center justify-center rotate-45">
            <span className="-rotate-45 font-display text-gold-400 text-sm">G</span>
          </span>
          <span className="font-display text-lg md:text-xl tracking-wider text-white">
            GAMBA <span className="text-gold-400">WORKWEAR</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="tag-label text-xs text-steel-300 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contacto" variant="primary">
            Cotizar
          </Button>
        </div>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2 -mr-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-carbon-950/98 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="tag-label text-sm text-steel-300 hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#contacto" variant="primary" className="w-full" >
                Cotizar
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
