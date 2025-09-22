import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface SmartRedirectProps {
  children: React.ReactNode;
  fallbackPath?: string;
}

const SmartRedirect: React.FC<SmartRedirectProps> = ({ 
  children, 
  fallbackPath = '/' 
}) => {
  const { user, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && isAuthenticated && user) {
      // Redirect based on user role
      switch (user.role) {
        case 'student':
          navigate('/dashboard', { replace: true });
          break;
        case 'teacher':
          navigate('/teacher-dashboard', { replace: true });
          break;
        case 'admin':
          navigate('/admin-dashboard', { replace: true });
          break;
        default:
          navigate(fallbackPath, { replace: true });
      }
    }
  }, [user, isAuthenticated, loading, navigate, fallbackPath]);

  // Show loading while redirecting
  if (loading || (isAuthenticated && user)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">جاري التوجيه...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SmartRedirect;
