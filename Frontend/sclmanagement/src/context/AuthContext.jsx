import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      setUser({ loggedIn: true });
    } else {
      setUser(null);
    }
  }, [token]);

  const login = (tokenValue) => {
    sessionStorage.setItem("token", tokenValue); 
    setToken(tokenValue);
    setUser({ loggedIn: true });
    navigate("/", { replace: true });
  };

  const logout = () => {
    sessionStorage.removeItem("token"); 
    setToken(null);
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
