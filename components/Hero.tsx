"use client";

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";

const handleScrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export function Hero() {
  const { language } = useLanguage();

  const text = {
    en: {
      greeting: "Hi! I'm Behbod",
      title: "Building Modern Web Experiences with Next.js & React",
      desc: "Frontend developer with 3+ years of experience specializing in Next.js, React, and modern web apps — focused on speed, scalability, and clean UI.",
      hire: "Hire Me",
    },
    fa: {
      greeting: "سلام! من بهبد هستم",
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
          <Image
            src="/images/avatar.png"
            width={100}
            height={100}
            className="rounded-full"
            alt="avatar"
          />
          <div className="flex items-center gap-2">
            <span>{t.greeting}</span>
            <Image
              src="/emojies/peace.png"
              width={21}
              height={21}
              alt="peace emoji"
            />
          </div>
        </div>
        <h1 className="text-3xl text-center">{t.title}</h1>
        <p className="text-light text-center">{t.desc}</p>
      </div>
      <button
        onClick={handleScrollToContact}
        className="bg-dark rounded-full py-3 text-white w-28 text-sm hover:bg-neutral-800"
      >
        {t.hire}
      </button>
    </div>
  );
}
