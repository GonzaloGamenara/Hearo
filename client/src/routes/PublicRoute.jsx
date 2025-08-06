import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) return <p>Cargando...</p>;
  return isAuthenticated ? <Navigate to="/home" /> : children;
};
