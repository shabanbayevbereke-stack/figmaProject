import {
  useDoctorsData,
  useCreateDoctor,
  useDeleteDoctor,
} from "@/shared/api/useDoctorsData";
import { useState } from "react";
import { useTheme } from "next-themes";
import { FiPlus, FiTrash2, FiUser, FiClock } from "react-icons/fi";
import { Loader2 } from "lucide-react";

export function ItemPage() {
  const { data: doctors, isLoading } = useDoctorsData();
  const { resolvedTheme } = useTheme();
  const [name, setName] = useState("");

  const { mutate, isPending } = useCreateDoctor();
  const { mutate: deleteDoctor } = useDeleteDoctor();

  const isDark = resolvedTheme === "dark";

  const cardStyle = `p-6 rounded-2xl border ${
    isDark
      ? "bg-[#1f2937] border-slate-800 text-white"
      : "bg-white border-slate-200 shadow-sm text-slate-900"
  }`;

  const handleAddDoctor = () => {
    if (!name.trim()) return;
    mutate({
      name: name,
      specialization: "Терапевт",
      experience: 5,
    });
    setName("");
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Управление персоналом</h1>

        <div className="flex gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите ФИО врача..."
            className={`px-4 py-2 rounded-xl border outline-none transition-all w-64 ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-200 focus:border-indigo-500"
            }`}
          />
          <button
            onClick={handleAddDoctor}
            disabled={isPending || !name}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-5 py-2 rounded-xl font-medium transition-colors"
          >
            {isPending ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <FiPlus />
            )}
            Создать
          </button>
        </div>
      </div>

      <div className={`${cardStyle} overflow-hidden p-0`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr
                className={`text-xs uppercase tracking-wider font-bold ${isDark ? "bg-slate-900/50 text-slate-400" : "bg-slate-50 text-slate-500"}`}
              >
                <th className="py-4 px-6 text-center w-16">#</th>
                <th className="py-4 px-6">Врач</th>
                <th className="py-4 px-6">Специализация</th>
                <th className="py-4 px-6">Опыт</th>
                <th className="py-4 px-6 text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-inherit">
              {doctors?.map((doctor, index) => (
                <tr
                  key={doctor.id}
                  className={`group transition-colors ${isDark ? "hover:bg-slate-800/50" : "hover:bg-slate-50/50"}`}
                >
                  <td className="py-4 px-6 text-center text-slate-400 font-mono text-sm">
                    {index + 1}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                        <FiUser size={16} />
                      </div>
                      <span className="font-semibold">
                        {doctor.name || "Без имени"}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? "bg-slate-800 text-slate-300"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {doctor.specialization}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-sm">
                      <FiClock className="text-slate-400" />
                      {doctor.experience} лет
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => deleteDoctor(doctor.id)}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                      title="Удалить"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}

              {isLoading && (
                <tr>
                  <td colSpan={5} className="py-20">
                    <div className="flex flex-col items-center justify-center text-slate-400 gap-2">
                      <Loader2 className="animate-spin" size={32} />
                      <span className="text-sm">Загрузка данных...</span>
                    </div>
                  </td>
                </tr>
              )}

              {!isLoading && doctors?.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-500">
                    Список врачей пуст
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
