import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ImageIcon, Pause, Play } from "lucide-react";
import { editorialBanners } from "@/lib/editorial-banners";

const INTERVAL_MS = 45_000;
const controlClass =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center border border-black/15 transition-colors hover:border-black hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black";

export function EditorialCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const containerRef = useRef<HTMLElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const rotating = !paused && !hovered && !reducedMotion && inView && pageVisible;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry?.isIntersecting ?? false),
      {
        threshold: 0.15,
      },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      media.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setTimeout(
      () => setActive((index) => (index + 1) % editorialBanners.length),
      INTERVAL_MS,
    );
    return () => window.clearTimeout(timer);
  }, [active, rotating]);

  function select(index: number) {
    setActive((index + editorialBanners.length) % editorialBanners.length);
    setPaused(true);
  }

  return (
    <section
      ref={containerRef}
      aria-label="Histórias e caminhos para o seu livro"
      aria-roledescription="carrossel"
      className="mx-auto max-w-[1440px] px-6 pt-10 pb-14 md:px-10 md:pt-14 md:pb-20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        // Keyboard interaction stops rotation until the reader explicitly resumes it.
        if (!(event.target as HTMLElement).closest("[data-rotation-control]")) setPaused(true);
      }}
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[0.65rem] tracking-[0.3em] text-neutral-500 uppercase">
          Pessoas, palavras & encontros
        </p>
        <div className="flex items-center gap-2" aria-label="Controles dos banners">
          <span className="mr-2 text-xs tabular-nums text-neutral-500" aria-hidden="true">
            0{active + 1} / 03
          </span>
          <button
            type="button"
            className={controlClass}
            onClick={() => select(active - 1)}
            aria-label="Banner anterior"
          >
            <ArrowLeft size={17} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={controlClass}
            onClick={() => select(active + 1)}
            aria-label="Próximo banner"
          >
            <ArrowRight size={17} aria-hidden="true" />
          </button>
          {!reducedMotion && (
            <button
              type="button"
              data-rotation-control
              className={controlClass}
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Retomar troca automática" : "Pausar troca automática"}
            >
              {paused ? (
                <Play size={15} aria-hidden="true" />
              ) : (
                <Pause size={15} aria-hidden="true" />
              )}
            </button>
          )}
        </div>
      </div>
      <div
        className="grid border border-black/10 bg-neutral-50"
        aria-live={rotating ? "off" : "polite"}
        onTouchStart={(event) => {
          touchStart.current = null;
          if ((event.target as HTMLElement).closest("button, a")) return;
          const touch = event.touches[0];
          if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchEnd={(event) => {
          const touch = event.changedTouches[0];
          if (!touchStart.current || !touch) return;
          const dx = touch.clientX - touchStart.current.x;
          const dy = touch.clientY - touchStart.current.y;
          if (Math.abs(dx) > 60 && Math.abs(dy) < 50) select(active + (dx < 0 ? 1 : -1));
          touchStart.current = null;
        }}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
      >
        {editorialBanners.map((banner, index) => (
          <article
            key={banner.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} de 3: ${banner.title}`}
            aria-hidden={active !== index}
            inert={active !== index}
            className={`col-start-1 row-start-1 grid min-w-0 transition-opacity duration-700 motion-reduce:transition-none lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] ${active === index ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}`}
          >
            <div className="relative aspect-[4/3] min-w-0 overflow-hidden bg-neutral-100 lg:aspect-auto lg:min-h-[38rem]">
              {"placeholder" in banner ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center text-neutral-500">
                  <ImageIcon size={36} strokeWidth={1} aria-hidden="true" />
                  <p className="text-xs tracking-[0.2em] uppercase">{banner.placeholder}</p>
                </div>
              ) : (
                <img
                  src={banner.image}
                  alt={banner.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  style={{ objectPosition: banner.imagePosition }}
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                />
              )}
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-9 xl:p-12">
              <p className="text-[0.62rem] tracking-[0.25em] text-neutral-500 uppercase">
                {banner.label}
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-[1.15] tracking-tight text-balance xl:text-4xl">
                {banner.title}
              </h2>
              <div className="mt-6 space-y-4 text-[0.95rem] leading-[1.75] text-neutral-600">
                {banner.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2" aria-label="Escolher banner">
        {editorialBanners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => select(index)}
            aria-label={`Mostrar banner ${index + 1}: ${banner.title}`}
            aria-current={active === index ? "true" : undefined}
            className="group inline-flex h-11 w-12 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span
              className={`h-px w-8 transition-colors ${active === index ? "bg-black" : "bg-neutral-300 group-hover:bg-neutral-600"}`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
