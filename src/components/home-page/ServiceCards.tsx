import { useTranslations } from "next-intl";
import { HumanitarianIcon, MedicalIcon, WaterIcon } from "../shared/Icons";

export function ServiceCards() {
  const t = useTranslations("global");

  const services = [
    {
      id: "water",
      title: t("water_from_armenia"),
      description: t("delivery_water"),
      icon: (
        <WaterIcon
          className="text-foundation-gold h-12 w-12"
          aria-label={t("water_from_armenia")}
        />
      ),
    },
    {
      id: "medical",
      title: t("medicines_and_equipment_from_usa"),
      description: t("providing_medical_assistance_and_medicines"),
      icon: (
        <MedicalIcon
          className="text-foundation-gold h-12 w-12"
          aria-label={t("medicines_and_equipment_from_usa")}
        />
      ),
    },
    {
      id: "humanitarian",
      title: t("humanitarian_aid"),
      description: t("delivery_of_humanitarian_cargo"),
      icon: (
        <HumanitarianIcon
          className="text-foundation-gold h-12 w-12"
          aria-label={t("humanitarian_aid")}
        />
      ),
    },
  ];

  return (
    <section className="bg-foundation-light py-24">
      <div className="container mx-auto px-6">
        <ul className="animate-slide-up grid grid-cols-1 gap-12 opacity-0 [animation-delay:600ms] lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id}>
              <article className="group transform rounded-foundation border border-gray-50 bg-white p-10 text-center shadow-foundation transition-all hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-8 flex transform justify-center transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-foundation-navy mb-4 flex h-16 items-center justify-center text-2xl font-bold tracking-tight uppercase">
                  {service.title}
                </h3>
                <p className="text-foundation-navy/60 leading-relaxed">
                  {service.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
