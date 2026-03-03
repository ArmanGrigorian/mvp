"use client";

import { Link, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function LoginPage() {
  const tGlobal = useTranslations("global");
  const tAuth = useTranslations("auth");
  const router = useRouter();
  const [formData, setFormData] = useState({
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
      // Mock successful login for demo
      localStorage.setItem("user", JSON.stringify({ name: "Demo User", email: formData.email }));
      router.push("/dashboard");
    } catch (err: any) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#fcfdff] px-6 py-20 overflow-hidden">
      {/* Decorative background blur objects */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-foundation-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-foundation-navy/5 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md transform rounded-3xl border border-white bg-white/80 p-10 shadow-hd backdrop-blur-xl transition-all">
        <div className="mb-10 text-center">
          <h1 className="text-foundation-navy text-4xl font-extrabold tracking-tight uppercase">
            {tGlobal("login")}
          </h1>
          <p className="mt-3 text-gray-400 font-medium">{tAuth("welcome_back")}</p>
        </div>

        {error && (
          <div className="mb-8 rounded-2xl bg-red-50 p-5 text-sm font-medium text-red-600 border border-red-100">
            {error}
          </div>
        )}

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-foundation-navy/80 ml-1 block text-xs font-bold tracking-widest uppercase">
              {tAuth("email_address")}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="focus:border-foundation-gold/50 focus:ring-foundation-gold/10 w-full rounded-2xl border border-gray-100 bg-gray-50/50 px-5 py-4 transition-all outline-none focus:bg-white focus:ring-4"
              placeholder="name@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-foundation-navy/80 ml-1 block text-xs font-bold tracking-widest uppercase">
              {tAuth("password")}
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="focus:border-foundation-gold/50 focus:ring-foundation-gold/10 w-full rounded-2xl border border-gray-100 bg-gray-50/50 px-5 py-4 transition-all outline-none focus:bg-white focus:ring-4"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-foundation-navy hover:bg-foundation-navy/95 shadow-foundation-navy/20 relative group overflow-hidden w-full rounded-2xl py-5 text-center font-bold tracking-[0.2em] text-white uppercase shadow-xl transition-all hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50"
          >
            <span className="relative z-10">{loading ? tAuth("logging_in") : tGlobal("login")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </form>

        <div className="mt-10 text-center text-sm font-medium text-gray-400">
          {tAuth("dont_have_account")}{" "}
          <Link
            href="/register"
            className="text-foundation-gold ml-1 font-bold transition-all hover:text-foundation-gold/80 hover:underline"
          >
            {tGlobal("register")}
          </Link>
        </div>
      </div>
    </div>
  );
}
