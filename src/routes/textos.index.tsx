import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { EditorialCarousel } from "@/components/EditorialCarousel";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/textos/")({
  head: () => ({
    meta: [
      { title: "Textos — ETO BOOKS" },
      {
        name: "description",
        content:
          "Ensaios, notas e manifestos de ETO BOOKS sobre literatura, edição e o ofício de fazer livros.",
      },
      { property: "og:title", content: "Textos — ETO BOOKS" },
      {
        property: "og:description",
        content: "Ensaios, notas e manifestos sobre literatura, edição e o ofício de fazer livros.",
      },
    ],
  }),
  component: TextosIndex,
});

function TextosIndex() {
  return (
    <div className="bg-white text-black">
      <header className="mx-auto max-w-[1440px] px-6 pt-10 md:px-10 md:pt-14">
        <Reveal>
          <p className="text-[0.65rem] tracking-[0.34em] text-neutral-400 uppercase">ETO BOOKS</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Textos
          </h1>
        </Reveal>
      </header>

      <EditorialCarousel />

      <section className="mx-auto max-w-4xl px-6 pb-24 md:px-10 md:pb-36">
        <h2 className="font-serif text-3xl">Caderno</h2>
        <p className="mt-4 mb-8 max-w-xl text-base leading-relaxed text-neutral-500">
          Notas de leitura, ensaios curtos e manifestos sobre o ofício de fazer livros.
        </p>
        <div className="border-t border-black/10">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i, 4) * 90}>
              <Link
                to="/textos/$slug"
                params={{ slug: post.slug }}
                className="group block border-b border-black/10 py-10 md:py-12"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-[0.62rem] tracking-[0.26em] text-neutral-400 uppercase">
                    {post.displayDate}
                  </p>
                  <h3 className="max-w-2xl font-serif text-2xl leading-snug text-black transition-opacity duration-500 group-hover:opacity-60 md:text-3xl">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
