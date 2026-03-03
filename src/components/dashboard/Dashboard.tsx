"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/navigation";

export default function Dashboard() {
  const t = useTranslations("dashboard");
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    item_name: "",
    quantity: "",
    expiry: "",
    location: "",
    type: "supply",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(savedUser));
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage(t("success_added"));
        setFormData({ ...formData, item_name: "", quantity: "", expiry: "" });
      } else {
        throw new Error(t("error_failed"));
      }
    } catch (err) {
      setMessage(t("error_retry"));
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12">
          <h1 className="text-foundation-navy text-3xl font-bold">
            {t("welcome_user", { name: user.name })}
          </h1>
          <p className="mt-2 text-gray-500">{t("contribute_data_desc")}</p>
        </div>

        <section className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/50">
          <h2 className="text-foundation-navy mb-6 text-xl font-bold tracking-tight uppercase">
            {t("add_new_entry")}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="text-foundation-navy mb-2 block text-sm font-semibold tracking-wider uppercase">
                  {t("entry_type")}
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="focus:border-foundation-gold focus:ring-foundation-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition-all outline-none focus:ring-2"
                >
                  <option value="supply">{t("supply_desc")}</option>
                  <option value="request">{t("request_desc")}</option>
                </select>
              </div>

              <div>
                <label className="text-foundation-navy mb-2 block text-sm font-semibold tracking-wider uppercase">
                  {t("item_name")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.item_name}
                  onChange={(e) =>
                    setFormData({ ...formData, item_name: e.target.value })
                  }
                  className="focus:border-foundation-gold focus:ring-foundation-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition-all outline-none focus:ring-2"
                  placeholder="e.g. Antibiotics, Generator"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="text-foundation-navy mb-2 block text-sm font-semibold tracking-wider uppercase">
                  {t("quantity_detail")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  className="focus:border-foundation-gold focus:ring-foundation-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition-all outline-none focus:ring-2"
                  placeholder="e.g. 500 units, 2 large boxes"
                />
              </div>

              <div>
                <label className="text-foundation-navy mb-2 block text-sm font-semibold tracking-wider uppercase">
                  {t("location")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="focus:border-foundation-gold focus:ring-foundation-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition-all outline-none focus:ring-2"
                  placeholder="e.g. Yerevan, Armenia"
                />
              </div>
            </div>

            {formData.type === "supply" && (
              <div>
                <label className="text-foundation-navy mb-2 block text-sm font-semibold tracking-wider uppercase">
                  {t("expiry_date")}
                </label>
                <input
                  type="text"
                  value={formData.expiry}
                  onChange={(e) =>
                    setFormData({ ...formData, expiry: e.target.value })
                  }
                  className="focus:border-foundation-gold focus:ring-foundation-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition-all outline-none focus:ring-2"
                  placeholder="e.g. 2026-12"
                />
              </div>
            )}

            {message && (
              <div
                className={`rounded-lg p-4 text-sm font-medium ${
                  message.includes("success")
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-foundation-gold hover:bg-foundation-gold/90 shadow-foundation-gold/20 w-full rounded-lg py-4 text-center font-bold tracking-widest text-white uppercase shadow-lg transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? t("processing") : t("submit_entry")}
            </button>
          </form>
        </section>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              localStorage.removeItem("user");
              router.push("/login");
            }}
            className="hover:text-foundation-navy text-sm font-medium text-gray-400 transition-colors"
          >
            {t("logout")}
          </button>
        </div>
      </div>
    </div>
  );
}
