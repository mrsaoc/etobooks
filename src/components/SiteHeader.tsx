import { Link, useRouterState } from "@tanstack/react-router";

const tabs = [
  { to: "/", label: "ETO BOOKS" },
  { to: "/textos", label: "Textos" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl items-center gap-2 px-5 py-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-4 sm:px-6 sm:py-4 md:px-10">
        <Link
          to="/"
          aria-label="ETO BOOKS — início"
          className="flex min-w-0 items-center justify-center gap-3 sm:justify-start sm:gap-4"
        >
          <img src="/favicon.png" alt="" className="h-12 w-auto sm:h-16 md:h-20" />
          <span className="shrink-0 font-sans text-[0.72rem] tracking-[0.26em] text-black uppercase sm:text-[0.82rem] sm:tracking-[0.28em] md:text-[0.92rem]">
            ETO BOOKS
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="flex shrink-0 items-center justify-center gap-6 sm:gap-4 md:gap-6"
        >
          {tabs.map((tab) => {
            const active = tab.to === "/" ? pathname === "/" : pathname.startsWith(tab.to);
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className="group relative flex min-h-11 items-center px-2 text-[0.66rem] tracking-[0.16em] text-neutral-500 uppercase transition-colors duration-300 hover:text-black sm:px-1 sm:text-[0.7rem] sm:tracking-[0.18em] data-[active=true]:text-black"
                data-active={active}
                aria-current={active ? "page" : undefined}
              >
                {tab.label}
                <span
                  className={`absolute bottom-2 left-2 h-px bg-black transition-all duration-500 ease-out sm:left-1 ${
                    active
                      ? "w-[calc(100%-1rem)] sm:w-[calc(100%-0.5rem)]"
                      : "w-0 group-hover:w-[calc(100%-1rem)] sm:group-hover:w-[calc(100%-0.5rem)]"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
