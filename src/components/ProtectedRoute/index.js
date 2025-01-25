import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = Boolean(Cookies.get("jwt_token"));
  return isAuthenticated ? <>{element}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
