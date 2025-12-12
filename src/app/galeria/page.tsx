import React from 'react';
import Link from 'next/link';

const GaleriaPage: React.FC = () => {
  const trabalhos = [
    {
      id: 1,
      titulo: "Guarda-roupa Planejado",
      descricao: "Montagem completa de guarda-roupa planejado com acabamento perfeito",
      imagem: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      titulo: "Rack para TV",
      descricao: "Instalação de rack moderno com painel e suporte para TV",
      imagem: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      titulo: "Estante de Livros",
      descricao: "Montagem de estante planejada para escritório",
      imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      titulo: "Cozinha Planejada",
      descricao: "Montagem completa de móveis de cozinha planejada",
      imagem: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      titulo: "Home Office",
      descricao: "Montagem de mesa e estante para escritório em casa",
      imagem: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      titulo: "Quarto Infantil",
      descricao: "Montagem completa de móveis para quarto de criança",
      imagem: "https://images.unsplash.com/photo-1631679706909-faa4ac2b8534?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="page-container">
      {/* Navegação */}
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            🔧 Montador de Móveis
          </Link>
          <div className="nav-menu">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/servicos" className="nav-link">Serviços</Link>
            <Link href="/galeria" className="nav-link active">Galeria</Link>
            <Link href="/sobre" className="nav-link">Sobre</Link>
            <Link href="/contato" className="nav-link">Contato</Link>
          </div>
        </div>
      </nav>

      {/* Header da Página */}
      <header className="page-header">
        <div className="header-content">
          <h1>Galeria de Trabalhos</h1>
          <p>Veja alguns dos nossos trabalhos realizados com qualidade e dedicação</p>
        </div>
      </header>

      {/* Galeria */}
      <main className="main-content">
        <div className="container">
          <div className="gallery-grid">
            {trabalhos.map((trabalho) => (
              <div key={trabalho.id} className="gallery-item">
                <div className="image-container">
                  <img 
                    src={trabalho.imagem} 
                    alt={trabalho.titulo}
                    loading="lazy"
                  />
                  <div className="overlay">
                    <div className="overlay-content">
                      <h3>{trabalho.titulo}</h3>
                      <p>{trabalho.descricao}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="cta-section">
            <h2>Gostou do que viu?</h2>
            <p>Entre em contato e solicite seu orçamento sem compromisso!</p>
            <div className="cta-buttons">
              <a 
                href="https://wa.me/5519996615949" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                💬 Chamar no WhatsApp
              </a>
              <Link href="/contato" className="btn-secondary">
                📧 Formulário de Contato
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Montador de Móveis</h3>
              <p>Serviço profissional de montagem de móveis em toda a região.</p>
            </div>
            <div className="footer-section">
              <h4>Navegação</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/servicos">Serviços</Link></li>
                <li><Link href="/galeria">Galeria</Link></li>
                <li><Link href="/contato">Contato</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <p>📱 WhatsApp: (19) 99661-5949</p>
              <p>📍 Atendemos toda a região</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Montador de Móveis - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .page-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Navegação */
        .navbar {
          background: #fff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }

        .nav-logo {
          font-size: 24px;
          font-weight: bold;
          color: #2563eb;
          text-decoration: none;
        }

        .nav-menu {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #2563eb;
        }

        /* Header da Página */
        .page-header {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: white;
          padding: 80px 0;
          text-align: center;
        }

        .header-content h1 {
          font-size: 48px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .header-content p {
          font-size: 20px;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Conteúdo Principal */
        .main-content {
          flex: 1;
          padding: 80px 0;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Galeria */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .gallery-item {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .gallery-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .image-container {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .gallery-item:hover .image-container img {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: white;
          padding: 30px 20px 20px;
          transform: translateY(100%);
          transition: transform 0.3s;
        }

        .gallery-item:hover .overlay {
          transform: translateY(0);
        }

        .overlay-content h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .overlay-content p {
          font-size: 14px;
          opacity: 0.9;
          line-height: 1.5;
        }

        /* Call to Action */
        .cta-section {
          text-align: center;
          background: white;
          padding: 60px 40px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .cta-section h2 {
          font-size: 36px;
          color: #1f2937;
          margin-bottom: 15px;
        }

        .cta-section p {
          font-size: 18px;
          color: #6b7280;
          margin-bottom: 40px;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          padding: 15px 30px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: #25d366;
          color: white;
        }

        .btn-primary:hover {
          background: #1fb854;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: #2563eb;
          border: 2px solid #2563eb;
        }

        .btn-secondary:hover {
          background: #2563eb;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
        }

        /* Footer */
        .footer {
          background: #1f2937;
          color: white;
          padding: 60px 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h3,
        .footer-section h4 {
          margin-bottom: 20px;
          color: #2563eb;
        }

        .footer-section p,
        .footer-section li {
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 8px;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-section a:hover {
          color: #2563eb;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 20px;
          text-align: center;
          color: #9ca3af;
        }

        /* Responsividade */
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .header-content h1 {
            font-size: 32px;
          }

          .header-content p {
            font-size: 16px;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .cta-section {
            padding: 40px 20px;
          }

          .cta-section h2 {
            font-size: 28px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default GaleriaPage;
