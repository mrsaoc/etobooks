import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { HeroCat } from "@/components/HeroCat";

const description =
  "Na ETO BOOKS, cada projeto começa com uma conversa. Curadoria editorial, consultoria e acompanhamento individual da primeira ideia ao livro publicado.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ETO BOOKS — Seu livro merece um caminho próprio" },
      { name: "description", content: description },
      { property: "og:title", content: "ETO BOOKS — Seu livro merece um caminho próprio" },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-10">
          <div className="min-w-0">
            <Reveal>
              <p className="text-[0.65rem] tracking-[0.3em] text-neutral-500 uppercase">
                Editora, Estúdio Criativo e Assessoria
              </p>
              <h1 className="mt-6 font-serif text-[clamp(2.7rem,5vw,4.3rem)] leading-[1.08] tracking-tight text-balance">
                Seu livro merece um caminho próprio
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-600 [&_strong]:font-semibold [&_strong]:text-neutral-800">
                <p>
                  Na <strong>ETO BOOKS</strong>, cada projeto começa com uma conversa. Escutamos a
                  história, entendemos o que ela precisa e construímos, junto com você, o melhor
                  caminho para transformá-la em livro.
                </p>
                <p>
                  Oferecemos{" "}
                  <strong>curadoria editorial, consultoria e acompanhamento individual</strong> da
                  primeira ideia ao produto final, editado e publicado. E seguimos ao seu lado
                  depois da publicação: criamos eventos, organizamos o lançamento e buscamos espaço
                  na mídia para apresentar o livro a novos leitores.
                </p>
                <p>
                  <strong>Cuidamos de cada etapa</strong> com atenção à sua voz e ao público que
                  você deseja alcançar.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="min-w-0">
            <HeroCat />
          </div>
        </div>
      </section>
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <Reveal>
            <p className="text-[0.65rem] tracking-[0.3em] text-neutral-500 uppercase">CASA ETO</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
              Estúdio & Ghostwriting
            </h2>
            <div className="mt-7 max-w-4xl space-y-5 text-base leading-[1.8] text-neutral-600 md:text-lg [&_strong]:font-semibold [&_strong]:text-neutral-800">
              <p>
                Há histórias que ainda não encontraram as palavras certas. Outras já foram contadas
                muitas vezes, mas precisam de estrutura, ritmo e profundidade para se tornar um
                livro.
              </p>
              <p>
                Na Casa ETO, <strong>trabalhamos lado a lado com cada autor</strong> para descobrir
                o centro de sua narrativa. Desenvolvemos o conceito e a estrutura da obra e, no
                ghostwriting, conduzimos entrevistas, pesquisamos e escrevemos a partir de suas
                experiências, ideias e modo de ver o mundo.
              </p>
              <p>
                Também damos forma visual ao livro:{" "}
                <strong>
                  cuidamos do design, da capa e das ilustrações, além de providenciar o registro do
                  ISBN e buscar a gráfica adequada
                </strong>{" "}
                para a produção. Do texto ao objeto, cada escolha é pensada para que o autor se
                reconheça no livro que tem em mãos.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <Reveal>
            <p className="text-[0.65rem] tracking-[0.3em] text-neutral-500 uppercase">
              ALÉM DO LIVRO
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
              Lançamento e Assessoria
            </h2>
            <div className="mt-7 max-w-4xl space-y-5 text-base leading-[1.8] text-neutral-600 md:text-lg">
              <p>
                Publicar é um começo. Para que o livro encontre seus leitores, pensamos em como
                apresentá-lo ao mundo.
              </p>
              <p>
                Planejamos e produzimos o evento de lançamento, criamos oportunidades de encontro
                entre autor e público e desenvolvemos ações de divulgação adequadas a cada obra.
                Nossa assessoria também busca espaço na mídia, apresenta pautas a jornalistas e
                acompanha entrevistas e outras oportunidades de exposição.
              </p>
              <p>
                Cada lançamento tem sua própria história. Nosso trabalho é encontrar a melhor
                maneira de contá-la.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="border-t border-black/10 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Vamos falar sobre o seu livro?
            </h2>
            <p className="mt-6 font-serif text-xl text-neutral-800">
              Sua história pode começar aqui.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
              Tem um livro em mente ou quer conhecer melhor o nosso trabalho? Conte sua ideia para a
              ETO BOOKS.
            </p>
            <Link
              to="/contato"
              className="mt-8 inline-flex min-h-12 items-center justify-center border border-black bg-black px-7 py-3 text-sm text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Vamos conversar{" "}
              <span aria-hidden="true" className="ml-6">
                ↗
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
