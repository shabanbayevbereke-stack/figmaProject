import { LanguageSwitcher } from "@/shared/uiKit/LanguageSwitcher";
import { Outlet, useNavigate } from "react-router-dom";
import { SideBar } from "./SideBar/SideBar";

export function MainHeader() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex h-screen overflow-hidden">
      <SideBar />
      <div className="flex flex-col h-full flex-1">
        <div className="flex flex-col h-full flex-1 overflow-hidden">
          <header className="flex items-center w-full shadow-md bg-amber-200 shrink-0 ">
            <nav className="font-bold px-5 py-4">навигация</nav>
            <ul className="flex justify-center list-none">
              <li>
                <a onClick={() => navigate("/")} className="block px-5 py-4">
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/about")}
                  className="block px-5 py-4"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/sell")}
                  className="block px-5 py-4"
                >
                  Sell
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/item")}
                  className="block px-5 py-4"
                >
                  Item
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/user")}
                  className="block px-5 py-4"
                >
                  User
                </a>
              </li>
            </ul>
            <LanguageSwitcher />
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
