import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Logo() {
  const t = useTranslations("global");
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label={`${t("charity")} ${t("foundation")}`}
    >
      <div
        className="bg-foundation-navy relative flex h-10 w-10 rotate-45 transform items-center justify-center overflow-hidden rounded-lg"
        aria-hidden="true"
      >
        <div className="bg-foundation-gold absolute inset-0 translate-x-1/2 translate-y-1/2 -rotate-45 transform opacity-20" />
        <div className="-rotate-45 transform text-xl font-bold text-white">
          HB
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-foundation-navy text-[15px] leading-tight font-bold tracking-tight uppercase">
          {t("charity")}
        </span>
        <span className="text-foundation-gold text-[15px] leading-tight font-bold tracking-widest uppercase">
          {t("foundation")}
        </span>
      </div>
    </Link>
  );
}
