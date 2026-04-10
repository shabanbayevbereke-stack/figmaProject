import { apiInstance } from "./base";

export const getCompanyByBin = async (bin: string) => {
  const source = {
    size: 1,
    query: {
      bool: {
        must: [
          {
            match: {
              bin: bin,
            },
          },
        ],
      },
    },
  };

  const response = await apiInstance.get("gbd_ul/v1", {
    params: { source: JSON.stringify(source) },
  });
  console.log(response);
  
  return response.data;
};
