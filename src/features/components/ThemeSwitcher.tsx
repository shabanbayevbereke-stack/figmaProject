import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const darkStyle = "bg-slate-800 text-white";
  const lightStyle = "bg-blue-200 text-gray-800";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-2 rounded-lg hover:ring-2 ring-gray-400 transition-all duration-300 ${isDark ? darkStyle : lightStyle}`}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-800" />
      )}
    </button>
  );
}
