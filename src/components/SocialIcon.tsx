import { Facebook, Instagram, Youtube } from "lucide-react";

export type SocialName = "Instagram" | "Facebook" | "YouTube" | "WhatsApp" | "TikTok";

export function SocialIcon({ name }: { name: SocialName }) {
  const props = { size: 21, strokeWidth: 1.5, "aria-hidden": true as const, className: "shrink-0" };
  if (name === "Instagram") return <Instagram {...props} />;
  if (name === "Facebook") return <Facebook {...props} />;
  if (name === "YouTube") return <Youtube {...props} />;
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      {name === "WhatsApp" ? (
        <>
          <path d="M20.5 11.7a8.7 8.7 0 0 1-12.8 7.7L3 21l1.5-4.8A8.7 8.7 0 1 1 20.5 11.7Z" />
          <path d="m8 7 2 3-1.1 1.2a10 10 0 0 0 3.9 3.9L14 14l3 2c-.4 1.5-1.5 2-2.8 1.6-4.2-1.2-6.6-3.6-7.8-7.8C6 8.5 6.5 7.4 8 7Z" />
        </>
      ) : (
        <>
          <path d="M14 3h3c.3 2.5 1.7 4 4 4.5V11a10 10 0 0 1-4-1.5V16a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3Z" />
        </>
      )}
    </svg>
  );
}
