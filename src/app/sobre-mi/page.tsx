import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { IMAGES, SITE_CONFIG } from "@/lib/utils";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description:
    "Conoce a Juan Pablo Franco, estratega de expansión digital con más de 15 años de experiencia en eCommerce, VTEX, marketing B2B y transformación digital en Colombia y el mundo.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/sobre-mi`,
  },
  openGraph: {
    title: "Sobre Mí | Juan Pablo Franco",
    description:
      "Estratega de Expansión Digital con más de 15 años transformando negocios a través del comercio electrónico.",
    url: `${SITE_CONFIG.url}/sobre-mi`,
  },
};

const STATS = [
  { value: "+15", label: "Años Experiencia" },
  { value: "+100", label: "Proyectos" },
  { value: "3", label: "Continentes" },
];

const PILLARS = [
  {
    title: "Enfoque en Resultados",
    desc: "Estrategias basadas en datos con KPIs claros y ROI medible.",
  },
  {
    title: "Crecimiento Escalable",
    desc: "Soluciones diseñadas para crecer con tu negocio.",
  },
  {
    title: "Experiencia Global",
    desc: "Proyectos exitosos en 3 continentes con marcas líderes.",
  },
];

const CLIENTS = [
  "Coca-Cola",
  "Nestlé",
  "Unilever",
  "Amazon",
  "Grupo Éxito",
  "Falabella",
];

export default function SobreMiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.about} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-cream-50/85" />
        </div>
        <div className="container-editorial relative z-10">
          <AnimatedSection className="max-w-3xl">
            <p className="section-number">01</p>
            <p className="editorial-label mt-2">Sobre Mí</p>
            <div className="gold-line mt-4" />
            <h1 className="mt-6">
              Juan Pablo
              <br />
              <span className="text-purple-deep italic">Franco</span>
            </h1>
            <p className="text-xl text-charcoal-800/70 mt-6 leading-relaxed max-w-2xl">
              Estratega de Expansión Digital con más de 15 años transformando
              negocios a través del comercio electrónico en Colombia y el mundo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative aspect-[3/4] max-w-md">
              <Image
                src={IMAGES.portrait}
                alt="Juan Pablo Franco"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <h2>
                Experto en Comercio Digital
                <br />
                <span className="text-purple-deep italic">y Marketplaces</span>
              </h2>
              <p className="text-charcoal-800/70 leading-relaxed">
                Con más de 15 años de experiencia en eCommerce y transformación
                digital, me especializo en implementaciones VTEX, desarrollo de
                marketplaces B2B y estrategias de generación de leads para
                empresas en Colombia y el mundo.
              </p>
              <p className="text-charcoal-800/70 leading-relaxed">
                He liderado proyectos para marcas globales como Coca-Cola,
                Nestlé, Unilever y Amazon, generando resultados medibles en
                crecimiento de ventas, optimización de procesos y expansión de
                mercado.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-charcoal-900/10">
                {STATS.map((stat, i) => (
                  <div key={i}>
                    <p className="font-display text-3xl font-bold text-purple-deep">
                      {stat.value}
                    </p>
                    <p className="text-xs text-charcoal-800/60 mt-1 tracking-wide uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-cream-200/50">
        <div className="container-editorial">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="editorial-label">Filosofía de Trabajo</p>
            <div className="gold-line mx-auto mt-4" />
            <h2 className="mt-6">
              Pilares de
              <br />
              <span className="text-purple-deep italic">Mi Enfoque</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 bg-cream-50 border border-charcoal-900/5 h-full">
                  <CheckCircle2
                    size={28}
                    className="text-purple-deep mb-4"
                  />
                  <h3 className="text-lg font-display font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-charcoal-800/60 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24">
        <div className="container-editorial">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="editorial-label">Confianza</p>
            <div className="gold-line mx-auto mt-4" />
            <h2 className="mt-6">
              Marcas que han
              <br />
              <span className="text-purple-deep italic">confiado en mí</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {CLIENTS.map((client, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center justify-center h-20 border border-charcoal-900/5 bg-cream-50 hover:border-purple-deep/20 transition-colors duration-300">
                  <span className="font-display font-semibold text-charcoal-800/40 text-sm">
                    {client}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal-900">
        <div className="container-editorial text-center">
          <AnimatedSection>
            <h2 className="text-cream-50">
              ¿Listo para trabajar
              <br />
              <span className="text-gold-muted italic">juntos?</span>
            </h2>
            <p className="text-cream-100/60 mt-6 max-w-xl mx-auto leading-relaxed">
              Agenda una consulta gratuita y descubramos juntos cómo impulsar tu
              negocio digital.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-muted text-charcoal-900 font-body font-semibold text-sm tracking-wide uppercase hover:bg-gold-light transition-colors duration-300 mt-8"
            >
              Agendar Consultoría <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
