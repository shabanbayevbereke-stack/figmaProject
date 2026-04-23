"use client";

import { useState, useMemo } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { TableIcon } from "lucide-react";
import { dataTable } from "@/shared/mocks/tableData";

export function CustomTable() {
  const { resolvedTheme } = useTheme();

  const [sortBy, setSortBy] = useState("id");
  const [order, setOrder] = useState("asc");

  const sortedData = useMemo(() => {
    return [...dataTable].sort((a, b) => {
      const valA = a[sortBy as keyof typeof a];
      const valB = b[sortBy as keyof typeof b];
      if (order === "asc") return valA > valB ? 1 : -1;
      return valA < valB ? 1 : -1;
    });
  }, [sortBy, order]);

  const isDark = resolvedTheme === "dark";

  const selectStyles = `p-2.5 rounded-xl border transition-all outline-none focus:ring-2 ring-blue-500/50 ${
    isDark
      ? "bg-slate-800 border-slate-700 text-white"
      : "bg-white border-gray-200 text-gray-900"
  }`;

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <TableIcon className="w-5 h-5 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Своя таблица</h2>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={selectStyles}
          >
            <option value="id">По ID</option>
            <option value="itemName">По имени</option>
            <option value="price">По цене</option>
          </select>

          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className={selectStyles}
          >
            <option value="asc">Возрастание</option>
            <option value="desc">Убывание</option>
          </select>
        </div>
      </div>

      <div
        className={`overflow-hidden rounded-2xl border transition-all duration-300 shadow-xl ${
          isDark
            ? "bg-slate-900/50 border-slate-800 shadow-blue-900/10"
            : "bg-white border-gray-100 shadow-gray-200/50"
        }`}
      >
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr
              className={`border-b transition-colors ${
                isDark
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-gray-50 border-gray-100"
              }`}
            >
              <th className="px-6 py-4 font-semibold w-24 text-gray-500">ID</th>
              <th className="px-6 py-4 font-semibold">Название товара</th>
              <th className="px-6 py-4 font-semibold text-right">Цена</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {sortedData.map((item) => (
                <motion.tr
                  layout
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`group transition-colors ${
                    isDark ? "hover:bg-slate-800/50" : "hover:bg-blue-50/50"
                  }`}
                >
                  <td className="px-6 py-4 font-mono text-xs opacity-60">
                    #{item.id}
                  </td>
                  <td className="px-6 py-4 font-medium">{item.itemName}</td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={`px-3 py-1 rounded-full font-bold ${
                        isDark
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.price.toLocaleString()} $
                    </span>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
}
