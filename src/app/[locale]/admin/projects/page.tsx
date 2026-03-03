"use client";

import { Edit2, Plus, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { DataTable } from "@/components/admin";

const PROJECTS_DATA = [
  {
    id: 1,
    name: "Pure Water Initiative",
    region: "Armenia / Shirak",
    status: "Active",
    budget: "$75,000",
  },
  {
    id: 2,
    name: "Medical Supply Chain Optimization",
    region: "USA / Global",
    status: "Planning",
    budget: "$150,000",
  },
  {
    id: 3,
    name: "Earthquake Disaster Relief",
    region: "Turkey / Syria",
    status: "Completed",
    budget: "$45,000",
  },
  {
    id: 4,
    name: "Youth Vocational Education",
    region: "East Africa",
    status: "Active",
    budget: "$25,000",
  },
  {
    id: 5,
    name: "Mobile Health Unit Expansion",
    region: "Border Regions",
    status: "Active",
    budget: "$110,000",
  },
  {
    id: 6,
    name: "Digital Literacy Program",
    region: "Regional Schools",
    status: "Completed",
    budget: "$12,000",
  },
  {
    id: 7,
    name: "Agricultural Sustainability",
    region: "Artsakh",
    status: "Planning",
    budget: "$85,000",
  },
  {
    id: 8,
    name: "Orphanage Solarization",
    region: "Yerevan",
    status: "Paused",
    budget: "$22,000",
  },
];

interface ProjectItem {
  id: number;
  name: string;
  region: string;
  status: string;
  budget: string;
}

export default function ProjectsAdmin() {
  const _t = useTranslations("admin.projects");

  const columns = [
    { header: "Project Name", accessor: "name" as const },
    { header: "Region", accessor: "region" as const },
    {
      header: "Status",
      accessor: (item: ProjectItem) => (
        <span
          className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase ${
            item.status === "Active"
              ? "bg-green-100 text-green-700"
              : item.status === "Planning"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-700"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    { header: "Budget", accessor: "budget" as const },
    {
      header: "Actions",
      accessor: () => (
        <div className="flex items-center gap-2">
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
            Projects Management
          </h1>
          <p className="font-medium text-gray-400">
            Create and manage your foundation's impact projects.
          </p>
        </div>
        <button
          type="button"
          className="bg-foundation-gold shadow-foundation-gold/20 flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <Plus size={20} />
          Add New Project
        </button>
      </div>

      <DataTable data={PROJECTS_DATA} columns={columns} />
    </div>
  );
}
