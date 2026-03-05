import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { IMAGES, SITE_CONFIG } from "@/lib/utils";
import {
  ShoppingCart,
  Globe,
  Target,
  BarChart3,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de consultoría en eCommerce, expansión internacional, generación de leads B2B, análisis de datos y transformación digital. Estrategias integrales para el crecimiento de tu negocio.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/servicios`,
  },
  openGraph: {
    title: "Servicios | Juan Pablo Franco",
    description:
      "Soluciones de comercio digital: consultoría eCommerce, expansión internacional, generación de leads B2B y transformación digital.",
    url: `${SITE_CONFIG.url}/servicios`,
  },
};

const services = [
  {
    icon: ShoppingCart,
    title: "Consultoría eCommerce",
    desc: "Implementación y optimización de plataformas de comercio electrónico para maximizar conversiones y mejorar la experiencia del usuario.",
    features: [
      "Auditoría y estrategia eCommerce",
      "Implementación VTEX end-to-end",
      "Optimización de conversiones (CRO)",
    ],
  },
  {
    icon: Globe,
    title: "Expansión Internacional de eCommerce",
    desc: "Estrategias de entrada a nuevos mercados, localización y adaptación cultural para llevar tu eCommerce B2B más allá de fronteras.",
    features: [
      "Análisis de mercados internacionales",
      "Localización y adaptación cultural",
      "Logística y operaciones cross-border",
    ],
  },
  {
    icon: Target,
    title: "Generación de Leads B2B",
    desc: "Estrategias de marketing digital y automatización para generar leads calificados y aumentar conversiones B2B.",
    features: [
      "Estrategia de contenido B2B",
      "Marketing automation",
      "Optimización de funnel de ventas",
    ],
  },
  {
    icon: BarChart3,
    title: "Análisis de Datos y BI",
    desc: "Implementación de dashboards y análisis de datos para toma de decisiones basadas en métricas clave.",
    features: [
      "Dashboards personalizados",
      "Análisis de comportamiento",
      "Reportes de performance",
    ],
  },
  {
    icon: TrendingUp,
    title: "Estrategia Omnicanal",
    desc: "Integración de canales online y offline para experiencia de cliente unificada y sin fricciones.",
    features: [
      "Integración de sistemas",
      "Unified commerce",
      "Customer journey mapping",
    ],
  },
  {
    icon: Award,
    title: "Transformación Digital",
    desc: "Acompañamiento en procesos de digitalización empresarial y adopción de nuevas tecnologías.",
    features: [
      "Roadmap de digitalización",
      "Change management",
      "Capacitación de equipos",
    ],
  },
];

// JSON-LD for services
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Person",
    name: "Juan Pablo Franco",
    url: SITE_CONFIG.url,
  },
  serviceType: "Consultoría en Comercio Digital",
  areaServed: {
    "@type": "Place",
    name: "Colombia y Latinoamérica",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Consultoría Digital",
    itemListElement: services.map((s, i) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.desc,
      },
    })),
  },
};

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.services}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-cream-50/90" />
        </div>
        <div className="container-editorial relative z-10">
          <AnimatedSection className="max-w-3xl">
            <p className="section-number">02</p>
            <p className="editorial-label mt-2">Servicios</p>
            <div className="gold-line mt-4" />
            <h1 className="mt-6">
              Soluciones de
              <br />
              <span className="text-purple-deep italic">Comercio Digital</span>
            </h1>
            <p className="text-xl text-charcoal-800/70 mt-6 leading-relaxed max-w-2xl">
              Estrategias integrales de comercio electrónico diseñadas para
              impulsar el crecimiento de tu negocio en mercados locales e
              internacionales.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group p-8 md:p-10 bg-cream-50 border border-charcoal-900/5 hover:border-purple-deep/20 hover:shadow-lg transition-all duration-400 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 flex items-center justify-center border border-purple-deep/20 flex-shrink-0 group-hover:bg-purple-deep/5 transition-colors duration-300">
                      <service.icon size={24} className="text-purple-deep" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-display font-semibold group-hover:text-purple-deep transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-charcoal-800/60 leading-relaxed">
                        {service.desc}
                      </p>
                      <ul className="space-y-2 pt-2">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 flex-shrink-0 text-purple-deep"
                            />
                            <span className="text-sm text-charcoal-800/60">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-200/50">
        <div className="container-editorial text-center">
          <AnimatedSection>
            <h2>
              ¿Necesitas una estrategia
              <br />
              <span className="text-purple-deep italic">personalizada?</span>
            </h2>
            <p className="text-lg text-charcoal-800/60 mt-6 max-w-2xl mx-auto leading-relaxed">
              Cada negocio es único. Agenda una consulta gratuita de 30 minutos
              para discutir cómo puedo ayudarte a alcanzar tus objetivos de
              crecimiento digital.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-purple-deep text-white font-body font-semibold text-sm tracking-wide uppercase hover:bg-purple-accent transition-colors duration-300 mt-10"
            >
              Agendar Consultoría <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
