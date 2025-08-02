import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check demo credentials
    if (email === 'demo@blueguard.com' && password === 'demo123') {
      const mockUser: User = {
        id: '1',
        name: 'Alex Johnson',
        email,
        tokens: 2450,
        reportsSubmitted: 23,
        cleanupsCompleted: 15
      };
      
      setUser(mockUser);
      setIsLoading(false);
      return true;
    }
    
    // Mock successful login for any other credentials
    const mockUser: User = {
      id: '1',
      name: 'New User',
      email,
      tokens: 100,
      reportsSubmitted: 0,
      cleanupsCompleted: 0
    };
    
    setUser(mockUser);
    setIsLoading(false);
    return true;
  };

  const signup = async (name: string, email: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful signup
    const mockUser: User = {
      id: '1',
      name,
      email,
      tokens: 0,
      reportsSubmitted: 0,
      cleanupsCompleted: 0
    };
    
    setUser(mockUser);
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};