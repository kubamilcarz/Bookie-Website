import type { PluggableList } from "unified";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: "blog/**/*.md",
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    cover: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: false },
    draft: { type: "boolean", required: false, default: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^blog\//, ""),
    },
    url: {
      type: "string",
      resolve: (doc) =>
        `/blog/${doc._raw.flattenedPath.replace(/^blog\//, "")}`,
    },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/g).length,
    },
    readingTime: {
      type: "number",
      resolve: (doc) =>
        Math.max(1, Math.ceil(doc.body.raw.split(/\s+/g).length / 200)),
    },
  },
}));

export const SupportArticle = defineDocumentType(() => ({
  name: "SupportArticle",
  filePathPattern: "support/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the support article",
      required: true,
    },
    description: {
      type: "string",
      description: "Brief description of the article",
      required: true,
    },
    category: {
      type: "enum",
      options: [
        "getting-started",
        "features",
        "troubleshooting",
        "billing",
        "bookie-plus",
        "account",
        "community",
      ],
      description: "Primary help-center category",
      required: true,
    },
    platform: {
      type: "enum",
      options: ["ios", "ipad", "mac", "web", "multi"],
      description: "Platform focus for filtering",
      required: true,
      default: "multi",
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "Feature or topic tags",
      required: false,
    },
    order: {
      type: "number",
      description: "Order in the list (lower numbers appear first)",
      required: false,
      default: 999,
    },
    isFeatured: {
      type: "boolean",
      description: "Whether the article should appear in featured lists",
      required: false,
      default: false,
    },
    difficulty: {
      type: "enum",
      options: ["beginner", "intermediate", "advanced"],
      description: "Difficulty level for the tutorial",
      required: false,
    },
    videoId: {
      type: "string",
      description: "Optional YouTube video ID to highlight",
      required: false,
    },
    lastUpdated: {
      type: "date",
      description: "Last update date",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("support/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) =>
        `/support/${doc._raw.flattenedPath.replace("support/", "")}`,
    },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/g).length,
    },
    readingTime: {
      type: "number",
      resolve: (doc) =>
        Math.max(1, Math.ceil(doc.body.raw.split(/\s+/g).length / 200)),
    },
  },
}));

const rehypePlugins: PluggableList = [
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: "wrap" }],
];

const remarkPlugins: PluggableList = [remarkGfm];

export default makeSource({
  contentDirPath: "content",
  documentTypes: [BlogPost, SupportArticle], // or SupportGuide if you renamed it
  mdx: {
    remarkPlugins,
    rehypePlugins,
  },
});
