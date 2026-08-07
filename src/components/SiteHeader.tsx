import { Link, useRouterState } from "@tanstack/react-router";

import logo from "@/assets/etobooks-logo.png.asset.json";

const tabs = [
  { to: "/", label: "EtoBooks" },
  { to: "/textos", label: "Textos" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:gap-4 sm:px-6 sm:py-4 md:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo?.url ?? "/favicon.png"}
            alt="ETO Books"
            className="h-24 w-24 shrink-0 flex-none object-contain sm:h-32 sm:w-32"
            style={{ maxWidth: 'none', maxHeight: 'none', display: 'block' }}
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              if (img.src !== "/favicon.png") img.src = "/favicon.png";
            }}
          />
          <span className="truncate font-serif text-sm tracking-[0.2em] text-neutral-900 uppercase sm:text-base sm:tracking-[0.22em]">
            Eto Books
          </span>
        </Link>

        <nav className="-mr-1 flex shrink-0 items-center gap-1 sm:gap-4 md:gap-6">
          {tabs.map((tab) => {
            const active = tab.to === "/" ? pathname === "/" : pathname.startsWith(tab.to);
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className="group relative flex min-h-11 items-center px-2 text-[0.66rem] tracking-[0.16em] text-neutral-500 uppercase transition-colors duration-300 hover:text-neutral-900 sm:px-1 sm:text-[0.7rem] sm:tracking-[0.18em] data-[active=true]:text-neutral-900"
                data-active={active}
              >
                {tab.label}
                <span
                  className={`absolute bottom-2 left-2 h-px bg-neutral-900 transition-all duration-500 ease-out sm:left-1 ${
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