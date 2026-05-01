import Image from "next/image";

export function Footer() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[80px]">
        <Image
          src="/images/logo.svg"
          width={1164}
          height={460}
          className="w-full h-auto"
          alt="logo image"
        />
      </div>
    </div>
  );
}
