export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Site constants
export const SITE_CONFIG = {
  name: "Juan Pablo Franco",
  title: "Juan Pablo Franco | Estratega de Expansión Digital",
  description:
    "Estratega de Expansión Digital con más de 15 años transformando negocios a través del comercio electrónico en Colombia y el mundo. Especialista en VTEX, eCommerce B2B y generación de leads.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://franco.com.co",
  locale: "es_CO",
  phone: "+573235812748",
  phoneDisplay: "+57 323 581 2748",
  linkedin: "https://www.linkedin.com/in/juanpablo321/",
  whatsapp: "https://wa.me/573235812748",
  hubspotMeetings: "https://meetings.hubspot.com/juanpablo321",
  location: "Bogotá D.C., Colombia",
} as const;

// Image URLs from generated assets
export const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663346072523/9HQZTzyQJn4tHiLd28oaEP/hero-bg-4FcJLPLRp4TnWFXPnFQiPX.webp",
  services:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663346072523/9HQZTzyQJn4tHiLd28oaEP/services-bg-Gr25tdgyPiUyL6jyb25VmM.webp",
  about:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663346072523/9HQZTzyQJn4tHiLd28oaEP/about-editorial-2sFqPWZCEGVMYnHnqWgCeZ.webp",
  blog: "https://d2xsxph8kpxj0f.cloudfront.net/310519663346072523/9HQZTzyQJn4tHiLd28oaEP/blog-section-FL55WHx3knMDRZQciZZbzt.webp",
  contact:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663346072523/9HQZTzyQJn4tHiLd28oaEP/contact-bg-M8cfBLdG5P3JyqcpdFuJRj.webp",
  portrait:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&crop=face",
} as const;
