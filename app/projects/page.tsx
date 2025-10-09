import { Contact } from "@/components/Contact";
import EmblaCarousel from "@/components/slider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

export default function ProjectsPage() {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

  const TARAFDARI_SLIDES = [
    {
      id: 1,
      src: "/projects/tarafdari/post-detail.png",
      alt: "post detail",
    },
    {
      id: 2,
      src: "/projects/tarafdari/profile.png",
      alt: "profile",
    },
    {
      id: 3,
      src: "/projects/tarafdari/comments.png",
      alt: "comments",
    },
    {
      id: 4,
      src: "/projects/tarafdari/content.png",
      alt: "content",
    },
    {
      id: 5,
      src: "/projects/tarafdari/edit.png",
      alt: "edit",
    },
    {
      id: 6,
      src: "/projects/tarafdari/fixtures.png",
      alt: "fixtures",
    },
    {
      id: 7,
      src: "/projects/tarafdari/live-results.png",
      alt: "live results",
    },
    {
      id: 8,
      src: "/projects/tarafdari/message.png",
      alt: "message",
    },
    {
      id: 9,
      src: "/projects/tarafdari/news.png",
      alt: "news",
    },
    {
      id: 10,
      src: "/projects/tarafdari/news-page.png",
      alt: "news page",
    },
    {
      id: 11,
      src: "/projects/tarafdari/status.png",
      alt: "status",
    },
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
    {
      id: 14,
      src: "/projects/tarafdari/user-post.png",
      alt: "user post",
    },

    {
      id: 15,
      src: "/projects/tarafdari/video.png",
      alt: "video",
    },
  ];

  const UIUX_SLIDES = [
    {
      id: 1,
      src: "/projects/uiux/1.png",
      alt: "dashboard",
    },
    {
      id: 2,
      src: "/projects/uiux/2.png",
      alt: "fitness",
    },
    {
      id: 3,
      src: "/projects/uiux/3.png",
      alt: "exchange",
    },
    {
      id: 4,
      src: "/projects/uiux/4.png",
      alt: "real state",
    },
    {
      id: 5,
      src: "/projects/uiux/5.png",
      alt: "resume",
    },
    {
      id: 6,
      src: "/projects/uiux/6.png",
      alt: "nexso",
    },
    {
      id: 7,
      src: "/projects/uiux/7.png",
      alt: "education",
    },
    {
      id: 8,
      src: "/projects/uiux/8.png",
      alt: "jewelry",
    },
    {
      id: 9,
      src: "/projects/uiux/9.png",
      alt: "portfolio",
    },
  ];

  return (
    <div className="my-[100px] md:my-[150px] flex flex-col gap-[100px] md:gap-[150px]">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-3 px-10 md:px-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl">Tarafdari Web Application</h2>
              <h3 className="text-xl text-light">
                An advanced, responsive dashboard and data management platform
                built with a modern tech stack.
              </h3>
            </div>
            <ul className="list-disc pl-8 marker:text-light text-light flex flex-col gap-2">
              <li className="pl-2 text-justify">
                Engineered a high-performance front-end using Next.js 14 with
                App Router, leveraging Server-Side Rendering (SSR) for optimal
                SEO and initial load performance.
              </li>
              <li className="pl-2 text-justify">
                Managed complex global application state seamlessly using Jotai
                for lightweight and scalable state management, avoiding
                unnecessary re-renders.
              </li>
              <li className="pl-2 text-justify">
                Implemented data-fetching logic with TanStack Query (React
                Query), enabling efficient server-state synchronization, robust
                caching, and background updates, which reduced API calls by
                ~30%.
              </li>
              <li className="pl-2 text-justify">
                Architected all forms with React Hook Form and Zod for
                validation, ensuring type-safe, efficient, and user-friendly
                form handling with precise error feedback.
              </li>
              <li className="pl-2 text-justify">
                Designed and built a polished, accessible, and consistent user
                interface using Heroui component library, complemented by custom
                Tailwind CSS for unique styling requirements.
              </li>
            </ul>
          </div>
        </div>
        <EmblaCarousel slides={TARAFDARI_SLIDES} options={OPTIONS} />
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-3 px-10 md:px-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl">UI/UX Design Portfolio</h2>
              <h3 className="text-xl text-light">
                A collection of projects focused on user-centered design, from
                concept to interactive prototype.
              </h3>
            </div>
            <ul className="list-disc pl-8 marker:text-light text-light flex flex-col gap-2">
              <li className="pl-2 text-justify">
                Led the end-to-end design process for multiple applications,
                including user research, wireframing, high-fidelity mockups, and
                interactive prototyping.
              </li>
              <li className="pl-2 text-justify">
                Translated complex user requirements and business goals into
                intuitive user flows and clean, modern visual designs using
                Figma and Adobe XD.
              </li>
              <li className="pl-2 text-justify">
                Developed and maintained comprehensive design systems to ensure
                consistency across all user touchpoints, improving team
                efficiency and design handoff.
              </li>
              <li className="pl-2 text-justify">
                Validated design concepts through usability testing and
                iterative feedback loops, resulting in a significant improvement
                in user engagement and task completion rates.
              </li>
              <li className="pl-2 text-justify">
                Collaborated closely with front-end developers to ensure precise
                implementation of design specs, bridging the gap between design
                and functional code.
              </li>
            </ul>
          </div>
        </div>
        <EmblaCarousel slides={UIUX_SLIDES} options={OPTIONS} />
      </div>
      <Contact />
    </div>
  );
}
