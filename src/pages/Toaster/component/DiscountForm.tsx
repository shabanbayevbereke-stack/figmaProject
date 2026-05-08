import { useState } from "react";
import { discountApi } from "@/shared/api/discountApi";

export function DiscountForm() {
  const [name, setName] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name) return;
    await discountApi.create({
      firstName: name,
      lastName: "Test",
      amount: 0,
      middleName: "",
    });
    setName("");
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2 mb-6">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded bg-white w-full"
        placeholder="Введите имя для новой скидки..."
      />
      <button
        type="submit"
        className="bg-emerald-600 text-white px-4 py-2 rounded"
      >
        Создать
      </button>
    </form>
  );
}
