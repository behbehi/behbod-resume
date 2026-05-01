"use client";

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";

const skillGroups = [
  {
    skills: [
      { name: "JavaScript", icon: "/icons/js.svg" },
      { name: "TypeScript", icon: "/icons/ts.svg" },
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
    ],
  },
  {
    skills: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Vue.js", icon: "/icons/vue.svg" },
      { name: "Nuxt.js", icon: "/icons/nuxtjs.svg" },
    ],
  },
  {
    skills: [
      { name: "Redux", icon: "/icons/redux.svg" },
      { name: "Jotai", icon: "/icons/jotai.svg" },
    ],
  },
  {
    skills: [{ name: "Tailwind CSS", icon: "/icons/tailwind.svg" }],
  },
  {
    skills: [
      { name: "Jest", icon: "/icons/jest.svg" },
      { name: "Gatling", icon: "/icons/gatling.svg" },
      { name: "Sentry", icon: "/icons/sentry.svg" },
    ],
  },
  {
    skills: [{ name: "Git", icon: "/icons/git.svg" }],
  },
];

export function Skills() {
  const { language } = useLanguage();
  const isFa = language === "fa";
  const groups = isFa ? [...skillGroups].reverse() : skillGroups;

  return (
    <section className="flex flex-col gap-10 w-full">
      <h2 className="text-center text-3xl">
        {isFa ? "مهارت‌های من" : "My Skills"}
      </h2>

      <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-6">
        {groups.map((group, index) => (
          <div key={index} className="flex flex-col gap-4">
            {group.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-black/10 hover:border-black/20 hover:bg-black/5 transition"
              >
                <Image
                  src={skill.icon}
                  width={18}
                  height={18}
                  alt={`${skill.name} icon`}
                />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
