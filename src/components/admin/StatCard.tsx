import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  trendUp,
}: StatCardProps) {
  return (
    <div className="group hover:shadow-foundation-gold/10 relative overflow-hidden rounded-4xl border border-gray-100 bg-linear-to-br from-white to-gray-50/50 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
            {label}
          </p>
          <h3 className="text-foundation-navy text-3xl font-black tracking-tight">
            {value}
          </h3>
          {trend && (
            <div
              className={`mt-4 flex items-center gap-1.5 text-xs font-bold ${trendUp ? "text-emerald-500" : "text-rose-500"}`}
            >
              <div
                className={`flex items-center justify-center rounded-full p-0.5 ${trendUp ? "bg-emerald-50" : "bg-rose-50"}`}
              >
                <span className="text-[10px]">{trendUp ? "↑" : "↓"}</span>
              </div>
              <span>{trend}</span>
              <span className="ml-1 text-[10px] tracking-wider text-gray-400 uppercase">
                vs last month
              </span>
            </div>
          )}
        </div>
        <div className="bg-foundation-light text-foundation-gold group-hover:bg-foundation-gold group-hover:shadow-foundation-gold/30 flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:text-white group-hover:shadow-lg">
          <Icon size={28} strokeWidth={2.5} />
        </div>
      </div>

      {/* Subtle decorative background element */}
      <div className="bg-foundation-gold/5 absolute -right-4 -bottom-4 h-24 w-24 rounded-full opacity-0 transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />
    </div>
  );
}
