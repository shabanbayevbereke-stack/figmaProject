import { useUserProfile } from "../api/useUserProfile";

export const useRoleAccess = () => {
  const role = useUserProfile().data?.role;


  const getRoleAccess = (roles: string[]) => {
    return roles.includes(role ?? "");
  };

  return getRoleAccess;
};
