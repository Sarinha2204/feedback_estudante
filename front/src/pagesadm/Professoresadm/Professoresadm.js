/**
 * Componente ScreenMenu
 * Renderiza a tela principal após o login, exibindo as Professores para avaliação.
 * @param {object} props - Propriedades recebidas pelo componente.
 * @param {function} props.onLogout - Função de callback para executar o logout do usuário.
 */
import React, { useEffect, useState } from 'react';
import { useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext.js";
import api from '../../services/api.js'
import NavbarAdm from '../../components/Navbaradm/Navbaradm.js'


// Importação de recursos
import './Professoresadm.css';
import Navbaradm from '../../components/Navbaradm/Navbaradm.js';

const ProfessoresAdm = () => {
   const navigate = useNavigate();
   const { usuario } = useAuth();
   const [professores, setProfessores] = useState([]);
   const [erro, setErro] = useState('');

   const buscarProfessores = async () => {
    try {
      const response = await api.post('adm/professores');

      const data = await response.data;

      if (data.success) {
        setProfessores(data.professores);
      } else {
        setErro(data.message || 'Erro ao carregar Professores');
      }
    } catch (err) {
      setErro('Erro de conexão com o servidor');
    }
  };

  useEffect(() => {
    buscarProfessores();
  }, []);
   // Dependência no objeto usuario, não em usuario.sgde

  if (erro) return <p style={{ color: 'red' }}>{erro}</p>;

  function abrirDetalhesProfessor(id) {
  // Navegar para página de detalhes ou abrir modal
  console.log('Abrir detalhes da Professor', id);
  }

  function editarProfessor(id) {
    console.log('Editar Professor', id);
  }

  function concluirProfessor(id) {
    console.log('Concluir Professor', id);
  }

  function reabrirProfessor(id) {
    console.log('Reabrir Professor', id);
  }


  return (
    <div>
      <NavbarAdm aba='Professores'/>
      <table className="tabela-Professores">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Edição</th>
          </tr>
        </thead>
        <tbody>
          {professores.length > 0 ? (
            professores.map((professor) => (
              <tr
                key={professor.id}
                onClick={() => abrirDetalhesProfessor(professor.id)}
              >
                <td>{professor.id}</td>
                <td>{professor.nome}</td>
                <td>
                  <button onClick={(e) => { e.stopPropagation(); editarProfessor(professor.id); }}>✏️</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nenhuma Professor ativa encontrada.</td>
            </tr>
          )}
        </tbody>
      </table>



    </div>
  );
};

export default ProfessoresAdm;
