import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext.js";
import "./Navbaradm.css";

import logoEscola from '../../assets/logo_jt.png';

const NavbarAdm = (props) => {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();
  const [abaAtiva, setAbaAtiva] = useState(props.aba);


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
    navigate("/homeadm");
   };


  return (
    <header className="cabecalho-menu">
        <div className="identidade-escola">
                <img src={logoEscola} alt="Logo da Escola" className="logo-escola" onClick={irHome}/>
                <h1 className="nome-escola" onClick={irHome}>E. E. Padre João Tomes</h1>
                </div>

                <nav className="menu-abas">
                    <a className={`aba-menu ${abaAtiva === 'turmas' ? 'ativa' : ''}`} onClick={() => (setAbaAtiva('turmas'), navigate('/homeadm'))}>Turmas</a>
                    <a className={`aba-menu ${abaAtiva === 'estudantes' ? 'ativa' : ''}`} onClick={() => (setAbaAtiva('estudantes'), navigate('/estudantesadm'))}>Estudantes</a>
                    <a className={`aba-menu ${abaAtiva === 'configuracoes' ? 'ativa' : ''}`} onClick={() => (setAbaAtiva('configuracoes'), navigate('/configuracoesadm'))}>Configurações</a>
                </nav>
              
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

export default NavbarAdm;