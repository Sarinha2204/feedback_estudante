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
import NavbarAdm from '../../components/Navbaradm/Navbaradm.js'


// Importação de recursos
import './Homeadm.css';
import Navbaradm from '../../components/Navbaradm/Navbaradm.js';

const HomeAdm = () => {
   const navigate = useNavigate();
   const { usuario } = useAuth();
   const [turmas, setTurmas] = useState([]);
   const [erro, setErro] = useState('');

   const buscarTurmas = async () => {
    try {
      const response = await api.post('adm/home');

      const data = await response.data;

      if (data.success) {
        setTurmas(data.turmas);
      } else {
        setErro(data.message || 'Erro ao carregar turmas');
      }
    } catch (err) {
      setErro('Erro de conexão com o servidor');
    }
  };

  useEffect(() => {
    buscarTurmas();
  }, []);
   // Dependência no objeto usuario, não em usuario.sgde

  if (erro) return <p style={{ color: 'red' }}>{erro}</p>;

  function abrirDetalhesTurma(id) {
  // Navegar para página de detalhes ou abrir modal
  console.log('Abrir detalhes da turma', id);
  }

  function editarTurma(id) {
    console.log('Editar turma', id);
  }

  function concluirTurma(id) {
    console.log('Concluir turma', id);
  }

  function reabrirTurma(id) {
    console.log('Reabrir turma', id);
  }


  return (
    <div>
      <NavbarAdm aba='turmas'/>
      <table className="tabela-turmas">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {turmas.length > 0 ? (
            turmas.map((turma) => (
              <tr
                key={turma.id}
                className={turma.status === 'Concluída' ? 'Em andamento' : ''}
                onClick={() => abrirDetalhesTurma(turma.id)}
              >
                <td>{turma.id}</td>
                <td>{turma.nome}</td>
                <td>{turma.status}</td>
                <td>
                  <button onClick={(e) => { e.stopPropagation(); editarTurma(turma.id); }}>✏️</button>
                  {turma.status === 'Em andamento' ? (
                    <button onClick={(e) => { e.stopPropagation(); concluirTurma(turma.id); }}>Concluir</button>
                  ) : (
                    <button onClick={(e) => { e.stopPropagation(); reabrirTurma(turma.id); }}>Reabrir</button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nenhuma turma ativa encontrada.</td>
            </tr>
          )}
        </tbody>
      </table>



    </div>
  );
};

export default HomeAdm;
