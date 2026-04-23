import { useTheme } from "next-themes";
import { FiUsers, FiTarget, FiAward, FiShield } from "react-icons/fi";

export function EboutUsPage() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const features = [
    {
      icon: <FiTarget size={24} className="text-blue-500" />,
      title: "Наша миссия",
      desc: "Мы создаем крутые решения для упрощения жизни.",
    },
    {
      icon: <FiUsers size={24} className="text-purple-500" />,
      title: "Наша команда",
      desc: "Профессионалы своего дела с большим опытом.",
    },
    {
      icon: <FiShield size={24} className="text-green-500" />,
      title: "Надежность",
      desc: "Ваши данные под защитой — это наш приоритет.",
    },
    {
      icon: <FiAward size={24} className="text-orange-500" />,
      title: "Качество",
      desc: "Делаем продукт, которым гордимся сами.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 py-10">
      <div className="text-center mb-12">
        <h1
          className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          О нашем проекте
        </h1>
        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Мы помогаем делать бизнес проще и эффективнее.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            <div className="mb-4">{item.icon}</div>
            <h3
              className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {item.title}
            </h3>
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        className={`mt-12 p-8 rounded-2xl text-center ${isDark ? "bg-blue-900/30" : "bg-blue-50"}`}
      >
        <h2
          className={`text-2xl font-bold mb-4 ${isDark ? "text-blue-300" : "text-blue-900"}`}
        >
          Хотите узнать больше?
        </h2>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Связаться с нами
        </button>
      </div>
    </div>
  );
}
