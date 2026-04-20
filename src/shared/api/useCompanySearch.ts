import { useQuery } from "@tanstack/react-query";
import { apiEgov } from "./base";

interface CompanyData {
  bin: string;
  nameru: string;
  namekz: string;
  addressru: string;
  director: string;
  statusru: string;
  datereg: string;
  okedru: string;
  [key: string]: string;
}

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
