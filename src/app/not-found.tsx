import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <Image
          src="/404.svg"
          alt="Page not found"
          width={400}
          height={400}
          className="mx-auto"
          priority
        />

        <h1 className="mt-6 text-3xl font-semibold text-neutral-900">
          Oops! Page not found
        </h1>
        <p className="mt-3 text-neutral-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-full bg-[var(--bookie-orange)] px-5 py-2.5 text-white hover:opacity-90"
          >
            Back to Home
          </Link>
          <Link
            href="/support"
            className="rounded-full bg-[var(--bookie-orange)]/20 px-5 py-2.5 text-[var(--bookie-orange)] hover:bg-[var(--bookie-orange)]/30"
          >
            Visit Support
          </Link>
        </div>
      </div>
    </main>
  );
}
