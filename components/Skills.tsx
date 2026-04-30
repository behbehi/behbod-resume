"use client";

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";

const coreSkills = ["React", "Next.js", "TypeScript"];

const skillGroups = [
  {
    title: { en: "Languages", fa: "زبان‌ها" },
    skills: [
      { name: "JavaScript", icon: "/icons/js.png" },
      { name: "TypeScript", icon: "/icons/ts.png" },
      { name: "HTML", icon: "/icons/html.png" },
      { name: "CSS", icon: "/icons/css.png" },
    ],
  },
  {
    title: { en: "Frontend", fa: "فرانت‌اند" },
    skills: [
      { name: "React", icon: "/icons/react.png" },
      { name: "Next.js", icon: "/icons/next.png" },
      { name: "Vue.js", icon: "/icons/vue.png" },
      { name: "Nuxt.js", icon: "/icons/nuxtjs.png" },
    ],
  },
  {
    title: { en: "State & Tools", fa: "مدیریت وضعیت و ابزارها" },
    skills: [
      { name: "Redux", icon: "/icons/redux.png" },
      { name: "Jotai", icon: "/icons/jotai.png" },
    ],
  },
  {
    title: { en: "Styling", fa: "استایل‌دهی" },
    skills: [{ name: "Tailwind CSS", icon: "/icons/tailwind.png" }],
  },
  {
    title: { en: "Testing & Monitoring", fa: "تست و مانیتورینگ" },
    skills: [
      { name: "Jest", icon: "/icons/jest.png" },
      { name: "Gatling", icon: "/icons/gatling.png" },
      { name: "Sentry", icon: "/icons/sentry.png" },
    ],
  },
  {
    title: { en: "Other", fa: "سایر" },
    skills: [{ name: "Git", icon: "/icons/git.png" }],
  },
];

export function Skills() {
  const { language } = useLanguage();
  const isFa = language === "fa";
  const groups = isFa ? [...skillGroups].reverse() : skillGroups;

  return (
    <section className="flex flex-col items-center gap-10">
      <h2 className="text-center text-3xl">
        {isFa ? "مهارت‌های من" : "My Skills"}
      </h2>

      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-14">
        {groups.map((group) => (
          <div key={group.title.en} className="flex flex-col items-start gap-6">
            <h3
              className={`w-full border-b border-black/20 pb-2 text-sm uppercase ${
                isFa ? "text-right" : "text-left"
              }`}
            >
              {isFa ? group.title.fa : group.title.en}
            </h3>

            <div className="flex flex-col gap-5">
              {group.skills.map((skill) => {
                const isCoreSkill = coreSkills.includes(skill.name);

                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 opacity-80 transition hover:opacity-100"
                  >
                    <Image
                      src={skill.icon}
                      width={18}
                      height={18}
                      alt={`${skill.name} icon`}
                    />
                    <span
                      className={`text-sm ${
                        isCoreSkill ? "font-medium" : "font-normal"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
