import type { PluggableList } from 'unified'
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    ogImage: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" } },
    published: { type: "boolean", default: true },
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
  },
}));

export const SupportArticle = defineDocumentType(() => ({
  name: "SupportArticle",
  filePathPattern: `support/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    keywords: { type: "list", of: { type: "string" } },
    faq: { type: "json", required: false },
    howto: { type: "json", required: false },
    published: { type: "boolean", default: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^support\//, ""),
    },
    url: {
      type: "string",
      resolve: (doc) =>
        `/support/${doc._raw.flattenedPath.replace(/^support\//, "")}`,
    },
  },
}));

const rehypePlugins: PluggableList = [
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
]

const remarkPlugins: PluggableList = [remarkGfm]

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [BlogPost, SupportArticle], // or SupportGuide if you renamed it
  mdx: {
    remarkPlugins,
    rehypePlugins,
  },
})
