import { useUserProfile } from "@/shared/api/useUserProfile";
import { useTheme } from "next-themes";
import { FiUser, FiShield, FiSettings, FiEdit3, FiKey } from "react-icons/fi";

export function UserPage() {
  const { data } = useUserProfile();
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const cardStyle = `rounded-2xl border transition-all duration-200 ${
    isDark
      ? "bg-[#1f2937] border-slate-800 text-white"
      : "bg-white border-slate-200 shadow-sm text-slate-900"
  }`;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className={`${cardStyle} p-8 relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-r from-indigo-500 to-purple-600 opacity-20" />

        <div className="relative flex flex-col md:flex-row items-center md:items-end gap-6 mt-6">
          <div className="w-32 h-32 rounded-3xl bg-indigo-500 flex items-center justify-center text-white text-4xl font-black shadow-xl ring-4 ring-white dark:ring-[#1f2937]">
            {data?.firstName?.[0] || <FiUser />}
          </div>

          <div className="flex-1 text-center md:text-left pb-2">
            <h1 className="text-3xl font-bold">{data?.firstName}</h1>
            <p className="text-indigo-500 font-medium">{"Пользователь"}</p>
          </div>

          <button className="mb-2 flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition-colors text-sm font-medium">
            <FiEdit3 /> Редактировать
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className={`${cardStyle} p-6`}>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <FiSettings className="text-slate-400" /> Личные данные
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <InfoItem label="Имя" value={data?.firstName} />
              <InfoItem label="ID Пользователя" value={`#${data?.id}`} />
            </div>
          </div>

          <div className={`${cardStyle} p-6`}>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <FiShield className="text-slate-400" /> Безопасность
            </h3>
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <FiKey className="text-indigo-500" />
                <div>
                  <p className="text-sm font-bold">Пароль</p>
                  <p className="text-xs text-slate-500">
                    Последнее обновление: 3 месяца назад
                  </p>
                </div>
              </div>
              <button className="text-xs font-bold text-indigo-500 hover:underline">
                Изменить
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div
            className={`${cardStyle} p-6 bg-linear-to-br from-indigo-500/5 to-transparent`}
          >
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
              Доступ
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Роль:</span>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-500 rounded-lg text-xs font-bold uppercase">
                  {data?.role}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Аккаунт:</span>
                <span className="text-green-500 text-xs font-bold">
                  Активен
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
        {label}
      </p>
      <p className="text-sm font-semibold">{value || "Не указано"}</p>
    </div>
  );
}
