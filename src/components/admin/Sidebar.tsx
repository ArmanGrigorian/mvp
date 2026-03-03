"use client";

import { Link, usePathname } from "@/i18n/navigation";
import {
  FileText,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Pill,
  Settings,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

const ADMIN_NAV_LINKS = [
  { href: "/admin", label: "dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "projects", icon: FolderKanban },
  { href: "/admin/medical", label: "medical", icon: Pill },
  { href: "/admin/news", label: "news", icon: FileText },
  { href: "/admin/users", label: "users", icon: Users },
  { href: "/admin/settings", label: "settings", icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const t = useTranslations("admin");

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`bg-foundation-navy fixed top-0 left-0 z-50 flex h-screen w-64 flex-col text-white transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-white/10 p-6">
          <Link href="/" className="group flex items-center gap-2" onClick={onClose}>
            <div className="bg-foundation-gold flex h-8 w-8 items-center justify-center rounded font-bold text-white transition-transform group-hover:scale-110">
              HB
            </div>
            <span className="text-sm font-bold tracking-wider uppercase">
              Admin Panel
            </span>
          </Link>
        </div>

        <nav className="flex-1 space-y-2 px-4 py-6">
          {ADMIN_NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive =
              pathname === link.href ||
              (link.href !== "/admin" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-foundation-gold shadow-foundation-gold/20 text-white shadow-lg"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon
                  size={20}
                  className={
                    isActive ? "text-white" : "group-hover:text-foundation-gold"
                  }
                />
                <span className="text-sm font-medium">
                  {t(`nav.${link.label}`)}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-white/10 p-4">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-white/60 transition-all hover:bg-white/5 hover:text-white"
          >
            <LogOut size={20} />
            <span className="text-sm font-medium">{t("nav.logout")}</span>
          </button>
        </div>
      </aside>
    </>
  );
}
