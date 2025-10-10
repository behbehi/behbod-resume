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

  return (
    <div
      className="md:flex-row flex flex-col-reverse items-center gap-7 md:gap-32"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-5 md:w-[400px] px-8 md:px-0">
          <h2 className="text-3xl">{t.title}</h2>
          <p className="text-light text-justify">{t.description}</p>
        </div>
        <Link
          href="/projects"
          className="underline hover:no-underline text-sm pl-8 md:pl-0"
        >
          {t.link}
        </Link>
      </div>
      <Link href="/projects" className="block w-full md:w-auto">
        <div className="w-full md:w-auto transform scale-105 md:scale-100 transition-transform duration-300">
          <Image
            src="/images/laptop.png"
            width={380}
            height={280}
            className="w-full h-auto"
            alt="laptop image"
          />
        </div>
      </Link>
    </div>
  );
}
