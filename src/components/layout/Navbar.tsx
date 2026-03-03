import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NAVBAR_LINKS } from "@/lib/constants";

export function Navbar() {
  const t = useTranslations("nav");

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {NAVBAR_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              className="text-foundation-navy hover:text-foundation-gold text-sm font-medium tracking-wide uppercase transition-colors"
              href={link.href}
            >
              {t(link.label)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
