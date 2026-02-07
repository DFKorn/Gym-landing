import Image from "next/image";

export default function ModelImage() {
  return (
    <div
      className="relative
      w-[99px] h-[200px]
      sm:w-[124px] sm:h-[250px]
      lg:w-[381px] lg:h-[767px]"
    >
      <Image
        src="/modelImage.png"
        alt="model"
        width={381}
        height={767}
        className="w-full h-full object-contain"
        priority
        sizes="(max-width: 375px) 99px, (max-width: 1024px) 124px, 381px"
      />

      <div className="absolute left-0 bottom-0 w-full h-[10%] bg-linear-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
