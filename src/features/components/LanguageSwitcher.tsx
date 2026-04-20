import { useTheme } from "next-themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { theme, resolvedTheme } = useTheme();
  const mounted = useState(false);

  const darkStyle = "bg-gray-800 text-white shadow-blue-500";
  const lightStyle = "bg-blue-200 text-gray-800 shadow-md";
  const currentTheme = mounted ? resolvedTheme || theme : "light";
  const isDark = currentTheme === "dark";
  return (
    <select
      className={`bg-transparent text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? darkStyle : lightStyle}`}
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="ru" className={isDark ? darkStyle : lightStyle}>
        Рус
      </option>
      <option value="kz" className={isDark ? darkStyle : lightStyle}>
        Қаз
      </option>
      <option value="en" className={isDark ? darkStyle : lightStyle}>
        Eng
      </option>
    </select>
  );
}
