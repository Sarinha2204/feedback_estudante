import React, { useState } from 'react';

// 1. Importamos AMBOS os componentes de tela
import LoginScreen from './components/LoginScreen/Login_screen.js';
import ScreenMenu from './components/ScreenMenu/Screen_menu.js';

function App() {
  // 2. Criamos um "estado" para lembrar se o usuário está logado ou não.
  // Ele começa como 'false', então a primeira tela a ser exibida é a de login.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 3. Esta função será chamada pela LoginScreen quando o login for bem-sucedido.
  // Ela muda o estado 'isLoggedIn' para 'true'.
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // 4. Esta função será chamada pela ScreenMenu quando o botão "Sair" for clicado.
  // Ela muda o estado 'isLoggedIn' de volta para 'false'.
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // 5. Aqui acontece a mágica:
  // O React verifica o valor de 'isLoggedIn'.
  // - Se for 'true', ele renderiza o componente <ScreenMenu>.
  // - Se for 'false', ele renderiza o componente <LoginScreen>.
  return (
    <div>
      {isLoggedIn ? (
        // Se estiver logado, mostre o Menu e passe a função de logout para ele
        <ScreenMenu onLogout={handleLogout} />
      ) : (
        // Se NÃO estiver logado, mostre o Login e passe a função de login para ele
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;