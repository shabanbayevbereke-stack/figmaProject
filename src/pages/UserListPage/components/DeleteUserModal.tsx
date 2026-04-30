import type { User } from "@/shared/types/user";

interface DeleteUserModalProps {
  isOpen: boolean;
  user: User | null;
  isDark: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteUserModal({
  isOpen,
  user,
  isDark,
  onClose,
  onConfirm,
}: DeleteUserModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div
        className={`relative w-full max-w-md p-6 rounded-2xl shadow-xl border ${
          isDark
            ? "bg-slate-900 border-slate-800 text-white"
            : "bg-white border-slate-200 text-slate-900"
        }`}
      >
        <h3 className="text-xl font-bold mb-2">Подтвердите удаление</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          Вы действительно хотите удалить врача{" "}
          <span className="font-semibold text-red-500">
            {user?.firstName || "этого пользователя"}
          </span>
          ? Это действие нельзя отменить.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-xl font-medium transition-colors ${
              isDark
                ? "bg-slate-800 hover:bg-slate-700"
                : "bg-slate-100 hover:bg-slate-200"
            }`}
          >
            Отмена
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
