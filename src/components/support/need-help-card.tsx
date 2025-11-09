import clsx from "clsx";
import Link from "next/link";

type NeedHelpCardProps = {
  variant?: "light" | "dark";
};

export function NeedHelpCard({ variant = "light" }: NeedHelpCardProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={clsx(
        "rounded-[26px] border px-6 py-7 shadow-sm",
        isDark
          ? "border-white/15 bg-white/5 text-white"
          : "border-black/5 bg-[color:var(--bookie-bg)]/60 text-neutral-900"
      )}
    >
      <p
        className={clsx(
          "text-xs font-semibold uppercase tracking-wide",
          isDark ? "text-white/70" : "text-neutral-500"
        )}
      >
        Need more help?
      </p>
      <h3
        className={clsx(
          "mt-2 text-xl font-serif font-semibold",
          isDark ? "text-white" : "text-neutral-900"
        )}
      >
        Talk to the Bookie team
      </h3>
      <p
        className={clsx(
          "mt-2 text-sm",
          isDark ? "text-white/80" : "text-neutral-700"
        )}
      >
        Email{" "}
        <a
          href="mailto:support@kubamilcarz.com"
          className={clsx(
            "font-semibold underline decoration-transparent",
            isDark
              ? "text-white hover:decoration-white/60"
              : "text-[color:var(--bookie-orange)] hover:decoration-[color:var(--bookie-orange)]"
          )}
        >
          support@kubamilcarz.com
        </a>{" "}
        or catch up on the{" "}
        <Link
          href="/blog"
          className={clsx(
            "font-semibold underline decoration-transparent",
            isDark
              ? "text-white hover:decoration-white/60"
              : "text-[color:var(--bookie-orange)] hover:decoration-[color:var(--bookie-orange)]"
          )}
        >
          blog
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="mailto:support@kubamilcarz.com"
          className={clsx(
            "rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition",
            isDark
              ? "bg-white text-neutral-900 hover:bg-white/90"
              : "bg-neutral-900 text-white hover:bg-neutral-800"
          )}
        >
          Email support
        </a>
        <Link
          href="/features"
          className={clsx(
            "rounded-full border px-4 py-2 text-sm font-semibold transition",
            isDark
              ? "border-white/40 text-white hover:border-white/60"
              : "border-neutral-200 text-neutral-800 hover:border-neutral-400"
          )}
        >
          Explore Bookie
        </Link>
      </div>
    </div>
  );
}
