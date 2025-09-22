import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

const TestAuth: React.FC = () => {
  const { user, token, isAuthenticated, loading } = useAuth();

  const testAPI = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/health');
      const data = await response.json();
      console.log('Health check:', data);
    } catch (error) {
      console.error('Health check failed:', error);
    }
  };

  const testAuthAPI = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log('Auth test:', data);
    } catch (error) {
      console.error('Auth test failed:', error);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg text-xs z-50 border">
      <h3 className="font-bold mb-2">Auth Test Panel</h3>
      <div>Loading: {loading ? 'true' : 'false'}</div>
      <div>Authenticated: {isAuthenticated ? 'true' : 'false'}</div>
      <div>User: {user ? user.name : 'null'}</div>
      <div>Token: {token ? 'exists' : 'null'}</div>
      <div className="mt-2 space-y-1">
        <button 
          onClick={testAPI}
          className="block w-full px-2 py-1 bg-blue-500 text-white rounded text-xs"
        >
          Test Health API
        </button>
        <button 
          onClick={testAuthAPI}
          className="block w-full px-2 py-1 bg-green-500 text-white rounded text-xs"
        >
          Test Auth API
        </button>
      </div>
    </div>
  );
};

export default TestAuth;
