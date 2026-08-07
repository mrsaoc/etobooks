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
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="ETO Books"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain"
          />
          <span className="truncate font-serif text-base tracking-[0.22em] text-neutral-900 uppercase">
            Eto Books
          </span>
        </Link>

        <nav className="flex shrink-0 items-center gap-6 sm:gap-9">
          {tabs.map((tab) => {
            const active =
              tab.to === "/" ? pathname === "/" : pathname.startsWith(tab.to);
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className="group relative py-1 text-[0.7rem] tracking-[0.18em] text-neutral-500 uppercase transition-colors duration-300 hover:text-neutral-900 data-[active=true]:text-neutral-900"
                data-active={active}
              >
                {tab.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-neutral-900 transition-all duration-500 ease-out ${
                    active ? "w-full" : "w-0 group-hover:w-full"
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
