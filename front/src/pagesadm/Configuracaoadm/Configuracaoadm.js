/**
 * Componente ScreenMenu
 * Renderiza a tela principal após o login, exibindo as configuracao para avaliação.
 * @param {object} props - Propriedades recebidas pelo componente.
 * @param {function} props.onLogout - Função de callback para executar o logout do usuário.
 */
import React, { useEffect, useState } from 'react';
import { useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext.js";
import api from '../../services/api.js';
import NavbarAdm from '../../components/Navbaradm/Navbaradm.js';

// Importação de recursos
import './Configuracaoadm.css';

const Configuracoesadm = () => {
  const [config, setConfig] = useState({});
  const [erro, setErro] = useState('');
  const [mensagem, setMensagem] = useState("");


  const buscarConfig = async () => {
    try {
      const response = await api.post('adm/config');

      const data = await response.data;

      if (data.success) {
        const configura = data.config[0]
        setConfig({
          estado: configura.estado,
          bimestre: configura.bimestre
        });

      } else {
        setErro(data.message || 'Erro ao carregar turmas');
      }
    } catch (erro) {
      setErro('Erro de conexão com o servidor');
    }
  };

  useEffect(() => {
    buscarConfig();
  }, []);

  const [editando, setEditando] = useState();

   const handleChange = (e) => {
      const { name, value } = e.target;
      setConfig((prev) => ({
        ...prev,
        [name]: value
      }));
    };


  // Simula envio de dados
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', config);
    sConfig(config)
    setEditando(false);
  };

  const handleEditar = () =>{
    setEditando(true)
  }

  const sConfig = async (config) => {
    let bimestre = config.bimestre
    let estado = config.estado
    try {
      const response = await api.post('adm/setconfig',{bimestre, estado });

      const data = await response.data;

      if (data.success) {
        buscarConfig()
        setMensagem(data.message)
      } else {
        setErro(data.message || 'Erro ao carregar estudantes');
      }
    } catch (err) {
      setErro('Erro de conexão com o servidor');
    }
  };


  return (
    <div>
      <NavbarAdm aba='configuracoes'/>
      <div className='container'>
      <h2>Questionário</h2>
      <p>{mensagem}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Bimestre:
          <select
            name="bimestre"
            value={config.bimestre}
            onChange={handleChange}
            disabled={!editando}
          >
            <option value={1}>1º Bimestre</option>
            <option value={2}>2º Bimestre</option>
            <option value={3}>3º Bimestre</option>
            <option value={4}>4º Bimestre</option>
          </select>
        </label>
        <br /><br />
        <label>
          Estado:
          <select
            name="estado"
            value={config.estado}
            onChange={handleChange}
            disabled={!editando}
          >
            <option value='ON'>Aberto</option>
            <option value='OFF'>Fechado</option>
          </select>
        </label>
        <br /><br />
        {!editando ? (
          <div>
          <button type="button" onClick={handleEditar}>Editar</button>
          <button type="submit" disabled>Salvar</button>
          </div>
        ) : (
          <div>
          <button type="button" onClick={handleEditar} disabled>Editar</button>
          <button type="submit">Salvar</button>
          </div>
        )}
      </form>
    </div>

    </div>
  );
};

export default Configuracoesadm;
