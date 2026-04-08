import { dataTable } from "@/dataBaze/tableData";

// type Props = {
//   id: number;
//   itemName: string;
//   price: string;
// };

export function CustomTable() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold mb-2">свой тейбл</h2>
        <div className="flex items-center gap-4">
          <select name="" id="" className="bg-white rounded-lg shadow-md p-4 flex gap-4 w-full">
            <option value="">по id</option>
            <option value="">по имени</option>
            <option value="">по цене</option>
          </select>
          <select name="date" id="" className="bg-white rounded-lg shadow-md p-4 flex gap-4 w-full">
            <option value="">по возрастанию</option>
            <option value="">по убыванию</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
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
