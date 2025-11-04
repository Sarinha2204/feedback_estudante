/**
 * Componente ScreenMenu
 * Renderiza a tela principal após o login, exibindo as turmas para avaliação.
 * @param {object} props - Propriedades recebidas pelo componente.
 * @param {function} props.onLogout - Função de callback para executar o logout do usuário.
 */
import React, { useEffect, useState } from 'react';
import { useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext.js";
import api from '../../services/api.js'
import Navbar from '../../components/Navbar/Navbar.js'

// Importação de recursos
import './Home.css';

const Home = () => {
   const navigate = useNavigate();
   const { usuario } = useAuth();

  const [turmas, setTurmas] = useState([]);
  const [turmaAtual, setTurmaAtual] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
  if (!usuario) return; // só roda se usuário existir

  const buscarTurmas = async () => {
    try {
      const response = await api.get('estudantes/home', {params: { sgde: usuario.sgde }});

      const data = await response.data;

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

  const avaliar = () => {
    navigate("/avaliacao");
  };


  return (
    <div className="menu-wrapper">

      <Navbar/>

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
                      <button className="card-button" disabled={isConcluida} onClick={avaliar}>
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

export default Home;
