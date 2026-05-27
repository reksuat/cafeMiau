import { Navigate } from "react-router-dom";

function RotaProtegida({ children }) {
  const eAdmin = localStorage.getItem("autenticado") === "true";
  if (!eAdmin) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default RotaProtegida;
