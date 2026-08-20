import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CASA ETO — Literatura & Estúdio Criativo" },
      {
        name: "description",
        content:
          "Casa Eto é um estúdio criativo e editora de vanguarda. Transformamos ideias, histórias e manuscritos em obras literárias de alto valor cultural.",
      },
      { property: "og:title", content: "CASA ETO — Literatura & Estúdio Criativo" },
      {
        property: "og:description",
        content:
          "Estúdio criativo e editora de vanguarda. Ideias, histórias e manuscritos transformados em obras literárias.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Você tem uma ideia",
    text: "Ainda não existe livro. A gente ajuda a transformar a ideia em uma obra.",
  },
  {
    title: "Você tem uma história",
    text: "Existe uma experiência, trajetória, conhecimento ou memória. A gente entrevista, estrutura e escreve com você.",
  },
  {
    title: "Você já tem um manuscrito",
    text: "O livro existe. A gente transforma o original em uma publicação profissional.",
  },
];

function Index() {
  return (
    <div className="bg-white text-black">
      {/* Hero */}
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center px-6 pt-24 pb-20 md:px-10 md:pt-32 md:pb-32">
        <Reveal>
          <p className="text-[0.65rem] tracking-[0.34em] text-neutral-400 uppercase">
            Literatura & Estúdio Criativo
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 font-serif text-[clamp(3.5rem,12.5vw,9.5rem)] leading-[0.9] tracking-tight">
            Casa Eto
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-10 max-w-2xl font-sans text-base leading-relaxed text-neutral-500 sm:text-lg md:text-xl">
            Um estúdio criativo e editora de vanguarda onde o livro é tratado como objeto cultural de alto valor. Sem ruído, sem excesso — só a palavra, o espaço e a atenção.
          </p>
        </Reveal>
      </section>

      {/* As 3 Portas */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
          <Reveal>
            <div className="mb-16 border-b border-black/10 pb-8 sm:mb-20">
              <p className="text-[0.65rem] tracking-[0.34em] text-neutral-400 uppercase">
                Como trabalhamos
              </p>
            </div>
          </Reveal>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 120}>
                <article className="border-t border-black pt-8">
                  <p className="text-[0.62rem] tracking-[0.26em] text-neutral-400 uppercase">
                    0{i + 1}
                  </p>
                  <h2 className="mt-6 font-serif text-2xl leading-tight md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-500 md:text-base">
                    {service.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Citação de fechamento */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-40">
          <Reveal>
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-2xl leading-snug text-black md:text-4xl">
                "O livro é feito no silêncio que existe entre a intenção e a frase."
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
