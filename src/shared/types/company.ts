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

interface CompanyInfo {
  bin: string;
  nameru: string;
  namekz: string;
  addressru: string;
  director: string;
  statusru: string;
  datereg: string;
  okedru: string;
}

interface EgovResponse<T> {
  item: T[];
  total: number;
}


export type { EgovResponse,CompanyData,CompanyInfo };
