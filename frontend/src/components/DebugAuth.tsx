import { useAuth } from '@/contexts/AuthContext';

const DebugAuth = () => {
  const { user, token, isAuthenticated, loading, logout } = useAuth();
  
  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };
  
  return (
    <div className="fixed top-4 right-4 bg-black text-white p-4 rounded-lg text-xs z-50">
      <div>Loading: {loading ? 'true' : 'false'}</div>
      <div>Authenticated: {isAuthenticated ? 'true' : 'false'}</div>
      <div>User: {user ? user.name : 'null'}</div>
      <div>Token: {token ? 'exists' : 'null'}</div>
      <div>LocalStorage Token: {localStorage.getItem('token') ? 'exists' : 'null'}</div>
      <button 
        onClick={clearStorage}
        className="mt-2 px-2 py-1 bg-red-600 text-white rounded text-xs"
      >
        Clear Storage
      </button>
      <button 
        onClick={logout}
        className="mt-1 px-2 py-1 bg-blue-600 text-white rounded text-xs block"
      >
        Logout
      </button>
    </div>
  );
};

export default DebugAuth;
