# franco.com.co V2

Sitio web personal de **Juan Pablo Franco** — Estratega de Expansión Digital.

Construido con **Next.js 15** (App Router), **Tailwind CSS 3**, **TypeScript** y **Contentful** como CMS para el blog.

## Stack Tecnológico

| Tecnología | Uso |
|---|---|
| Next.js 15 | Framework React con SSR/SSG |
| TypeScript | Tipado estático |
| Tailwind CSS 3 | Estilos utility-first |
| Framer Motion | Animaciones |
| Contentful | CMS headless para el blog |
| Vercel | Hosting y despliegue |

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout global con metadatos SEO
│   ├── page.tsx            # Página de inicio
│   ├── sobre-mi/page.tsx   # Sobre Mí
│   ├── servicios/page.tsx  # Servicios
│   ├── blog/
│   │   ├── page.tsx        # Listado de artículos
│   │   └── [slug]/page.tsx # Artículo individual (SSG)
│   ├── contacto/page.tsx   # Contacto
│   ├── sitemap.ts          # Sitemap dinámico
│   ├── robots.ts           # Robots.txt
│   ├── not-found.tsx       # Página 404
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Navegación
│   ├── Footer.tsx          # Pie de página
│   ├── AnimatedSection.tsx # Animaciones con Framer Motion
│   └── RichTextRenderer.tsx# Renderizador de rich text de Contentful
├── lib/
│   ├── contentful.ts       # Cliente de Contentful
│   └── utils.ts            # Utilidades y constantes
public/
└── llms.txt                # Optimización para LLMs
```

## Configuración Local

1. Clonar el repositorio:
```bash
git clone https://github.com/juanpablo321/franco.com.co_V2.git
cd franco.com.co_V2
```

2. Instalar dependencias:
```bash
pnpm install
```

3. Crear archivo de variables de entorno:
```bash
cp .env.local.example .env.local
```

4. Configurar las variables en `.env.local`:
```
CONTENTFUL_SPACE_ID=tu_space_id
CONTENTFUL_ACCESS_TOKEN=tu_delivery_token
CONTENTFUL_PREVIEW_TOKEN=tu_preview_token
NEXT_PUBLIC_SITE_URL=https://franco.com.co
```

5. Ejecutar en desarrollo:
```bash
pnpm dev
```

## Despliegue en Vercel

1. Importar el repositorio en [Vercel](https://vercel.com).
2. Configurar las **Environment Variables** en el dashboard de Vercel:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
   - `CONTENTFUL_PREVIEW_TOKEN`
   - `NEXT_PUBLIC_SITE_URL`
3. Vercel detectará automáticamente que es un proyecto Next.js y lo desplegará.

## Contentful — Modelo de Contenido

El blog espera un content type llamado `blogPost` con los siguientes campos:

| Campo | Tipo | Requerido |
|---|---|---|
| title | Short text | Sí |
| slug | Short text | Sí |
| excerpt | Long text | No |
| body | Rich text | Sí |
| featuredImage | Media | No |
| author | Short text | No |
| publishDate | Date | No |
| readTime | Short text | No |
| category | Short text | No |
| metaTitle | Short text | No |
| metaDescription | Long text | No |

## SEO y Optimización para LLMs

El sitio incluye las siguientes optimizaciones:

- **Metadatos dinámicos** por página con Open Graph y Twitter Cards.
- **Schema.org JSON-LD** para Person, Service y BlogPosting.
- **Sitemap dinámico** que incluye todas las páginas estáticas y artículos del blog.
- **robots.txt** configurado para permitir indexación completa.
- **llms.txt** en `/public/llms.txt` para optimización de visibilidad en LLMs.
- **ISR (Incremental Static Regeneration)** con revalidación cada 60 segundos para el blog.
- **Canonical URLs** en todas las páginas.

## Licencia

Todos los derechos reservados. Juan Pablo Franco.
