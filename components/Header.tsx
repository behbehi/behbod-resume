"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const handleScrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export function Header() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center md:justify-between px-16">
      <div className="md:flex items-center gap-3 relative group hidden">
        <Image src="/icons/logo.png" width={24} height={24} alt="email icon" />
        <span>behbod7899@gmail.com</span>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:flex bg-dark text-white text-sm px-3 py-1 w-[285px] rounded-lg shadow-lg whitespace-nowrap transition-all duration-200">
          <div className="flex items-center gap-2">
            <Image
              src="/emojies/high-five.png"
              width={21}
              height={21}
              alt="high five icon"
            />
            <span>Available for new projects — let's talk.</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className={`hover:text-neutral-700 ${
            pathname === "/" ? "font-semibold" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`hover:text-neutral-700 ${
            pathname.startsWith("/projects") ? "font-semibold" : ""
          }`}
        >
          Projects
        </Link>
        {pathname === "/" && (
          <span
            onClick={handleScrollToContact}
            className="hover:text-neutral-700 cursor-pointer"
          >
            Contact
          </span>
        )}
      </div>
    </div>
  );
}
