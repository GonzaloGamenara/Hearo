import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AutoRedirect = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) return <p>Cargando...</p>;
  return isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />;
};
