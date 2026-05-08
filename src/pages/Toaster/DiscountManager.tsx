import { discountApi } from "@/shared/api/discountApi";
import { useDiscounts } from "./component/useDiscounts";
import { DiscountForm } from "./component/DiscountForm";
import { toast } from "sonner";

export function DiscountManager() {
  const { discounts, isLoading, removeDiscountLocally } = useDiscounts();

  const handleDelete = async (id: string) => {
    try {
      await discountApi.delete(id);
      removeDiscountLocally(id);
      toast.success("Удалено");
    } catch (error) {
      toast.error("Ошибка");
    }
  };

  if (isLoading) return <div className="p-8 text-center">Синхронизация...</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Управление данными</h1>
      <DiscountForm />

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-semibold">Имя</th>
              <th className="p-4 font-semibold text-right">Действие</th>
            </tr>
          </thead>
          <tbody>
            {discounts.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{item.firstName}</td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
