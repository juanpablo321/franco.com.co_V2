import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { Document } from "@contentful/rich-text-types";
import Image from "next/image";

interface RichTextRendererProps {
  content: Document | null;
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
    [MARKS.CODE]: (text: React.ReactNode) => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p>{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3>{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
      <h4>{children}</h4>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul>{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol>{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li>{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote>{children}</blockquote>
    ),
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, title } = node.data?.target?.fields || {};
      if (!file?.url) return null;

      return (
        <figure className="my-8">
          <Image
            src={`https:${file.url}`}
            alt={title || ""}
            width={file.details?.image?.width || 800}
            height={file.details?.image?.height || 450}
            className="w-full h-auto border border-gray-100"
          />
          {title && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {title}
            </figcaption>
          )}
        </figure>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default function RichTextRenderer({ content }: RichTextRendererProps) {
  if (!content) {
    return <p>Contenido no disponible.</p>;
  }

  // If content is a string (plain text), render directly
  if (typeof content === "string") {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return <>{documentToReactComponents(content as Document, options)}</>;
}
