"use client";

import { Edit2, Eye, Plus, Trash2 } from "lucide-react";
import { DataTable } from "@/components/admin";

const NEWS_DATA = [
  {
    id: 1,
    title: "New Partnership Announced with Global Health",
    category: "Corporate",
    date: "2024-03-01",
    status: "Published",
  },
  {
    id: 2,
    title: "Annual Impact Report 2023: A Year of Progress",
    category: "Reports",
    date: "2024-02-15",
    status: "Published",
  },
  {
    id: 3,
    title: "Volunteer Drive Success: 200 New Signups",
    category: "Community",
    date: "2024-02-10",
    status: "Draft",
  },
  {
    id: 4,
    title: "Water Well Implementation in Shirak Region",
    category: "Field Support",
    date: "2024-01-25",
    status: "Published",
  },
  {
    id: 5,
    title: "Emergency Relief Fund: Goal Reached!",
    category: "Fundraising",
    date: "2024-03-02",
    status: "Published",
  },
  {
    id: 6,
    title: "How to Host a Community Fundraiser",
    category: "Resources",
    date: "2024-02-28",
    status: "Draft",
  },
  {
    id: 7,
    title: "Logistics Update: New Warehouse in Gyumri",
    category: "Logistics",
    date: "2024-02-20",
    status: "Published",
  },
  {
    id: 8,
    title: "Interview: 10 Years of Foundation Service",
    category: "Community",
    date: "2024-01-15",
    status: "Archived",
  },
];

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  status: string;
}

export default function NewsAdmin() {
  const columns = [
    { header: "Title", accessor: "title" as const },
    { header: "Category", accessor: "category" as const },
    { header: "Date", accessor: "date" as const },
    {
      header: "Status",
      accessor: (item: NewsItem) => (
        <span
          className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase ${
            item.status === "Published"
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: () => (
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hover:text-foundation-navy rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100"
          >
            <Eye size={16} />
          </button>
          <button
            type="button"
            className="hover:text-foundation-navy rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100"
          >
            <Edit2 size={16} />
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-foundation-navy text-3xl font-bold">
            News & Articles
          </h1>
          <p className="font-medium text-gray-400">
            Keep your supporters updated with the latest foundation news.
          </p>
        </div>
        <button
          type="button"
          className="bg-foundation-gold shadow-foundation-gold/20 flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <Plus size={20} />
          Write Article
        </button>
      </div>

      <DataTable data={NEWS_DATA} columns={columns} />
    </div>
  );
}
