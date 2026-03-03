"use client";

import { useTranslations } from "next-intl";

export function Testimonials() {
    const t = useTranslations("testimonials");

    const testimonialIds = ["1", "2", "3"];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-foundation-navy mb-4 text-4xl font-bold tracking-tight">
                        {t("title")}
                    </h2>
                    <p className="text-foundation-navy/60 mx-auto max-w-2xl text-lg">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {testimonialIds.map((id) => (
                        <article
                            key={id}
                            className="relative flex flex-col rounded-foundation bg-foundation-light p-10 shadow-sm transition-all hover:shadow-foundation"
                        >
                            <div className="text-foundation-gold mb-6">
                                <svg
                                    className="h-8 w-8"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                            </div>
                            <blockquote className="flex-grow">
                                <p className="text-foundation-navy/80 text-lg leading-relaxed italic">
                                    "{t(`items.${id}.text`)}"
                                </p>
                            </blockquote>
                            <div className="mt-8 border-t border-gray-100 pt-8">
                                <p className="text-foundation-navy font-bold">{t(`items.${id}.author`)}</p>
                                <p className="text-foundation-gold text-sm font-medium uppercase tracking-wider">
                                    {t(`items.${id}.role`)}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
