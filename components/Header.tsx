"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "./context/LanguageContext";

const handleScrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export function Header() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  const text = {
    en: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
      tooltip: "Available for new projects — let's talk!",
    },
    fa: {
      home: "خانه",
      projects: "پروژه‌ها",
      contact: "تماس",
      tooltip: "در دسترس برای پروژه‌های تازه — بیایید صحبت کنیم!",
    },
  };

  const t = text[language];

  return (
    <div
      className={`flex items-center justify-center md:justify-between px-8 md:px-16 md:gap-10 ${
        language === "fa" ? "flex-row-reverse" : ""
      }`}
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-5 md:gap-10">
          <Link
            href="/"
            className={`hover:text-neutral-700 ${
              pathname === "/" ? "font-semibold" : ""
            }`}
          >
            {t.home}
          </Link>
          <Link
            href="/projects"
            className={`hover:text-neutral-700 ${
              pathname.startsWith("/projects") ? "font-semibold" : ""
            }`}
          >
            {t.projects}
          </Link>
          {pathname === "/" && (
            <span
              onClick={handleScrollToContact}
              className="hover:text-neutral-700 cursor-pointer"
            >
              {t.contact}
            </span>
          )}
        </div>

        <button
          onClick={toggleLanguage}
          className="border border-neutral-300 rounded-full px-3 py-1 text-sm hover:bg-neutral-100 transition"
        >
          {language === "en" ? "فارسی" : "English"}
        </button>
      </div>
    </div>
  );
}
