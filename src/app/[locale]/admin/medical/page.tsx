"use client";

import { DataTable } from "@/components/admin";
import { Hospital, Plus, Truck, Warehouse } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function MedicalInventoryPage() {
  const t = useTranslations("admin.medical");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  interface ClinicNeed {
    id: number;
    clinic: string;
    medicine: string;
    quantity: string;
    priority: string;
  }

  interface StorageItem {
    id: number;
    location: string;
    medicine: string;
    available: string;
    expiry: string;
  }

  interface TransitItem {
    id: number;
    origin: string;
    destination: string;
    medicine: string;
    quantity: string;
    eta: string;
  }

  const CLINIC_NEEDS: ClinicNeed[] = [
    {
      id: 1,
      clinic: "Central City Hospital",
      medicine: "Insulin",
      quantity: "500 vials",
      priority: "High",
    },
    {
      id: 2,
      clinic: "Northern Relief Center",
      medicine: "Amoxicillin",
      quantity: "200 packs",
      priority: "Medium",
    },
    {
      id: 3,
      clinic: "Southern Mobile Unit",
      medicine: "First Aid Kits",
      quantity: "50 units",
      priority: "Urgent",
    },
    {
      id: 4,
      clinic: "Yerevan Medical Center",
      medicine: "Surgical Gloves",
      quantity: "1000 pairs",
      priority: "High",
    },
    {
      id: 5,
      clinic: "Gyumri Trauma Wing",
      medicine: "Morphine",
      quantity: "150 vials",
      priority: "Urgent",
    },
    {
      id: 6,
      clinic: "Border Health Post",
      medicine: "Water Purification Tabs",
      quantity: "5000 tabs",
      priority: "Medium",
    },
    {
      id: 7,
      clinic: "Regional Clinic C",
      medicine: "Bandages",
      quantity: "300 rolls",
      priority: "Normal",
    },
  ];

  const STORAGE_DATA: StorageItem[] = [
    {
      id: 1,
      location: "Main Warehouse A",
      medicine: "Insulin",
      available: "1200 vials",
      expiry: "2026-12-01",
    },
    {
      id: 2,
      location: "Regional Depot B",
      medicine: "Paracetamol",
      available: "5000 units",
      expiry: "2027-05-15",
    },
    {
      id: 3,
      location: "Main Warehouse A",
      medicine: "Amoxicillin",
      available: "300 packs",
      expiry: "2026-08-20",
    },
    {
      id: 4,
      location: "Port Terminal 4",
      medicine: "IV Fluids",
      available: "2500 bags",
      expiry: "2025-11-10",
    },
    {
      id: 5,
      location: "Main Warehouse A",
      medicine: "Oxygen Tanks",
      available: "80 cylinders",
      expiry: "2030-01-01",
    },
    {
      id: 6,
      location: "Cold Storage S1",
      medicine: "Vaccines (Polio)",
      available: "3000 doses",
      expiry: "2026-06-30",
    },
    {
      id: 7,
      location: "Regional Depot B",
      medicine: "Antibiotics",
      available: "1500 kits",
      expiry: "2026-04-12",
    },
  ];

  const TRANSIT_DATA: TransitItem[] = [
    {
      id: 1,
      origin: "Port of Miami",
      destination: "Main Warehouse A",
      medicine: "Surgical Masks",
      quantity: "10,000",
      eta: "2026-03-10",
    },
    {
      id: 2,
      origin: "Lufthansa Cargo HQ",
      destination: "Regional Depot B",
      medicine: "Vaccines",
      quantity: "2,000 doses",
      eta: "2026-03-05",
    },
    {
      id: 3,
      origin: "Red Cross Logistics",
      destination: "Gyumri Depot",
      medicine: "Tents & Blanket Kits",
      quantity: "500 sets",
      eta: "2026-03-08",
    },
    {
      id: 4,
      origin: "Local Pharma Corp",
      destination: "Main Warehouse A",
      medicine: "Epinephrine",
      quantity: "400 units",
      eta: "2026-03-04",
    },
  ];

  return (
    <div className="animate-fade-in space-y-10 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foundation-navy text-4xl font-black tracking-tight">
            {t("title")}
          </h1>
          <p className="mt-1 font-bold text-gray-400">{t("subtitle")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {/* Medicine Request Form */}
        <section
          className="hover:shadow-foundation-gold/5 rounded-4xl border border-gray-100 bg-white p-10 shadow-sm transition-all hover:shadow-2xl"
          style={{ animationDelay: "100ms" }}
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="bg-foundation-gold/10 text-foundation-gold flex h-12 w-12 items-center justify-center rounded-2xl shadow-inner">
              <Plus size={24} strokeWidth={2.5} />
            </div>
            <h2 className="text-xl font-black tracking-tight text-gray-800">
              {t("form.title")}
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5"
          >
            <div className="space-y-3 lg:col-span-1">
              <label
                htmlFor="clinic-select"
                className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase"
              >
                {t("form.clinic_name")}
              </label>
              <select
                id="clinic-select"
                required
                className="focus:border-foundation-gold focus:ring-foundation-gold/10 w-full rounded-2xl border border-gray-100 bg-gray-50/50 px-5 py-3 text-sm font-semibold shadow-xs transition-all outline-none focus:bg-white focus:ring-4"
              >
                <option value="">{t("form.select_clinic")}</option>
                <option>Central City Hospital</option>
                <option>Northern Relief Center</option>
                <option>Southern Mobile Unit</option>
              </select>
            </div>

            <div className="space-y-3 lg:col-span-1">
              <label
                htmlFor="medicine-input"
                className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase"
              >
                {t("form.medicine_name")}
              </label>
              <input
                id="medicine-input"
                required
                type="text"
                placeholder={t("form.medicine_placeholder")}
                className="focus:border-foundation-gold focus:ring-foundation-gold/10 w-full rounded-2xl border border-gray-100 bg-gray-50/50 px-5 py-3 text-sm font-semibold shadow-xs transition-all outline-none focus:bg-white focus:ring-4"
              />
            </div>

            <div className="space-y-3 lg:col-span-1">
              <label
                htmlFor="quantity-input"
                className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase"
              >
                {t("form.quantity")}
              </label>
              <input
                id="quantity-input"
                required
                type="text"
                className="focus:border-foundation-gold focus:ring-foundation-gold/10 w-full rounded-2xl border border-gray-100 bg-gray-50/50 px-5 py-3 text-sm font-semibold shadow-xs transition-all outline-none focus:bg-white focus:ring-4"
              />
            </div>

            <div className="space-y-3 lg:col-span-1">
              <label
                htmlFor="priority-select"
                className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase"
              >
                {t("form.priority")}
              </label>
              <select
                id="priority-select"
                className="focus:border-foundation-gold focus:ring-foundation-gold/10 w-full rounded-2xl border border-gray-100 bg-gray-50/50 px-5 py-3 text-sm font-semibold shadow-xs transition-all outline-none focus:bg-white focus:ring-4"
              >
                <option>{t("form.priority_normal")}</option>
                <option>{t("form.priority_high")}</option>
                <option>{t("form.priority_urgent")}</option>
              </select>
            </div>

            <div className="flex items-end lg:col-span-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-foundation-navy hover:bg-foundation-navy/95 shadow-foundation-navy/20 w-full rounded-2xl px-6 py-3 text-sm font-black text-white shadow-xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? "..." : t("form.submit")}
              </button>
            </div>
          </form>

          {showSuccess && (
            <div className="animate-in fade-in slide-in-from-top-2 mt-6 rounded-2xl bg-emerald-50 px-6 py-4 text-sm font-bold text-emerald-600 shadow-sm">
              {t("form.success_msg")}
            </div>
          )}
        </section>

        {/* Section 1: Clinic Needs */}
        <div className="space-y-6" style={{ animationDelay: "200ms" }}>
          <div className="flex items-center gap-4 px-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner">
              <Hospital size={24} />
            </div>
            <h2 className="text-xl font-black tracking-tight text-gray-800">
              {t("clinic_needs.title")}
            </h2>
          </div>
          <DataTable<ClinicNeed>
            data={CLINIC_NEEDS}
            columns={[
              { header: t("clinic_needs.clinic"), accessor: "clinic" },
              { header: t("clinic_needs.medicine"), accessor: "medicine" },
              { header: t("clinic_needs.quantity"), accessor: "quantity" },
              {
                header: t("clinic_needs.priority"),
                accessor: (item) => (
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-[10px] font-black tracking-widest uppercase ${
                      item.priority === "Urgent"
                        ? "bg-rose-50 text-rose-600"
                        : item.priority === "High"
                          ? "bg-orange-50 text-orange-600"
                          : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {item.priority}
                  </span>
                ),
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Section 2: Storage Availability */}
          <div className="space-y-6" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-4 px-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">
                <Warehouse size={24} />
              </div>
              <h2 className="text-xl font-black tracking-tight text-gray-800">
                {t("storage.title")}
              </h2>
            </div>
            <DataTable<StorageItem>
              data={STORAGE_DATA}
              columns={[
                { header: t("storage.location"), accessor: "location" },
                { header: t("storage.medicine"), accessor: "medicine" },
                { header: t("storage.available"), accessor: "available" },
                { header: t("storage.expiry"), accessor: "expiry" },
              ]}
            />
          </div>

          {/* Section 3: In Transit */}
          <div className="space-y-6" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-4 px-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 shadow-inner">
                <Truck size={24} />
              </div>
              <h2 className="text-xl font-black tracking-tight text-gray-800">
                {t("transit.title")}
              </h2>
            </div>
            <DataTable<TransitItem>
              data={TRANSIT_DATA}
              columns={[
                { header: t("transit.origin"), accessor: "origin" },
                { header: t("transit.destination"), accessor: "destination" },
                { header: t("transit.medicine"), accessor: "medicine" },
                { header: t("transit.quantity"), accessor: "quantity" },
                { header: t("transit.eta"), accessor: "eta" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
