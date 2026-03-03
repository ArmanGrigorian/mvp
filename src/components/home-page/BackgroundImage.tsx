import Image from "next/image";

export function BackgroundImage() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/hero-trucks.png"
        alt="Humanitarian Aid Trucks"
        fill
        className="object-cover object-center opacity-60 brightness-110 grayscale sm:opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-white via-white/70 to-white sm:bg-linear-to-r" />
    </div>
  );
}
