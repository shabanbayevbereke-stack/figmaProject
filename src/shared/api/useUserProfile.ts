import { useQuery } from "@tanstack/react-query";
import { apiInstance } from "./base";

export interface UserProfile {
  firstName: string;
  id: number;
  login: string;
  userName: string;
  role?: string;
}

interface UserProfileResponse {
  text: string;
  code: string;
  data: UserProfile;
  isSuccess: boolean;
  message: string | null;
}

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
