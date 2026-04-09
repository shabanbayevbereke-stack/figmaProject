import { useTheme } from "next-themes";
import { useState } from "react";

type CardProps = {
  item: number;
};

export function Cards({ item }: CardProps) {
  const { theme, resolvedTheme } = useTheme();
  const mounted = useState(false);

  const darkStyle = "bg-slate-800 text-white shadow-blue-500";
  const lightStyle = "bg-white text-gray-900 shadow-md";

  const currentTheme = mounted ? resolvedTheme || theme : "light";
  const isDark = currentTheme === "dark";

  return (
    <div
      className={`rounded p-4 flex gap-4 w-full transition-all duration-300 ${isDark ? darkStyle : lightStyle}`}
    >
      <div>
        <h2 className="text-lg font-bold mb-2">Card Title {item}</h2>
        <button
          className={`font-bold py-2 px-4 rounded transition-colors${
            isDark
              ? " bg-blue-500 hover:bg-blue-600 text-white"
              : " bg-gray-200 hover:bg-gray-300 text-gray-800"
          }`}
        >
          Click me
        </button>
      </div>
      <div>
        <p className={isDark ? "text-gray-400" : "text-gray-600"}>
          This is a description for card {item}.
        </p>
        <p className={isDark ? "text-gray-400" : "text-gray-600"}>
          This is a description for card {item}.
        </p>
      </div>
    </div>
  );
}
