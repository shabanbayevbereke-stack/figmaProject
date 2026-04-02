import { useNavigate } from "react-router-dom";
import backgroundImage from "/beach.png";
import googleImage from "/googleImage.png";
import { MyInput } from "@/shared/uiKit/MyInput";
import { MyButton } from "@/shared/uiKit/MyButton";
import { MyToggle } from "@/shared/uiKit/MyToggle";

export function LoginPage() {
  const navigation = useNavigate();

  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-[1fr_456px]">
      <div
        className="hidden bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="my-10 flex flex-col items-center justify-between bg-white">
        <form className="mx-auto w-90 md:mx-0">
          <div className="mb-12 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900 font-bold text-white shadow-md">
              CH
            </div>
          </div>

          <h1 className="mb-10 text-3xl font-bold text-gray-900">Вход</h1>

          <div className="space-y-6">
            <MyInput label="Почта" type="email" placeholder="введите эмаил" />
            <MyInput
              label="Пароль"
              type="password"
              placeholder="Введите пароль"
            />
          </div>

          <div className="mt-6 mb-8 flex items-center justify-between">
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

          <button className="flex w-full items-center justify-center space-x-3 rounded-xl bg-[#333333] py-4 font-semibold text-white transition-all hover:bg-black">
            <div
              style={{ backgroundImage: `url(${googleImage})` }}
              className="h-5 w-5"
            />
            <span>Зайти через гугл</span>
          </button>

          <p className="mt-10 text-center text-sm text-gray-500">
            Нет акаунта?{" "}
            <a
              onClick={() => navigation("/register")}
              className="hover:pointer-coarse: font-bold text-blue-600 hover:underline"
            >
              Зарегестрируйтесь сейчас
            </a>
          </p>
        </form>
        <div className="flex w-90 justify-between">
          <a href="#">типо ссылка</a>
          <p>сайт 2026 года</p>
        </div>
      </div>
    </div>
  );
}
