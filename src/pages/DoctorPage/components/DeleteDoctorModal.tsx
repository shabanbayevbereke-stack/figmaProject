import type { Doctor } from "@/shared/types/CreateDoctorDto";

interface Props {
  isOpen: boolean;
  user: Doctor | null; 
  isDark: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteDoctorModal({ isOpen, user, isDark, onClose, onConfirm }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full max-w-md p-6 rounded-2xl shadow-xl border ${
        isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
      }`}>
        <h3 className="text-xl font-bold mb-2">Подтвердите удаление</h3>
        <p className="text-slate-500 mb-6">
          Вы действительно хотите удалить врача <span className="font-semibold text-red-500">{user?.name}</span>?
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800">Отмена</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded-xl">Удалить</button>
        </div>
      </div>
    </div>
  );
}