"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import type { ComponentType } from "react";
import { supportMdxComponents } from "./mdx-components";

type MDXContentProps = {
  code: string;
};

export function SupportArticleBody({ code }: MDXContentProps) {
  const Component = useMDXComponent(code) as ComponentType<
    Record<string, unknown>
  >;

  return (
    <div
      className="
        support-article
        [&_p]:mt-6 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-neutral-800
        [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-neutral-900
        [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-neutral-900
        [&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-neutral-900
        [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
        [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6
        [&_code]:rounded [&_code]:bg-neutral-100 [&_code]:px-1 [&_code]:py-0.5
        [&_a]:text-[color:var(--bookie-orange)] [&_a]:underline [&_a]:decoration-transparent
        hover:[&_a]:decoration-[color:var(--bookie-orange)]
      "
    >
      <Component components={supportMdxComponents} />
    </div>
  );
}
