"use client";

import { Contact } from "@/components/Contact";
import EmblaCarousel from "@/components/slider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

  const text = {
    en: {
      tarafdariTitle: "Tarafdari Web Application",
      tarafdariDesc:
        "An advanced, responsive dashboard and data management platform built with a modern tech stack.",
      tarafdariPoints: [
        "Engineered a high-performance front-end using Next.js 14 with App Router, leveraging Server-Side Rendering (SSR) for optimal SEO and initial load performance.",
        "Managed complex global application state seamlessly using Jotai for lightweight and scalable state management, avoiding unnecessary re-renders.",
        "Implemented data-fetching logic with TanStack Query (React Query), enabling efficient server-state synchronization, robust caching, and background updates, which reduced API calls by ~30%.",
        "Architected all forms with React Hook Form and Zod for validation, ensuring type-safe, efficient, and user-friendly form handling with precise error feedback.",
        "Designed and built a polished, accessible, and consistent user interface using Heroui component library, complemented by custom Tailwind CSS for unique styling requirements.",
      ],
      uiuxTitle: "UI/UX Design Portfolio",
      uiuxDesc:
        "A collection of projects focused on user-centered design, from concept to interactive prototype.",
      uiuxPoints: [
        "Led the end-to-end design process for multiple applications, including user research, wireframing, high-fidelity mockups, and interactive prototyping.",
        "Translated complex user requirements and business goals into intuitive user flows and clean, modern visual designs using Figma and Adobe XD.",
        "Developed and maintained comprehensive design systems to ensure consistency across all user touchpoints, improving team efficiency and design handoff.",
        "Validated design concepts through usability testing and iterative feedback loops, resulting in a significant improvement in user engagement and task completion rates.",
        "Collaborated closely with front-end developers to ensure precise implementation of design specs, bridging the gap between design and functional code.",
      ],
      pishbiniTitle: "Pishbini Prediction Platform",
      pishbiniDesc:
        "An interactive prediction platform built for scalability, performance, and modern UX best practices.",
      pishbiniPoints: [
        "Designed with React Context for centralized and predictable state management, ensuring efficient data sharing and reduced prop-drilling across deeply nested components.",
        "Implemented TanStack Query (React Query) for declarative and optimized data fetching, offering intelligent caching, background synchronization, and smooth real-time updates.",
        "Enhanced SEO through Next.js 14 App Router’s Server-Side Rendering (SSR) and dynamic metadata management, improving search visibility and initial load performance.",
        "Optimized rendering with React’s concurrent features and component-level memoization, significantly boosting perceived responsiveness on both desktop and mobile devices.",
      ],
    },
    fa: {
      tarafdariTitle: "وب اپلیکیشن طرفداری",
      tarafdariDesc:
        "یک داشبورد پیشرفته و پلتفرم مدیریت داده با طراحی ریسپانسیو و استفاده از فناوری‌های مدرن.",
      tarafdariPoints: [
        "طراحی فرانت‌اند با عملکرد بالا با استفاده از Next.js 14 و App Router به همراه SSR برای بهبود SEO و سرعت بارگذاری اولیه.",
        "مدیریت state اپلیکیشن با استفاده از Jotai برای ساختار سبک، مقیاس‌پذیر و بدون رندرهای غیرضروری.",
        "پیاده‌سازی data fetching با TanStack Query برای هماهنگی مؤثر بین داده‌های سرور و کلاینت و کاهش ~۳۰٪ درخواست‌های API.",
        "ایجاد فرم‌های تایپ‌سیف با React Hook Form و Zod جهت اعتبارسنجی دقیق و تجربه کاربری روان.",
        "طراحی و ساخت رابط کاربری مدرن با استفاده از کتابخانه Heroui و استایل‌های کاستوم Tailwind CSS.",
      ],
      uiuxTitle: "نمونه‌کارهای طراحی UI/UX",
      uiuxDesc:
        "مجموعه‌ای از پروژه‌ها با تمرکز بر طراحی کاربرمحور، از ایده اولیه تا پروتوتایپ تعاملی.",
      uiuxPoints: [
        "هدایت فرآیند طراحی از تحقیق کاربر تا ساخت وایرفریم، ماکاپ‌های های‌فیدلیتی و پروتوتایپ تعاملی.",
        "ترجمه نیازهای پیچیده کاربر و اهداف تجاری به جریان‌های کاربری ساده و طراحی‌های مدرن با استفاده از Figma و Adobe XD.",
        "توسعه و نگهداری دیزاین سیستم جامع برای حفظ انسجام در تمامی صفحات و افزایش بهره‌وری تیم.",
        "ارزیابی و بهبود طراحی از طریق تست کاربردپذیری و فیدبک‌های تکرارشونده برای افزایش تعامل کاربران.",
        "همکاری نزدیک با توسعه‌دهندگان فرانت‌اند برای اطمینان از پیاده‌سازی دقیق طراحی‌ها.",
      ],
      pishbiniTitle: "وب اپلیکیشن پیش‌بینی",
      pishbiniDesc:
        "یک وب اپلیکیشن مدرن برای پیش‌بینی نتایج با تمرکز بر بهینه‌سازی، مقیاس‌پذیری و تجربه کاربری روان.",
      pishbiniPoints: [
        "استفاده از React Context برای state management.",
        "بهره‌گیری از TanStack Query (React Query) برای data fetching بهینه با کشینگ هوشمند.",
        "بهبود SEO با استفاده از Server-Side Rendering (SSR) در App Router و مدیریت داینامیک متادیتا برای افزایش دیده‌شدن در موتورهای جست‌وجو.",
        "بهینه‌سازی عملکرد با memoization در سطح کامپوننت و استفاده از قابلیت‌های concurrent در React برای رندر سریع‌تر.",
      ],
    },
  };

  const t = text[language];

  const TARAFDARI_SLIDES = [
    { id: 1, src: "/projects/tarafdari/post-detail.png", alt: "post detail" },
    { id: 2, src: "/projects/tarafdari/profile.png", alt: "profile" },
    { id: 3, src: "/projects/tarafdari/comments.png", alt: "comments" },
    { id: 4, src: "/projects/tarafdari/content.png", alt: "content" },
    { id: 5, src: "/projects/tarafdari/edit.png", alt: "edit" },
    { id: 6, src: "/projects/tarafdari/fixtures.png", alt: "fixtures" },
    { id: 7, src: "/projects/tarafdari/live-results.png", alt: "live results" },
    { id: 8, src: "/projects/tarafdari/message.png", alt: "message" },
    { id: 9, src: "/projects/tarafdari/news.png", alt: "news" },
    { id: 10, src: "/projects/tarafdari/news-page.png", alt: "news page" },
    { id: 11, src: "/projects/tarafdari/status.png", alt: "status" },
    {
      id: 12,
      src: "/projects/tarafdari/team-profile.png",
      alt: "team profile",
    },
    {
      id: 13,
      src: "/projects/tarafdari/user-profile.png",
      alt: "user profile",
    },
    { id: 14, src: "/projects/tarafdari/user-post.png", alt: "user post" },
    { id: 15, src: "/projects/tarafdari/video.png", alt: "video" },
  ];

  const UIUX_SLIDES = [
    { id: 1, src: "/projects/uiux/1.png", alt: "dashboard" },
    { id: 2, src: "/projects/uiux/2.png", alt: "fitness" },
    { id: 3, src: "/projects/uiux/3.png", alt: "exchange" },
    { id: 4, src: "/projects/uiux/4.png", alt: "real state" },
    { id: 5, src: "/projects/uiux/5.png", alt: "resume" },
    { id: 6, src: "/projects/uiux/6.png", alt: "nexso" },
    { id: 7, src: "/projects/uiux/7.png", alt: "education" },
    { id: 8, src: "/projects/uiux/8.png", alt: "jewelry" },
    { id: 9, src: "/projects/uiux/9.png", alt: "portfolio" },
  ];

  const PISHBINI_SLIDES = [
    { id: 1, src: "/projects/pishbini/home.png", alt: "home" },
    { id: 2, src: "/projects/pishbini/home-2.png", alt: "home-2" },
    { id: 3, src: "/projects/pishbini/home-3.png", alt: "home-3" },
    { id: 4, src: "/projects/pishbini/login.png", alt: "login" },
    { id: 5, src: "/projects/pishbini/login-2.png", alt: "login-2" },
    { id: 6, src: "/projects/pishbini/login-3.png", alt: "login-3" },
  ];

  return (
    <div className="my-[100px] md:my-[150px] flex flex-col gap-[100px] md:gap-[150px]">
      {/* Tarafdari Project */}
      <div className="flex flex-col gap-20">
        <div
          className="flex flex-col gap-3 px-10 md:px-20"
          dir={language === "fa" ? "rtl" : "ltr"}
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl">{t.tarafdariTitle}</h2>
              <h3 className="text-xl text-light">{t.tarafdariDesc}</h3>
              <Link
                href="https://dev.tarafdari.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline hover:no-underline text-blue-600"
              >
                https://dev.tarafdari.com
              </Link>
            </div>
            <ul
              className={`list-disc marker:text-light text-light flex flex-col gap-2 ${
                language === "fa" ? "pr-8" : "pl-8"
              }`}
            >
              {t.tarafdariPoints.map((point, i) => (
                <li key={i} className="pl-2 text-justify">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <EmblaCarousel slides={TARAFDARI_SLIDES} options={OPTIONS} />
      </div>

      {/* Prediction Project */}
      <div className="flex flex-col gap-20">
        <div
          className="flex flex-col gap-3 px-10 md:px-20"
          dir={language === "fa" ? "rtl" : "ltr"}
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl">{t.pishbiniTitle}</h2>
              <h3 className="text-xl text-light">{t.pishbiniDesc}</h3>
              <Link
                href="https://pishbini.tarafdari.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline hover:no-underline text-blue-600"
              >
                https://pishbini.tarafdari.com
              </Link>
            </div>
            <ul
              className={`list-disc marker:text-light text-light flex flex-col gap-2 ${
                language === "fa" ? "pr-8" : "pl-8"
              }`}
            >
              {t.pishbiniPoints.map((point, i) => (
                <li key={i} className="pl-2 text-justify">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <EmblaCarousel slides={PISHBINI_SLIDES} options={OPTIONS} />
      </div>

      {/* UI/UX Project */}
      <div className="flex flex-col gap-20">
        <div
          className="flex flex-col gap-3 px-10 md:px-20"
          dir={language === "fa" ? "rtl" : "ltr"}
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl">{t.uiuxTitle}</h2>
              <h3 className="text-xl text-light">{t.uiuxDesc}</h3>
            </div>
            <ul
              className={`list-disc marker:text-light text-light flex flex-col gap-2 ${
                language === "fa" ? "pr-8" : "pl-8"
              }`}
            >
              {t.uiuxPoints.map((point, i) => (
                <li key={i} className="pl-2 text-justify">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <EmblaCarousel slides={UIUX_SLIDES} options={OPTIONS} />
      </div>
      <Contact />
    </div>
  );
}
