import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) return null;

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={location} replace></Navigate>;
};

export default AdminRouter;
