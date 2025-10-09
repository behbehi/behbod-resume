import Image from "next/image";

export function Contact() {
  return (
    <div id="contact" className="flex flex-col gap-10 px-8 md:px-0">
      <h2 className="text-3xl text-center">Feel free to get in touch</h2>
      <div className="flex items-center justify-center gap-3 relative group">
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
    </div>
  );
}
