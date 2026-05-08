import { useQuery } from "@tanstack/react-query";
import { apiEgov } from "./axiosInstance";
import type { CompanyData } from "../types/company";


export const useCompanySearch = (bin: string) => {
  return useQuery({
    queryKey: ["company", bin],
    queryFn: async () => {
      const { data } = await apiEgov.get<CompanyData | CompanyData[]>(
        "api/egov",
        {
          params: { bin },
        },
      );
      console.log("данные", data);
      return Array.isArray(data) ? data[0] : data;
    },
    enabled: bin.length === 12,
    retry: false,
  });
};
