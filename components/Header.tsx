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
      className={`flex items-center justify-center md:justify-between px-16 ${
        language === "fa" ? "flex-row-reverse" : ""
      }`}
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <div
        className={`md:flex items-center gap-3 relative group hidden ${
          language === "fa" ? "flex-row-reverse" : ""
        }`}
      >
        <Image src="/icons/logo.png" width={24} height={24} alt="email icon" />
        <span>behbod7899@gmail.com</span>

        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:flex 
      bg-dark text-white text-sm px-4 py-2 rounded-lg shadow-lg 
      whitespace-nowrap transition-all duration-200
      ${language === "fa" ? "flex-row-reverse" : "flex-row"}`}
          dir={language === "fa" ? "rtl" : "ltr"}
        >
          <div className="flex items-center gap-2 w-full justify-center">
            {language === "en" ? (
              <>
                <Image
                  src="/emojies/high-five.png"
                  width={21}
                  height={21}
                  alt="high five icon"
                />
                <span>{t.tooltip}</span>
              </>
            ) : (
              <>
                <span>{t.tooltip}</span>
                <Image
                  src="/emojies/high-five.png"
                  width={21}
                  height={21}
                  alt="high five icon"
                />
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between md:justify-normal gap-20 md:gap-10">
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
          className="md:hidden border border-neutral-300 rounded-full px-3 py-1 text-sm hover:bg-neutral-100 transition"
        >
          {language === "en" ? "فارسی" : "English"}
        </button>
      </div>

      <button
        onClick={toggleLanguage}
        className="hidden md:flex border border-neutral-300 rounded-full px-3 py-1 text-sm hover:bg-neutral-100 transition"
      >
        {language === "en" ? "فارسی" : "English"}
      </button>
    </div>
  );
}
