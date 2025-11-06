import React, { useState } from "react";

// Importação de recursos
import "./Login_screen.css";
// import logoEscola from '../../assets/logo_jt.png'; // (Seu import original)

// Placeholder do logo já que não tenho o arquivo
const logoEscola = "https://imgur.com/9FAmRRW.png";

const LoginScreen = ({ onLoginAttempt }) => {
  // Estados para guardar os valores dos inputs
  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");

  // URLs das imagens (as estrelas)
  const imageUrl = "https://imgur.com/eR8zQhO.png";
  const estrelaUrl = "https://imgur.com/hwRX473.png";
  const estrelaUrl2 = "https://imgur.com/TQDL8zJ.png";
  const estrelaUrl3 = "https://imgur.com/RULPqHD.png";
  const estrelaUrl4 = "https://imgur.com/Ps4M4vg.png";
  const estrelaUrl5 = "https://imgur.com/4FfIQI5.png";
  const estrelaUrl6 = "https://imgur.com/FWXy96Y.png";
  const estrelaUrl7 = "https://imgur.com/Zcv6aAd.png";

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onLoginAttempt(codigo, senha);
  };

  return (
    <div className="tela-login">
      <div className="secao-formulario">
        <header className="cabecalho">
          <img
            src={logoEscola}
            alt="Logo da Escola Estadual Padre João Tomes"
            className="logo-escola"
          />
          <h1 className="nome-escola">Escola Estadual Padre João Tomes</h1>
        </header>

        <div className="card-formulario">
          <main>
            <h2 className="titulo-principal">
              <span className="titulo-gradiente">Feedback Discente</span>
            </h2>

            <form className="formulario" onSubmit={handleSubmit}>
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

              <button type="submit" className="botao-acessar">
                Acessar
              </button>
            </form>
          </main>

          <footer className="rodape-card">
            <p id="textoRodape">
              Caso não consiga acessar o sistema, entre em contato com a Direção
              da Escola para regularizar seu acesso.
            </p>
          </footer>
        </div>
      </div>

      <div
        className="secao-imagem"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* ... (Todas as suas <img> de estrelas flutuantes) ... */}
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