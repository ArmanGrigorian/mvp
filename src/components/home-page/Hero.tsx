import { useTranslations } from "next-intl";
import { BackgroundImage } from "./BackgroundImage";
import { PresidentCard } from "./PresidentCard";
import { SloganArticle } from "./SloganArticle";

export function Hero() {
  const t = useTranslations();

  return (
    <header className="animate-fade-in relative flex min-h-[90vh] items-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-0">
      <h1 className="sr-only">{t("global.humanitarian_bridge")}</h1>

      <BackgroundImage />

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-between gap-16 px-6 lg:flex-row lg:gap-12">
        <div className="animate-slide-up opacity-0 [animation-delay:200ms]">
          <SloganArticle />
        </div>
        <div className="animate-slide-up opacity-0 [animation-delay:400ms]">
          <PresidentCard />
        </div>
      </div>
    </header>
  );
}
