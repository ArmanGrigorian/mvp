"use client";

import { LayoutDashboard } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { AuthModal } from "../shared/AuthModal";
import { Logo } from "./Logo";
import { LocaleSwitcher } from "./locale-switcher/LocaleSwitcher";
import { Navbar } from "./Navbar";

export function Header() {
  const t = useTranslations("global");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-20 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-(--width-hd) items-center justify-between gap-4 px-4 lg:px-8">
        {/* Left: Logo */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Middle: Navbar Links (Desktop) */}
        <div className="hidden flex-1 justify-center lg:flex">
          <Navbar />
        </div>

        {/* Right: Help Button & Locale Switcher (Desktop) */}
        <div className="hidden items-center gap-6 lg:flex">
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="bg-foundation-gold hover:bg-foundation-gold/90 flex transform cursor-pointer items-center gap-2 rounded-lg px-8 py-2.5 text-sm font-bold tracking-wider text-white uppercase shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <LayoutDashboard size={18} />
            {t("admin")}
          </button>
          <LocaleSwitcher />
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`bg-foundation-navy h-0.5 w-6 transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`bg-foundation-navy h-0.5 w-6 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`bg-foundation-navy h-0.5 w-6 transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ top: "80px", height: "calc(100vh - 80px)" }}
      >
        <div className="flex flex-col items-center gap-8 pt-12">
          <Navbar onItemClick={() => setIsMenuOpen(false)} />
          <div className="flex flex-col items-center gap-6">
            <button
              className="bg-foundation-gold flex transform cursor-pointer items-center gap-2 rounded-lg px-12 py-3 text-lg font-bold tracking-wider text-white uppercase shadow-lg transition-all active:scale-95"
              onClick={() => {
                setIsMenuOpen(false);
                setIsAuthModalOpen(true);
              }}
            >
              <LayoutDashboard size={20} />
              {t("admin")}
            </button>
            <LocaleSwitcher />
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
}
