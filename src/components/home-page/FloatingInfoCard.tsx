import { useTranslations } from "next-intl";

export function FloatingInfoCard() {
  const t = useTranslations();
  return (
    <hgroup className="absolute -right-2 -bottom-12 max-w-[280px] rounded-2xl border border-white bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:-right-6 sm:-bottom-10 sm:max-w-[320px] sm:p-6 lg:-right-12 lg:max-w-[400px] lg:p-8">
      <h3 className="text-foundation-navy mb-1 text-xl font-bold tracking-tight uppercase sm:text-2xl lg:text-3xl">
        {t("global.artur_arakelyan")}
      </h3>
      <p className="text-foundation-gold mb-3 text-xs font-bold tracking-widest uppercase sm:mb-4 sm:text-sm lg:text-base">
        {t("global.founder_and_president")}
      </p>
      <q className="text-foundation-navy/70 text-xs leading-relaxed italic sm:text-sm lg:text-base">
        {t("home.we_join_forces")}
      </q>
    </hgroup>
  );
}
