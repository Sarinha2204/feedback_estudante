import React, { useState } from "react";

// ------------------------------------------------
// COMPONENTE: MENU PRINCIPAL (SCREEN MENU)
// ------------------------------------------------

// Importação do arquivo de estilos CSS para o layout da página
import "./Screen_menu.css"; 

// Importação do componente que renderiza o Relatório (tela de gestão/direção)
import TelaRelatorio from "../RelatoryScreen/relatory_screen.jsx";
// Importação de ícone para uso na interface
import { ArrowLeft } from "lucide-react"; 

// URL de placeholder para o logo da escola
const logoEscola = "https://imgur.com/oGUfXtc.png";

/**
 * Componente principal do menu após o login.
 * Controla a navegação entre a lista de turmas e a tela de Relatório.
 * * @param {object} props - Propriedades do componente.
 * @param {function} props.onLogout - Função de callback para encerrar a sessão do usuário.
 */
const ScreenMenu = ({ onLogout }) => {
  // 1. ESTADOS
  
  // Estado para controlar a visibilidade do menu dropdown (perfil)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado que controla qual tela será exibida: Menu Principal (false) ou Relatório (true)
  const [mostrarRelatorio, setMostrarRelatorio] = useState(false);

  // 2. HANDLERS

  /**
   * Alterna a visibilidade do menu dropdown do perfil.
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Define o estado para exibir a Tela de Relatório.
   * @param {Event} e - Evento de clique.
   */
  const verRelatorio = (e) => {
    e.preventDefault(); // Previne ação padrão de links (navegação)
    setMostrarRelatorio(true);
    setIsMenuOpen(false); // Garante que o dropdown seja fechado
  };

  /**
   * Define o estado para retornar ao Menu Principal (lista de turmas).
   */
  const voltarParaMenu = () => {
    setMostrarRelatorio(false);
  };

  // 3. RENDERIZAÇÃO CONDICIONAL

  // Se o estado 'mostrarRelatorio' for verdadeiro, renderiza exclusivamente o componente TelaRelatorio
  if (mostrarRelatorio) {
    return (
      <TelaRelatorio
        // Passa a função para permitir que o usuário volte ao menu principal
        aoVoltar={voltarParaMenu} 
      />
    );
  }

  // 4. RENDERIZAÇÃO DO MENU PRINCIPAL (LISTA DE TURMAS)
  return (
    <div className="menu-wrapper">
      {/* 4.1. CABEÇALHO */}
      <header className="cabecalho-menu">
        {/* Identidade Visual da Escola */}
        <div className="identidade-escola">
          <img src={logoEscola} alt="Logo da Escola" className="logo-escola" />
          <h1 className="nome-escola">Escola Estadual Padre João Tomes</h1>
        </div>

        {/* Menu de Perfil e Dropdown */}
        <div className="perfil-menu-container">
          {/* Avatar/Ícone do Usuário que aciona o dropdown */}
          <div className="perfil-avatar" onClick={toggleMenu}>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
             >
               <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
               <circle cx="12" cy="7" r="4"></circle>
             </svg>
          </div>

          {/* Dropdown Menu (Visibilidade controlada por isMenuOpen) */}
          {isMenuOpen && (
            <div className="dropdown-menu">
              {/* Informações do Usuário (Hardcoded para exemplo) */}
              <div className="dropdown-header">
                <strong>Vinícius Marconsin</strong>
                <span>3º ano A - 2025</span>
              </div>
              <div className="dropdown-divider"></div>
              
              {/* Opção para acessar o Relatório (Direção) */}
              <a href="#!" className="dropdown-item" onClick={verRelatorio}>
                Ver Relatório (Direção)
              </a>

              {/* Opção de Troca de Senha (Funcionalidade Placeholder) */}
              <a href="#!" className="dropdown-item">
                Trocar senha
              </a>
              
              {/* Opção de Sair (Chama a função onLogout passada via props) */}
              <a
                href="#!"
                onClick={onLogout} 
                className="dropdown-item dropdown-item-sair"
              >
                Sair
              </a>
            </div>
          )}
        </div>
      </header>

      {/* 4.2. CONTEÚDO PRINCIPAL (LISTA DE TURMAS) */}
      <main className="container py-5">
        {/* Título e Subtítulo da Área Principal */}
        <div className="text-center mb-5">
          <h1 className="menu-title">Feedback Discente</h1>
          <p className="menu-subtitle">
            Selecione sua turma para realizar a avaliação.
          </p>
        </div>

        {/* Grid de Cards de Turmas */}
        <div className="row justify-content-center g-5">
           {/* Card 1: 1º Ano A */}
           <div className="col-lg-4 col-md-6 mb-4">
            <div className="custom-card">
              <img
                src="https://imgur.com/JQmAwlR.png"
                className="card-img-top"
                alt="Imagem da turma"
              />
              <div className="card-body">
                <h5 className="card-title">1° Ano A</h5>
                <button className="card-button">Avaliar</button>
              </div>
            </div>
          </div>
          {/* Card 2: 2º Ano A */}
           <div className="col-lg-4 col-md-6 mb-4">
            <div className="custom-card">
              <img
                src="https://imgur.com/zCepyyW.png"
                className="card-img-top"
                alt="Imagem da turma"
              />
              <div className="card-body">
                <h5 className="card-title">2° Ano A</h5>
                <button className="card-button">Avaliar</button>
              </div>
            </div>
          </div>
          {/* Card 3: 3º Ano A */}
           <div className="col-lg-4 col-md-6 mb-4">
            <div className="custom-card">
              <img
                src="https://imgur.com/4lwcDxZ.png"
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