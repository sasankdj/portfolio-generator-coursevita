import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setIsLoggedIn(loggedIn);
  }, []);

  const login = (userData = null) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    if (userData) {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    // If you add Google sign-out, you can call it here.
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      user,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};
