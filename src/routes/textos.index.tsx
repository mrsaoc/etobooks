import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/textos/")({
  head: () => ({
    meta: [
      { title: "Textos — EtoBooks" },
      {
        name: "description",
        content:
          "Ensaios, notas e manifestos de EtoBooks sobre literatura, edição e o ofício de fazer livros.",
      },
      { property: "og:title", content: "Textos — EtoBooks" },
      {
        property: "og:description",
        content:
          "Ensaios, notas e manifestos sobre literatura, edição e o ofício de fazer livros.",
      },
    ],
  }),
  component: TextosIndex,
});

function TextosIndex() {
  return (
    <div className="bg-white text-black">
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-14 md:px-10 md:pt-36 md:pb-20">
        <Reveal>
          <p className="text-[0.65rem] tracking-[0.34em] text-neutral-400 uppercase">
            Caderno
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Textos
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-neutral-500">
            Notas de leitura, ensaios curtos e manifestos sobre o ofício de fazer livros.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 md:px-10 md:pb-36">
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
                  <h2 className="max-w-2xl font-serif text-2xl leading-snug text-black transition-opacity duration-500 group-hover:opacity-60 md:text-3xl">
                    {post.title}
                  </h2>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
