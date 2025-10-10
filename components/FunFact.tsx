"use client";

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";

export function FunFact() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Fun Fact",
      fact: "I debug faster after my second cup of coffee",
    },
    fa: {
      title: "یک نکته جالب",
      fact: "بعد از قهوه دوم، زودتر debug می‌کنم",
    },
  };

  const t = text[language];

  return (
    <div
      className="flex flex-col gap-10 px-6 md:px-0"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <h2 className="text-3xl text-center">{t.title}</h2>
      <div className="flex items-center gap-2 justify-center">
        <span className="whitespace-nowrap">{t.fact}</span>
        <Image
          src="/emojies/coffee.png"
          width={21}
          height={21}
          alt="coffee emoji"
        />
      </div>
    </div>
  );
}
