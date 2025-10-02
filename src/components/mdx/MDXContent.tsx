"use client";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image, { type ImageProps } from "next/image";
import type { PropsWithChildren } from "react";

function Prose({ children }: PropsWithChildren) {
  return <div className="prose prose-gray max-w-none">{children}</div>;
}

// MDX will pass <img ...> props (string src, alt, etc.)
// We adapt them to next/image and set fixed dimensions.
function MdxImg(props: unknown) {
  const p = props as Omit<ImageProps, "src"> & { src: string };
  return <Image {...p} alt={p.alt ?? ""} width={1200} height={630} />;
}

type MDXContentProps = {
  code: string;
  components?: MDXComponents;
};

export function MDXContent({ code, components }: MDXContentProps) {
  const Component = useMDXComponent(code);
  const merged: MDXComponents = { img: MdxImg, ...(components ?? {}) };
  return (
    <Prose>
      <Component components={merged} />
    </Prose>
  );
}