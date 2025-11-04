/**
 * Componente ScreenMenu
 * Renderiza a tela principal após o login, exibindo as estudantes para avaliação.
 * @param {object} props - Propriedades recebidas pelo componente.
 * @param {function} props.onLogout - Função de callback para executar o logout do usuário.
 */
import React, { useEffect, useState } from 'react';
import { useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext.js";
import api from '../../services/api.js';
import NavbarAdm from '../../components/Navbaradm/Navbaradm.js';

// Importação de recursos
import './Estudantesadm.css';

const Estudantesadm = () => {
   const navigate = useNavigate();
   const { usuario } = useAuth();
   const [estudantes, setEstudantes] = useState([]);
   const [erro, setErro] = useState('');

   const buscarestudantes = async () => {
    try {
      const response = await api.post('adm/estudantes');

      const data = await response.data;

      if (data.success) {
        setEstudantes(data.estudantes);
      } else {
        setErro(data.message || 'Erro ao carregar estudantes');
      }
    } catch (err) {
      setErro('Erro de conexão com o servidor');
    }
  };
  
  useEffect(() => {
    buscarestudantes();
  }, []);
// Dependência no objeto usuario, não em usuario.sgde

  if (erro) return <p style={{ color: 'red' }}>{erro}</p>;

  function abrirDetalhesestudante(id) {
  // Navegar para página de detalhes ou abrir modal
  console.log('Abrir detalhes da estudante', id);
  }

  function editarestudante(sgde) {
    console.log('Editar estudante', sgde);
  }
  
  function formatarData(dataBruta) {
    const data = new Date(dataBruta);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const datareal = `${dia}/${mes}/${ano}`
    console.log(data, dia, mes, ano, datareal)
  return datareal;
}
  
  return (
    <div>
      <NavbarAdm aba='estudantes'/>
      <table className="tabela-estudantes">
        <thead>
          <tr>
            <th>SGDE</th>
            <th>Nome</th>
            <th>Data Nascimento</th>
            <th>Situação</th>
            <th>Edição</th>
          </tr>
        </thead>
        <tbody>

          {estudantes.length > 0 ? (
            estudantes.map((estudante) => (
              <tr
                key={estudante.sgde}
                className={estudante.situacao === 'Em curso' ? '' : 'disabilitado'}
                onClick={() => abrirDetalhesestudante(estudante.sgde)}
              >
                <td>{estudante.sgde}</td>
                <td>{estudante.nome}</td>
                <td>{estudante.dataNascimento}</td>
                <td>{estudante.situacao}</td>
                <td>
                  <button onClick={(e) => { e.stopPropagation(); editarestudante(estudante.sgde); }}>✏️</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nenhuma estudante ativa encontrada.</td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default Estudantesadm;
