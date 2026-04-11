import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ContactCTA } from './components/ui/ContactCTA';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { BlogPage } from './pages/BlogPage';
import { SuryaGharPage } from './pages/SuryaGharPage';
import ScrollToTop from './components/utils/ScrollToTop';
import { PageTransition } from './components/utils/PageTransition';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-deepblue-text bg-cream">
        <Header />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/surya-ghar" element={<SuryaGharPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <ContactCTA />
      </div>
    </Router>
  );
}