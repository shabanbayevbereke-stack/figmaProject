import { useNavigate } from "react-router-dom";
import googleImage from "/googleImage.jpg";
import backgroundImage from "/beach.jpg";
import { LoginForm } from "./component/LoginForm";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/shared/uiKit/LanguageSwitcher";

export function LoginPage() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-[1fr_456px]">
      <div
        className="hidden bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="my-10 flex flex-col items-center justify-between bg-white">
        <form className="mx-auto w-90 md:mx-0">
          <div className="mb-12 flex items-center space-x-3 justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900 font-bold text-white shadow-md">
              CH
            </div>
            <LanguageSwitcher />
          </div>

          <h1 className="mb-10 text-3xl font-bold text-gray-900">
            {t("auth.login.title")}
          </h1>

          <LoginForm />

          <button className="flex w-full items-center justify-center space-x-3 rounded-xl bg-[#333333] py-4 font-semibold text-white transition-all hover:bg-black focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none  peer-focus:ring-2 peer-focus:ring-white peer-focus:ring-offset-2 peer-focus:outline-none ">
            <div
              style={{ backgroundImage: `url(${googleImage})` }}
              className="h-5 w-5"
            />
            <span>{t("auth.login.google_login")}</span>
          </button>

          <p className="mt-10 text-center text-sm text-gray-500">
            {t("auth.login.akaunt_ask")}{" "}
            <a
              onClick={() => navigate("/register")}
              className="hover:pointer-coarse: font-bold text-blue-600 hover:underline"
            >
              {t("auth.login.register_link")}
            </a>
          </p>
        </form>
        <div className="flex w-90 justify-between">
          <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
            {t("auth.footer.disabled_link")}
          </a>
          <p>{t("auth.footer.made_age")}</p>
        </div>
      </div>
    </div>
  );
}
