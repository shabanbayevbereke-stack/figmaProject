interface LoginCredentials {
  login: string;
  password?: string;
}

interface LoginResponse {
  code: string;
  data: string;
  isSuccess: boolean;
  exception: string | null | Record<string, unknown>;
  text: string | null;
  title: string | null;
}


export type UserRole = "root" | "admin" | "user" | "guest";

export type { LoginCredentials, LoginResponse };
