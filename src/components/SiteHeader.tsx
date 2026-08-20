import { Link, useRouterState } from "@tanstack/react-router";

const tabs = [
  { to: "/", label: "Estúdio" },
  { to: "/textos", label: "Textos" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 sm:gap-4 sm:px-6 md:px-10">
        <Link to="/" className="flex min-w-0 items-center">
          <span className="truncate font-serif text-sm tracking-[0.2em] text-black uppercase sm:text-base sm:tracking-[0.22em]">
            Casa Eto
          </span>
        </Link>

        <nav className="-mr-1 flex shrink-0 items-center gap-1 sm:gap-4 md:gap-6">
          {tabs.map((tab) => {
            const active = tab.to === "/" ? pathname === "/" : pathname.startsWith(tab.to);
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className="group relative flex min-h-11 items-center px-2 text-[0.66rem] tracking-[0.16em] text-neutral-500 uppercase transition-colors duration-300 hover:text-black sm:px-1 sm:text-[0.7rem] sm:tracking-[0.18em] data-[active=true]:text-black"
                data-active={active}
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
