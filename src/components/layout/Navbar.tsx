import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NAVBAR_LINKS } from "@/lib/constants";

interface NavbarProps {
  onItemClick?: () => void;
}

export function Navbar({ onItemClick }: NavbarProps) {
  const t = useTranslations("nav");

  return (
    <nav>
      <ul className="flex flex-col items-center gap-8 lg:flex-row">
        {NAVBAR_LINKS.map((link) => (
          <li key={link.href} className="w-full text-center lg:w-auto">
            <Link
              className="text-foundation-navy hover:text-foundation-gold block border-b border-gray-50 py-4 text-lg font-medium tracking-wide uppercase transition-colors lg:inline lg:border-none lg:py-0 lg:text-sm"
              href={link.href}
              onClick={onItemClick}
            >
              {t(link.label)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

