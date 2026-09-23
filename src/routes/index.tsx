import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { HeroCat } from "@/components/HeroCat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ETOBOOKS — Editora, Estúdio Criativo e Assessoria" },
      {
        name: "description",
        content:
          "EtoBooks é uma plataforma literária que atua como guarda-chuva corporativo para editoração, estúdio criativo, ghostwriting e assessoria.",
      },
      { property: "og:title", content: "ETOBOOKS — Editora, Estúdio Criativo e Assessoria" },
      {
        property: "og:description",
        content:
          "Uma plataforma literária que atua como guarda-chuva corporativo para editoração, estúdio criativo, ghostwriting e assessoria.",
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

const beyond = [
  {
    title: "Eventos de Lançamento",
    text: "Criamos o ritual de apresentar um livro ao mundo: concepção, convidados, ambientação e discurso.",
  },
  {
    title: "Assessoria de Imprensa",
    text: "Posicionamento, press kit, relacionamento com veículos e curadoria de imagem para a obra e seu autor.",
  },
];

function Index() {
  return (
    <div className="bg-white text-black">
      {/* Hero */}
      <section className="relative mx-auto min-h-[calc(100vh-10rem)] max-w-6xl px-6 pt-6 pb-10 md:px-10 md:pt-8 md:pb-16">
        <div className="grid min-h-[calc(100vh-14rem)] items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-6">
          {/* Text */}
          <div className="relative z-10 flex min-w-0 flex-col justify-center">
            <Reveal>
              <p className="text-[0.65rem] tracking-[0.34em] text-neutral-400 uppercase">
                Editora, Estúdio Criativo e Assessoria
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 font-serif text-[clamp(3.5rem,12.5vw,9.5rem)] leading-[0.9] tracking-tight uppercase lg:text-[clamp(4rem,7.8vw,6.9rem)]">
                ETOBOOKS
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-10 max-w-2xl font-sans text-base leading-relaxed text-neutral-500 sm:text-lg md:text-xl">
                Uma plataforma literária que atua como guarda-chuva corporativo para
                editoração, estúdio criativo, ghostwriting e assessoria. Tratamos o
                livro como objeto cultural de alto valor.
              </p>
            </Reveal>
          </div>

          {/* The brand cat, grooming on a stack of books. */}
          <div className="relative flex min-w-0 items-center justify-center">
            <HeroCat />
          </div>
        </div>
      </section>

      {/* Casa Eto — Estúdio & Ghostwriting */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
          <Reveal>
            <div className="mb-16 border-b border-black/10 pb-8 sm:mb-20">
              <p className="text-[0.65rem] tracking-[0.34em] text-neutral-400 uppercase">
                Casa Eto
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                Estúdio & Ghostwriting
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 120}>
                <article className="border-t border-black pt-8">
                  <p className="text-[0.62rem] tracking-[0.26em] text-neutral-400 uppercase">
                    0{i + 1}
                  </p>
                  <h3 className="mt-6 font-serif text-2xl leading-tight md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-500 md:text-base">
                    {service.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Além do Livro */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
          <Reveal>
            <div className="mb-16 border-b border-black/10 pb-8 sm:mb-20">
              <p className="text-[0.65rem] tracking-[0.34em] text-neutral-400 uppercase">
                Além do Livro
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                Lançamento e Assessoria
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-12 sm:grid-cols-2 lg:gap-10">
            {beyond.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <article className="border-t border-black pt-8">
                  <p className="text-[0.62rem] tracking-[0.26em] text-neutral-400 uppercase">
                    0{i + 1}
                  </p>
                  <h3 className="mt-6 font-serif text-2xl leading-tight md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-500 md:text-base">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

