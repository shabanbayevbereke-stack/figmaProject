import { useNavigate } from "react-router-dom";
import backgroundImage from "/beach.jpg";
import googleImage from "/googleImage.jpg";
import { RegisterForm } from "./component/RegisterForm";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/shared/uiKit/LanguageSwitcher";

export function RegisterPage() {
  const navigation = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-[1fr_456px]">
      <div
        className="hidden bg-cover bg-center md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
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
            {t("auth.register.title")}
          </h1>

          <RegisterForm />

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400" />
            </div>
          </div>

          <button className="flex w-full items-center justify-center space-x-3 rounded-xl bg-[#2D2E2E] py-4 font-semibold text-white transition-all hover:bg-black focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none  peer-focus:ring-2">
            <div
              style={{
                backgroundImage: `url(${googleImage})`,
              }}
              className="h-5 w-5"
            />
            <span>{t("auth.register.google_login")}</span>
          </button>

          <p className="mt-10 text-center text-sm text-gray-500">
            {t("auth.register.akaunt_ask")}{" "}
            <a
              onClick={() => navigation("/login")}
              className="font-bold text-blue-600 hover:underline"
            >
              {t("auth.register.login_link")}
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
