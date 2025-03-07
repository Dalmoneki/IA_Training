import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Defina a rota padrão */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Rota específica para a página de login */}
        <Route path="/login" element={<Login />} />

        {/* Rota de fallback para páginas não encontradas (opcional) */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default App;