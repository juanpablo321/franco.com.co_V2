import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { IMAGES, SITE_CONFIG, formatDate } from "@/lib/utils";
import { getAllBlogPosts } from "@/lib/contentful";
import { Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos, guías y análisis sobre eCommerce, marketing B2B, VTEX y transformación digital por Juan Pablo Franco.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
  openGraph: {
    title: "Blog | Juan Pablo Franco",
    description:
      "Insights de comercio digital: artículos sobre eCommerce, marketing B2B y transformación digital.",
    url: `${SITE_CONFIG.url}/blog`,
  },
};

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.blog} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-cream-50/85" />
        </div>
        <div className="container-editorial relative z-10">
          <AnimatedSection className="max-w-3xl">
            <p className="section-number">03</p>
            <p className="editorial-label mt-2">Blog</p>
            <div className="gold-line mt-4" />
            <h1 className="mt-6">
              Insights de
              <br />
              <span className="text-purple-deep italic">Comercio Digital</span>
            </h1>
            <p className="text-xl text-charcoal-800/70 mt-6 leading-relaxed max-w-2xl">
              Artículos, guías y análisis sobre eCommerce, marketing B2B y
              transformación digital.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container-editorial">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 0.06}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full"
                  >
                    <article className="bg-cream-50 border border-charcoal-900/5 hover:border-purple-deep/20 hover:shadow-lg transition-all duration-400 h-full flex flex-col">
                      {post.featuredImage ? (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-600"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                        <h2 className="text-lg font-display font-semibold mt-2 group-hover:text-purple-deep transition-colors line-clamp-2">
                          {post.title}
                        </h2>
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
            <AnimatedSection className="text-center py-20">
              <p className="font-display text-6xl font-bold text-purple-deep/10 mb-6">
                Blog
              </p>
              <h2>Próximamente</h2>
              <p className="text-charcoal-800/60 mt-4 max-w-md mx-auto leading-relaxed">
                Estamos preparando contenido de valor sobre eCommerce, marketing
                B2B y transformación digital. ¡Vuelve pronto!
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
