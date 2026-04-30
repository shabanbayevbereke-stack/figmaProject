import { useMutation, useQuery } from "@tanstack/react-query";
import { apiInstance } from "./base";
import type { User } from "../types/user";

export const useUsersList = () => {
  return useQuery({
    queryKey: ["Users"],
    queryFn: async () => {
      const response = await apiInstance.get("/api/Users");
      const doctorsArray = response.data?.data?.data || response.data;
      return Array.isArray(doctorsArray) ? doctorsArray : [];
    },
  });
};

export const useUsersRedact = () => {
  return useMutation({
    mutationFn: async ({ userId, data }: { userId: string; data: User }) => {
      const response = await apiInstance.put(`/api/Users`, {
        ...data,
        id: userId,
      });
      return response.data;
    },
  });
};
