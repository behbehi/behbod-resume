"use client";

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";
import Link from "next/link";

export function Hero() {
  const { language } = useLanguage();

  const text = {
    en: {
      greeting: "Hi! I'm Behbod 👋🏻",
      title: "Building Modern Web Experiences with Next.js & React",
      desc: "Frontend developer with 3+ years of experience specializing in Next.js, React, and modern web apps — focused on speed, scalability, and clean UI.",
      hire: "Hire Me",
    },
    fa: {
      greeting: "سلام! من بهبد هستم 👋🏻",
      title: "ساخت وب اپلیکیشن‌های مدرن با Next.js و React",
      desc: "توسعه‌دهنده فرانت‌اند با بیش از ۳ سال تجربه در Next.js و React — تمرکز بر سرعت، مقیاس‌پذیری و رابط کاربری ساده و حرفه‌ای.",
      hire: "ارتباط با من",
    },
  };

  const t = text[language];

  return (
    <div
      className={`flex flex-col gap-4 items-center`}
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <div className="flex flex-col items-center gap-5 w-72">
        <div className="flex flex-col items-center gap-3">
          <div className="w-full max-w-[180px]">
            <Image
              src="/images/behbod.png"
              width={934}
              height={733}
              className="w-full h-auto"
              alt="avatar"
            />
          </div>
          <span>{t.greeting}</span>
        </div>
        <h1 className="text-3xl text-center">{t.title}</h1>
        <p className="text-light text-center">{t.desc}</p>
      </div>
      <Link
        href="/contact"
        className="bg-purple-600 rounded-full py-3 text-white w-28 text-sm text-center hover:bg-purple-500"
      >
        {t.hire}
      </Link>
    </div>
  );
}
