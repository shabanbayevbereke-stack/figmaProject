import { useNavigate } from "react-router-dom";
import backgroundImage from "../../images/beach.png";

export function LoginPage() {
  const navigation = useNavigate();
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-12">
      <div
        className="hidden md:block md:col-span-7 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="bg-white flex flex-col items-center justify-center p-6 md:col-span-5">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-10">
            <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-3xl">CH</span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-center text-gray-950 mb-12">
          вход
        </h1>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-1.5">эмайл</p>
            <input
              type="email"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-1.5">пароль</p>
            <input
              type="password"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm pt-1">
          <label className="flex items-center space-x-2.5 cursor-pointer">
            <input
              type="checkbox"
              className="w-4.5 h-4.5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-600 font-medium">запомнить меня?</span>
          </label>
        </div>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg transition-all shadow-lg active:scale-[0.98]"
          onClick={() => navigation("/")}
        >
          войти
        </button>
        <p className="text-center text-gray-600 text-sm mt-12">
          Нет аккаунта?{" "}
          <a href="#" className="text-blue-600 font-bold hover:text-blue-700">
            Зарегистрироваться бесплатно
          </a>
        </p>
      </div>
    </div>
  );
}
