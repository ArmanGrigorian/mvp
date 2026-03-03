import { useTranslations } from "next-intl";

export function SloganArticle() {
  const t = useTranslations();

  return (
    <article className="max-w-2xl text-center lg:text-left">
      <h2 className="text-foundation-navy mb-6 text-3xl leading-tight font-bold uppercase sm:text-4xl md:text-5xl lg:text-6xl lg:leading-tight">
        {t("global.slogan")}
      </h2>
      <p className="text-foundation-navy/80 mx-auto mb-10 max-w-lg text-base leading-relaxed font-medium sm:text-lg lg:mx-0 lg:max-w-none lg:text-xl">
        {t("home.we_provides")}
      </p>
      <button
        type="button"
        className="bg-foundation-gold hover:bg-foundation-gold/90 transform rounded-lg px-12 py-4 text-lg font-bold tracking-wider text-white uppercase shadow-lg transition-all hover:scale-105 active:scale-95"
      >
        {t("global.help")}
      </button>
    </article>
  );
}
