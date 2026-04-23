import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import { LanguageSwitcher } from "@/features/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/features/components/ThemeSwitcher";

export function SideBar() {
  const navigate = useNavigate();
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const containerStyle = `w-64 h-screen flex flex-col p-4 border-r transition-colors duration-200 
    ${isDark ? "bg-[#111827] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"}`;

  const getLinkStyle = ({ isActive }: { isActive: boolean }) => {
    const base =
      "flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium mb-1";

    if (isActive) {
      return `${base} bg-indigo-500 text-white shadow-lg shadow-indigo-500/20`;
    }

    return isDark
      ? `${base} text-slate-400 hover:bg-slate-800 hover:text-slate-100`
      : `${base} text-slate-500 hover:bg-slate-50 hover:text-indigo-600`;
  };

  const links = [
    { to: "/", label: "Главная" },
    { to: "/about", label: "О нас" },
    { to: "/user", label: "Профиль" },
    { to: "/sell", label: "Продажи" },
    { to: "/item", label: "Товары" },
  ];

  return (
    <aside className={containerStyle}>
      <div className="mb-8 px-4 h-12 flex items-center">
        <span
          className={`text-xl font-bold ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
        >
          MY APP
        </span>
      </div>

      <nav className="flex-1">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={getLinkStyle}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div
        className={`pt-4 border-t ${isDark ? "border-slate-800" : "border-slate-100"} space-y-4`}
      >
        <div
          className={`flex items-center justify-between p-2 rounded-xl ${isDark ? "bg-slate-900/50" : "bg-slate-50"}`}
        >
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        <button
          onClick={() => {
            localStorage.setItem("localStoragetoken", "");
            navigate("/login");
          }}
          className={`w-full text-left px-4 py-2 text-sm transition-colors
            ${isDark ? "text-slate-500 hover:text-red-400" : "text-slate-400 hover:text-red-500"}`}
        >
          Выйти из системы
        </button>
      </div>
    </aside>
  );
}
