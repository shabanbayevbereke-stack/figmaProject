interface User {
  id: string;
  lastName: string;
  firstName: string;
  middleName: string | null;
  role: string;
  roleName: string;
}

interface UserProfile {
  firstName: string;
  id: number;
  login: string;
  userName: string;
  role?: string;
  roleName: string;
}

interface UserProfileResponse {
  text: string;
  code: string;
  data: UserProfile;
  isSuccess: boolean;
  message: string | null;
}

export type { UserProfileResponse, UserProfile, User };
