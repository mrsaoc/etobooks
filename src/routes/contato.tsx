import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — ETO BOOKS" },
      {
        name: "description",
        content:
          "Toda história começa com uma conversa. Fale com a ETO BOOKS sobre sua ideia, memória ou projeto editorial.",
      },
      { property: "og:title", content: "Fale Comigo — ETO BOOKS" },
      {
        property: "og:description",
        content: "Sua história pode começar aqui. Entre em contato: info@etobooks.com.",
      },
    ],
  }),
  component: Contato,
});

const socialLinks = [
  { name: "Instagram", label: "@etobooks", href: "https://www.instagram.com/etobooks/" },
  {
    name: "Facebook",
    label: "ETO BOOKS",
    href: "https://www.facebook.com/profile.php?id=61582685284286",
  },
  { name: "YouTube", label: "@eto_world", href: "https://www.youtube.com/@eto_world" },
];

function Contato() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-24">
      <Reveal>
        <p className="text-[0.65rem] tracking-[0.3em] text-neutral-500 uppercase">Contato</p>
        <h1 className="mt-5 font-serif text-5xl leading-tight tracking-tight md:text-7xl">
          Fale Comigo
        </h1>
      </Reveal>
      <div className="mt-10 grid gap-12 border-t border-black/10 pt-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal delay={120}>
          <h2 className="max-w-xl font-serif text-3xl leading-snug md:text-4xl">
            Toda história começa com uma conversa.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-[1.8] text-neutral-600">
            <p>
              Se você tem uma ideia, uma memória ou um projeto que merece virar livro, será um
              prazer ouvir você.
            </p>
            <p>
              Envie uma mensagem contando um pouco do que deseja criar — seja uma biografia pessoal,
              um livro corporativo ou um projeto editorial completo.
            </p>
            <p>
              Responderei com atenção, para que juntos possamos dar o primeiro passo na construção
              da sua narrativa.
            </p>
          </div>
          <a
            href="mailto:info@etobooks.com"
            className="mt-8 inline-flex min-h-12 items-center gap-8 border border-black bg-black px-7 py-3 text-sm text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            Enviar mensagem <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
        <Reveal delay={200}>
          <div className="space-y-9 lg:border-l lg:border-black/10 lg:pl-10">
            <div>
              <p className="text-[0.65rem] tracking-[0.26em] text-neutral-500 uppercase">E-mail</p>
              <a
                href="mailto:info@etobooks.com"
                className="mt-4 inline-block break-all border-b border-black/30 pb-1 font-serif text-2xl transition-colors hover:border-black focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                info@etobooks.com
              </a>
            </div>
            <ul className="space-y-3 border-y border-black/10 py-7 text-sm text-neutral-600">
              <li>Tóquio, Japão</li>
              <li>São Paulo, Brasil</li>
              <li>Nova Iorque, EUA</li>
            </ul>
            <div>
              <p className="text-[0.65rem] tracking-[0.26em] text-neutral-500 uppercase">
                Redes sociais
              </p>
              <ul className="mt-4 divide-y divide-black/10">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-14 items-center justify-between gap-4 py-3 text-sm transition-colors hover:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      <span>
                        {social.name} <span className="ml-2 text-neutral-500">{social.label}</span>
                      </span>
                      <span aria-hidden="true">↗</span>
                      <span className="sr-only">(abre em nova aba)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
