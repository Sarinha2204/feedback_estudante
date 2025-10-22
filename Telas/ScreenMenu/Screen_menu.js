/**
 * Componente ScreenMenu
 * Renderiza a tela principal após o login, exibindo as turmas para avaliação.
 * @param {object} props - Propriedades recebidas pelo componente.
 * @param {function} props.onLogout - Função de callback para executar o logout do usuário.
 */
import React, { useEffect, useState } from 'react';

// Importação de recursos
import './Screen_menu.css';
import logoEscola from '../../assets/logo_jt.png';

const ScreenMenu = ({ onLogout }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("usuario");

    if (user) {
      try {
        const userObj = JSON.parse(user);
        setUsuario(userObj);
      } catch (e) {
        console.error("Erro ao parsear usuário:", e);
        setUsuario(null);
      }
    }
  }, []);

  
  // Estado para controlar a visibilidade do menu dropdown do perfil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Alterna a visibilidade do menu dropdown
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [turmas, setTurmas] = useState([]);
  const [turmaAtual, setTurmaAtual] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
  if (!usuario) return; // só roda se usuário existir

  const buscarTurmas = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/Home/${usuario.sgde}`);
      const data = await response.json();

      if (data.success) {
        setTurmas(data.turmas);
        setTurmaAtual(turmaAtual);
      } else {
        setErro(data.message || 'Erro ao carregar turmas');
      }
    } catch (err) {
      setErro('Erro de conexão com o servidor');
    }
  };

  buscarTurmas();
}, [usuario]); // Dependência no objeto usuario, não em usuario.sgde

  if (erro) return <p style={{ color: 'red' }}>{erro}</p>;

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
                <strong>{usuario.nome}</strong>
                <span>{turmaAtual.nome}</span>
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
          {/* Card de Turma */}
          {turmas.length > 0 ? (
            turmas.map((turma) => {
              const isConcluida = turma.status.toLowerCase() === 'concluída'; // ou 'concluida' dependendo do DB
              return (
                <div className="col-lg-4 col-md-6 mb-4" key={turma.id}>
                  <div className={`custom-card ${isConcluida ? 'concluida' : ''}`}>
                    <img
                      src="https://imgur.com/K9nLY9Q.png"
                      className="card-img-top"
                      alt="Imagem da turma"
                    />
                    <div className="card-body">
                      <h5 className="card-title">[EEPJT] {turma.nome}</h5>
                      <p className="card-text">{turma.status}</p>
                      <button className="card-button" disabled={isConcluida}>
                        {isConcluida ? 'Concluída' : 'Avaliar'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Nenhuma turma ativa encontrada.</p>
          )}


        </div>
      </main>
    </div>
  );
};

export default ScreenMenu;