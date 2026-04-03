import { LanguageSwitcher } from "@/shared/uiKit/LanguageSwitcher";
import { Outlet, useNavigate } from "react-router-dom";

export function Meinheder() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <header className="flex w-full shadow-md bg-amber-200">
        <nav className="block px-5 py-4">навигация</nav>
        <ul className="flex justify-center list-none">
          <li>
            <a onClick={() => navigate("/")} className="block px-5 py-4">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/about")} className="block px-5 py-4">
              About us
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/sell")} className="block px-5 py-4">
              Sell
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/item")} className="block px-5 py-4">
              Item
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/user")} className="block px-5 py-4">
              User
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/login")} className="block px-5 py-4">
              выйти
            </a>
          </li>
        </ul>
        <LanguageSwitcher />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>проба</footer>
    </div>
  );
}
