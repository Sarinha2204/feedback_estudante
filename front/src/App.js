import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";

import Navbar from './components/Navbar/Navbar';

// Páginas estudante
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Avaliacao from './pages/Avaliacao/Avaliacao';

// Páginas adm
import LoginAdm from './pagesadm/Loginadm/Loginadm';
import HomeAdm from './pagesadm/Homeadm/Homeadm';
import Estudantesadm from './pagesadm/Estudantesadm/Estudantesadm';
import Configuracoesadm from './pagesadm/Configuracaoadm/Configuracaoadm';


function AppRoutes() {
  const location = useLocation();
  const { usuario } = useAuth();


  return (
    <>
      <Routes>
        {/* Rota pública */}
        <Route path="/login" element={<Login />} />
        <Route path="/adm" element={<LoginAdm />} />

        {/* Rotas protegidas */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

          <Route
          path="/avaliacao"
          element={
            <ProtectedRoute>
              <Avaliacao />
            </ProtectedRoute>
          }
        />

        <Route
          path="/homeadm"
          element={
            <ProtectedRoute>
              <HomeAdm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/estudantesadm"
          element={
            <ProtectedRoute>
              <Estudantesadm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/configuracoesadm"
          element={
            <ProtectedRoute>
              <Configuracoesadm />
            </ProtectedRoute>
          }
        />


        {/* Qualquer rota não existente → redireciona pro login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;