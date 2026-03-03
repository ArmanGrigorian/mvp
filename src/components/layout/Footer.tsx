import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("global");

  return (
    <footer className="bg-foundation-navy py-16 text-center text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed font-medium italic opacity-90 lg:text-xl">
          &quot;{t("we_strive_for_transparency")}&quot;
        </p>
        <div className="bg-foundation-gold mx-auto mb-8 h-1 w-24"></div>
        <small className="text-sm tracking-widest uppercase opacity-50">
          © {new Date().getFullYear()} {t("charity_foundation")}. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
}
