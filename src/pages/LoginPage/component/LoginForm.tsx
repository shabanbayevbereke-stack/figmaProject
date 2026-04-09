import { MyButton } from "@/shared/uiKit/MyButton";
import { MyInput } from "@/shared/uiKit/MyInput";
import { MyToggle } from "@/shared/uiKit/MyToggle";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { dataUsers } from "@/shared/mocks/users";
import { useTranslation } from "react-i18next";

export function LoginForm() {
  const { t } = useTranslation();
  const loginSchema = yup.object({
    email: yup
      .string()
      .email(t("auth.error.invalid_email"))
      .required(t("auth.error.invalid_credentials")),
    password: yup
      .string()
      .min(6, t("auth.error.password_requirements"))
      .required(t("auth.error.invalid_credentials")),
  });

  type LoginFormData = yup.InferType<typeof loginSchema>;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    if (
      dataUsers.some(
        (user) => user.email === data.email && user.password === data.password,
      )
    ) {
      console.log("Вход прошел успешно");
      navigate("/");
    } else {
      console.log("Неверный email или пароль");
      setError("email", { message: "Неверный данные" });
      setError("password", { message: "Неверный данные" });
      return;
    }
    console.log("Данные формы:", data);
  };
  return (
    <>
      <div className="space-y-6">
        <MyInput
          label={t("auth.hints.email")}
          type="email"
          placeholder={t("auth.hints.email_input")}
          {...register("email")}
          error={errors.email?.message}
        />
        <MyInput
          label={t("auth.hints.password")}
          type="password"
          placeholder={t("auth.hints.password_input")}
          {...register("password")}
          error={errors.password?.message}
        />
      </div>

      <div className="mt-6 mb-8 flex items-center justify-between">
        <MyToggle label={t("auth.login.remember_me")} />
        <a
          href="#"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          {t("auth.login.forgot_password")}
        </a>
      </div>

      <MyButton onClick={handleSubmit(onSubmit)}>
        {t("auth.login.submit")}
      </MyButton>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-100"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-400" />
        </div>
      </div>
    </>
  );
}
