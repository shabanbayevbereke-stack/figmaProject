export interface RecordItem {
  id: number;
  name: string;
}

export interface ApiResponse<T> {
  isSuccess: boolean;
  code: string;
  title: string | null;
  text: string | null;
  data: PaginatedResponse<T>;
  exception: unknown;
}

interface PaginatedResponse<T> {
  data: T[];
  records: number;
  currentPage: number;
  lastPage: number;
  isAll: boolean;
  loadedCount: number;
}

export interface ApiErrorData {
  message?: string;
  code?: string;
}
