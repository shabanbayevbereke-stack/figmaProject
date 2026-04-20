import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { SideBar } from "./SideBar/SideBar";

export function MainHeader() {
  const navigate = useNavigate();
  const [openSideBar, setOpenSideBar] = useState(true);
  const { theme, resolvedTheme } = useTheme();

  const mounted = useState(false);

  const darkStyle = "bg-slate-800 text-white shadow-blue-500";
  const lightStyle = "bg-white text-gray-900 shadow-md";

  const currentTheme = mounted ? resolvedTheme || theme : "light";
  const isDark = currentTheme === "dark";

  return (
    <div className="w-full flex h-screen overflow-hidden">
      <AnimatePresence>
        {openSideBar && (
          <motion.div
            initial={{ x: -250, width: 0 }}
            animate={{ x: 0, width: "240px" }}
            exit={{ x: -250, width: 0 }}
          >
            <SideBar />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col h-full flex-1">
        <div className="flex flex-col h-full flex-1 overflow-hidden">
          <header className="flex  items-center w-full shadow-md shrink-0 ">
            <div className="flex justify-between list-none items-center px-3 w-full">
              <div className="flex items-center">
                <button
                  onClick={() => setOpenSideBar(!openSideBar)}
                  className="flex items-center px-2"
                >
                  <div className="flex h-5 w-7 flex-col justify-between items-center ">
                    <span
                      className={`h-1 w-full rounded ${isDark ? "bg-white" : "bg-black"}`}
                    ></span>
                    <span
                      className={`h-1 w-full rounded ${isDark ? "bg-white" : "bg-black"}`}
                    ></span>
                    <span
                      className={`h-1 w-full rounded ${isDark ? "bg-white" : "bg-black"}`}
                    ></span>
                  </div>
                </button>

                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-[320px] m-4 ${isDark ? darkStyle : lightStyle} rounded-full px-4 py-2
                           text-gray-800 
                            placeholder:text-gray-500 
                            border border-gray-300 
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-blue-500`}
                />
              </div>

              <div className="flex items-center">
                <a
                  onClick={() => navigate("/sell")}
                  className="block px-5 py-4"
                >
                  лучшие продажи
                </a>

                <a
                  onClick={() => navigate("/item")}
                  className="block px-5 py-4"
                >
                  товары
                </a>

                <a
                  onClick={() => navigate("/user")}
                  className="block px-5 py-4"
                >
                  скидки
                </a>
                <a
                  onClick={() => navigate("/user")}
                  className="block px-5 py-4"
                >
                  Лояльность
                </a>
                <a
                    onClick={() => navigate("/user")}
                    className="block px-5 py-4"
                  >
                    Привет Пользователь
                </a>
              </div>
            </div>
          </header>
          <main
            className={`${isDark ? "bg-gray-600" : "bg-gray-100"} flex-1 overflow-auto p-4`}
          >
            <Outlet />
          </main>
        </div>
        <footer className="bg-black text-white p-4">проба</footer>
      </div>
    </div>
  );
}
