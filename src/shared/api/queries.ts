import { useQuery } from "@tanstack/react-query";
import { getCompanyByBin } from "./gbd_ul";

export const useCompanySearch = (bin: string) => {
  return useQuery({
    queryKey: ["company", bin],
    queryFn: () => getCompanyByBin(bin),
    enabled: false,
    retry: false,
  });
};
