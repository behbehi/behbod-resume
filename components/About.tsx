"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export function About() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "About Me",
      description:
        "I started as an intern, learning the basics of HTML, CSS, and JavaScript — and gradually moved into building modern web applications with React and Next.js.\n\nThese days, I focus on creating fast, clean, and user-friendly interfaces.",
      link: "Read more",
    },
    fa: {
      title: "درباره من",
      description:
        "مسیرم رو به عنوان کارآموز از پایه‌ها شروع کردم و کم‌کم وارد دنیای React و Next.js شدم.\n\nالان تمرکزم روی ساخت رابط‌های کاربری سریع، تمیز و کاربرپسند هست.",
      link: "بیشتر بخوانید",
    },
  };

  const t = text[language];
  const isFa = language === "fa";

  return (
    <div
      className="flex flex-col-reverse md:flex-row items-start md:items-center gap-10 md:gap-24 w-full"
      dir={isFa ? "rtl" : "ltr"}
    >
      <Link
        href="/about"
        className="hidden flex-1 md:flex justify-center md:justify-start"
      >
        <div className="w-full max-w-[260px] transition-transform duration-300 md:hover:scale-105">
          <Image
            src="/images/about.svg"
            width={880}
            height={608}
            className="w-full h-auto"
            alt="about image"
            priority
          />
        </div>
      </Link>

      <div className="flex flex-col gap-7 flex-1">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl">{t.title}</h2>

          <p className="text-light text-justify whitespace-pre-line">
            {t.description}
          </p>
        </div>

        <Link
          href="/about"
          className="text-pink-500 font-semibold underline hover:no-underline text-sm"
        >
          {t.link}
        </Link>
      </div>
    </div>
  );
}
