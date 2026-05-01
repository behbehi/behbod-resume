"use client";

import { useLanguage } from "@/components/context/LanguageContext";
import Image from "next/image";

const contactItems = [
  {
    label: "Email",
    value: "behbod7899@gmail.com",
    icon: "/icons/gmail.svg",
  },
  {
    label: "Telegram",
    value: "@bhiboi",
    icon: "/icons/telegram.svg",
  },
  {
    label: "Bale",
    value: "@bhiboi",
    icon: "/icons/bale.svg",
  },
];

export default function ContactPage() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Feel free to get in touch",
    },
    fa: {
      title: "با من در تماس باشید",
    },
  };

  const t = text[language];
  const isFa = language === "fa";

  return (
    <div className="">
      <div
        className="flex flex-col items-center gap-10"
        dir={isFa ? "rtl" : "ltr"}
      >
        <h2 className="text-3xl text-center">{t.title}</h2>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-3 py-2 rounded-lg border border-black/10 hover:border-black/20 hover:bg-black/5 transition"
            >
              <Image
                src={item.icon}
                width={20}
                height={20}
                alt={`${item.label} icon`}
              />
              <span className="text-sm">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
