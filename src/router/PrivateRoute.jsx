// utils/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import CustomLoader from "../components/loader";

const PrivateRoute = ({ children }) => {
  const { authenticated, loading } = useAuth();

  if (loading) return(<CustomLoader/>); 

  return authenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
