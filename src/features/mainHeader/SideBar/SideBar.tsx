import { NavLink } from "react-router-dom";

export function SideBar() {
  // const navigate = useNavigate();

  const linkStyle = `flex items-center 
    px-5 py-3 rounded-xl 
    transition-all duration-200 
    hover:bg-slate-800 
    hover:text-white 
    text-slate-400`;

  const activeStyle = `flex items-center 
  px-5 py-3 rounded-xl 
  bg-[#879FFF] text-white 
  shadow-lg shadow-indigo-500/20
  `;

  return (
    <div className="w-60 min-w-60 justify-between flex-col flex h-screen px-4">
      <div>
        <div className="flex items-center justify-center h-16">
          <h1>типо логотип</h1>
        </div>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              to={"/user"}
            >
              User
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              to={"/sell"}
            >
              Sell
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
              to={"/item"}
            >
              Item
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink
        className="block px-5 py-4
        hover:bg-slate-800
        hover:text-white
        text-slate-400
        rounded-xl
        transition-all duration-200"
        to={"/login"}
      >
        выйти
      </NavLink>
    </div>
  );
}
