import { useTranslations } from "next-intl";

export default function Hgroup() {
  const t = useTranslations("global");
  return (
    <hgroup>
      <h1 className="capitalize">{t("humanitarian_bridge")}</h1>
      <p className="capitalize">{t("charity_foundation")}</p>
    </hgroup>
  );
}
