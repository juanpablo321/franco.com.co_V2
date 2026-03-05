import Link from "next/link";
import { SITE_CONFIG } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-cream-100/80">
      <div className="container-editorial py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-display text-2xl font-bold tracking-tight"
            >
              <span className="text-cream-100">JP</span>
              <span className="text-gold-muted italic">Franco</span>
            </Link>
            <p className="text-sm leading-relaxed text-cream-100/60 max-w-xs">
              Estratega de Expansión Digital. Transformando negocios a través del
              comercio electrónico en Colombia y el mundo.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold-muted">
              Navegación
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/sobre-mi", label: "Sobre Mí" },
                { href: "/servicios", label: "Servicios" },
                { href: "/blog", label: "Blog" },
                { href: "/contacto", label: "Contacto" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-cream-100/60 hover:text-gold-muted transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-gold-muted">
              Contacto
            </p>
            <div className="flex flex-col gap-2 text-sm text-cream-100/60">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-muted transition-colors"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-muted transition-colors"
              >
                LinkedIn: /in/juanpablo321
              </a>
              <p>{SITE_CONFIG.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cream-100/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream-100/40">
          <p>&copy; {currentYear} Juan Pablo Franco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
