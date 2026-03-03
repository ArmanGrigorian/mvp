"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  item_name: string;
  qty?: number | string;
  quantity?: string | number;
  expiry?: string;
  location: string;
  type: "supply" | "request";
  status?: string;
  allocated?: boolean;
}

interface Client {
  id: number;
  name: string;
  email: string;
}

interface AdminData {
  inventory: Item[];
  clients: Client[];
  requests: Item[];
}

export default function AdminPanel() {
  const tAdmin = useTranslations("admin");
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/inventory")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching admin data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="border-foundation-gold h-12 w-12 animate-spin rounded-full border-b-2" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-foundation-navy text-2xl font-bold">
          {tAdmin("error_loading")}
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto space-y-12 px-6 py-24">
      <div>
        <h1 className="text-foundation-navy mb-6 text-3xl font-bold">
          {tAdmin("dashboard_title")}
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Inventory Table */}
          <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-foundation-navy mb-4 text-xl font-semibold">
              {tAdmin("inventory_supplies")}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-gray-100 bg-gray-50/50 text-gray-500 uppercase">
                  <tr>
                    <th className="px-4 py-3">{tAdmin("item")}</th>
                    <th className="px-4 py-3">{tAdmin("qty")}</th>
                    <th className="px-4 py-3">{tAdmin("expiry")}</th>
                    <th className="px-4 py-3">{tAdmin("type")}</th>
                    <th className="px-4 py-3">{tAdmin("status")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.inventory.map((item) => (
                    <tr
                      key={item.id}
                      className="transition-colors hover:bg-gray-50/50"
                    >
                      <td className="text-foundation-navy px-4 py-3 font-medium">
                        {item.item_name}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {item.qty || item.quantity}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {item.expiry || "-"}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{item.type}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                            item.status === "Allocated"
                              ? "bg-green-100 text-green-700"
                              : item.status === "Pending Match"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Requests Table */}
          <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-foundation-navy mb-4 text-xl font-semibold">
              {tAdmin("open_requests")}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-gray-100 bg-gray-50/50 text-gray-500 uppercase">
                  <tr>
                    <th className="px-4 py-3">{tAdmin("item")}</th>
                    <th className="px-4 py-3">{tAdmin("qty")}</th>
                    <th className="px-4 py-3">{tAdmin("expiry")}</th>
                    <th className="px-4 py-3">{tAdmin("type")}</th>
                    <th className="px-4 py-3">{tAdmin("location")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.requests.map((request) => (
                    <tr
                      key={request.id}
                      className="transition-colors hover:bg-gray-50/50"
                    >
                      <td className="text-foundation-navy px-4 py-3 font-medium">
                        {request.item_name}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {request.qty || request.quantity || "-"}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {request.expiry || "-"}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {request.type}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {request.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Clients Table */}
        <section className="mt-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-foundation-navy mb-4 text-xl font-semibold">
            {tAdmin("registered_clients")}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-100 bg-gray-50/50 text-gray-500 uppercase">
                <tr>
                  <th className="px-4 py-3">{tAdmin("name")}</th>
                  <th className="px-4 py-3">{tAdmin("email")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.clients.map((client) => (
                  <tr
                    key={client.id}
                    className="transition-colors hover:bg-gray-50/50"
                  >
                    <td className="text-foundation-navy px-4 py-3 font-medium">
                      {client.name}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{client.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
