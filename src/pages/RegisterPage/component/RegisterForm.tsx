import { MyButton } from "@/shared/uiKit/MyButton";
import { MyInput } from "@/shared/uiKit/MyInput";
import { MyToggle } from "@/shared/uiKit/MyToggle";
import { useNavigate } from "react-router";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import { useForm } from "react-hook-form";

const schema = zod.object({
  email: zod.string().email("неверный формат email"),
  password: zod.string().min(6, "Пароль должен содержать не менее 6 символов"),
  confirmPassword: zod
    .string()
    .min(6, "Пароль должен содержать не менее 6 символов"),
});

type RegisterFormData = zod.infer<typeof schema>;

export function RegisterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
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
          label="Почта"
          type="email"
          placeholder="введите эмаил"
          {...register("email")}
          error={errors.email?.message}
        />
        <MyInput
          label="Пароль"
          type="password"
          placeholder="Введите пароль"
          {...register("password")}
          error={errors.password?.message}
        />
        <MyInput
          label="Повторите пароль"
          type="password"
          placeholder="Введите пароль повторно"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
      </div>

      <div className="mt-6 mb-8 flex items-center justify-between">
        <MyToggle label="Запомни меня" />
      </div>

      <MyButton onClick={handleSubmit(onSubmit)}>Зарегестрироватся</MyButton>
    </>
  );
}
