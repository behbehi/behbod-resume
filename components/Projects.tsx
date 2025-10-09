import Image from "next/image";
import Link from "next/link";

export function Projects() {
  return (
    <div className="md:flex-row flex flex-col-reverse items-center gap-7 md:gap-32">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-5 md:w-[400px] px-8 md:px-0">
          <h2 className="text-3xl">Projects</h2>
          <p className="text-light text-justify">
            A selection of projects showcasing my skills in building fast,
            responsive, and user-friendly web applications.
          </p>
        </div>
        <Link
          href="/projects"
          className="underline hover:no-underline text-sm pl-8 md:pl-0"
        >
          Go To Projects
        </Link>
      </div>
      <Link href="/projects" className="block w-full md:w-auto">
        <div className="w-full md:w-auto transform scale-105 md:scale-100 transition-transform duration-300">
          <Image
            src="/images/laptop.png"
            width={380}
            height={280}
            className="w-full h-auto"
            alt="laptop image"
          />
        </div>
      </Link>
    </div>
  );
}
