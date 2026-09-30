import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { getPost } from "@/lib/posts";

export const Route = createFileRoute("/textos/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Texto não encontrado — ETO BOOKS" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — ETO BOOKS` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-40 text-center">
      <h1 className="font-serif text-3xl">Texto não encontrado</h1>
      <Link
        to="/textos"
        className="mt-8 inline-block border-b border-black/20 pb-1 text-[0.68rem] tracking-[0.24em] text-neutral-500 uppercase transition-colors hover:border-black hover:text-black"
      >
        Voltar aos textos
      </Link>
    </div>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();

  return (
    <article className="bg-white text-black">
      <div className="mx-auto max-w-2xl px-6 pt-20 pb-24 md:pt-32 md:pb-36">
        <Link
          to="/textos"
          className="text-[0.62rem] tracking-[0.26em] text-neutral-400 uppercase transition-colors duration-300 hover:text-black"
        >
          ← Textos
        </Link>

        <header className="mt-12 border-b border-black/10 pb-10">
          <p className="text-[0.62rem] tracking-[0.26em] text-neutral-400 uppercase">
            {post.category}
            {post.displayDate ? ` · ${post.displayDate}` : ""}
          </p>
          <h1 className="mt-6 font-serif text-3xl leading-[1.15] tracking-tight text-balance sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-neutral-500">Por Ewerthon Tobace</p>
          {post.subtitle && (
            <p className="mt-6 font-serif text-xl leading-relaxed text-neutral-600 italic">
              {post.subtitle}
            </p>
          )}
        </header>

        {post.image && (
          <figure className="mt-10">
            <img
              src={post.image.src}
              alt={post.image.alt}
              decoding="async"
              className="mx-auto h-auto max-h-[36rem] w-auto max-w-full object-contain"
            />
            {post.image.credit && (
              <figcaption className="mt-3 text-center text-xs text-neutral-500">
                {post.image.credit}
              </figcaption>
            )}
          </figure>
        )}

        <div className="mt-12 space-y-8 font-sans text-base leading-relaxed text-neutral-600 md:text-[1.06rem] md:leading-[1.95]">
          {post.paragraphs.map((paragraph: string, i: number) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-serif text-xl leading-relaxed text-black md:text-2xl md:leading-relaxed"
                  : undefined
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {post.sections?.map((section) => (
          <section
            key={section.title}
            className="mt-12 space-y-6 text-base leading-relaxed text-neutral-600 md:leading-[1.95]"
          >
            <h2 className="font-serif text-2xl text-black">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <footer className="mt-16 border-t border-black/10 pt-10">
          {post.credits && (
            <div className="mb-6 space-y-2 text-sm leading-relaxed text-neutral-600">
              {post.credits.map((credit) => (
                <p key={credit}>{credit}</p>
              ))}
            </div>
          )}
          {post.rights && (
            <p className="mb-8 text-xs leading-relaxed text-neutral-500">{post.rights}</p>
          )}
          <p className="text-[0.62rem] tracking-[0.26em] text-neutral-400 uppercase">ETO BOOKS</p>
        </footer>
      </div>
    </article>
  );
}
