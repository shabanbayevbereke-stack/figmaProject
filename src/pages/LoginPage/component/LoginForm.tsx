import { MyButton } from "@/shared/uiKit/MyButton";
import { MyInput } from "@/shared/uiKit/MyInput";
import { MyToggle } from "@/shared/uiKit/MyToggle";
import { useNavigate } from "react-router-dom";
import googleImage from "/googleImage.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { dataUsers } from "@/dataBaze/users";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
  password: yup
    .string()
    .min(6, "Пароль должен содержать не менее 6 символов")
    .required("Пароль обязателен"),
});

type LoginFormData = yup.InferType<typeof loginSchema>;

export function LoginForm() {
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

      <MyButton onClick={handleSubmit(onSubmit)}>войти</MyButton>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-100"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-400" />
        </div>
      </div>

      <button className="flex w-full items-center justify-center space-x-3 rounded-xl bg-[#333333] py-4 font-semibold text-white transition-all hover:bg-black focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none  peer-focus:ring-2 peer-focus:ring-white peer-focus:ring-offset-2 peer-focus:outline-none ">
        <div
          style={{ backgroundImage: `url(${googleImage})` }}
          className="h-5 w-5"
        />
        <span>Зайти через гугл</span>
      </button>
    </>
  );
}
