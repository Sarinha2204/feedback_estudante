import React, { useState } from "react";

// ------------------------------------------------
// COMPONENTE: TELA DE LOGIN (FUNCIONAL)
// ------------------------------------------------

// Importação do arquivo de estilos CSS
import "./Login_screen.css";
// import logoEscola from '../../assets/logo_jt.png'; // (Importação de asset local)

// URL de placeholder para o logo da escola (necessário para rodar sem assets locais)
const logoEscola = "https://imgur.com/oGUfXtc.png";

// Definição das URLs para as imagens de fundo e elementos decorativos (estrelas)
const imageUrl = "https://imgur.com/eR8zQhO.png";
const estrelaUrl = "https://imgur.com/hwRX473.png";
const estrelaUrl2 = "https://imgur.com/TQDL8zJ.png";
const estrelaUrl3 = "https://imgur.com/RULPqHD.png";
const estrelaUrl4 = "https://imgur.com/Ps4M4vg.png";
const estrelaUrl5 = "https://imgur.com/4FfIQI5.png";
const estrelaUrl6 = "https://imgur.com/FWXy96Y.png";
const estrelaUrl7 = "https://imgur.com/Zcv6aAd.png";


/**
 * Componente principal da tela de Login.
 * Gerencia o estado dos campos de input e a submissão do formulário.
 * @param {function} onLoginAttempt - Função de callback para processar a tentativa de login.
 */
const LoginScreen = ({ onLoginAttempt }) => {
  // Hooks de estado para armazenar os valores digitados nos inputs (código e senha)
  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");

  /**
   * Lida com a submissão do formulário, prevenindo o recarregamento da página
   * e chamando a função de login com os dados coletados.
   * @param {Event} event - Evento de submissão do formulário.
   */
  const handleSubmit = (event) => {
    event.preventDefault(); 
    onLoginAttempt(codigo, senha);
  };

  return (
    // Contêiner principal da tela de login
    <div className="tela-login">
      {/* Seção do Formulário (Painel Esquerdo) */}
      <div className="secao-formulario">
        {/* Cabeçalho com Logo e Nome da Instituição */}
        <header className="cabecalho">
          <img
            src={logoEscola}
            alt="Logo da Escola Estadual Padre João Tomes"
            className="logo-escola"
          />
          <h1 className="nome-escola">Escola Estadual Padre João Tomes</h1>
        </header>

        {/* Card que contém o formulário de login */}
        <div className="card-formulario">
          <main>
            {/* Título Principal da Aplicação */}
            <h2 className="titulo-principal">
              <span className="titulo-gradiente">Feedback Discente</span>
            </h2>

            {/* Formulário de Autenticação */}
            <form className="formulario" onSubmit={handleSubmit}>
              {/* Grupo de Input: Código do Estudante */}
              <div className="grupo-input">
                <label htmlFor="codigo-estudante">
                  Código do Estudante (ou Acesso)
                </label>
                <input
                  type="text"
                  id="codigo-estudante"
                  name="codigo-estudante"
                  placeholder="Digite seu código"
                  required
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </div>

              {/* Grupo de Input: Senha */}
              <div className="grupo-input">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="******"
                  required
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              {/* Botão de Submissão */}
              <button type="submit" className="botao-acessar">
                Acessar
              </button>
            </form>
          </main>

          {/* Rodapé do Card com Aviso de Contato */}
          <footer className="rodape-card">
            <p id="textoRodape">
              Caso não consiga acessar o sistema, entre em contato com a Direção
              da Escola para regularizar seu acesso.
            </p>
          </footer>
        </div>
      </div>

      {/* Seção de Destaque Visual (Painel Direito/Background) */}
      <div
        className="secao-imagem"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Elementos Decorativos Flutuantes (Estrelas) */}
        <img className='estrela-flutuante' src={estrelaUrl} alt="Estrela decorativa brilhante"></img>
        <img className='estrela-flutuante2' src={estrelaUrl} alt="Estrela decorativa brilhante"></img>
        <img className='estrela-flutuante3' src={estrelaUrl2} alt="Estrela decorativa brilhante"></img>
        <img className='estrela-flutuante4' src={estrelaUrl4} alt="Estrela dourada isolada"></img>
        <img className='estrela-flutuante5' src={estrelaUrl3} alt="Estrela decorativa brilhante"></img>
        <img className='estrela-flutuante6' src={estrelaUrl7} alt="Estrela decorativa brilhante"></img>
        <img className='estrela-flutuante7' src={estrelaUrl4} alt="Estrela dourada isolada"></img>
        <img className='estrela-flutuante8' src={estrelaUrl4} alt="Estrela dourada isolada"></img>
        <img className='estrela-flutuante9' src={estrelaUrl5} alt="Estrela azul clara isolada"></img>
        <img className='estrela-flutuante10' src={estrelaUrl5} alt="Estrela azul clara isolada"></img>
        <img className='estrela-flutuante11' src={estrelaUrl6} alt="Estrela azul clara isolada"></img>
        <img className='estrela-flutuante12' src={estrelaUrl6} alt="Estrela azul clara isolada"></img>
        <img className='estrela-flutuante13' src={estrelaUrl6} alt="Estrela azul clara isolada"></img>
        <img className='estrela-flutuante14' src={estrelaUrl4} alt="Estrela azul clara isolada"></img>
        <img className='estrela-flutuante15' src={estrelaUrl4} alt="Estrela azul clara isolada"></img>
        <img className='estrela-flutuante16' src={estrelaUrl4} alt="Estrela azul clara isolada"></img>
        <img className='estrela-flutuante17' src={estrelaUrl7} alt="Estrela decorativa brilhante"></img>
        <img className='estrela-flutuante18' src={estrelaUrl6} alt="Estrela decorativa brilhante"></img>
      </div>
    </div>
  );
};

export default LoginScreen;