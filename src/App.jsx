import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Redirecciones automáticas para URLs anteriores */}
        <Route path="/precios" element={<Navigate to="/#precios" replace />} />
        <Route path="/demo" element={<Navigate to="/#demo" replace />} />
        <Route path="/soluciones" element={<Navigate to="/#demo" replace />} />
        <Route path="/casos-de-uso" element={<Navigate to="/#caso-real" replace />} />
        <Route path="/como-funciona" element={<Navigate to="/#demo" replace />} />
        <Route path="/auditoria" element={<Navigate to="/#contacto" replace />} />
        <Route path="/faq" element={<Navigate to="/#precios" replace />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
