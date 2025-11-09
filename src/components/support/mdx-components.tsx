import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import clsx from "clsx";

type CalloutVariant = "info" | "success" | "warning" | "tip";

const CALLOUT_STYLES: Record<
  CalloutVariant,
  { border: string; background: string; badge: string }
> = {
  info: {
    border: "border-blue-200",
    background: "bg-blue-50",
    badge: "text-blue-700",
  },
  success: {
    border: "border-emerald-200",
    background: "bg-emerald-50",
    badge: "text-emerald-700",
  },
  warning: {
    border: "border-amber-200",
    background: "bg-amber-50",
    badge: "text-amber-800",
  },
  tip: {
    border: "border-purple-200",
    background: "bg-purple-50",
    badge: "text-purple-700",
  },
};

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutVariant;
  title?: string;
  children: ReactNode;
}) {
  const style = CALLOUT_STYLES[type];
  return (
    <div
      className={clsx(
        "mt-8 rounded-2xl border px-5 py-4 text-sm leading-relaxed",
        style.border,
        style.background
      )}
    >
      {title ? (
        <p className={clsx("mb-2 font-semibold uppercase tracking-wide text-xs", style.badge)}>
          {title}
        </p>
      ) : null}
      <div className="text-neutral-800">{children}</div>
    </div>
  );
}

export function QuickTip({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 rounded-xl border border-black/5 bg-white/60 px-4 py-3 text-sm text-neutral-800 shadow-sm">
      <span className="font-semibold text-[color:var(--bookie-orange)]">Quick tip:</span>{" "}
      {children}
    </div>
  );
}

export function StepList({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-6 space-y-3 rounded-2xl border border-black/5 bg-white/80 px-5 py-4 text-neutral-800 shadow-sm [&>li]:flex [&>li]:gap-3 [&>li]:text-base">
      {children}
    </ol>
  );
}

export function InlineImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="mt-8">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/5 bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 640px, (min-width: 768px) 70vw, 100vw"
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center text-sm text-neutral-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function VideoEmbed({
  videoId,
  title = "Video walkthrough",
}: {
  videoId: string;
  title?: string;
}) {
  const src = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-black/5 bg-black/90">
      <div className="relative aspect-video w-full">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}

export function TwoColumn({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 grid gap-6 rounded-3xl bg-[color:var(--bookie-bg)]/50 p-6 md:grid-cols-2">
      {children}
    </div>
  );
}

export function DownloadCTA({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="mt-10 rounded-3xl border border-black/5 bg-gradient-to-r from-[color:var(--bookie-bg)] to-white px-6 py-6 shadow-sm md:flex md:items-center md:justify-between">
      <div>
        <p className="text-lg font-semibold text-neutral-900">{title}</p>
        <p className="mt-1 text-sm text-neutral-700">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
        <Link
          href={primaryHref}
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          {primaryLabel}
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link
            href={secondaryHref}
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 hover:border-neutral-400"
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export const supportMdxComponents = {
  Callout,
  QuickTip,
  StepList,
  InlineImage,
  VideoEmbed,
  TwoColumn,
  DownloadCTA,
};
