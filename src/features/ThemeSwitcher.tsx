import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const darkStyle = "bg-slate-800 text-white shadow-blue-500";
  const lightStyle = "bg-blue-200 text-gray-800 shadow-md";

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`p-2 rounded-lg hover:ring-2 ring-gray-300 ${theme === "light" ? lightStyle : darkStyle} transition-all duration-300`}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-slate-800" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
}
