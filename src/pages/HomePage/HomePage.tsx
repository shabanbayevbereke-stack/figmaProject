import { Cards } from "@/features/Cards";
import { CustomTable } from "@/features/CustomTable";
import { useTheme } from "next-themes";
import { useState } from "react";

export function HomePage() {
  const { theme, resolvedTheme } = useTheme();
  const mounted = useState(false);

  const darkStyle = "bg-slate-800 text-white shadow-blue-500";
  const lightStyle = "bg-white text-gray-900 shadow-md";
  const currentTheme = mounted ? resolvedTheme || theme : "light";
  const isDark = currentTheme === "dark";
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className={isDark ? "text-white" : "text-gray-900"}>главная страница</h2>
        <select
          name=""
          id=""
          className={`${isDark ? darkStyle : lightStyle} p-3 rounded-lg shadow-md`}
        >
          <option value="">по id</option>
          <option value="">по имени</option>
          <option value="">по цене</option>
        </select>
      </div>
      <div className={`${isDark ? darkStyle : lightStyle} my-5 rounded-lg shadow-md p-4 gap-4`}>
        <div className="flex w-full justify-between">
          <div>процент</div>
          <div className="text-center">
            <p>бронза</p>
            <p>цена</p>
          </div>
          <div className="text-center">
            <p>серебро</p>
            <p>цена</p>
          </div>
          <div className="text-center">
            <p>золото</p>
            <p>цена</p>
          </div>
        </div>

        <div className="relative h-1 w-full bg-gray-200">
          <div
            className="absolute top-0 left-0 h-full bg-blue-500"
            style={{ width: "60%" }}
          ></div>
        </div>

        <ul className="flex px-2">
          <li>Item 5</li>
          <li>Item 6</li>
        </ul>
      </div>
      <div className="gap-6 w-full flex justify-around my-5 h-40">
        <Cards item={1} />
        <Cards item={2} />
        <Cards item={3} />
      </div>
      <CustomTable />
    </>
  );
}
