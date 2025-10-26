import Image from "next/image";
import { Container } from "@/components/layout/container";
import { QuickLinks } from "@/components/internal-links";

export const metadata = {
  title: "About Bookie - Built by a Reader for Readers",
  description: "Meet Kuba, the creator of Bookie. Learn the story behind building a simple, beautiful book tracker that helps thousands of readers stay motivated.",
  openGraph: {
    title: "About Bookie - Built by a Reader for Readers",
    description: "Meet the creator of Bookie and learn why this app was built for readers who want simplicity.",
    url: "https://getbookie.app/about",
    type: "website",
    images: [
      {
        url: "https://getbookie.app/kuba.png",
        alt: "Kuba - Creator of Bookie",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "About Bookie - Built by a Reader for Readers",
    description: "Meet the creator behind the simple, beautiful book tracker.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Container>
        <section className="mx-auto max-w-2xl pt-20 pb-10 text-center border-b-1 border-neutral-200">
          <Image
            src="/kuba.png"
            alt="Kuba"
            width={160}
            height={160}
            className="mx-auto rounded-full border border-neutral-200 shadow-sm"
            priority
          />

          <h1 className="mt-6 text-3xl font-semibold font-serif tracking-tight text-neutral-900">
            About Bookie
          </h1>
          <p className="mt-8 text-base text-neutral-700 leading-relaxed text-left">
            Hi, I’m Kuba 👋
          </p>

          <p className="mt-8 text-base text-neutral-700 leading-relaxed text-left">
            The idea for Bookie grew on me over the course of a year. I wanted
            reading to feel encouraging, not like a chore. Other apps felt
            cluttered and uninspiring—I wanted a place where I could set myself
            little challenges, track my books in a way that felt motivating, and
            enjoy it all inside a clean, elegant design.
          </p>

          <p className="mt-8 text-base text-neutral-700 leading-relaxed text-left">
            Work on Bookie started in October 2022, and by December the first
            version was ready. It was actually my second app, and the one where
            I put everything I had learned so far as a developer. When it
            launched, readers noticed the polish and care that went into it.
          </p>

          <p className="mt-8 text-base text-neutral-700 leading-relaxed text-left">
            Since then, Bookie has kept evolving—adding fantastic new features,
            refining the experience, and even introducing Bookie+ for those
            power users who want more. At its heart though, Bookie is still
            about the same thing: helping people turn reading into a daily habit
            they love. One page at a time.
          </p>

          <p className="mt-8text-base text-neutral-700 leading-relaxed text-left">
            Thanks for being part of the journey ✨
          </p>
        </section>
        <section className="mx-auto max-w-2xl py-20 text-left">
          <p className="mt-4 text-base text-neutral-700 leading-relaxed">
            Want to connect? Catch me on LinkedIn or Threads at{" "}
            <span className="font-medium">@kubamilcarz</span>, or shoot me an
            email anytime at{" "}
            <a
              href="mailto:support@kubamilcarz.com"
              className="text-[color:var(--bookie-orange)] hover:underline"
            >
              support@kubamilcarz.com
            </a>
            .
          </p>

          {/* Internal Linking */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">
              Explore Bookie
            </h2>
            <QuickLinks
              links={[
                { label: "See Features", href: "/features" },
                { label: "Product Roadmap", href: "/roadmap" },
                { label: "Read the Blog", href: "/blog" },
                { label: "Get Support", href: "/support" },
                { label: "Download App", href: "https://apps.apple.com/us/app/book-tracker-bookie/id6443825869" }
              ]}
            />
          </div>
        </section>
      </Container>
    </main>
  );
}
