import { LocaleSwitcher } from "@/components";
import { Link } from "@/i18n/navigation";
import { NAVBAR_LINKS } from "@/lib/constants";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav");

  return (
    <nav className="flex items-center justify-evenly">
      <ul className="flex items-center justify-center gap-4">
        {NAVBAR_LINKS.map((link) => (
          <li key={link.href}>
            <Link className="capitalize" href={link.href}>
              {t(link.label)}
            </Link>
          </li>
        ))}
      </ul>
      <LocaleSwitcher />
    </nav>
  );
}
