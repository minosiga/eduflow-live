import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI } from '@/lib/api';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  grade?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return; // Prevent running after login/register
    
    const initAuth = async () => {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      // Don't clear localStorage - let user stay logged in

      if (storedToken && storedUser) {
        try {
          // Parse user data first to check if it's valid
          const userData = JSON.parse(storedUser);
          if (!userData || !userData.id || !userData.email) {
            throw new Error('Invalid user data in localStorage');
          }
          
          // Set user and token immediately from localStorage
          setToken(storedToken);
          setUser(userData);
          
          // Verify token with backend in the background (don't block UI)
          const response = await authAPI.getProfile();
          if (response.data.success) {
            setUser(response.data.data.user);
            // Update localStorage with fresh user data
            localStorage.setItem('user', JSON.stringify(response.data.data.user));
          }
        } catch (error) {
          // Don't clear localStorage - let user stay logged in
        }
      }
      setLoading(false);
      setIsInitialized(true);
    };

    initAuth();
  }, [isInitialized]);

  const login = async (email: string, password: string) => {
    try {
      const response = await authAPI.login({ email, password });
      const { user: userData, token: userToken } = response.data.data;
      
      // Set state and localStorage immediately
      setUser(userData);
      setToken(userToken);
      localStorage.setItem('token', userToken);
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Mark as initialized to prevent useEffect from running
      setIsInitialized(true);
      setLoading(false);
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };

  const register = async (userData: any) => {
    try {
      const response = await authAPI.register(userData);
      const { user: newUser, token: userToken } = response.data.data;
      
      // Set state and localStorage immediately
      setUser(newUser);
      setToken(userToken);
      localStorage.setItem('token', userToken);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      // Mark as initialized to prevent useEffect from running
      setIsInitialized(true);
      setLoading(false);
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsInitialized(false);
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user && !!token,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
