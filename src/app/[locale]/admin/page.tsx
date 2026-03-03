"use client";

import { SimpleLineChart, StatCard } from "@/components/admin";
import {
  AlertTriangle,
  Check,
  Clock,
  FileText,
  FolderKanban,
  HeartHandshake,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function AdminDashboard() {
  const t = useTranslations("admin.dashboard");

  const impactData = [120, 150, 180, 140, 210, 250, 280];
  const impactLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const recentActivities = [
    {
      id: 1,
      title: "New project launched",
      time: "2 hours ago",
      icon: Check,
      color: "bg-green-50 text-green-600",
    },
    {
      id: 2,
      title: "Urgent medicine request",
      time: "5 hours ago",
      icon: AlertTriangle,
      color: "bg-red-50 text-red-600",
    },
    {
      id: 3,
      title: "Donation received",
      time: "Yesterday",
      icon: HeartHandshake,
      color: "bg-blue-50 text-blue-600",
    },
    {
      id: 4,
      title: "Volunteer registered",
      time: "2 days ago",
      icon: Users,
      color: "bg-orange-50 text-orange-600",
    },
    {
      id: 5,
      title: "Report generated",
      time: "3 days ago",
      icon: FileText,
      color: "bg-gray-50 text-gray-600",
    },
  ];

  return (
    <div className="space-y-10 pb-12">
      <div className=" flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-foundation-navy text-4xl font-black tracking-tight">
            {t("title")}
          </h1>
          <p className="mt-1 font-bold text-gray-400">{t("welcome_back")}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-foundation-navy rounded-2xl border border-gray-200 bg-white/50 px-5 py-2.5 text-sm font-black whitespace-nowrap shadow-sm backdrop-blur-md">
            Last 30 Days
          </div>
          <button
            type="button"
            className="bg-foundation-gold shadow-foundation-gold/20 rounded-2xl px-6 py-2.5 text-sm font-black whitespace-nowrap text-white shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            Download Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: t("stats.total_projects"),
            value: "12",
            icon: FolderKanban,
            trend: "8%",
            trendUp: true,
          },
          {
            label: t("stats.volunteers"),
            value: "450",
            icon: Users,
            trend: "12%",
            trendUp: true,
          },
          { label: t("stats.news_articles"), value: "48", icon: FileText },
          {
            label: t("stats.donations"),
            value: "$12,450",
            icon: HeartHandshake,
            trend: "5%",
            trendUp: true,
          },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className=""
            style={{ animationDelay: `${(i + 1) * 100}ms` }}
          >
            <StatCard
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              trendUp={stat.trendUp}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div
          className=" rounded-4xl border border-gray-100 bg-white p-10 shadow-sm lg:col-span-2"
          style={{ animationDelay: "500ms" }}
        >
          <div className="mb-10 flex items-center justify-between">
            <h4 className="text-foundation-navy text-xl font-black tracking-tight">
              Impact Overview
            </h4>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="bg-foundation-gold ring-foundation-gold/10 h-3 w-3 rounded-full shadow-sm ring-4"></span>
                <span className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">
                  Monthly Progress
                </span>
              </span>
            </div>
          </div>
          <SimpleLineChart data={impactData} labels={impactLabels} />
        </div>

        <div
          className=" rounded-4xl border border-gray-100 bg-white p-10 shadow-sm"
          style={{ animationDelay: "600ms" }}
        >
          <div className="mb-8 flex items-center justify-between">
            <h4 className="text-foundation-navy text-xl font-black tracking-tight">
              Recent Activities
            </h4>
            <div className="text-foundation-gold bg-foundation-gold/10 flex h-10 w-10 items-center justify-center rounded-2xl shadow-inner">
              <Clock size={20} />
            </div>
          </div>
          <div className="space-y-8">
            {recentActivities.map((activity, _i) => (
              <div
                key={activity.id}
                className="group flex items-center gap-5 transition-all hover:translate-x-1"
              >
                <div
                  className={`${activity.color} hide-12 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-all group-hover:scale-110 group-hover:shadow-md`}
                >
                  <activity.icon size={20} />
                </div>
                <div>
                  <p className="text-foundation-navy group-hover:text-foundation-gold text-sm leading-tight font-black transition-colors">
                    {activity.title}
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="text-foundation-gold mt-10 w-full rounded-2xl border border-gray-50 py-3 text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:bg-gray-50 hover:shadow-sm active:scale-95"
          >
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}
