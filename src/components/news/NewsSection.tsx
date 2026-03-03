"use client";

import { useTranslations } from "next-intl";

export function NewsSection() {
  const t = useTranslations("news");

  const articles = [
    {
      id: 1,
      date: "Oct 24, 2025",
      title: "New Medical Cargo Arrives in Armenia",
      summary:
        "A large shipment of essential medicines and medical equipment has successfully reached our distribution center in Yerevan.",
      featured: true,
    },
    {
      id: 2,
      date: "Oct 15, 2025",
      title: "Clean Water Initiative Expands to 5 New Villages",
      summary:
        "Our team has completed the installation of solar-powered water pumps, providing clean water to over 2,000 residents.",
      featured: false,
    },
    {
      id: 3,
      date: "Oct 02, 2025",
      title: "Winter Relief Program Launch",
      summary:
        "We are starting our annual winter relief program to provide blankets and heating supplies to displaced families.",
      featured: false,
    },
    {
      id: 4,
      date: "Sep 20, 2025",
      title: "Annual Charity Gala Results",
      summary:
        "Thank you to all our donors! This year's gala raised $250,000 for emergency humanitarian aid.",
      featured: false,
    },
  ];

  return (
    <section className="bg-foundation-light py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-foundation-navy mb-4 text-4xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <p className="text-foundation-navy/60 mx-auto max-w-2xl text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            {articles
              .filter((a) => a.featured)
              .map((article) => (
                <article
                  key={article.id}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-xl"
                >
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    <img
                      src="/images/news-featured.png"
                      alt="Humanitarian Aid Cargo"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foundation-navy/20 to-transparent" />
                  </div>
                  <div className="p-10">
                    <div className="mb-4 flex items-center gap-4">
                      <span className="text-foundation-gold text-sm font-bold uppercase tracking-wider">
                        {t("featured")}
                      </span>
                      <span className="text-foundation-navy/40 text-sm">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-foundation-navy mb-6 text-3xl font-bold">
                      {article.title}
                    </h3>
                    <p className="text-foundation-navy/60 mb-8 text-lg leading-relaxed">
                      {article.summary}
                    </p>
                    <button className="bg-foundation-navy hover:bg-foundation-gold rounded-full px-8 py-4 font-bold text-white transition-all">
                      {t("read_more")}
                    </button>
                  </div>
                </article>
              ))}
          </div>

          {/* Sidebar News */}
          <div className="space-y-8">
            {articles
              .filter((a) => !a.featured)
              .map((article) => (
                <article
                  key={article.id}
                  className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <span className="text-foundation-navy/40 mb-2 block text-sm">
                    {article.date}
                  </span>
                  <h4 className="text-foundation-navy mb-4 text-xl font-bold">
                    {article.title}
                  </h4>
                  <p className="text-foundation-navy/60 mb-6 text-sm leading-relaxed">
                    {article.summary}
                  </p>
                  <button className="text-foundation-gold text-sm font-bold transition-colors hover:text-foundation-navy">
                    {t("read_more")} →
                  </button>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
