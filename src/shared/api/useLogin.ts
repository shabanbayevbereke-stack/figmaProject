import { useMutation } from "@tanstack/react-query";
import { apiInstance } from "./axiosInstance";
import { AxiosError } from "axios";
import type { ApiErrorData } from "../types/common";
import type { LoginCredentials, LoginResponse } from "../types/auth";



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
        if (response.isSuccess && response.data) {
          localStorage.setItem("localStoragetoken", response.data);
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
