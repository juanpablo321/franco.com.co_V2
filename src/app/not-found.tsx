import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24">
      <div className="container-editorial text-center space-y-6 max-w-2xl mx-auto">
        <p className="font-display text-8xl font-bold text-purple-deep/20">
          404
        </p>
        <h1>Página no encontrada</h1>
        <p className="text-lg text-charcoal-800/60 leading-relaxed">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-purple-deep text-white font-body font-semibold text-sm tracking-wide uppercase hover:bg-purple-accent transition-colors duration-300 mt-4"
        >
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>
      </div>
    </section>
  );
}
