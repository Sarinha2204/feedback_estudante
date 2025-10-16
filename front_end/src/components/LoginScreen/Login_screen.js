/**
 * Componente LoginScreen
 * Renderiza a página de login da aplicação.
 * @param {object} props - Propriedades recebidas pelo componente.
 * @param {function} props.onLoginSuccess - Função de callback executada no sucesso do login.
 */
import React from 'react';

// Importação de recursos
import './Login_screen.css'; 
import logoEscola from '../../assets/logo_jt.png';

const LoginScreen = ({ onLoginSuccess }) => {
  // URLs das imagens utilizadas no componente
  const imageUrl = 'https://imgur.com/K9aLoVo.png';
  const estrelaUrl = 'https://imgur.com/Nl20tqh.png';

  /**
   * Lida com a submissão do formulário de login.
   * @param {React.FormEvent} event - O evento de submissão do formulário.
   */
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página
    onLoginSuccess(); // Executa a função para sinalizar o login bem-sucedido
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

            <form className="formulario" onSubmit={handleSubmit}>
              <div className="grupo-input">
                <label htmlFor="codigo-estudante">Código do Estudante (SGDE)</label>
                <input 
                  type="text" 
                  id="codigo-estudante" 
                  name="codigo-estudante"
                  placeholder="Digite seu código de estudante" 
                  required 
                />
              </div>
              
              <div className="grupo-input">
                <label htmlFor="senha">Senha</label>
                <input 
                  type="password" 
                  id="senha" 
                  name="senha"
                  placeholder="********" 
                  required
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

export default LoginScreen;