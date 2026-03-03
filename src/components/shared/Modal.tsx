"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foundation-navy/40 backdrop-blur-md transition-all animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg transform overflow-hidden rounded-3xl border border-white/20 bg-white/95 p-10 shadow-hd backdrop-blur-xl transition-all animate-slide-up">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          {title && (
            <h2 className="text-foundation-navy text-3xl font-extrabold tracking-tight uppercase">
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-foundation-gold bg-gray-50 hover:bg-gray-100 rounded-full transition-all p-2"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}
