import type { PropsWithChildren } from "react";
import clsx from "clsx";

export function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>;
}

export function Section({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={clsx("py-14 sm:py-20", className)}>
      {children}
    </section>
  );
}