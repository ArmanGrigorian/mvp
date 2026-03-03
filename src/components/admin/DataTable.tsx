"use client";

import { Search } from "lucide-react";

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
}

interface BaseItem {
  id: string | number;
}

export function DataTable<T extends BaseItem>({
  data,
  columns,
  onRowClick,
  isLoading,
}: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-4xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-50/40">
              {columns.map((column) => (
                <th
                  key={column.header}
                  className={`border-b border-gray-100 px-6 py-5 text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase ${column.className || ""}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {isLoading
              ? [1, 2, 3, 4, 5].map((skeletonId) => (
                  <tr key={`skeleton-${skeletonId}`} className="animate-pulse">
                    {columns.map((column) => (
                      <td
                        key={`skeleton-${skeletonId}-${column.header}`}
                        className="px-6 py-6"
                      >
                        <div className="h-4 w-full rounded-lg bg-gray-100/80" />
                      </td>
                    ))}
                  </tr>
                ))
              : data.map((item) => (
                  <tr
                    key={item.id}
                    className={`group transition-all duration-300 ${onRowClick ? "hover:bg-foundation-light/50 cursor-pointer" : "hover:bg-gray-50/30"}`}
                    onClick={() => onRowClick?.(item)}
                  >
                    {columns.map((column) => (
                      <td
                        key={column.header}
                        className={`text-foundation-navy px-6 py-5 text-sm font-semibold transition-all ${column.className || ""}`}
                      >
                        {typeof column.accessor === "function"
                          ? column.accessor(item)
                          : (item[column.accessor] as React.ReactNode)}
                      </td>
                    ))}
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      {!isLoading && data.length === 0 && (
        <div className="p-16 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-gray-300">
            <Search size={32} strokeWidth={1.5} />
          </div>
          <p className="text-sm font-bold text-gray-400 italic">
            No data discovered in this quadrant.
          </p>
        </div>
      )}
    </div>
  );
}
