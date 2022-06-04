import React, { useState, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const login = () => {
    setIsAuth(true);
    if (state.from) {
      navigate(state.from, { replace: true });
    } else {
      navigate("/");
    }
  };
  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };

  let params = { isAuth, login, logout };

  return <AuthContext.Provider value={params}>{children}</AuthContext.Provider>;
};
