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
          "Minicontos e leituras de Ewerthon Tobace: histórias, memórias e encontros com a literatura.",
      },
      { property: "og:title", content: "Textos — ETO BOOKS" },
      {
        property: "og:description",
        content:
          "Minicontos e leituras de Ewerthon Tobace: histórias, memórias e encontros com a literatura.",
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
          Minicontos e leituras de Ewerthon Tobace. Histórias, memórias e encontros com a
          literatura.
        </p>
        <div className="border-t border-black/10">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i, 4) * 90}>
              <Link
                to="/textos/$slug"
                params={{ slug: post.slug }}
                className="group block border-b border-black/10 py-10 md:py-12"
              >
                <div className="grid items-center gap-6 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
                  {post.image ? (
                    <img
                      src={post.image.src}
                      alt={post.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-40 w-40 bg-neutral-50 object-contain sm:h-36 sm:w-36"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-40 w-40 items-center justify-center border border-black/10 bg-neutral-50 font-serif text-6xl text-neutral-300 sm:h-36 sm:w-36"
                    >
                      “
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-[0.62rem] tracking-[0.26em] text-neutral-400 uppercase">
                      {post.category}
                      {post.displayDate ? ` · ${post.displayDate}` : ""}
                    </p>
                    <h3 className="mt-3 max-w-2xl font-serif text-2xl leading-snug text-black transition-opacity duration-500 group-hover:opacity-60 md:text-3xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-block text-xs text-neutral-500">
                      Ler texto <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
