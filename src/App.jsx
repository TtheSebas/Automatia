import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import SolutionsPage from './pages/SolutionsPage';
import DemoPage from './pages/DemoPage';
import UseCasesPage from './pages/UseCasesPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import AuditPage from './pages/AuditPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="como-funciona" element={<HowItWorksPage />} />
          <Route path="soluciones" element={<SolutionsPage />} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="casos-de-uso" element={<UseCasesPage />} />
          <Route path="precios" element={<PricingPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="auditoria" element={<AuditPage />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
