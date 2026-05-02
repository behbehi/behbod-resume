"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./context/LanguageContext";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  const text = {
    en: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    fa: {
      home: "خانه",
      projects: "پروژه‌ها",
      about: "درباره",
      contact: "تماس",
    },
  };

  const t = text[language];

  return (
    <div className="w-full px-6 md:px-16">
      <div className="flex flex-col gap-4 md:hidden">
        <div className="flex justify-end">
          <button
            onClick={toggleLanguage}
            className="p-1.5 rounded-full border border-neutral-300 hover:bg-neutral-100 transition flex items-center justify-center"
          >
            <Image
              src={language === "en" ? "/icons/iran.svg" : "/icons/us.svg"}
              alt="language switch"
              width={20}
              height={20}
              className="rounded-sm"
            />
          </button>
        </div>

        <div className="flex items-center justify-center gap-5 text-sm">
          <Link
            href="/"
            className={`hover:text-neutral-700 transition ${
              pathname === "/" ? "font-semibold" : ""
            }`}
          >
            {t.home}
          </Link>
          <Link
            href="/projects"
            className={`hover:text-neutral-700 transition ${
              pathname.startsWith("/projects") ? "font-semibold" : ""
            }`}
          >
            {t.projects}
          </Link>
          <Link
            href="/about"
            className={`hover:text-neutral-700 transition ${
              pathname.startsWith("/about") ? "font-semibold" : ""
            }`}
          >
            {t.about}
          </Link>
          <Link
            href="/contact"
            className={`hover:text-neutral-700 transition ${
              pathname.startsWith("/contact") ? "font-semibold" : ""
            }`}
          >
            {t.contact}
          </Link>
        </div>
      </div>

      <div className="relative hidden md:flex items-center justify-center">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className={`hover:text-neutral-700 transition ${
              pathname === "/" ? "font-semibold" : ""
            }`}
          >
            {t.home}
          </Link>
          <Link
            href="/projects"
            className={`hover:text-neutral-700 transition ${
              pathname.startsWith("/projects") ? "font-semibold" : ""
            }`}
          >
            {t.projects}
          </Link>
          <Link
            href="/about"
            className={`hover:text-neutral-700 transition ${
              pathname.startsWith("/about") ? "font-semibold" : ""
            }`}
          >
            {t.about}
          </Link>
          <Link
            href="/contact"
            className={`hover:text-neutral-700 transition ${
              pathname.startsWith("/contact") ? "font-semibold" : ""
            }`}
          >
            {t.contact}
          </Link>
        </div>

        <button
          onClick={toggleLanguage}
          className="absolute right-0 p-1.5 rounded-full border border-neutral-300 hover:bg-neutral-100 transition flex items-center justify-center"
        >
          <Image
            src={language === "en" ? "/icons/iran.svg" : "/icons/us.svg"}
            alt="language switch"
            width={20}
            height={20}
            className="rounded-sm"
          />
        </button>
      </div>
    </div>
  );
}
