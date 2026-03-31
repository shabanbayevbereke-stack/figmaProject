import { Outlet, useNavigate } from "react-router-dom";

export function Meinheder() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav>навигация</nav>
        <ul>
          <li>
            <a onClick={() => navigate("/")}>Home</a>
          </li>
          <li>
            <a onClick={() => navigate("/about")}>About us</a>
          </li>
          <li>
            <a onClick={() => navigate("/sell")}>Sell</a>
          </li>
          <li>
            <a onClick={() => navigate("/item")}>Item</a>
          </li>
          <li>
            <a onClick={() => navigate("/user")}>User</a>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>проба</footer>
    </>
  );
}
