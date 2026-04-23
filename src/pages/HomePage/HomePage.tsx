import { Cards } from "@/features/components/Cards";
import { CustomTable } from "@/features/components/CustomTable";
import { useTheme } from "next-themes";

export function HomePage() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const cardBase = `p-6 rounded-2xl border transition-all duration-200 ${
    isDark
      ? "bg-[#1f2937] border-slate-800 text-white"
      : "bg-white border-slate-200 shadow-sm text-slate-900"
  }`;

  return (
    <div className="space-y-6 max-w-350 mx-auto">
      <div className="flex justify-between items-center px-1">
        <h1 className="text-2xl font-bold tracking-tight">Панель управления</h1>
        <select
          className={`px-4 py-2 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 ${
            isDark
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          <option>Сортировка: по ID</option>
          <option>Сортировка: по имени</option>
        </select>
      </div>

      <div className={cardBase}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
              Ваш статус
            </p>
            <h2 className="text-2xl font-black text-indigo-500 italic">
              60% до Золота
            </h2>
          </div>
          <div className="flex gap-6 text-sm">
            {["Бронза", "Серебро", "Золото"].map((tier, i) => (
              <div key={tier} className="text-center">
                <p className="text-slate-400 text-[10px] uppercase font-bold">
                  {tier}
                </p>
                <p className="font-bold tracking-tight">
                  {[100, 500, 1000][i]} ₽
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`h-4 w-full rounded-full overflow-hidden p-1 ${isDark ? "bg-slate-900" : "bg-slate-100"}`}
        >
          <div
            className="h-full rounded-full bg-linear-to-r from-indigo-600 to-blue-400 transition-all duration-700"
            style={{ width: "60%" }}
          />
        </div>
        <p className="mt-3 text-xs text-slate-500 font-medium tracking-wide">
          ● Последняя покупка: 5 мин назад{" "}
          <span className="mx-2 text-slate-300">|</span> ● Доступно бонусов: 120
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Cards item={1} />
        <Cards item={2} />
        <Cards item={3} />
      </div>

      <div className={`${cardBase} overflow-hidden p-0`}>
        <div className="p-6 border-b border-inherit flex justify-between items-center">
          <h3 className="text-lg font-bold">Последние операции</h3>
          <div className="flex gap-2">
            <span className="text-xs bg-indigo-500/10 text-indigo-500 px-2 py-1 rounded-md font-bold">
              LIVE
            </span>
          </div>
        </div>
        <div className="p-4 overflow-x-auto">
          <CustomTable />
        </div>
      </div>
    </div>
  );
}
