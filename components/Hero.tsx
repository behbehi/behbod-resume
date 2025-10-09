"use client";

import Image from "next/image";

const handleScrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export function Hero() {
  return (
    <div className="flex flex-col gap-4 items-center">
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
            <span>Hi! I'm Behbod</span>
            <Image
              src="/emojies/peace.png"
              width={21}
              height={21}
              alt="peace emoji"
            />
          </div>
        </div>
        <h1 className="text-3xl text-center">
          Building Modern Web Experiences with Next.js & React
        </h1>
        <p className="text-light text-center">
          Frontend developer specializing in Next.js, React, and modern web apps
          — focused on speed, scalability, and clean UI.
        </p>
      </div>
      <button
        onClick={handleScrollToContact}
        className="bg-dark rounded-full py-3 text-white w-28 text-sm hover:bg-neutral-800"
      >
        Hire Me
      </button>
    </div>
  );
}
