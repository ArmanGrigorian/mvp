"use client";

import { useTranslations } from "next-intl";
import { HumanitarianIcon, MedicalIcon, WaterIcon } from "../shared/Icons";

export function ProjectsSection() {
  const t = useTranslations("projects");
  const gt = useTranslations("global");

  const projects = [
    {
      id: 1,
      title: "Clean Water for Sahel",
      category: "Water",
      goal: 50000,
      funded: 35000,
      icon: <WaterIcon className="h-6 w-6 text-foundation-gold" />,
    },
    {
      id: 2,
      title: "Medical Supplies for rural clinics",
      category: "Medical",
      goal: 75000,
      funded: 62000,
      icon: <MedicalIcon className="h-6 w-6 text-foundation-gold" />,
    },
    {
      id: 3,
      title: "Emergency Food Distribution",
      category: "Humanitarian",
      goal: 30000,
      funded: 12000,
      icon: <HumanitarianIcon className="h-6 w-6 text-foundation-gold" />,
    },
    {
      id: 4,
      title: "Armenia Water Project",
      category: "Water",
      goal: 100000,
      funded: 45000,
      icon: <WaterIcon className="h-6 w-6 text-foundation-gold" />,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-foundation-navy mb-4 text-4xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <p className="text-foundation-navy/60 mx-auto max-w-2xl text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-foundation-light p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  {project.icon}
                </span>
                <span className="text-foundation-navy/40 text-sm font-medium uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="text-foundation-navy mb-4 text-2xl font-bold">
                {project.title}
              </h3>

              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-foundation-navy/60">{t("funded")}</span>
                  <span className="font-bold text-foundation-gold">
                    {Math.round((project.funded / project.goal) * 100)}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="bg-foundation-gold h-full transition-all duration-500"
                    style={{
                      width: `${(project.funded / project.goal) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foundation-navy/40 text-xs uppercase tracking-wider">
                    {t("budget_goal")}
                  </p>
                  <p className="text-foundation-navy font-bold">
                    ${project.goal.toLocaleString()}
                  </p>
                </div>
                <button className="text-foundation-gold font-bold transition-colors hover:text-foundation-navy">
                  {t("learn_more")} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
