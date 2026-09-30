import { MapPin } from "lucide-react";

export function ContactLocations() {
  return (
    <div className="flex flex-wrap items-center gap-6 border-y border-black/10 py-7">
      {/* Decorative globe: the city list provides the location information. */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        className="h-28 w-28 shrink-0 text-neutral-300"
      >
        <g stroke="currentColor" strokeWidth="1">
          <circle cx="60" cy="60" r="48" />
          <ellipse cx="60" cy="60" rx="23" ry="48" />
          <ellipse cx="60" cy="60" rx="48" ry="18" />
          <path d="M12 60h96M60 12v96" />
        </g>
        {[
          [35, 39],
          [85, 43],
          [48, 80],
        ].map(([x, y]) => (
          <g
            key={`${x}-${y}`}
            transform={`translate(${x},${y})`}
            fill="#b83232"
            stroke="#fff"
            strokeWidth="1.2"
          >
            <path d="M0 6C-3 2-8-3-8-8a8 8 0 1 1 16 0C8-3 3 2 0 6Z" />
            <circle cy="-8" r="2.5" fill="white" stroke="none" />
          </g>
        ))}
      </svg>
      <ul className="space-y-4 text-sm text-neutral-600">
        {["Tóquio, Japão", "São Paulo, Brasil", "Nova Iorque, EUA"].map((city) => (
          <li key={city} className="flex items-center gap-3">
            <MapPin
              size={17}
              strokeWidth={1.5}
              className="shrink-0 text-[#b83232]"
              aria-hidden="true"
            />
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
