// Структура самой скидки
export interface IDiscount {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  amount: number;
  created: string; // ISO дата
}

// Параметры для GET запроса (фильтрация и пагинация)
export interface IDiscountParams {
  CreatedBefore?: string;
  CreatedAfter?: string;
  LastName?: string;
  FirstName?: string;
  MiddleName?: string;
  IsInfiniteScroll?: boolean;
  Page?: number;
  Size?: number;
  OrderBy?:
    | "CreatedAsc"
    | "LastNameAsc"
    | "FirstNameAsc"
    | "MiddleNameAsc"
    | "CreatedDesc"
    | "LastNameDesc"
    | "FirstNameDesc"
    | "MiddleNameDesc";
}
