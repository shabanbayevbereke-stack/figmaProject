import { useCompanySearch } from "@/shared/api/useCompanySearch";
import {
  Loader2,
  Search,
  Building2,
  Fingerprint,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function SellPage() {
  const [bin, setBin] = useState("");
  const { data, refetch, isLoading } = useCompanySearch(bin);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    if (bin.length === 12) {
      refetch();
    }
  }, [bin, refetch]);

  const cardStyle = `p-6 rounded-2xl border transition-all ${
    isDark
      ? "bg-[#1f2937] border-slate-800 text-white"
      : "bg-white border-slate-200 shadow-sm text-slate-900"
  }`;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Поиск контрагента</h1>
        <p className="text-slate-500 text-sm">
          Введите 12 цифр БИН для получения информации о компании
        </p>
      </div>

      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
        <input
          type="text"
          maxLength={12}
          placeholder="Введите БИН..."
          value={bin}
          onChange={(e) => setBin(e.target.value.replace(/\D/g, ""))}
          className={`w-full pl-12 pr-4 py-4 rounded-2xl border outline-none transition-all text-lg font-medium ${
            isDark
              ? "bg-slate-800 border-slate-700 focus:border-indigo-500 text-white"
              : "bg-white border-slate-200 focus:border-indigo-500 shadow-sm"
          }`}
        />
        {isLoading && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Loader2 className="animate-spin text-indigo-500" size={24} />
          </div>
        )}
      </div>

      {data && (
        <div className={cardStyle}>
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-indigo-500/10 rounded-xl">
              <Building2 className="text-indigo-500" size={32} />
            </div>
            <div>
              <h2 className="text-xl font-bold leading-tight">
                {data.nёameru}
              </h2>
              <p className="text-indigo-500 font-medium text-sm flex items-center gap-1 mt-1">
                <Fingerprint size={14} /> БИН {data.bin}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div></div>
          </div>
        </div>
      )}

      {!isLoading && !data && bin.length === 12 && (
        <div className="text-center py-12 text-slate-500">
          <p>Компания с таким БИН не найдена</p>
        </div>
      )}
    </div>
  );
}
