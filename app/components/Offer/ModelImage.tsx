import Image from "next/image";

export default function ModelImage() {
  return (
    <div className="relative w-full h-[200px] md:h-[250px] lg:h-[767px] max-w-[381px]">
      <Image
        src="/modelImage.png"
        alt="model"
        fill
        className="object-contain"
        sizes="(min-width: 768px) 381px, 100vw"
      />
      <div className="absolute left-0 bottom-0 w-full h-[10%] bg-linear-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
