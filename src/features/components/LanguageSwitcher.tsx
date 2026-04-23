import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative flex items-center gap-2">
      <Globe size={16} className={isDark ? "text-slate-400" : "text-slate-500"} />
      
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className={`
          appearance-none bg-transparent text-sm font-medium cursor-pointer outline-none
          px-2 py-1 rounded-lg transition-all border
          ${isDark 
            ? "text-slate-200 border-slate-700 hover:bg-slate-800" 
            : "text-slate-700 border-slate-200 hover:bg-slate-100"
          }
        `}
      >
        <option value="ru">Рус</option>
        <option value="kz">Қаз</option>
        <option value="en">Eng</option>
      </select>
    </div>
  );
}