import { createClient, type EntrySkeletonType, type Entry, type ContentfulClientApi } from "contentful";

// ─── Lazy Client Initialization ──────────────────────────────────
// Clients are created lazily to avoid crashing during build when
// environment variables are not yet available (e.g., first Vercel deploy).

let _client: ContentfulClientApi<undefined> | null = null;
let _previewClient: ContentfulClientApi<undefined> | null = null;

function getDeliveryClient(): ContentfulClientApi<undefined> | null {
  if (_client) return _client;

  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    console.warn(
      "Contentful credentials not found. Blog features will be unavailable.",
    );
    return null;
  }

  _client = createClient({ space: spaceId, accessToken });
  return _client;
}

function getPreviewClient(): ContentfulClientApi<undefined> | null {
  if (_previewClient) return _previewClient;

  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN;

  if (!spaceId || !previewToken) {
    console.warn(
      "Contentful preview credentials not found.",
    );
    return null;
  }

  _previewClient = createClient({
    space: spaceId,
    accessToken: previewToken,
    host: "preview.contentful.com",
  });
  return _previewClient;
}

function getClient(preview = false) {
  return preview ? getPreviewClient() : getDeliveryClient();
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
    const client = getClient(preview);
    if (!client) return [];

    const entries = await client.getEntries({
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
    const client = getClient(preview);
    if (!client) return null;

    const entries = await client.getEntries({
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
    const client = getClient();
    if (!client) return [];

    const entries = await client.getEntries({
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
