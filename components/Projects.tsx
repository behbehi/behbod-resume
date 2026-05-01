"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export function Projects() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Projects",
      description:
        "A selection of projects showcasing my skills in building fast, responsive, and user-friendly web applications.",
      link: "Go To Projects",
    },
    fa: {
      title: "پروژه‌ها",
      description:
        "چند نمونه پروژه که مهارت‌هامو تو ساخت وب‌اپلیکیشن‌های سریع، responsive و user-friendly نشون میده.",
      link: "مشاهده پروژه‌ها",
    },
  };

  const t = text[language];
  const isFa = language === "fa";

  return (
    <div
      className="flex flex-col-reverse md:flex-row items-start md:items-center gap-10 md:gap-24 w-full"
      dir={isFa ? "rtl" : "ltr"}
    >
      <div className="flex flex-col gap-7 flex-1">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl">{t.title}</h2>
          <p className="text-light text-justify">{t.description}</p>
        </div>

        <Link
          href="/projects"
          className="text-pink-500 font-semibold underline hover:no-underline text-sm"
        >
          {t.link}
        </Link>
      </div>

      <Link
        href="/projects"
        className="hidden flex-1 md:flex justify-center md:justify-end"
      >
        <div className="w-full max-w-[260px] transition-transform duration-300 md:hover:scale-105">
          <Image
            src="/images/projects.svg"
            width={880}
            height={608}
            className="w-full h-auto"
            alt="projects illustration"
            priority
          />
        </div>
      </Link>
    </div>
  );
}
