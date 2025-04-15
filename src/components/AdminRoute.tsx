
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { isAdminLoggedIn } from '@/services/authService';

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  useEffect(() => {
    // Additional security check when component mounts
    if (!isAdminLoggedIn()) {
      return;
    }
  }, []);

  return isAdminLoggedIn() ? <>{children}</> : <Navigate to="/admin/login" />;
};

export default AdminRoute;
