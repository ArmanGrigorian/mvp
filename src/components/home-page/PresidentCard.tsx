import Image from "next/image";
import { useTranslations } from "next-intl";
import { FloatingInfoCard } from "./FloatingInfoCard";

export function PresidentCard() {
  const t = useTranslations();
  return (
    <article className="group relative w-96">
      <div className="relative h-[450px] w-full max-w-[320px] transform overflow-hidden rounded-foundation border-4 border-white shadow-foundation transition-transform group-hover:scale-[1.02] sm:h-[500px] sm:max-w-[400px] lg:h-[600px] lg:max-w-[450px]">
        <Image
          src="/images/president.png"
          alt={t("global.artur_arakelyan")}
          fill
          className="object-cover"
          priority
        />
      </div>

      <FloatingInfoCard />
    </article>
  );
}
