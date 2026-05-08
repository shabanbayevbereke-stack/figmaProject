import { useState } from "react";

export function NewPage() {
  const [inputInfo, setInputInfo] = useState("");
  const something = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Новая страница</h1>
      <p>Здесь будет новый контент для страницы.</p>
      <input
        type="text"
        value={inputInfo}
        onChange={(e) => setInputInfo(e.target.value)}
      />
      {something.map((item) => (
        <div key={item.id}>{item.id}</div>
      ))}
    </div>
  );
}
