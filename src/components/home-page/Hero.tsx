import { useTranslations } from "next-intl";
import { BackgroundImage } from "./BackgroundImage";
import { PresidentCard } from "./PresidentCard";
import { SloganArticle } from "./SloganArticle";

export function Hero() {
  const t = useTranslations();

  return (
    <header className="animate-fade-in relative flex min-h-[90vh] items-center overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-16">
      <h1 className="sr-only">{t("global.humanitarian_bridge")}</h1>

      <BackgroundImage />

      <div className="relative z-10 mx-auto flex max-w-(--width-hd) flex-col items-center justify-between gap-16 px-4 lg:flex-row lg:gap-12 lg:px-8">
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
