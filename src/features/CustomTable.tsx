import { dataTable } from "@/shared/mocks/tableData";
import { useTheme } from "next-themes";
import { useState } from "react";

// type Props = {
//   id: number;
//   itemName: string;
//   price: string;
// };

export function CustomTable() {
  const { theme, resolvedTheme } = useTheme();
  const mounted = useState(false);

  const darkStyle = "bg-slate-800 text-white shadow-blue-500";
  const lightStyle = "bg-white text-gray-900 shadow-md";
  const currentTheme = mounted ? resolvedTheme || theme : "light";
  const isDark = currentTheme === "dark";
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold mb-2">свой тейбл</h2>
        <div className="flex items-center gap-4">
          <select name="" id="" className={`${isDark ? darkStyle : lightStyle} p-3 rounded-lg shadow-md`}>
            <option value="">по id</option>
            <option value="">по имени</option>
            <option value="">по цене</option>
          </select>
          <select name="date" id="" className={`${isDark ? darkStyle : lightStyle} p-3 rounded-lg shadow-md`}>
            <option value="">по возрастанию</option>
            <option value="">по убыванию</option>
          </select>
        </div>
      </div>
      <div
        className={`${isDark ? darkStyle : lightStyle} rounded-lg shadow-md p-4 gap-4 w-full transition-all duration-300`}
      >
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 w-20">id</th>
              <th className="px-4 py-2">item name</th>
              <th className="px-4 py-2">price</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {dataTable.map((item) => (
              <tr key={item.id}>
                <td className="flex justify-center items-center px-4 py-2">
                  {item.id}
                </td>
                <td className="px-4 py-2">{item.itemName}</td>
                <td className="px-4 py-2">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
