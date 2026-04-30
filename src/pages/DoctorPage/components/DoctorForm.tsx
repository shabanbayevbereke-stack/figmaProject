import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Loader2 } from "lucide-react";

interface DoctorFormProps {
  onAdd: (name: string) => void;
  isPending: boolean;
  isDark: boolean;
}

export function DoctorForm({ onAdd, isPending, isDark }: DoctorFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;
    onAdd(name);
    setName("");
  };

  return (
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
        onClick={handleSubmit}
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
  );
}
