import type { User } from "@/shared/types/user";
import { useEffect, useState } from "react";

interface EditUserModalProps {
  isOpen: boolean;
  user: User | null;
  isDark: boolean;
  onClose: () => void;
  onSave: (userId: string, data: User) => Promise<void>;
}

export function EditUserModal({
  isOpen,
  user,
  isDark,
  onClose,
  onSave,
}: EditUserModalProps) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [role, setRole] = useState("");
  const [roleName, setRoleName] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    if (user && isOpen) {
      setLastName(user.lastName || "");
      setFirstName(user.firstName || "");
      setMiddleName(user.middleName || "");
      setRole(user.role || "");
      setRoleName(user.roleName || "");
      setServerError(null);
    }
  }, [user, isOpen]);

  if (!isOpen || !user) return null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const updatedUser: User = {
        ...user,
        lastName: lastName.trim(),
        firstName: firstName.trim(),
        middleName: middleName.trim() || null,
        role: role.trim(),
        roleName: roleName.trim(),
      };
      await onSave(user.id, updatedUser);
      onClose();
    } catch (error) {
      setServerError(error + "Ошибка на сервере");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-4 py-2 rounded-xl border outline-none transition-all ${
    isDark
      ? "bg-slate-800 border-slate-700 text-white focus:border-indigo-500"
      : "bg-white border-slate-200 text-slate-900 focus:border-indigo-400"
  }`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-md p-8 rounded-2xl border shadow-2xl ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"}`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
        >
          Редактировать сотрудника
        </h3>

        {serverError && (
          <div className="mb-4 p-3 bg-red-500/10 text-red-500 rounded-lg text-sm border border-red-500/20">
            {serverError}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
              Фамилия
            </label>
            <input
              className={inputClasses}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
              Имя
            </label>
            <input
              className={inputClasses}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
              Отчество
            </label>
            <input
              className={inputClasses}
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div className="pt-2 border-t border-slate-700/50 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
                  Код роли
                </label>
                <input
                  className={inputClasses}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
                  Название роли
                </label>
                <input
                  className={inputClasses}
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Отмена
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-50"
          >
            {isSubmitting ? "..." : "Сохранить"}
          </button>
        </div>
      </form>
    </div>
  );
}
