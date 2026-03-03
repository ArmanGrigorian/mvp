"use client";

import { Edit2, Mail, Plus, Trash2 } from "lucide-react";
import { DataTable } from "@/components/admin";

const USERS_DATA = [
  {
    id: 1,
    name: "Artur Arakelyan",
    role: "Super Admin",
    email: "artur@foundation.org",
    status: "Active",
  },
  {
    id: 2,
    name: "Elena Ivanova",
    role: "Editor",
    email: "elena@foundation.org",
    status: "Active",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Project Manager",
    email: "john@foundation.org",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Maria Garcia",
    role: "Logistics Coordinator",
    email: "maria@foundation.org",
    status: "Active",
  },
  {
    id: 5,
    name: "David Chen",
    role: "Financial Officer",
    email: "david@foundation.org",
    status: "Active",
  },
  {
    id: 6,
    name: "Sarah Williams",
    role: "Field Correspondent",
    email: "sarah@foundation.org",
    status: "Active",
  },
  {
    id: 7,
    name: "Aram Mkrtchyan",
    role: "Translator",
    email: "aram@foundation.org",
    status: "Active",
  },
  {
    id: 8,
    name: "Lisa Wong",
    role: "Viewer",
    email: "lisa@foundation.org",
    status: "Active",
  },
];

interface UserItem {
  id: number;
  name: string;
  role: string;
  email: string;
  status: string;
}

export default function UsersAdmin() {
  const columns = [
    { header: "Name", accessor: "name" as const },
    { header: "Role", accessor: "role" as const },
    { header: "Email", accessor: "email" as const },
    {
      header: "Status",
      accessor: (item: UserItem) => (
        <span
          className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase ${
            item.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-700"
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
            <Mail size={16} />
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
            Team Members
          </h1>
          <p className="font-medium text-gray-400">
            Manage permissions and team access to the admin panel.
          </p>
        </div>
        <button
          type="button"
          className="bg-foundation-gold shadow-foundation-gold/20 flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <Plus size={20} />
          Invite Member
        </button>
      </div>

      <DataTable data={USERS_DATA} columns={columns} />
    </div>
  );
}
