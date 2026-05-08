import { useEffect, useState } from "react";
import { discountApi } from "@/shared/api/discountApi";
import { socketService } from "@/shared/services/socketService";
import type { IDiscount } from "@/shared/types/discount";

export const useDiscounts = () => {
  const [discounts, setDiscounts] = useState<IDiscount[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAll = async () => {
    try {
      const response = await discountApi.getAll({ Page: 1, Size: 10 });

      const actualList = response.data?.data?.data;

      setDiscounts(Array.isArray(actualList) ? actualList : []);
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchAll();
    })();

    socketService.connect("/hubs/discounts").then(() => {
      socketService.on<IDiscount>("DiscountCreated", (newRec) => {
        setDiscounts((prev) => [newRec, ...prev]);
      });

      socketService.on<string>("DiscountDeleted", (id) => {
        setDiscounts((prev) => prev.filter((item) => item.id !== id));
      });
    });

    return () => {
      socketService.off("DiscountCreated");
      socketService.off("DiscountDeleted");
    };
  }, []);

  const removeDiscountLocally = (id: string) => {
    setDiscounts((prev) => prev.filter((item) => item.id !== id));
  };

  return { discounts, isLoading, removeDiscountLocally };
};
