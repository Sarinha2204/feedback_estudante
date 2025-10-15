import React, { useState } from 'react';
import './Screen_menu.css'; 
import logoEscola from '../../assets/logo_jt.png';

const ScreenMenu = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-wrapper">
      <header className="cabecalho-menu">
        <div className="identidade-escola">
          <img src={logoEscola} alt="Logo da Escola" className="logo-escola" />
          <h1 className="nome-escola">Escola Estadual Padre João Tomes</h1>
        </div>
        <div className="perfil-menu-container">
          <div className="perfil-avatar" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
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
      
      <main className="container py-5">
        <div className="text-center mb-5">
          <h1 className="menu-title">Feedback Discente</h1>
          <p className="menu-subtitle">
            Selecione sua turma para realizar a avaliação.
          </p>
        </div>
        
        {/* A alteração para aumentar o espaço está nesta linha (g-4) */}
        <div className="row justify-content-center g-5">
          
          {/* Repare que removemos o p-3 daqui */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="custom-card">
              <img 
                src="https://imgur.com/K9nLY9Q.png" 
                className="card-img-top" 
                alt="Imagem da turma"
              />
              <div className="card-body">
                <h5 className="card-title">1° Ano A</h5>
                <p className="card-text">
                  Avalie a didática, o material de apoio e o relacionamento com os professores.
                </p>
                <button className="card-button">Avaliar</button>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="custom-card">
              <img 
                src="https://imgur.com/K9nLY9Q.png" 
                className="card-img-top" 
                alt="Imagem da turma"
              />
              <div className="card-body">
                <h5 className="card-title">2° Ano A</h5>
                <p className="card-text">
                  Avalie a didática, o material de apoio e o relacionamento com os professores.
                </p>
                <button className="card-button">Avaliar</button>
              </div>
            </div>
          </div>
          
          {/* E daqui também */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="custom-card">
              <img 
                src="https://imgur.com/K9nLY9Q.png" 
                className="card-img-top" 
                alt="Imagem da turma"
              />
              <div className="card-body">
                <h5 className="card-title">3° Ano A</h5>
                <p className="card-text">
                  Avalie a didática, o material de apoio e o relacionamento com os professores.
                </p>
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