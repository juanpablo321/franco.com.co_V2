import { createClient, type EntrySkeletonType, type Entry } from "contentful";

// Server-side only — these env vars are NOT prefixed with NEXT_PUBLIC_
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
  host: "preview.contentful.com",
});

export function getClient(preview = false) {
  return preview ? previewClient : client;
}

// ─── Blog Post Types ───────────────────────────────────────────────

export interface BlogPostFields {
  title: string;
  slug: string;
  excerpt?: string;
  description?: string;
  body: any; // Rich Text document
  featuredImage?: {
    fields: {
      file: {
        url: string;
        details: {
          image?: { width: number; height: number };
        };
      };
      title: string;
    };
  };
  author?: string;
  publishDate?: string;
  readTime?: string;
  category?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: any;
  featuredImage?: string;
  featuredImageAlt?: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  metaTitle?: string;
  metaDescription?: string;
}

function parseBlogPost(entry: Entry<EntrySkeletonType>): BlogPost {
  const fields = entry.fields as unknown as BlogPostFields;

  let featuredImage: string | undefined;
  let featuredImageAlt: string | undefined;

  if (fields.featuredImage && typeof fields.featuredImage === "object") {
    const imgFields = (fields.featuredImage as any)?.fields;
    if (imgFields?.file?.url) {
      featuredImage = `https:${imgFields.file.url}`;
      featuredImageAlt = imgFields.title || fields.title;
    }
  }

  return {
    id: entry.sys.id,
    title: fields.title || "Sin título",
    slug: fields.slug || entry.sys.id,
    excerpt: fields.excerpt || fields.description || "",
    body: fields.body || null,
    featuredImage,
    featuredImageAlt,
    author: fields.author || "Juan Pablo Franco",
    publishDate: fields.publishDate || entry.sys.createdAt,
    readTime: fields.readTime || "5 min",
    category: fields.category || "Estrategia Digital",
    metaTitle: fields.metaTitle,
    metaDescription: fields.metaDescription,
  };
}

// ─── Fetch Functions ───────────────────────────────────────────────

export async function getAllBlogPosts(preview = false): Promise<BlogPost[]> {
  try {
    const entries = await getClient(preview).getEntries({
      content_type: "blogPost",
      order: ["-fields.publishDate"],
      limit: 100,
    });

    return entries.items.map(parseBlogPost);
  } catch (error) {
    console.error("Error fetching blog posts from Contentful:", error);
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string,
  preview = false,
): Promise<BlogPost | null> {
  try {
    const entries = await getClient(preview).getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    });

    if (entries.items.length === 0) return null;

    return parseBlogPost(entries.items[0]);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const entries = await getClient().getEntries({
      content_type: "blogPost",
      select: ["fields.slug"],
      limit: 1000,
    });

    return entries.items.map(
      (entry) => (entry.fields as unknown as { slug: string }).slug,
    );
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }
}
