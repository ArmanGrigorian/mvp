"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";

export default function RegisterPage() {
  const tGlobal = useTranslations("global");
  const tAuth = useTranslations("auth");
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");

      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50/50 px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/50">
        <div className="mb-8 text-center">
          <h1 className="text-foundation-navy text-3xl font-bold tracking-tight uppercase">
            {tGlobal("register")}
          </h1>
          <p className="mt-2 text-gray-500">{tAuth("join_mission")}</p>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-foundation-navy mb-2 block text-sm font-semibold tracking-wider uppercase">
              {tAuth("full_name")}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="focus:border-foundation-gold focus:ring-foundation-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-1 transition-all outline-none focus:ring-2"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="text-foundation-navy mb-2 block text-sm font-semibold tracking-wider uppercase">
              {tAuth("email_address")}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="focus:border-foundation-gold focus:ring-foundation-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition-all outline-none focus:ring-2"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="text-foundation-navy mb-2 block text-sm font-semibold tracking-wider uppercase">
              {tAuth("password")}
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="focus:border-foundation-gold focus:ring-foundation-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition-all outline-none focus:ring-2"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-foundation-navy hover:bg-foundation-navy/90 shadow-foundation-navy/20 w-full rounded-lg py-4 text-center font-bold tracking-widest text-white uppercase shadow-lg transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? tAuth("registering") : tGlobal("register")}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          {tAuth("already_have_account")}{" "}
          <Link
            href="/login"
            className="text-foundation-gold font-bold transition-all hover:underline"
          >
            {tGlobal("login")}
          </Link>
        </div>
      </div>
    </div>
  );
}
