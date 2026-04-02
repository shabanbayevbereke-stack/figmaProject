import { useNavigate } from "react-router-dom";
import backgroundImage from "@pablic/beach.png";
import googleImage from "@pablic/googleImage.png";
import { MyInput } from "@/shared/uiKit/MyInput";
import { MyButton } from "@/shared/uiKit/MyButton";
import { MyToggle } from "@/shared/uiKit/MyToggle";

export function LoginPage() {
  const navigation = useNavigate();

  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-[1fr_456px]">
      <div
        className="hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="bg-white flex flex-col items-center justify-between my-10">
        <form className="w-[360px] mx-auto md:mx-0">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center shadow-md text-white font-bold">
              CH
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-10">Вход</h1>

          <div className="space-y-6">
            <MyInput label="Почта" type="email" placeholder="введите эмаил" />
            <MyInput
              label="Пароль"
              type="password"
              placeholder="Введите пароль"
            />
          </div>

          <div className="flex items-center justify-between mt-6 mb-8">
            <MyToggle label="Запомни меня" />
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Забыли пароль?
            </a>
          </div>

          <MyButton onClick={() => navigation("/")}>войти</MyButton>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400" />
            </div>
          </div>

          <button className="w-full bg-[#333333] hover:bg-black text-white font-semibold py-4 rounded-xl flex items-center justify-center space-x-3 transition-all">
            <div
              style={{ backgroundImage: `url(${googleImage})` }}
              className="w-5 h-5"
            />
            <span>Зайти через гугл</span>
          </button>

          <p className="text-center text-gray-500 text-sm mt-10">
            Нет акаунта?{" "}
            <a
              onClick={() => navigation("/register")}
              className="text-blue-600 font-bold hover:underline"
            >
              Зарегестрируйтесь сейчас
            </a>
          </p>
        </form>
        <div className="flex w-[360px] justify-between">
          <a href="#">типо ссылка</a>
          <p>сайт 2026 года</p>
        </div>
      </div>
    </div>
  );
}
