"use client";

import Image from "next/image";
import Link from "next/link";

const FOOTER_ITEMS = [
  {
    id: "gitlab",
    href: "https://gitlab.com/behbehi",
    src: "/icons/gitlab.svg",
    alt: "gitlab logo",
    size: "w-[25px]",
    type: "icon",
  },
  {
    id: "logo",
    href: "/",
    src: "/images/logo.svg",
    alt: "logo image",
    size: "w-[85px]",
    type: "main",
  },
  {
    id: "hamgit",
    href: "https://hamgit.ir/behbod7899",
    src: "/icons/hamgit.png",
    alt: "hamgit logo",
    size: "w-[60px]",
    type: "highlight",
  },
];

export function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-center gap-12 pb-2">
        {FOOTER_ITEMS.map((item) => {
          const isMain = item.type === "main";
          const isHighlight = item.type === "highlight";

          return (
            <Link
              key={item.id}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`
                relative flex items-center justify-center transition-all duration-300
                ${item.size}
                ${isMain ? "scale-100 hover:scale-105" : "opacity-80 hover:opacity-100 hover:scale-110"}
              `}
            >
              {isHighlight && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-black/30 to-black/15 backdrop-blur-md border border-white/10 shadow-sm scale-125 -z-10" />
              )}
              {isMain && (
                <div className="absolute inset-0 rounded-xl bg-white/5 blur-md scale-110 -z-10" />
              )}
              <Image
                src={item.src}
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                alt={item.alt}
              />
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
