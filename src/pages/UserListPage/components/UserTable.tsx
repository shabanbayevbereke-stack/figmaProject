import { Pencil } from "lucide-react";
import { FiTrash2, FiUser } from "react-icons/fi";
import type { User } from "@/shared/types/user";

interface UserTableProps {
  users: User[] | undefined;
  isDark: boolean;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export function UserTable({ users, isDark, onEdit, onDelete }: UserTableProps) {
  const cardStyle = `p-6 rounded-2xl border overflow-hidden  ${
    isDark
      ? "bg-[#1f2937] border-slate-800 text-white"
      : "bg-white border-slate-200 shadow-sm text-slate-900"
  }`;

  return (
    <div className={cardStyle}>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr
              className={`text-xs uppercase tracking-wider font-bold ${isDark ? "bg-slate-900/50 text-slate-400" : "bg-slate-50 text-slate-500"}`}
            >
              <th className="py-4 px-6 text-center w-16">#</th>
              <th className="py-4 px-6">Сотрудник</th>
              <th className="py-4 px-6">Системная роль</th>
              <th className="py-4 px-6">Отображение</th>
              <th className="py-4 px-6 text-right">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-inherit">
            {users?.map((user, index) => (
              <tr
                key={user.id}
                className={`group transition-colors ${isDark ? "hover:bg-slate-800/50" : "hover:bg-slate-50/50"}`}
              >
                <td className="py-4 px-6 text-center text-slate-400 font-mono text-sm">
                  {index + 1}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                      <FiUser size={18} />
                    </div>
                    <span className="font-semibold">
                      {`${user.lastName} ${user.firstName} ${user.middleName || ""}`}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 font-mono text-xs text-slate-500">
                  {user.role}
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? "bg-slate-800 text-indigo-300" : "bg-indigo-50 text-indigo-600"}`}
                  >
                    {user.roleName}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button
                    onClick={() => onEdit(user)}
                    className="p-2 text-slate-400 hover:text-blue-500 transition-all"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(user)}
                    className="p-2 text-slate-400 hover:text-red-500 transition-all"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
