'use client';
import React from 'react';
import Link from 'next/link';

// Importações dos componentes
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="page-container">
      <Navbar />
      
      <main className="main-content">
        <div className="container">
          <h1>Montador de Móveis Profissional</h1>
          <p>Serviço de qualidade em montagem de móveis</p>
          
          <div className="hero-buttons">
            <a 
              href="https://wa.me/5519996615949" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              💬 WhatsApp
            </a>
            <Link href="/servicos" className="btn btn-secondary">
              📋 Ver Serviços
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .page-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
          padding: 80px 0;
          text-align: center;
          background: var(--background-gray);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        h1 {
          font-size: clamp(32px, 5vw, 48px);
          color: var(--text-dark);
          margin-bottom: 20px;
        }

        p {
          font-size: 20px;
          color: var(--text-gray);
          margin-bottom: 40px;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 30px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-whatsapp {
          background: #25d366;
          color: white;
        }

        .btn-whatsapp:hover {
          background: #1fb854;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .btn-secondary:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;