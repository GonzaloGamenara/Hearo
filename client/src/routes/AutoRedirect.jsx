import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AutoRedirect = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null)
    return (
      <div>
        <h2>Cargando...</h2>
      </div>
    );
  return isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />;
};
