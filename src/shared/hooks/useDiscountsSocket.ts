// @/features/discount-manager/hooks/useDiscountsSocket.ts
import { useEffect, useState } from "react";
import { socketService } from "@/shared/services/socketService";
import { discountApi } from "@/shared/api/discountApi";
import type { IDiscount } from "../types/discount";

export const useDiscountsSocket = () => {
  const [discounts, setDiscounts] = useState<IDiscount[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Первичная загрузка
    discountApi.getAll({ Page: 1, Size: 10 })
      .then(({ data }) => setDiscounts(Array.isArray(data) ? data : []))
      .finally(() => setIsLoading(false));

    // 2. Настройка сокетов
    socketService.connect("/hubs/discounts").then(() => {
      socketService.on<IDiscount>("DiscountCreated", (newRec) => {
        setDiscounts((prev) => [newRec, ...prev]);
      });

      socketService.on<IDiscount>("DiscountUpdated", (updated) => {
        setDiscounts((prev) => prev.map(item => item.id === updated.id ? updated : item));
      });

      socketService.on<string>("DiscountDeleted", (id) => {
        setDiscounts((prev) => prev.filter(item => item.id !== id));
      });
    });

    // 3. Очистка при размонтировании
    return () => {
      socketService.off("DiscountCreated");
      socketService.off("DiscountUpdated");
      socketService.off("DiscountDeleted");
    };
  }, []);

  return { discounts, isLoading };
};