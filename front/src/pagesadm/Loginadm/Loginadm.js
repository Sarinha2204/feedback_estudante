import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.js";

import LoginScreen from './Loginadm.css';
import api from '../../services/api.js'

import logoEscola from '../../assets/logo_jt.png';

const LoginAdm = () => {

  const imageUrl = 'https://imgur.com/K9aLoVo.png';
  const estrelaUrl = 'https://imgur.com/Nl20tqh.png';

  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  /**
   * Lida com a submissão do formulário de login.
   * @param {React.FormEvent} event - O evento de submissão do formulário.
   */

  const handleLogin = async (e) => {
    e.preventDefault();
    setMensagem("Carregando...");

    try {
      const response = await api.post('/adm/login', { codigo, senha })

      const data = await response.data;

      setMensagem(data.mensagem);

      if (data.success) {
        // Login bem-sucedido
        login(data.user);
        navigate("/homeadm");
        }

    } catch (error) {
      console.error("Erro na requisição:", error);
      if (error.response) {
        // O Flask respondeu com um erro HTTP (ex.: 401, 500)
        setMensagem(error.response.data.mensagem || "Erro no servidor.")
      } else {
        // O Flask nem chegou a responder (erro de rede, CORS, etc)
        setMensagem("Erro ao conectar com o servidor.")
      }
    }
  }

  return (
    // Contêiner principal que engloba toda a tela
    <div className="tela-login">
      
      {/* Seção principal do formulário, à esquerda */}
      <div className="secao-formulario">
        
        <header className="cabecalho">
          <img src={logoEscola} alt="Logo da Escola Estadual Padre João Tomes" className="logo-escola" />
          <h1 className="nome-escola">Escola Estadual Padre João Tomes</h1>
        </header>

        {/* Card que contém o formulário de login */}
        <div className="card-formulario">
          <main>
            <h2 className="titulo-principal">
              <span className="titulo-gradiente">administradores</span>
            </h2>
            <p>{mensagem}</p>
            <form className="formulario" onSubmit={handleLogin}>
              <div className="grupo-input">
                <label htmlFor="codigo-estudante">Usuário do administrados</label>
                <input 
                  type="text" 
                  value={codigo}
                  placeholder="Digite seu código de adm" 
                  required 
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </div>
              
              <div className="grupo-input">
                <label htmlFor="senha">Senha</label>
                <input 
                  type="password" 
                  value={senha}
                  placeholder="********" 
                  required
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              
              <button type="submit" className="botao-acessar">Acessar</button>
            </form>
          </main>
          
          <footer className="rodape-card">
            <p>
              Caso não consiga acessar o sistema, entre em contato com a Direção da Escola para regularizar seu acesso.
            </p>
            <p onClick={() => navigate("/")} className="link">
              Acesso estudantes
            </p>
          </footer>
        </div>
      </div>
      
      {/* Seção da imagem de destaque, à direita */}
      <div 
        className="secao-imagem"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <img className='estrela-flutuante'
        src={estrelaUrl} alt="Estrela decorativa brilhante" 
        ></img>
        <img className='estrela-flutuante2'
        src={estrelaUrl} alt="Estrela decorativa brilhante" 
        ></img>
        <img className='estrela-flutuante3'
        src={estrelaUrl} alt="Estrela decorativa brilhante" 
        ></img>
      
      </div>

    </div>
  );
};

export default LoginAdm;
