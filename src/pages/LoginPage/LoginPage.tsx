import { useNavigate } from "react-router-dom";
import backgroundImage from "/beach.png";
import { LoginForm } from "./component/LoginForm";

export function LoginPage() {
  const navigate = useNavigate();

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

          <LoginForm />

          <p className="mt-10 text-center text-sm text-gray-500">
            Нет акаунта?{" "}
            <a
              onClick={() => navigate("/register")}
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
