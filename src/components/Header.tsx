"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl lg:text-2xl font-bold tracking-tight"
        >
          <span className="text-charcoal-900">JP</span>
          <span className="text-purple-deep italic">Franco</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-body text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                pathname === item.href
                  ? "text-purple-deep"
                  : "text-charcoal-800/70 hover:text-purple-deep"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contacto"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 border-2 border-purple-deep text-purple-deep font-body font-semibold text-xs tracking-[0.15em] uppercase hover:bg-purple-deep hover:text-white transition-all duration-300"
        >
          Agendar Consultoría
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-charcoal-900"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-cream-50 border-t border-charcoal-900/10 overflow-hidden"
          >
            <nav className="container-editorial py-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body text-sm font-semibold tracking-[0.15em] uppercase py-2 transition-colors ${
                    pathname === item.href
                      ? "text-purple-deep"
                      : "text-charcoal-800/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-purple-deep text-white font-body font-semibold text-xs tracking-[0.15em] uppercase"
              >
                Agendar Consultoría
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
