import React, { useState } from 'react';

// 1. Importa seus componentes de tela
// (Agora que os arquivos estão certos, isso vai funcionar)
import LoginScreen from './components/LoginScreen/Login_screen.js';
import ScreenMenu from './components/ScreenMenu/Screen_menu.js';

// (O App.js NÃO precisa saber do TelaRelatorio, 
// o ScreenMenu cuida disso, como a gente já fez)

export default function App() {
  
  // COMEÇA COM "login"
  const [telaAtual, setTelaAtual] = useState("login");

  /**
   * O LoginScreen (agora o LoginScreen de verdade) chama esta função.
   */
  const handleLoginAttempt = (codigo, senha) => {
    
    // LÓGICA DE LOGIN (Exemplo)
    if (codigo && senha) {
      // Se o login for válido, MUDA pra "menu"
      setTelaAtual("menu");
    } 
    else {
      alert("Código ou senha inválidos!");
    }
  };

  /**
   * O ScreenMenu (agora o ScreenMenu de verdade) chama esta função.
   */
  const handleLogout = () => {
    // Quando desloga, MUDA DE VOLTA pra "login"
    setTelaAtual("login");
  };

  // --- Renderização Principal ---
  
  // Se 'telaAtual' for 'login', mostra o LoginScreen
  if (telaAtual === "login") {
    return (
      <LoginScreen 
        onLoginAttempt={handleLoginAttempt} 
      />
    );
  }

  // Se 'telaAtual' for 'menu', mostra o ScreenMenu
  if (telaAtual === "menu") {
    return (
      <ScreenMenu 
        onLogout={handleLogout} 
      />
    );
  }
}