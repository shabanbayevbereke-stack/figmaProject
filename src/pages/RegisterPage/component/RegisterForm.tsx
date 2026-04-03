import { MyButton } from "@/shared/uiKit/MyButton";
import { MyInput } from "@/shared/uiKit/MyInput";
import { MyToggle } from "@/shared/uiKit/MyToggle";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";


export function RegisterForm() {
  const { t } = useTranslation();
  const schema = yup.object({
    email: yup
      .string()
      .email(t("auth.error.invalid_email"))
      .required(t("auth.error.invalid_credentials")),
    password: yup
      .string()
      .min(6, t("auth.error.password_requirements"))
      .required(t("auth.error.invalid_credentials")),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], t("auth.error.passwords_do_not_match"))
      .required(t("auth.error.invalid_credentials")),
  });
  
  type RegisterFormData = yup.InferType<typeof schema>;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterFormData) => {
    if (data.password !== data.confirmPassword) {
      console.log("Пароли не совпадают");
      return;
    }
    console.log("Регистрация прошла успешно");
    navigate("/");
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
        <MyInput
          label={t("auth.hints.password_repeat")}
          type="password"
          placeholder={t("auth.hints.confirm_password_input")}
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
      </div>

      <div className="mt-6 mb-8 flex items-center justify-between">
        <MyToggle label={t("auth.register.remember_me")} />
      </div>

      <MyButton onClick={handleSubmit(onSubmit)}>
        {t("auth.register.submit")}
      </MyButton>
    </>
  );
}
