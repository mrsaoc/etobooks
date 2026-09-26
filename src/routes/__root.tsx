import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-bold text-black">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-black">Página não encontrada</h2>
        <p className="mt-2 text-sm text-neutral-500">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-black bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-black">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Algo deu errado do nosso lado. Você pode tentar recarregar ou voltar ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center border border-black bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-50"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ETO BOOKS — Editora, Estúdio Criativo e Assessoria" },
      {
        name: "description",
        content:
          "Curadoria editorial, consultoria e acompanhamento individual. A ETO BOOKS cuida de cada etapa, da primeira ideia ao livro publicado.",
      },
      { name: "author", content: "ETO BOOKS" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:title", content: "ETO BOOKS — Editora, Estúdio Criativo e Assessoria" },
      {
        property: "og:description",
        content:
          "Seu livro merece um caminho próprio. Curadoria editorial, ghostwriting, design, publicação, lançamento e assessoria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..600&family=Inter:wght@300..600&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "shortcut icon", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white font-sans text-black antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-white">
        <SiteHeader />
        <main key={pathname} className="flex-1 animate-in fade-in duration-700">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <footer className="border-t border-black/10">
          <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 text-[0.62rem] tracking-[0.24em] text-neutral-400 uppercase sm:flex sm:items-center sm:justify-between md:px-10">
            <p>© {new Date().getFullYear()} ETO BOOKS</p>
            <p>Editora, Estúdio Criativo e Assessoria</p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
