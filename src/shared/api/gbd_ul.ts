import { apiInstance } from "./base";

export const getCompanyByBin = async (bin: string) => {
  const response = await apiInstance.get("/egov", {
    params: { bin },
  });

  console.log("Данные из прокси:", response.data);

  return Array.isArray(response.data) ? response.data[0] : response.data;
};
