"use client";

import { Phone } from "lucide-react";

interface FloatingCallButtonProps {
  phoneNumber: string;
}

export function FloatingCallButton({ phoneNumber }: FloatingCallButtonProps) {
  return (
    <a
      href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
      className="fixed bottom-8 right-8 z-[90] flex h-16 w-16 items-center justify-center rounded-full bg-foundation-gold text-white shadow-2xl transition-all hover:scale-110 hover:bg-foundation-gold/90 active:scale-95 group"
      aria-label="Call Us"
    >
      <div className="absolute inset-0 rounded-full bg-foundation-gold animate-ping opacity-20 group-hover:opacity-40" />
      <Phone size={28} className="relative z-10" />

      {/* Tooltip */}
      <span className="absolute right-20 scale-0 rounded-lg bg-foundation-navy px-4 py-2 text-sm font-bold text-white transition-all group-hover:scale-100 whitespace-nowrap shadow-xl">
        {phoneNumber}
      </span>
    </a>
  );
}
