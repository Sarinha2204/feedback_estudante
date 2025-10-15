/**
 * componente: LoginScreen
 * propósito: renderiza a página de login da aplicação, contendo o formulário
 * de autenticação e elementos de identidade visual.
 */
import React from 'react';

// importação da folha de estilos do componente.
import './Login_screen.css'; 
// importação do arquivo de imagem da logo.
import logoEscola from './logo_jt.png';

const LoginScreen = () => {
  // url para a imagem de destaque da seção direita.
  const imageUrl = 'https://imgur.com/K9aLoVo.png';
  const estrelaUrl = 'https://imgur.com/Nl20tqh.png';
  const sobreposicao = 'https://imgur.com/rVNSFU7.png';

  return (
    // container principal que engloba toda a tela.
    <div className="tela-login">
      
      {/* seção principal do formulário, à esquerda. */}
      <div className="secao-formulario">
          
        <header className="cabecalho">
          <img src={logoEscola} alt="Logo da Escola Estadual Padre João Tomes" className="logo-escola" />
          <h1 className="nome-escola">Escola Estadual Padre João Tomes</h1>
        </header>

        {/* container do formulário de login. */}
        <div className="card-formulario">
          <main>
            <h2 className="titulo-principal">
              <span className="titulo-gradiente">Feedback Discente</span>
            </h2>

            <form className="formulario">
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
      
      {/* seção da imagem de destaque, à direita. */}
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

        <img className='sobreposicao'
        src={sobreposicao} alt="Forma azul" 
        ></img>
      
      </div>

    </div>
  );
}

export default LoginScreen;

