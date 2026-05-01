"use client";

import { useLanguage } from "@/components/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "About Me",
      description:
        "I started my journey as an intern, learning the basics — HTML, CSS, and JavaScript — figuring out how the web actually works (and breaking it a few times along the way 😄).\n\nFrom there, I moved into React and Next.js, building modern web apps.\n\nThat’s where I became obsessed with performance, clean UI, and smooth user experiences — the kind that feel fast, intuitive, and just... right.\n\nThese days, I focus on building scalable frontend applications with attention to detail, from structure and state management to the smallest UI interactions.\n\nWhen I’m not coding, I’m usually exploring new tools or refining things that were already “good enough” (because they can always be better).",
    },
    fa: {
      title: "درباره من",
      description:
        "مسیرم رو به عنوان کارآموز شروع کردم، از پایه‌ها مثل HTML، CSS و JavaScript — همون موقع‌هایی که تازه می‌فهمی وب چطوری کار می‌کنه (و البته چند بار هم خرابش می‌کنی 😄).\n\nکم‌کم وارد دنیای React و Next.js شدم و شروع کردم به ساختن وب‌اپلیکیشن‌های مدرن.\n\nاز اونجا بود که به سرعت، UI تمیز و تجربه کاربری خوب حساس شدم — چیزهایی که باعث میشه یه محصول «حس درست» داشته باشه.\n\nالان تمرکزم روی ساخت اپلیکیشن‌های مقیاس‌پذیر فرانت‌اند هست، با توجه به جزئیات؛\nاز ساختار و مدیریت state گرفته تا ریزترین تعاملات UI.\n\nوقتی هم کد نمی‌زنم، معمولاً دارم ابزارهای جدید رو امتحان می‌کنم،\nیا چیزی که از قبل خوب بوده رو بهتر می‌کنم (چون همیشه جا برای بهتر شدن هست).",
    },
  };

  const t = text[language];

  return (
    <div
      className="flex flex-col items-center gap-20"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl">{t.title}</h2>
        <p className="text-light text-justify whitespace-pre-line">
          {t.description}
        </p>
      </div>
    </div>
  );
}
