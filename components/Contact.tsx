"use client";

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";

export function Contact() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Feel free to get in touch",
      tooltip: "Available for new projects — let's talk.",
    },
    fa: {
      title: "با من در تماس باشید",
      tooltip: "در دسترس برای پروژه‌های تازه — بیایید صحبت کنیم!",
    },
  };

  const t = text[language];

  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-10 px-8 md:px-0"
    >
      <h2 className="text-3xl text-center">{t.title}</h2>

      <div className="flex flex-col gap-2 relative group">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/email.png"
            width={18}
            height={18}
            alt="email icon"
          />
          <span>behbod7899@gmail.com</span>
        </div>
        <div
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex
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
        <div className="flex items-center gap-2 w-full">
          <Image
            src="/icons/telegram.png"
            width={20}
            height={20}
            alt="telegram icon"
          />
          <span>Behbodkh</span>
        </div>
      </div>
    </div>
  );
}
