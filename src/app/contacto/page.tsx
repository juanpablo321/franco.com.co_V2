import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { IMAGES, SITE_CONFIG } from "@/lib/utils";
import { Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda una consulta gratuita de 30 minutos con Juan Pablo Franco. Estrategia digital, eCommerce y transformación digital para tu negocio.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contacto`,
  },
  openGraph: {
    title: "Contacto | Juan Pablo Franco",
    description:
      "Agenda una consulta gratuita de 30 minutos para impulsar tu crecimiento digital.",
    url: `${SITE_CONFIG.url}/contacto`,
  },
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.contact}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-900/70" />
        </div>
        <div className="container-editorial relative z-10">
          <AnimatedSection className="max-w-3xl">
            <p className="section-number text-cream-100/40">04</p>
            <p className="editorial-label text-cream-100/60 mt-2">Contacto</p>
            <div className="gold-line mt-4" />
            <h1 className="mt-6 text-cream-50">
              Trabajemos
              <br />
              <span className="text-gold-muted italic">Juntos</span>
            </h1>
            <p className="text-xl text-cream-100/70 mt-6 leading-relaxed max-w-2xl">
              ¿Listo para llevar tu negocio al siguiente nivel? Agenda una
              consulta gratuita de 30 minutos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* HubSpot Calendar */}
            <AnimatedSection>
              <div className="space-y-6">
                <h2>
                  Agenda tu
                  <br />
                  <span className="text-purple-deep italic">Consultoría</span>
                </h2>
                <p className="text-charcoal-800/60 leading-relaxed">
                  Selecciona un horario que te convenga para una sesión
                  estratégica gratuita de 30 minutos. Analizaremos tu situación
                  actual y definiremos los próximos pasos para impulsar tu
                  crecimiento digital.
                </p>
                <div
                  className="bg-cream-50 border border-charcoal-900/5 overflow-hidden"
                  style={{ minHeight: "660px" }}
                >
                  <iframe
                    src="https://meetings.hubspot.com/juanpablo321?embed=true"
                    width="100%"
                    height="660"
                    frameBorder="0"
                    style={{ border: "none", minHeight: "660px" }}
                    title="Agendar Reunión con Juan Pablo Franco"
                    allow="camera; microphone"
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-10">
                <h2>
                  Información de
                  <br />
                  <span className="text-purple-deep italic">Contacto</span>
                </h2>

                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-start gap-5 p-6 bg-cream-50 border border-charcoal-900/5 hover:border-purple-deep/20 transition-colors duration-300">
                    <div className="w-12 h-12 flex items-center justify-center border border-purple-deep/20 flex-shrink-0">
                      <Phone size={20} className="text-purple-deep" />
                    </div>
                    <div>
                      <p className="editorial-label">WhatsApp</p>
                      <a
                        href={SITE_CONFIG.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-display font-semibold mt-1 block hover:text-purple-deep transition-colors"
                      >
                        {SITE_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-5 p-6 bg-cream-50 border border-charcoal-900/5 hover:border-purple-deep/20 transition-colors duration-300">
                    <div className="w-12 h-12 flex items-center justify-center border border-purple-deep/20 flex-shrink-0">
                      <MapPin size={20} className="text-purple-deep" />
                    </div>
                    <div>
                      <p className="editorial-label">Ubicación</p>
                      <p className="text-lg font-display font-semibold mt-1">
                        {SITE_CONFIG.location}
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-5 p-6 bg-cream-50 border border-charcoal-900/5 hover:border-purple-deep/20 transition-colors duration-300">
                    <div className="w-12 h-12 flex items-center justify-center border border-purple-deep/20 flex-shrink-0">
                      <Linkedin size={20} className="text-purple-deep" />
                    </div>
                    <div>
                      <p className="editorial-label">LinkedIn</p>
                      <a
                        href={SITE_CONFIG.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-display font-semibold mt-1 block hover:text-purple-deep transition-colors"
                      >
                        /in/juanpablo321
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick CTA */}
                <div className="p-8 border-2 border-purple-deep/20 bg-purple-deep/5 space-y-4">
                  <h3 className="text-xl font-display font-semibold">
                    ¿Prefieres un contacto directo?
                  </h3>
                  <p className="text-charcoal-800/60 text-sm leading-relaxed">
                    Escríbeme directamente por WhatsApp y te responderé en menos
                    de 24 horas.
                  </p>
                  <a
                    href={SITE_CONFIG.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-deep text-white font-body font-semibold text-sm tracking-wide uppercase hover:bg-purple-accent transition-colors duration-300"
                  >
                    Enviar WhatsApp <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
