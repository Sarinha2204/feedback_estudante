import React, { useState } from 'react';

// --- CORREÇÃO FINAL ---
// Agora os imports estão corretos,
// presumindo que 'components' e 'RelatoryScreen'
// estão DENTRO de 'src', junto com App.js
import LoginScreen from './components/LoginScreen/Login_screen.js';
import ScreenMenu from './components/ScreenMenu/Screen_menu.js';
import RelatoryScreen from './components/RelatoryScreen/relatory_screen.jsx'; 

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("login");

  const handleLoginAttempt = (codigo, senha) => {
    if (codigo === "DIRETOR" && senha === "direcao123") {
      setCurrentScreen("director_report");
    } 
    else if (codigo && senha) {
      setCurrentScreen("student_menu");
    } 
    else {
      alert("Código ou senha inválidos!");
    }
  };

  const handleLogout = () => {
    setCurrentScreen("login");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return <LoginScreen onLoginAttempt={handleLoginAttempt} />;
      
      case "student_menu":
        return <ScreenMenu onLogout={handleLogout} />;
      
      case "director_report":
        return <RelatoryScreen onLogout={handleLogout} />; 
      
      default:
        return <LoginScreen onLoginAttempt={handleLoginAttempt} />;
    }
  };

  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}