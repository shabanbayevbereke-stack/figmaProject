import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Cards({ item }: { item: number }) {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex h-full w-full justify-between gap-4 rounded-xl p-5 transition-colors duration-500",
        "border backdrop-blur-sm",
        isDark
          ? "bg-slate-900/80 border-slate-700 text-white shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          : "bg-white border-gray-200 text-gray-900 shadow-sm",
      )}
    >
      <div className="flex flex-col justify-between">
        <h2 className="text-xl font-semibold tracking-tight">
          Карточка {item}
        </h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "rounded-lg px-5 py-2 text-sm font-medium transition-colors",
            isDark
              ? "bg-blue-600 hover:bg-blue-500 text-white"
              : "bg-gray-900 hover:bg-gray-800 text-white",
          )}
        >
          Детали
        </motion.button>
      </div>

      <div className="flex flex-col justify-between items-end text-right">
        <div
          className={cn(
            "space-y-2 text-sm",
            isDark ? "text-slate-400" : "text-slate-500",
          )}
        >
          <p>Описание карточки {item}.</p>
          <p className="hidden sm:block text-xs italic">
            использование тейлвинга для адаптивности
          </p>
        </div>
      </div>
    </motion.div>
  );
}
