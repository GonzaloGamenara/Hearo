import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) return <p>Cargando...</p>;
  return isAuthenticated ? children : <Navigate to="/login" />;
};
