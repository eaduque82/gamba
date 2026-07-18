import Link from "next/link";
import { navLinks, products } from "@/lib/data";

function InstagramIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 9h3V5.5h-3C12 5.5 10.5 7 10.5 9v2H8v3.5h2.5V21H14v-6.5h2.7l.6-3.5H14V9.2c0-.1 0-.2 0-.2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.8" r="0.5" fill="currentColor" />
      <path d="M11.5 17v-4.2c0-1.5 1-2.3 2.2-2.3 1.2 0 2.3.8 2.3 2.3V17" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-carbon-950 border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="#inicio" className="flex items-center gap-2.5">
              <span className="h-8 w-8 border border-gold-400 flex items-center justify-center rotate-45">
                <span className="-rotate-45 font-display text-gold-400 text-sm">G</span>
              </span>
              <span className="font-display text-lg tracking-wider text-white">
                GAMBA <span className="text-gold-400">WORKWEAR</span>
              </span>
            </Link>
            <p className="mt-5 text-sm text-steel-500 leading-relaxed max-w-xs">
              Dotaciones empresariales premium, fabricadas en Colombia para
              proteger y representar a su equipo.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-steel-500 hover:text-gold-400 transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook" className="text-steel-500 hover:text-gold-400 transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-steel-500 hover:text-gold-400 transition-colors">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="tag-label text-xs text-gold-400 mb-5">Navegación</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-steel-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="tag-label text-xs text-gold-400 mb-5">Productos</p>
            <ul className="space-y-3">
              {products.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link href="#productos" className="text-sm text-steel-400 hover:text-white transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="tag-label text-xs text-gold-400 mb-5">Contacto</p>
            <ul className="space-y-3 text-sm text-steel-400">
              <li>+57 300 123 4567</li>
              <li>ventas@gambaworkwear.com</li>
              <li>Bogotá D.C., Colombia</li>
            </ul>
          </div>
        </div>

        <div className="seam my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel-600">
          <p>© {new Date().getFullYear()} GAMBA WORKWEAR. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-steel-300 transition-colors">
              Política de privacidad
            </Link>
            <Link href="#" className="hover:text-steel-300 transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
