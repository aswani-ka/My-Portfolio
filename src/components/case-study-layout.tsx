import { Container } from "./container";

export function CaseStudyLayout({
  title,
  tagline,
  children,
}: {
  title: string;
  tagline: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative overflow-hidden pb-24">

      {/* Gradient Hero */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br  from-emerald-950 via-black to-green-950" />

      <section className="py-20 sm:py-24">
        <Container>

          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            {title}
          </h1>

          <p className="mt-4 max-w-xl text-gray-300">
            {tagline}
          </p>

        </Container>
      </section>

      <section className="bg-white py-16 dark:bg-black">
        <Container>
          <article className="prose dark:prose-invert mt-10 max-w-none prose-headings:mt-10 prose-headings:mb-4 prose-p:leading-7 prose-li:my-1">

            {children}
          </article>
        </Container>
      </section>

    </main>
  );
}
