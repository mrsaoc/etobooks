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
          { title: "Texto não encontrado — EtoBooks" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — EtoBooks` },
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
            {post.displayDate}
          </p>
          <h1 className="mt-6 font-serif text-3xl leading-[1.15] tracking-tight text-balance sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
        </header>

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

        <footer className="mt-16 border-t border-black/10 pt-10">
          <p className="text-[0.62rem] tracking-[0.26em] text-neutral-400 uppercase">
            EtoBooks
          </p>
        </footer>
      </div>
    </article>
  );
}
