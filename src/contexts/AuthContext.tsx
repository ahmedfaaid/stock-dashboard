import React, { useState, createContext, ReactNode } from 'react';

interface AuthContextProps {
  children: ReactNode;
}

interface IContextProps {
  isAuthenticated: Boolean;
  setAuth: any;
}

export const AuthContext = createContext<Partial<IContextProps>>({});

export default function AuthContextProvider({ children }: AuthContextProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
