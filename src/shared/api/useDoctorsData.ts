import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiInstance } from "./base";
import type { AxiosError } from "axios";

interface PaginatedResponse<T> {
  data: T[];
  records: number;
  currentPage: number;
  lastPage: number;
  isAll: boolean;
  loadedCount: number;
}

interface ApiResponse<T> {
  isSuccess: boolean;
  code: string;
  title: string | null;
  text: string | null;
  data: PaginatedResponse<T>;
  exception: unknown;
}

export interface Doctor {
  id: string;
  name: string | null;
  specialization?: string;
  experience?: number;
  created: string;
  createdBy: string;
}

export const useDoctorsData = () => {
  return useQuery<Doctor[]>({
    queryKey: ["doctors"],
    queryFn: async () => {
      const response =
        await apiInstance.get<ApiResponse<Doctor>>("/api/doctors");

      const doctorsArray = response.data.data.data;

      return Array.isArray(doctorsArray) ? doctorsArray : [];
    },
  });
};

export interface CreateDoctorDto {
  name: string;
  specialization: string;
  experience: number;
}

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
