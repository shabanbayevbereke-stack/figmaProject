import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiInstance } from "./axiosInstance";
import type { AxiosError } from "axios";
import type { CreateDoctorDto, Doctor } from "../types/CreateDoctorDto";
import type { ApiResponse } from "../types/common";

export const useDoctorsData = (currentPage: number, itemsPerPage: number) => {
  return useQuery({
    queryKey: ["doctors", currentPage, itemsPerPage],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", currentPage.toString());
      params.append("rows", itemsPerPage.toString());

      const response = await apiInstance.get("/api/doctors", {
        params: params,
      });

      const serverPayload = response.data.data;

      return {
        doctors: Array.isArray(serverPayload.data) ? serverPayload.data : [],
        totalRecords: serverPayload.records || 0,
        totalPages: serverPayload.lastPage || 1,
      };
    },
    placeholderData: (prev) => prev,
  });
};

export const useCreateDoctor = () => {
  const queryClient = useQueryClient();

  return useMutation<
    ApiResponse<Doctor>,
    AxiosError<ApiResponse<unknown>>,
    CreateDoctorDto
  >({
    mutationFn: async (newDoctor: CreateDoctorDto) => {
      const { data } = await apiInstance.post<ApiResponse<Doctor>>(
        "/api/doctors",
        newDoctor,
      );
      return data;
    },
    onSuccess: (response) => {
      if (response.isSuccess) {
        queryClient.invalidateQueries({ queryKey: ["doctors"] });
        console.log("Доктор успешно создан!");
      }
    },
    onError: (error) => {
      console.error("Ошибка при создании:", error);
    },
  });
};

export const useDeleteDoctor = () => {
  const queryClient = useQueryClient();

  return useMutation<
    ApiResponse<null>,
    AxiosError<ApiResponse<unknown>>,
    string
  >({
    mutationFn: async (id: string) => {
      const { data } = await apiInstance.delete(`/api/doctors/${id}`);
      return data;
    },
    onSuccess: (response) => {
      if (response.isSuccess) {
        queryClient.invalidateQueries({ queryKey: ["doctors"] });
        console.log("Доктор успешно удален!");
      }
    },
    onError: (error) => {
      console.error("Ошибка при удалении:", error);
    },
  });
};
