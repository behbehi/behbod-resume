import Image from "next/image";

export function FunFact() {
  return (
    <div className="flex flex-col gap-10 px-6 md:px-0">
      <h2 className="text-3xl text-center">Fun Fact</h2>
      <div className="flex items-center gap-2">
        <span className="whitespace-nowrap">
          I debug faster after my second cup of coffee
        </span>
        <Image
          src="/emojies/coffee.png"
          width={21}
          height={21}
          alt="coffee emoji"
        />
      </div>
    </div>
  );
}
