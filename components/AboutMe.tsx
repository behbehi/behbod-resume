"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export function AboutMe() {
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

  return (
    <div
      className="md:flex-row flex flex-col-reverse items-center gap-7 md:gap-32"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <Link href="/projects" className="block w-full md:w-auto">
        <div className="w-full md:w-auto transition-transform duration-300 md:hover:scale-105">
          <div className="w-full max-w-[220px]">
            <Image
              src="/images/about-me.svg"
              width={880}
              height={608}
              className="w-full h-auto"
              alt="about me image"
            />
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-5 md:w-[400px] px-8 md:px-0">
          <h2 className="text-3xl">{t.title}</h2>
          <p className="text-light text-justify">{t.description}</p>
        </div>
        <Link
          href="/projects"
          className={`text-pink-500 font-semibold underline hover:no-underline text-sm ${
            language === "fa" ? "pr-8 md:pr-0" : "pl-8 md:pl-0"
          }`}
        >
          {t.link}
        </Link>
      </div>
    </div>
  );
}
