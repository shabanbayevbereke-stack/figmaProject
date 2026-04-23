import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "next-themes";
import { SideBar } from "./SideBar/SideBar";
import { useUserProfile } from "@/shared/api/useUserProfile";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

export function MainHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const { resolvedTheme } = useTheme();
  const { data } = useUserProfile();
  
  const [isOpen, setIsOpen] = useState(true);

  const isDark = resolvedTheme === "dark";

  const themeClass = isDark 
    ? "bg-[#0f172a] text-slate-200 border-slate-800" 
    : "bg-white text-slate-900 border-slate-200";

  const headerClass = `h-16 flex items-center justify-between px-6 border-b sticky top-0 z-20 backdrop-blur-md ${
    isDark ? "bg-[#0f172a]/80 border-slate-800" : "bg-white/80 border-slate-200"
  }`;

  return (
    <div className={`flex h-screen w-full overflow-hidden ${isDark ? "bg-[#020617]" : "bg-slate-50"}`}>
      
      <div className={`transition-all duration-300 border-r ${themeClass} ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}>
        <div className="w-64 h-full">
          <SideBar />
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <header className={headerClass}>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
            
            <div className="relative hidden md:block">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Поиск..." 
                className={`pl-10 pr-4 py-1.5 rounded-full border text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                  ${isDark ? "bg-slate-900 border-slate-700" : "bg-slate-50 border-slate-200"}`}
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <nav className="hidden lg:flex gap-4 text-sm font-medium">
              {["/sell", "/item"].map((path) => (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className={location.pathname === path ? "text-indigo-500" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}
                >
                  {path === "/sell" ? "Продажи" : "Товары"}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3 border-l pl-5 dark:border-slate-800">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold leading-none">{data?.firstName || "Пользователь"}</p>
                <p className="text-xs text-slate-500 mt-1">Пользователь</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                {data?.firstName?.[0] || "?"}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}