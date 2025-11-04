/**
 * Componente ScreenMenu
 * Renderiza a tela principal após o login, exibindo as turmas para avaliação.
 * @param {object} props - Propriedades recebidas pelo componente.
 * @param {function} props.onLoginSuccess - 
 */


import { useState } from "react";
import logoEscola from "../../assets/logo_jt.png";
import './Login_screen.css';

const Login_scren_Estudante = ({ onLoginSuccess }) => {
  const imageUrl = 'https://imgur.com/K9aLoVo.png';
  const estrelaUrl = 'https://imgur.com/Nl20tqh.png';

  const [sgde, setSgde] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  /**
   * Lida com a submissão do formulário de login.
   * @param {React.FormEvent} event - O evento de submissão do formulário.
   */

  const handleLogin = async (e) => {
    e.preventDefault();
    setMensagem("Carregando...");

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sgde, senha }),
      });

      const data = await response.json();
      // {'sgde': 1165925, 'nome': 'IVANA SANTANA CORREIA', 'dataNascimento': datetime.date(2008, 2, 1), 'situacao': 'Em curso', 'senha': '1165925IVANA'}

      if (response.ok && data.success) {
        // Login bem-sucedido
        setMensagem(data.mensagem);
        localStorage.setItem("usuario", JSON.stringify(data.user));
        onLoginSuccess();
      } else {
        // Login falhou
        setMensagem(data.mensagem || "Usuário ou senha incorretos.");
        }

    } catch (error) {
      console.error("Erro na requisição:", error);
      setMensagem("Erro ao conectar com o servidor.");
    }

    

  };

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
              <span className="titulo-gradiente">Feedback Discente</span>
            </h2>
            <p>{mensagem}</p>
            <form className="formulario" onSubmit={handleLogin}>
              <div className="grupo-input">
                <label htmlFor="codigo-estudante">Código do Estudante (SGDE)</label>
                <input 
                  type="text" 
                  value={sgde}
                  placeholder="Digite seu código de estudante" 
                  required 
                  onChange={(e) => setSgde(e.target.value)}
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
}

export default Login_scren_Estudante;