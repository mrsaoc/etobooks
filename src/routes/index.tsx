import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EtoBooks — Obras de Ewerthon Tobace" },
      {
        name: "description",
        content:
          "As obras de Ewerthon Tobace: literatura contemporânea em edições de design minimalista. Conheça os livros, sinopses e o projeto editorial EtoBooks.",
      },
      { property: "og:title", content: "EtoBooks — Obras de Ewerthon Tobace" },
      {
        property: "og:description",
        content:
          "Literatura contemporânea em edições de design minimalista. Conheça as obras de Ewerthon Tobace.",
      },
    ],
  }),
  component: Index,
});

const books = [
  {
    cover: book1,
    title: "A Companhia Silenciosa",
    year: "2025",
    kind: "Ensaios",
    note: "Sobre a vida miúda e a atenção como forma de afeto.",
  },
  {
    cover: book2,
    title: "A Geometria das Coisas",
    year: "2023",
    kind: "Ensaios",
    note: "Ordem, beleza e simplicidade em doze exercícios de olhar.",
  },
  {
    cover: book3,
    title: "Os Capítulos Quietos",
    year: "2021",
    kind: "Contos",
    note: "Histórias que ficam depois que o livro é fechado.",
  },
];

function Index() {
  return (
    <div className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:px-10 md:pt-36 md:pb-32">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.34em] text-neutral-400 uppercase">
            Ewerthon Tobace · Projeto editorial
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 max-w-3xl font-serif text-[2.6rem] leading-[1.08] tracking-tight text-balance sm:text-6xl md:text-7xl">
            Livros feitos para o silêncio de quem lê.
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-neutral-500 sm:text-lg">
            Uma obra construída devagar, em edições despojadas de ruído — onde a
            tipografia, o espaço em branco e a frase exata importam tanto quanto
            a história.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-12 flex flex-col items-stretch gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <a
              href="#obras"
              className="inline-flex min-h-13 items-center justify-center border border-neutral-900 bg-neutral-900 px-8 py-4 text-[0.7rem] tracking-[0.22em] text-white uppercase transition-colors duration-500 ease-out hover:bg-white hover:text-neutral-900 active:opacity-80"
            >
              Ver as obras
            </a>
            <a
              href="#sinopse"
              className="inline-flex min-h-11 items-center justify-center border-b border-neutral-300 pb-1 text-[0.7rem] tracking-[0.22em] text-neutral-500 uppercase transition-colors duration-300 hover:border-neutral-900 hover:text-neutral-900 active:opacity-70 sm:justify-start"
            >
              Sobre o autor
            </a>
          </div>

        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="h-px bg-neutral-200" />
      </div>

      {/* Obras */}
      <section
        id="obras"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:px-10 md:py-32"
      >
        <Reveal>
          <div className="flex flex-col gap-4 border-b border-neutral-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-3xl md:text-4xl">As obras</h2>
            <p className="text-[0.68rem] tracking-[0.28em] text-neutral-400 uppercase">
              Três títulos · 2021 — 2025
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-14 sm:mt-16 sm:gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book, i) => (
            <Reveal key={book.title} delay={i * 120}>
              <article className="group">
                <div className="overflow-hidden bg-neutral-50">
                  <img
                    src={book.cover}
                    alt={`Capa do livro ${book.title}`}
                    width={800}
                    height={1200}
                    loading="lazy"
                    className="h-auto w-full object-cover grayscale transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-neutral-200 pb-3">
                  <h3 className="min-w-0 font-serif text-xl leading-snug">
                    {book.title}
                  </h3>
                  <span className="shrink-0 text-[0.62rem] tracking-[0.22em] text-neutral-400 uppercase">
                    {book.year}
                  </span>
                </div>
                <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-500">
                  {book.note}
                </p>
                <p className="mt-3 text-[0.62rem] tracking-[0.24em] text-neutral-400 uppercase">
                  {book.kind}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sinopse */}
      <section
        id="sinopse"
        className="scroll-mt-24 border-t border-neutral-200 bg-white"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:gap-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:px-10 md:py-32">
          <Reveal>
            <div>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                Sinopse
                <span className="mt-3 block font-sans text-[0.68rem] tracking-[0.28em] text-neutral-400 uppercase">
                  A Companhia Silenciosa
                </span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="max-w-2xl space-y-8 font-sans text-base leading-relaxed text-neutral-600 md:text-[1.05rem] md:leading-[1.9]">
              <p className="font-serif text-xl leading-relaxed text-neutral-900 md:text-2xl">
                Há um gato dormindo sobre uma pilha de livros. É daí que este
                livro parte — de uma cena sem importância nenhuma.
              </p>
              <p>
                Em vinte e quatro ensaios curtos, Ewerthon Tobace observa o que
                normalmente passa: a luz que atravessa a cortina às cinco da
                tarde, a paciência de quem espera, a estranha dignidade dos
                objetos usados por muito tempo. Não há grandes acontecimentos.
                Há atenção.
              </p>
              <p>
                A escrita recusa o excesso. Cada texto foi reduzido até restar
                apenas o que não podia ser cortado, e essa economia é também uma
                ética: dizer menos para que o leitor tenha espaço de pensar.
              </p>
              <p>
                O resultado é um livro de cabeceira no sentido literal — feito
                para ser lido em pedaços, à noite, devagar, e reencontrado anos
                depois com as margens já marcadas.
              </p>
              <div className="h-px bg-neutral-200" />
              <p className="text-[0.68rem] tracking-[0.24em] text-neutral-400 uppercase">
                232 páginas · Edição EtoBooks · Capa em papel fosco
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
