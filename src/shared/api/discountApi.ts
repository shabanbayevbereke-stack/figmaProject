// @/shared/api/discountApi.ts
import { apiInstance } from "./axiosInstance";
import type { IDiscount, IDiscountParams } from "../types/discount";

export const discountApi = {
  getAll: (params: IDiscountParams) => 
    apiInstance.get<IDiscount[]>("/api/Discounts", { params }),

  create: (data: Omit<IDiscount, 'id' | 'created'>) => 
    apiInstance.post("/api/Discounts", data),

  update: (data: IDiscount) => 
    apiInstance.put("/api/Discounts", data),

  delete: (id: string) => 
    apiInstance.delete(`/api/Discounts/${id}`),
};