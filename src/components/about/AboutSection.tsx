"use client";

import { useTranslations } from "next-intl";

export function AboutSection() {
    const t = useTranslations("about");

    const team = [
        {
            id: 1,
            name: "Artur Arakelyan",
            role: "Founder & President",
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Operations Director",
        },
        {
            id: 3,
            name: "Levon Mkrtchyan",
            role: "Logistics Coordinator",
        },
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-24 text-center">
                    <h2 className="text-foundation-navy mb-4 text-4xl font-bold tracking-tight">
                        {t("title")}
                    </h2>
                    <p className="text-foundation-navy/60 mx-auto max-w-2xl text-lg">
                        {t("subtitle")}
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="mb-32 grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="rounded-3xl bg-foundation-light p-12">
                        <h3 className="text-foundation-navy mb-6 text-2xl font-bold">
                            {t("mission.title")}
                        </h3>
                        <p className="text-foundation-navy/60 text-lg leading-relaxed">
                            {t("mission.desc")}
                        </p>
                    </div>
                    <div className="rounded-3xl border border-gray-100 bg-white p-12 shadow-sm">
                        <h3 className="text-foundation-navy mb-6 text-2xl font-bold">
                            {t("vision.title")}
                        </h3>
                        <p className="text-foundation-navy/60 text-lg leading-relaxed">
                            {t("vision.desc")}
                        </p>
                    </div>
                </div>

                {/* Team */}
                <div>
                    <div className="mb-16 text-center">
                        <h3 className="text-foundation-navy mb-4 text-3xl font-bold">
                            {t("team.title")}
                        </h3>
                        <p className="text-foundation-navy/60 mx-auto max-w-2xl">
                            {t("team.subtitle")}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {team.map((member) => (
                            <div key={member.id} className="group text-center">
                                <div className="bg-foundation-light mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full transition-transform group-hover:scale-105">
                                    {/* Team Member Placeholder */}
                                    <div className="flex h-full w-full items-center justify-center text-gray-300">
                                        <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-foundation-navy text-xl font-bold">{member.name}</h4>
                                <p className="text-foundation-gold font-medium uppercase tracking-wider text-sm">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
