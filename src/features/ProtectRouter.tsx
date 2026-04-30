import { useUserProfile } from "@/shared/api/useUserProfile";
import type { UserRole } from "@/shared/types/auth";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  allowedRoles?: UserRole[]; 
}

export const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const token = localStorage.getItem("localStoragetoken");
  
  const { data: user, isLoading, isError } = useUserProfile();

  if (!token) return <Navigate to="/login" replace />;
  
  if (isLoading) return <div>Загрузка...</div>;

  if (isError || !user) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(user.role as UserRole)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};