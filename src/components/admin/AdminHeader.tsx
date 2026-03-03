"use client";

import { Bell, Search, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components";

export function AdminHeader() {
  const t = useTranslations("admin");

  return (
    <header className="sticky top-0 right-0 left-0 z-40 flex h-20 items-center justify-between border-b border-gray-100 bg-white/70 px-8 backdrop-blur-xl transition-all duration-300">
      <div className="group focus-within:border-foundation-gold/30 flex w-96 max-w-full items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 px-4 py-2.5 transition-all focus-within:bg-white focus-within:shadow-sm">
        <Search
          size={18}
          className="group-focus-within:text-foundation-gold text-gray-400 transition-colors"
        />
        <input
          type="text"
          placeholder={t("header.search_placeholder")}
          className="text-foundation-navy w-full border-none bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      <div className="flex items-center gap-6">
        <LocaleSwitcher />

        <button
          type="button"
          className="group hover:text-foundation-gold relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition-all hover:bg-gray-50 active:scale-95"
        >
          <Bell size={20} />
          <span className="bg-foundation-gold ring-foundation-gold/20 absolute top-2.5 right-2.5 h-2 w-2 rounded-full border-2 border-white shadow-sm ring-2"></span>
        </button>

        <div className="mx-2 h-8 w-px bg-gray-100"></div>

        <div className="group flex cursor-pointer items-center gap-3 rounded-2xl p-1 pr-3 transition-all hover:bg-gray-50 active:scale-95">
          <div className="text-foundation-navy group-hover:border-foundation-gold flex h-10 w-10 items-center justify-center rounded-xl border-2 border-transparent bg-gray-100 shadow-inner transition-all group-hover:shadow-md">
            <User size={20} />
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-foundation-navy text-sm leading-none font-bold">
              Admin User
            </p>
            <p className="mt-1 text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Super Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
