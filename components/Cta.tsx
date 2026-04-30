"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export function Cta() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Want to get in touch?",
      desc: "Got an idea, a project, or just want to say hi? Feel free to reach out.",
      button: "Contact Me",
    },
    fa: {
      title: "می‌خوای در ارتباط باشیم؟",
      desc: "اگه ایده‌ای داری، پروژه‌ای تو ذهنت هست یا دوست داری صحبت کنیم، خوشحال میشم پیام بدی.",
      button: "تماس با من",
    },
  };

  const t = text[language];
  const isFa = language === "fa";

  return (
    <div
      className="flex flex-col items-center gap-6 px-6 md:px-0 text-center"
      dir={isFa ? "rtl" : "ltr"}
    >
      <h2 className="text-3xl">{t.title}</h2>

      <p className="text-light max-w-[400px]">{t.desc}</p>

      <Link
        href="/contact"
        className="bg-purple-600 rounded-full py-3 text-white w-32 text-sm text-center hover:bg-purple-500 transition"
      >
        {t.button}
      </Link>
    </div>
  );
}
