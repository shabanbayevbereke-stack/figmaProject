import { useNavigate } from "react-router-dom";
import backgroundImage from "../../images/beach.png";
import { Input } from "../../ui-kit/Input";
import { Button } from "../../ui-kit/Button";
import { Toggle } from "../../ui-kit/Toggle";

export function RegisterPage() {
  const navigation = useNavigate();

  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-12">
      <div
        className="hidden md:block md:col-span-7 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="bg-white flex flex-col p-10 md:p-20 justify-between md:col-span-5">
        <div className="w-full  mx-auto md:mx-0">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center shadow-md text-white font-bold">
              CH
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-10">
            Ругистрация
          </h1>

          <div className="space-y-6">
            <Input label="Email" type="email" placeholder="введите эмаил" />
            <Input
              label="Password"
              type="password"
              placeholder="Введите пароль"
            />
            <Input
              label="Password repid"
              type="password"
              placeholder="Введите пароль повторно"
            />
          </div>

          <div className="flex items-center justify-between mt-6 mb-8">
            <Toggle label="Запомни меня" />
          </div>

          <Button onClick={() => navigation("/")}>Зарегестрироватся</Button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400" />
            </div>
          </div>

          <button className="w-full bg-[#2D2E2E] hover:bg-black text-white font-semibold py-4 rounded-xl flex items-center justify-center space-x-3 transition-all">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
              className="w-7 h-7"
              alt="G"
            />
            <span>Зарегестрироватся через гугл</span>
          </button>

          <p className="text-center text-gray-500 text-sm mt-10">
            Есть акаунт?{" "}
            <a
              onClick={() => navigation("/login")}
              className="text-blue-600 font-bold hover:underline"
            >
              Войти в акаунт
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
