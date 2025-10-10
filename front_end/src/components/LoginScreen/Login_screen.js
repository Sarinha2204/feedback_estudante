/**
 * Componente: LoginScreen
 * * Propósito: Renderiza a página de login da aplicação, incluindo o formulário
 * de autenticação e elementos visuais de identidade da instituição.
 * * @returns {JSX.Element} A interface da tela de login.
 */
import React from 'react';

// Importa a folha de estilos específica para este componente.
import './Login_screen.css'; 
// Importa o arquivo de imagem da logo para uso no componente.
import logoEscola from './logo_jt.png';

const LoginScreen = () => {
  // URL da imagem de destaque exibida na seção lateral da tela.
  const imageUrl = 'https://imgur.com/K9aLoVo.png';

  return (
    <div className="login-container">
      
      {/* Seção Esquerda: Contém todos os elementos do formulário e identidade. */}
      <div className="login-form-section">
          
        {/* Cabeçalho posicionado no topo da seção do formulário. */}
        <header className="login-header">
          <img src={logoEscola} alt="Logo da Escola Estadual Padre João Tomes" className="logo" />
          <h1 className="school-name">Escola Estadual Padre João Tomes</h1>
        </header>

        {/* Wrapper principal para o conteúdo do formulário, permitindo centralização. */}
        <div className="login-form-wrapper">
          <main>
           <h2 className="title"><span className="title-highlight">Feedback Discente</span></h2>

            <form className="login-form">
              <div className="input-group">
                <label htmlFor="student-code">Código do Estudante (SGDE)</label>
                <input 
                  type="text" 
                  id="student-code" 
                  name="student-code"
                  placeholder="Digite seu código de estudante" 
                  required 
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="password">Senha</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  placeholder="********" 
                  required
                />
              </div>
              
              <button type="submit" className="login-button">Acessar</button>
            </form>
          </main>
          
          <footer className="login-footer">
            <p>
              Caso não consiga acessar o sistema, entre em contato com a Direção da Escola para regularizar seu acesso.
            </p>
          </footer>
        </div>
      </div>
      
      {/* Seção Direita: Exibe uma imagem de destaque. Fica oculta em telas menores. */}
      <div 
        className="login-image-section"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
      </div>

    </div>
  );
}

export default LoginScreen;