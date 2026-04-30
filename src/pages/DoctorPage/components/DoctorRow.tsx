import type { Doctor } from "@/shared/types/CreateDoctorDto";
import { FiUser, FiClock, FiTrash2 } from "react-icons/fi";

interface DoctorRowProps {
  doctor: Doctor;
  index: number;
  isDark: boolean;
  onDelete: (id: string) => void;
}

export function DoctorRow({ doctor, index, isDark, onDelete }: DoctorRowProps) {
  return (
    <tr className={`group transition-colors ${isDark ? "hover:bg-slate-800/50" : "hover:bg-slate-50/50"}`}>
      <td className="py-4 px-6 text-center text-slate-400 font-mono text-sm">{index + 1}</td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
            <FiUser size={16} />
          </div>
          <span className="font-semibold">{doctor.name || "Без имени"}</span>
        </div>
      </td>
      <td className="py-4 px-6">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"}`}>
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
        <button onClick={() => onDelete(doctor.id)} className="p-2 text-slate-400 hover:text-red-500 rounded-lg">
          <FiTrash2 size={18} />
        </button>
      </td>
    </tr>
  );
}