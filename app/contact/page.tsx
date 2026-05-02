"use client";

import { useLanguage } from "@/components/context/LanguageContext";
import Image from "next/image";

const contactItems = [
  {
    label: "Email",
    value: "behbod7899@gmail.com",
    icon: "/icons/gmail.svg",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=behbod7899@gmail.com",
  },
  {
    label: "Telegram",
    value: "@bhiboi",
    icon: "/icons/telegram.svg",
    href: "https://t.me/bhiboi",
  },
  {
    label: "Bale",
    value: "@bhiboi",
    icon: "/icons/bale.svg",
    href: "https://ble.ir/bhiboi",
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

  return (
    <div className="flex flex-col items-center gap-10 w-full md:w-[300px]">
      <h2 className="text-3xl text-center">{t.title}</h2>
      <div className="flex flex-col gap-4 w-full">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-lg border border-black/10 hover:border-black/20 hover:bg-black/5 transition"
          >
            <Image
              src={item.icon}
              width={20}
              height={20}
              alt={`${item.label} icon`}
              className="shrink-0"
            />
            <span className="text-sm">{item.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
