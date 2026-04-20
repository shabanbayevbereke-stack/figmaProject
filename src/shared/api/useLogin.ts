import { useMutation } from "@tanstack/react-query";
import { apiInstance } from "./base";
import { AxiosError } from "axios";

export interface LoginCredentials {
  login: string;
  password?: string;
}

interface ApiErrorData {
  message?: string;
  code?: string;
}

interface LoginResponse {
  code: string;
  data: string;
  isSuccess: boolean;
  exception: string | null | Record<string, unknown>;
  text: string | null;
  title: string | null;
}

export const useLogin = () => {
  return useMutation<LoginResponse, AxiosError<ApiErrorData>, LoginCredentials>(
    {
      mutationFn: async (credentials: LoginCredentials) => {
        const { data } = await apiInstance.post<LoginResponse>(
          "/api/Account/login",
          credentials,
        );
        return data;
      },
      onSuccess: (response) => {
        console.log("Успешный вход:", response);

        if (response.isSuccess && response.data) {
          localStorage.setItem("token", response.data);
          apiInstance.defaults.headers.common["Authorization"] =
            `Bearer ${response.data}`;
        }
      },
      onError: (error) => {
        console.error(
          "Ошибка авторизации:",
          error.response?.data?.message || error.message,
        );
      },
    },
  );
};
