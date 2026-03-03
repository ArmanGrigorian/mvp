"use client";

import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contact");

  return (
    <section className="bg-foundation-light py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-foundation-navy mb-4 text-4xl font-extrabold tracking-tight uppercase">
                        {t("title")}
                    </h2>
                    <p className="text-foundation-navy/60 mx-auto max-w-2xl text-lg font-medium">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-foundation-navy mb-8 text-2xl font-bold tracking-tight uppercase">
                                {t("info.title")}
                            </h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-5 group">
                                    <div className="bg-foundation-gold/10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-foundation-gold transition-all group-hover:scale-110 group-hover:bg-foundation-gold group-hover:text-white">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-foundation-navy/80 font-bold uppercase tracking-widest text-[10px] mb-1">{t("info.address")}</p>
                                        <p className="text-foundation-navy text-lg font-medium opacity-70">123 Charity Lane, Yerevan, Armenia</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="bg-foundation-gold/10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-foundation-gold transition-all group-hover:scale-110 group-hover:bg-foundation-gold group-hover:text-white">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-foundation-navy/80 font-bold uppercase tracking-widest text-[10px] mb-1">{t("info.phone")}</p>
                                        <p className="text-foundation-navy text-lg font-medium opacity-70">+374 10 00 00 00</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="bg-foundation-gold/10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-foundation-gold transition-all group-hover:scale-110 group-hover:bg-foundation-gold group-hover:text-white">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-foundation-navy/80 font-bold uppercase tracking-widest text-[10px] mb-1">{t("info.email")}</p>
                                        <p className="text-foundation-navy text-lg font-medium opacity-70">info@humanitarianbridge.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-[2.5rem] bg-white p-10 lg:p-14 shadow-2xl shadow-foundation-navy/5 border border-white/50 backdrop-blur-sm">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div className="space-y-3">
                                    <label htmlFor="contact-name" className="text-foundation-navy/80 ml-1 block text-xs font-extrabold uppercase tracking-widest">
                                        {t("form.name")}
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        className="h-16 w-full rounded-2xl border border-gray-100 bg-foundation-light px-6 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-foundation-gold/50 focus:ring-4 focus:ring-foundation-gold/5"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="contact-email" className="text-foundation-navy/80 ml-1 block text-xs font-extrabold uppercase tracking-widest">
                                        {t("form.email")}
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        className="h-16 w-full rounded-2xl border border-gray-100 bg-foundation-light px-6 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-foundation-gold/50 focus:ring-4 focus:ring-foundation-gold/5"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="contact-subject" className="text-foundation-navy/80 ml-1 block text-xs font-extrabold uppercase tracking-widest">
                                    {t("form.subject")}
                                </label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    className="h-16 w-full rounded-2xl border border-gray-100 bg-foundation-light px-6 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-foundation-gold/50 focus:ring-4 focus:ring-foundation-gold/5"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="contact-message" className="text-foundation-navy/80 ml-1 block text-xs font-extrabold uppercase tracking-widest">
                                    {t("form.message")}
                                </label>
                                <textarea
                                    id="contact-message"
                                    rows={4}
                                    className="w-full rounded-2xl border border-gray-100 bg-foundation-light p-6 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-foundation-gold/50 focus:ring-4 focus:ring-foundation-gold/5"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-foundation-navy hover:bg-foundation-navy/95 shadow-foundation-navy/20 relative group overflow-hidden flex h-16 w-full items-center justify-center rounded-2xl font-bold tracking-[0.2em] text-white uppercase shadow-xl transition-all hover:-translate-y-1 active:scale-[0.98]"
                            >
                                <span className="relative z-10">{t("form.send")}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  );
}
