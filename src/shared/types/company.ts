interface CompanyInfo {
  bin: string;
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
}

interface EgovResponse<T> {
  item: T[];
  total: number;
}

export type { CompanyInfo, EgovResponse };