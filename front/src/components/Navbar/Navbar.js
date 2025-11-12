import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext.js";
import "./Navbar.css";

import logoEscola from '../../assets/logo_jt.png';

const Navbar = () => {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();


  // Estado para controlar a visibilidade do menu dropdown do perfil
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Alterna a visibilidade do menu dropdown
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const trocarSenha = () => {
    navigate("/trocarSenha");
    };

    const irHome = () => {
    navigate("/home");
   };


  return (
    <header className="cabecalho-menu">
        <div className="identidade-escola">
                <img src={logoEscola} alt="Logo da Escola" className="logo-escola" onClick={irHome}/>
                <h1 className="nome-escola" onClick={irHome}>Escola Estadual Padre João Tomes</h1>
                </div>
              
                {/* Menu de perfil do usuário */}
                <div className="perfil-menu-container">
                <div className="perfil-avatar" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
              
                {/* Renderização condicional do menu dropdown */}
                {isMenuOpen && (
                    <div className="dropdown-menu">
                    <div className="dropdown-header">
                    <strong>{usuario.nome}</strong>
                    <span></span>
                     </div>
                    <div className="dropdown-divider"></div>
                    <a onClick={trocarSenha} className="dropdown-item">Trocar senha</a>
                    <a onClick={logout} className="dropdown-item dropdown-item-sair">Sair</a>
                </div>
            )}
        </div>
    </header> 
  );
};

export default Navbar;