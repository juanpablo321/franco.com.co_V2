import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { IMAGES, SITE_CONFIG } from "@/lib/utils";
import { getAllBlogPosts } from "@/lib/contentful";
import { formatDate } from "@/lib/utils";
import {
  ArrowRight,
  ShoppingCart,
  Globe,
  Target,
  BarChart3,
  Calendar,
  Clock,
} from "lucide-react";

const SERVICES_PREVIEW = [
  {
    icon: ShoppingCart,
    title: "Consultoría eCommerce",
    desc: "Implementación y optimización de plataformas de comercio electrónico para maximizar conversiones.",
  },
  {
    icon: Globe,
    title: "Expansión Internacional",
    desc: "Estrategias de entrada a nuevos mercados y adaptación cultural para eCommerce B2B.",
  },
  {
    icon: Target,
    title: "Generación de Leads B2B",
    desc: "Marketing digital y automatización para generar leads calificados y aumentar conversiones.",
  },
  {
    icon: BarChart3,
    title: "Análisis de Datos y BI",
    desc: "Dashboards y análisis de datos para toma de decisiones basadas en métricas clave.",
  },
];

const STATS = [
  { value: "+15", label: "Años de Experiencia" },
  { value: "+100", label: "Proyectos Exitosos" },
  { value: "3", label: "Continentes" },
];

export default async function HomePage() {
  // Fetch latest blog posts at build time (SSG)
  const posts = await getAllBlogPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-cream-50/60" />
        </div>

        <div className="container-editorial relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
          {/* Text */}
          <AnimatedSection>
            <div className="space-y-6">
              <p className="editorial-label">Estrategia Digital &amp; eCommerce</p>
              <div className="gold-line" />
              <h1>
                Juan Pablo
                <br />
                <span className="text-purple-deep italic">Franco</span>
              </h1>
              <p className="text-lg text-charcoal-800/70 max-w-lg leading-relaxed">
                Transformando negocios a través de estrategias de comercio
                digital basadas en datos en Colombia y el mundo.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-purple-deep text-white font-body font-semibold text-sm tracking-wide uppercase hover:bg-purple-accent transition-colors duration-300"
                >
                  Agendar Consultoría <ArrowRight size={16} />
                </Link>
                <Link
                  href="/sobre-mi"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-charcoal-900/20 text-charcoal-900 font-body font-semibold text-sm tracking-wide uppercase hover:border-purple-deep hover:text-purple-deep transition-colors duration-300"
                >
                  Conocer Más
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Portrait placeholder area */}
          <AnimatedSection delay={0.3} className="hidden lg:block">
            <div className="relative aspect-[3/4] max-w-md ml-auto">
              <Image
                src={IMAGES.portrait}
                alt="Juan Pablo Franco - Estratega de Expansión Digital"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Stats Bar ────────────────────────────────────── */}
      <section className="py-16 bg-charcoal-900">
        <div className="container-editorial">
          <div className="grid grid-cols-3 gap-8">
            {STATS.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-gold-muted">
                  {stat.value}
                </p>
                <p className="mt-2 font-body text-sm text-cream-100/60 tracking-wide uppercase">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Preview ────────────────────────────────── */}
      <section className="py-24">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={IMAGES.about}
                alt="Sobre Juan Pablo Franco"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <p className="section-number">01</p>
              <p className="editorial-label">Sobre Mí</p>
              <div className="gold-line" />
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
              <Link
                href="/sobre-mi"
                className="inline-flex items-center gap-2 text-purple-deep font-body font-semibold text-sm tracking-wide uppercase hover:gap-3 transition-all duration-300"
              >
                Conocer Mi Historia <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Services Preview ─────────────────────────────── */}
      <section className="py-24 bg-cream-200/50">
        <div className="container-editorial">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-number">02</p>
            <p className="editorial-label mt-2">Servicios</p>
            <div className="gold-line mx-auto mt-4" />
            <h2 className="mt-6">
              Soluciones de
              <br />
              <span className="text-purple-deep italic">Comercio Digital</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_PREVIEW.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group p-8 bg-cream-50 border border-charcoal-900/5 hover:border-purple-deep/20 hover:shadow-lg transition-all duration-400 h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 flex items-center justify-center border border-purple-deep/20 flex-shrink-0 group-hover:bg-purple-deep/5 transition-colors">
                      <service.icon size={22} className="text-purple-deep" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold group-hover:text-purple-deep transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-charcoal-800/60 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-purple-deep text-white font-body font-semibold text-sm tracking-wide uppercase hover:bg-purple-accent transition-colors duration-300"
            >
              Ver Todos los Servicios <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Blog Preview ─────────────────────────────────── */}
      <section className="py-24">
        <div className="container-editorial">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-number">03</p>
            <p className="editorial-label mt-2">Blog</p>
            <div className="gold-line mx-auto mt-4" />
            <h2 className="mt-6">
              Insights de
              <br />
              <span className="text-purple-deep italic">Comercio Digital</span>
            </h2>
          </AnimatedSection>

          {latestPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 0.08}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <article className="bg-cream-50 border border-charcoal-900/5 hover:border-purple-deep/20 hover:shadow-lg transition-all duration-400 h-full flex flex-col">
                      {post.featuredImage ? (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-600"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      ) : (
                        <div className="h-48 bg-gradient-to-br from-purple-deep/10 to-gold-muted/10 flex items-center justify-center">
                          <span className="font-display text-4xl font-bold text-purple-deep/20">
                            {post.category.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="p-6 flex-1 flex flex-col">
                        <span className="editorial-label text-purple-deep text-[10px]">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-display font-semibold mt-2 group-hover:text-purple-deep transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-charcoal-800/60 mt-2 leading-relaxed line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-charcoal-900/5 text-xs text-charcoal-800/50">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {formatDate(post.publishDate)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection className="text-center py-12">
              <p className="text-charcoal-800/60">
                Próximamente se publicarán artículos en el blog. ¡Mantente
                atento!
              </p>
            </AnimatedSection>
          )}

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-purple-deep font-body font-semibold text-sm tracking-wide uppercase hover:gap-3 transition-all duration-300"
            >
              Ver Todos los Artículos <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Contact CTA ──────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.contact}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-900/75" />
        </div>
        <div className="container-editorial relative z-10 text-center">
          <AnimatedSection>
            <p className="editorial-label text-gold-muted">04 — Contacto</p>
            <h2 className="mt-6 text-cream-50">
              ¿Listo para impulsar
              <br />
              <span className="text-gold-muted italic">tu negocio?</span>
            </h2>
            <p className="text-cream-100/70 mt-6 max-w-2xl mx-auto leading-relaxed">
              Agenda una consulta gratuita de 30 minutos y descubre cómo puedo
              ayudarte a alcanzar tus objetivos de crecimiento digital.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-muted text-charcoal-900 font-body font-semibold text-sm tracking-wide uppercase hover:bg-gold-light transition-colors duration-300"
              >
                Agendar Consultoría <ArrowRight size={16} />
              </Link>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-cream-100/30 text-cream-100 font-body font-semibold text-sm tracking-wide uppercase hover:border-gold-muted hover:text-gold-muted transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
