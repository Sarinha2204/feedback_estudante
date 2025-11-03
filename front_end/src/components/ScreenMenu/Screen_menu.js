/**
 * Componente ScreenMenu
 * Renderiza a tela principal após o login, exibindo as turmas para avaliação.
 * @param {object} props - Propriedades recebidas pelo componente.
 * @param {function} props.onLogout - Função de callback para executar o logout do usuário.
 */
import React, { useState } from 'react';

// Importação de recursos
import './Screen_menu.css';
import logoEscola from '../../assets/logo_jt.png';

const ScreenMenu = ({ onLogout }) => {
  // Estado para controlar a visibilidade do menu dropdown do perfil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Alterna a visibilidade do menu dropdown
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-wrapper">
      {/* Cabeçalho da página */}
      <header className="cabecalho-menu">
        <div className="identidade-escola">
          <img src={logoEscola} alt="Logo da Escola" className="logo-escola" />
          <h1 className="nome-escola">Escola Estadual Padre João Tomes</h1>
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
                <strong>Vinícius Marconsin</strong>
                <span>3º ano A - 2025</span>
              </div>
              <div className="dropdown-divider"></div>
              <a href="#!" className="dropdown-item">Trocar senha</a>
              <a href="#!" onClick={onLogout} className="dropdown-item dropdown-item-sair">Sair</a>
            </div>
          )}
        </div>
      </header>

      {/* Conteúdo principal da página */}
      <main className="container py-5">
        <div className="text-center mb-5">
          <h1 className="menu-title">Feedback Discente</h1>
          <p className="menu-subtitle">
            Selecione sua turma para realizar a avaliação.
          </p>
        </div>

        {/* Grid com os cards das turmas */}
        <div className="row justify-content-center g-5">

          {/* Card de Turma */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="custom-card">
              <img
                src="https://imgur.com/psBf6o6.png"
                className="card-img-top"
                alt="Imagem da turma"
              />
              <div className="card-body">
                <h5 className="card-title">1° Ano A</h5>
                <button className="card-button">Avaliar</button>
              </div>
            </div>
          </div>

          {/* Card de Turma */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="custom-card">
              <img
                src="https://imgur.com/Px3PDoJ.png"
                className="card-img-top"
                alt="Imagem da turma"
              />
              <div className="card-body">
                <h5 className="card-title">2° Ano A</h5>
                <button className="card-button">Avaliar</button>
              </div>
            </div>
          </div>

          {/* Card de Turma */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="custom-card">
              <img
                src="https://imgur.com/ULLAwaO.png"
                className="card-img-top"
                alt="Imagem da turma"
              />
              <div className="card-body">
                <h5 className="card-title">3° Ano A</h5>
                <button className="card-button">Avaliar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScreenMenu;