import { useCompanySearch } from "@/shared/api/queries";
import { useState } from "react";

export function SellPage() {
  const [bin, setBin] = useState("");
  const { data, refetch, isLoading } = useCompanySearch(bin);

  console.log(data);
  console.log(isLoading);
  const handleSearch = () => {
    if (bin.length === 12) {
      refetch();
    } else {
      console.log("BIN is empty");
    }
  };

  return (
    <>
      <input
        type="text"
        value={bin}
        onChange={(e) => setBin(e.target.value)}
        className="bg-red-200 p-2 rounded mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded"
      >
        поиск
      </button>
      <h1>страница продаж</h1>
      {data && (
        <div>
          <h2>Результаты поиска:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      {isLoading && <p>Загрузка...</p>}
      {!isLoading && !data && <p>Нет данных для отображения</p>}
    </>
  );
}
