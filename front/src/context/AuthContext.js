import React, { createContext, useState, useContext, useEffect } from "react";

// Contexto de autenticação do usuário
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  
  const login = (dadosUsuario) => {
    setUsuario(dadosUsuario);
    localStorage.setItem("usuario", JSON.stringify(dadosUsuario));
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) setUsuario(JSON.parse(usuarioSalvo));
  }, []);

  
  return (
    <AuthContext.Provider value={{ usuario, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
