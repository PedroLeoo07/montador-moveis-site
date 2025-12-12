'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const servicos = [
    {
      icon: '🏠',
      titulo: 'Móveis Planejados',
      descricao: 'Montagem completa de móveis planejados com precisão e acabamento profissional'
    },
    {
      icon: '👕',
      titulo: 'Guarda-roupas',
      descricao: 'Montagem de guarda-roupas de todos os tamanhos e modelos com organização perfeita'
    },
    {
      icon: '📺',
      titulo: 'Racks e Painéis',
      descricao: 'Instalação de racks, painéis e suportes para TV com segurança garantida'
    },
    {
      icon: '📚',
      titulo: 'Estantes e Prateleiras',
      descricao: 'Montagem de estantes, prateleiras e organizadores para todos os ambientes'
    },
    {
      icon: '🔧',
      titulo: 'Reparos e Ajustes',
      descricao: 'Consertos e ajustes em móveis já montados, portas, gavetas e dobradiças'
    },
    {
      icon: '⚡',
      titulo: 'Serviço Express',
      descricao: 'Atendimento rápido para urgências e montagens que não podem esperar'
    }
  ];

  const diferenciais = [
    {
      icon: '✅',
      titulo: 'Qualidade Garantida',
      descricao: 'Mais de 10 anos de experiência com garantia em todos os serviços'
    },
    {
      icon: '⏱️',
      titulo: 'Pontualidade',
      descricao: 'Chegamos no horário marcado e cumprimos os prazos estabelecidos'
    },
    {
      icon: '🛠️',
      titulo: 'Ferramentas Próprias',
      descricao: 'Equipamentos profissionais para um acabamento perfeito'
    },
    {
      icon: '💰',
      titulo: 'Preço Justo',
      descricao: 'Orçamentos transparentes e preços competitivos do mercado'
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Montador de Móveis Profissional</h1>
              <p>Serviço completo de montagem com qualidade, rapidez e preço justo. Atendemos toda a região de Campinas com pontualidade e garantia.</p>
              <div className="hero-buttons">
                <a 
                  href="https://wa.me/5519996615949" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  💬 Orçamento WhatsApp
                </a>
                <Link href="/servicos" className="btn btn-secondary">
                  📋 Ver Serviços
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop" 
                alt="Montagem de móveis profissional"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="main-content">
        {/* Serviços */}
        <section className="services-section">
          <div className="container">
            <div className="section-header">
              <h2>Nossos Serviços</h2>
              <p>Oferecemos soluções completas para montagem de móveis</p>
            </div>
            <div className="grid grid-3">
              {servicos.map((servico, index) => (
                <div key={index} className="card service-card">
                  <div className="service-icon">{servico.icon}</div>
                  <h3>{servico.titulo}</h3>
                  <p>{servico.descricao}</p>
                </div>
              ))}
            </div>
            <div className="services-cta">
              <Link href="/servicos" className="btn btn-primary">
                Ver Todos os Serviços
              </Link>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2>Por que Escolher Nossos Serviços?</h2>
              <p>Comprometimento com qualidade e satisfação do cliente</p>
            </div>
            <div className="grid grid-2">
              {diferenciais.map((diferencial, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{diferencial.icon}</div>
                  <div className="feature-content">
                    <h3>{diferencial.titulo}</h3>
                    <p>{diferencial.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria Preview */}
        <section className="gallery-preview">
          <div className="container">
            <div className="section-header">
              <h2>Nossos Trabalhos</h2>
              <p>Veja alguns dos trabalhos realizados com excelência</p>
            </div>
            <div className="preview-grid">
              <div className="preview-item">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" alt="Trabalho 1" />
              </div>
              <div className="preview-item">
                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop" alt="Trabalho 2" />
              </div>
              <div className="preview-item">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" alt="Trabalho 3" />
              </div>
              <div className="preview-item">
                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" alt="Trabalho 4" />
              </div>
            </div>
            <div className="gallery-cta">
              <Link href="/galeria" className="btn btn-secondary">
                Ver Galeria Completa
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Pronto para Montar seus Móveis?</h2>
              <p>Entre em contato agora e receba seu orçamento gratuito!</p>
              <div className="cta-buttons">
                <a 
                  href="https://wa.me/5519996615949" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  💬 WhatsApp Direto
                </a>
                <Link href="/contato" className="btn btn-primary">
                  📧 Formulário de Contato
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.05"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-text h1 {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .hero-text p {
          font-size: 20px;
          opacity: 0.9;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hero-image img {
          width: 100%;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-xl);
        }

        /* Sections */
        .services-section,
        .features-section,
        .gallery-preview {
          padding: 80px 0;
        }

        .services-section {
          background: var(--background);
        }

        .features-section {
          background: var(--background-gray);
        }

        .gallery-preview {
          background: var(--background);
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: clamp(28px, 4vw, 40px);
          color: var(--text-dark);
          margin-bottom: 15px;
        }

        .section-header p {
          font-size: 18px;
          color: var(--text-gray);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Service Cards */
        .service-card {
          text-align: center;
          padding: 40px 30px;
          height: 100%;
        }

        .service-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .service-card h3 {
          font-size: 20px;
          color: var(--text-dark);
          margin-bottom: 15px;
        }

        .service-card p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        .services-cta {
          text-align: center;
          margin-top: 50px;
        }

        /* Features */
        .feature-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 30px;
          background: var(--background);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
        }

        .feature-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .feature-content h3 {
          font-size: 20px;
          color: var(--text-dark);
          margin-bottom: 10px;
        }

        .feature-content p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        /* Gallery Preview */
        .preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .preview-item {
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          transition: var(--transition);
        }

        .preview-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }

        .preview-item img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .gallery-cta {
          text-align: center;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 80px 0;
          text-align: center;
        }

        .cta-content h2 {
          font-size: clamp(28px, 4vw, 40px);
          margin-bottom: 20px;
        }

        .cta-content p {
          font-size: 20px;
          opacity: 0.9;
          margin-bottom: 40px;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            padding: 60px 0;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .services-section,
          .features-section,
          .gallery-preview,
          .cta-section {
            padding: 60px 0;
          }

          .feature-item {
            flex-direction: column;
            text-align: center;
          }

          .preview-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .preview-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
