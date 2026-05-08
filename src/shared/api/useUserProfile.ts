import { useQuery } from "@tanstack/react-query";
import { apiInstance } from "./axiosInstance";
import type { UserProfile, UserProfileResponse } from "../types/user";


export const useUserProfile = () => {
  const token = localStorage.getItem("localStoragetoken");

  return useQuery<UserProfile, Error>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const { data: response } =
        await apiInstance.get<UserProfileResponse>("/api/Account");
      if (!response.isSuccess || !response.data) {
        throw new Error(response.text || "Доступ запрещен");
      }
      return response.data;
    },
    enabled: !!token,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
};
