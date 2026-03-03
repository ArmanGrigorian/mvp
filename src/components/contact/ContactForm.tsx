"use client";

import { useTranslations } from "next-intl";

export function ContactForm() {
    const t = useTranslations("contact");

    return (
        <section className="bg-foundation-light py-24">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-foundation-navy mb-4 text-4xl font-bold tracking-tight">
                        {t("title")}
                    </h2>
                    <p className="text-foundation-navy/60 mx-auto max-w-2xl text-lg">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-foundation-navy mb-8 text-2xl font-bold">
                                {t("info.title")}
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-foundation-gold/10 flex h-12 w-12 items-center justify-center rounded-2xl text-foundation-gold">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-foundation-navy font-bold uppercase tracking-wider text-xs">{t("info.address")}</p>
                                        <p className="text-foundation-navy/60">123 Charity Lane, Yerevan, Armenia</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-foundation-gold/10 flex h-12 w-12 items-center justify-center rounded-2xl text-foundation-gold">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-foundation-navy font-bold uppercase tracking-wider text-xs">{t("info.phone")}</p>
                                        <p className="text-foundation-navy/60">+374 10 00 00 00</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-foundation-gold/10 flex h-12 w-12 items-center justify-center rounded-2xl text-foundation-gold">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-foundation-navy font-bold uppercase tracking-wider text-xs">{t("info.email")}</p>
                                        <p className="text-foundation-navy/60">info@humanitarianbridge.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-3xl bg-white p-12 shadow-xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-foundation-navy text-sm font-bold uppercase tracking-wider outline-none">
                                        {t("form.name")}
                                    </label>
                                    <input
                                        type="text"
                                        className="h-14 w-full rounded-2xl border-gray-100 bg-foundation-light px-6 outline-none transition-all placeholder:text-gray-400 focus:border-foundation-gold focus:ring-1 focus:ring-foundation-gold"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-foundation-navy text-sm font-bold uppercase tracking-wider outline-none">
                                        {t("form.email")}
                                    </label>
                                    <input
                                        type="email"
                                        className="h-14 w-full rounded-2xl border-gray-100 bg-foundation-light px-6 outline-none transition-all placeholder:text-gray-400 focus:border-foundation-gold focus:ring-1 focus:ring-foundation-gold"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-foundation-navy text-sm font-bold uppercase tracking-wider outline-none">
                                    {t("form.subject")}
                                </label>
                                <input
                                    type="text"
                                    className="h-14 w-full rounded-2xl border-gray-100 bg-foundation-light px-6 outline-none transition-all placeholder:text-gray-400 focus:border-foundation-gold focus:ring-1 focus:ring-foundation-gold"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-foundation-navy text-sm font-bold uppercase tracking-wider outline-none">
                                    {t("form.message")}
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full rounded-2xl border-gray-100 bg-foundation-light p-6 outline-none transition-all placeholder:text-gray-400 focus:border-foundation-gold focus:ring-1 focus:ring-foundation-gold"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="button"
                                className="bg-foundation-navy hover:bg-foundation-gold flex h-14 w-full items-center justify-center rounded-2xl font-bold text-white transition-all"
                            >
                                {t("form.send")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
