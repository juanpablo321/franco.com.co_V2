import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import RichTextRenderer from "@/components/RichTextRenderer";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/contentful";
import { SITE_CONFIG, formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

// ISR: revalidate every 60 seconds
export const revalidate = 60;

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      ...(post.featuredImage && {
        images: [{ url: post.featuredImage }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // JSON-LD for the article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    author: {
      "@type": "Person",
      name: post.author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    ...(post.featuredImage && { image: post.featuredImage }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="pt-32 pb-24">
        <div className="container-editorial max-w-3xl mx-auto">
          {/* Back */}
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-charcoal-800/50 hover:text-purple-deep font-body text-sm tracking-wide uppercase transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Volver al Blog
            </Link>
          </AnimatedSection>

          {/* Header */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 mb-12">
              <span className="editorial-label text-purple-deep">
                {post.category}
              </span>
              <h1>{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal-800/50">
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {formatDate(post.publishDate)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
              <div className="gold-line" />
            </div>
          </AnimatedSection>

          {/* Featured Image */}
          {post.featuredImage && (
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-video mb-12 border border-charcoal-900/5 overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt || post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            </AnimatedSection>
          )}

          {/* Body */}
          <AnimatedSection delay={0.3}>
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-charcoal-800/70 prose-p:leading-relaxed prose-a:text-purple-deep prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal-900 prose-blockquote:border-l-2 prose-blockquote:border-purple-deep prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-charcoal-800/60 prose-ul:text-charcoal-800/70 prose-ol:text-charcoal-800/70 prose-li:mb-2 prose-code:bg-cream-200 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm">
              <RichTextRenderer content={post.body} />
            </div>
          </AnimatedSection>

          {/* Bottom CTA */}
          <AnimatedSection delay={0.4}>
            <div className="mt-16 pt-8 border-t border-charcoal-900/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-charcoal-800/50 hover:text-purple-deep font-body text-sm tracking-wide uppercase transition-colors"
              >
                <ArrowLeft size={14} /> Más Artículos
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-purple-deep text-white font-body font-semibold text-sm tracking-wide uppercase hover:bg-purple-accent transition-colors"
              >
                Agendar Consultoría
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </article>
    </>
  );
}
