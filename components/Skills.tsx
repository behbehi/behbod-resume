"use client";

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";

export function Skills() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="text-3xl text-center">
        {language === "fa" ? "مهارت‌های من" : "My Skills"}
      </h2>
      <div className="flex items-start gap-14 md:gap-32">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/html.png"
              width={18}
              height={18}
              alt="html icon"
            />
            <span className="text-sm">HTML</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/css.png" width={18} height={18} alt="css icon" />
            <span className="text-sm">CSS</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/js.png" width={18} height={18} alt="js icon" />
            <span className="text-sm">Javascript</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/ts.png" width={18} height={18} alt="ts icon" />
            <span className="text-sm">Typescript</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/tailwind.png"
              width={18}
              height={18}
              alt="tailwind icon"
            />
            <span className="text-sm">Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/git.png" width={18} height={18} alt="git icon" />
            <span className="text-sm">Git</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/react.png"
              width={18}
              height={18}
              alt="react icon"
            />
            <span className="text-sm">React</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/next.png"
              width={18}
              height={18}
              alt="next icon"
            />
            <span className="text-sm">Nextjs</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/redux.png"
              width={18}
              height={18}
              alt="redux icon"
            />
            <span className="text-sm">Redux</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/jotai.png"
              width={18}
              height={18}
              alt="jotai icon"
            />
            <span className="text-sm">Jotai</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/jest.png"
              width={18}
              height={18}
              alt="jest icon"
            />
            <span className="text-sm">Jest</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/gatling.png"
              width={18}
              height={18}
              alt="gatling icon"
            />
            <span className="text-sm">Gatling</span>
          </div>
        </div>
      </div>
    </div>
  );
}
