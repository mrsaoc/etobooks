import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/textos/")({
  head: () => ({
    meta: [
      { title: "Textos — Ewerthon Tobace" },
      {
        name: "description",
        content:
          "Ensaios, notas e textos avulsos de Ewerthon Tobace sobre escrita, leitura e o ofício literário. Um espaço editorial de leitura sem distrações.",
      },
      { property: "og:title", content: "Textos — Ewerthon Tobace" },
      {
        property: "og:description",
        content:
          "Ensaios, notas e textos avulsos de Ewerthon Tobace sobre escrita, leitura e o ofício literário.",
      },
    ],
  }),
  component: TextosIndex,
});

function TextosIndex() {
  return (
    <div className="bg-white text-neutral-900">
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-14 md:px-10 md:pt-36 md:pb-20">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.34em] text-neutral-400 uppercase">
            Caderno · Ewerthon Tobace
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Textos
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-neutral-500">
            Ensaios curtos, notas de leitura e anotações de rua. Publicados sem
            calendário fixo, do jeito que foram escritos.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 md:px-10 md:pb-36">
        <div className="border-t border-neutral-200">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i, 4) * 90}>
              <Link
                to="/textos/$slug"
                params={{ slug: post.slug }}
                className="group block border-b border-neutral-200 py-10 md:py-12"
              >
                <p className="text-[0.62rem] tracking-[0.26em] text-neutral-400 uppercase">
                  {post.displayDate}
                </p>
                <h2 className="mt-4 max-w-2xl font-serif text-2xl leading-snug text-neutral-900 transition-opacity duration-500 group-hover:opacity-60 md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-neutral-500 md:text-base">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-block text-[0.62rem] tracking-[0.26em] text-neutral-400 uppercase transition-colors duration-300 group-hover:text-neutral-900">
                  Ler o texto
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
