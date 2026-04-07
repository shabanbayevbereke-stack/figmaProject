import { Outlet, useNavigate } from "react-router-dom";
import { SideBar } from "./SideBar/SideBar";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useState } from "react";

export function MainHeader() {
  const navigate = useNavigate();
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <div className="w-full flex h-screen overflow-hidden">
      {openSideBar && <SideBar />}
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
                    <span className="h-1 w-full rounded bg-black dark:bg-white"></span>
                    <span className="h-1 w-full rounded bg-black dark:bg-white"></span>
                    <span className="h-1 w-full rounded bg-black dark:bg-white"></span>
                  </div>
                </button>

                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-60 m-4 bg-white rounded-md px-4 py-2
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
                  Sell
                </a>

                <a
                  onClick={() => navigate("/item")}
                  className="block px-5 py-4"
                >
                  Item
                </a>

                <a
                  onClick={() => navigate("/user")}
                  className="block px-5 py-4"
                >
                  User
                </a>

                <LanguageSwitcher />

                <ThemeSwitcher />
              </div>
            </div>
          </header>
          <main className="bg-gray-200">
            <Outlet />
          </main>
        </div>
        <footer className="bg-black text-white p-4">проба</footer>
      </div>
    </div>
  );
}
