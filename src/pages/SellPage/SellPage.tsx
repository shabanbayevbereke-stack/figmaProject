import { useCompanySearch } from "@/shared/api/queries";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export function SellPage() {
  const [bin, setBin] = useState("");
  const { data, refetch, isLoading } = useCompanySearch(bin);

  useEffect(() => {
    if (bin.length === 12) {
      refetch();
    }
  }, [bin, refetch]);

  return (
    <>
      <input
        type="text"
        value={bin}
        onChange={(e) => setBin(e.target.value)}
        className="bg-red-200 p-2 rounded mb-4"
      />
      <h1>страница продаж</h1>
      {data && (
        <div className="mt-6 p-4 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-bold mb-4">{data.nameru}</h2>
          <div className="grid grid-cols-1 gap-2">
            <p>
              <strong>БИН:</strong> {data.bin}
            </p>
            <p>
              <strong>Руководитель:</strong> {data.director}
            </p>
            <p>
              <strong>Статус:</strong> {data.statusru}
            </p>
            <p>
              <strong>Адрес:</strong> {data.addressru}
            </p>
            <p>
              <strong>Деятельность:</strong> {data.okedru}
            </p>
          </div>
        </div>
      )}
      {!isLoading && !data && <p>Нет данных для отображения</p>}
      {isLoading && <Loader2 className="animate-spin" size={128}/>}
    </>
  );
}
