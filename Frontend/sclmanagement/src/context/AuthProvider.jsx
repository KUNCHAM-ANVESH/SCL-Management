import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(
    sessionStorage.getItem("token") || null
  );

  const login = (tokenValue) => {
    sessionStorage.setItem("token", tokenValue);
    setToken(tokenValue);
    navigate("/", { replace: true });
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;