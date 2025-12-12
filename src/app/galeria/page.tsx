'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const GaleriaPage: React.FC = () => {
  const trabalhos = [
    {
      id: 1,
      titulo: "Guarda-roupa Planejado",
      descricao: "Montagem completa de guarda-roupa planejado com acabamento perfeito",
      imagem: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      categoria: "Planejados"
    },
    {
      id: 2,
      titulo: "Rack para TV",
      descricao: "Instalação de rack moderno com painel e suporte para TV",
      imagem: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
      categoria: "Entretenimento"
    },
    {
      id: 3,
      titulo: "Estante de Livros",
      descricao: "Montagem de estante planejada para escritório",
      imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      categoria: "Organização"
    },
    {
      id: 4,
      titulo: "Cozinha Planejada",
      descricao: "Montagem completa de móveis de cozinha planejada",
      imagem: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      categoria: "Planejados"
    },
    {
      id: 5,
      titulo: "Home Office",
      descricao: "Montagem de mesa e estante para escritório em casa",
      imagem: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      categoria: "Escritório"
    },
    {
      id: 6,
      titulo: "Quarto Infantil",
      descricao: "Montagem completa de móveis para quarto de criança",
      imagem: "https://images.unsplash.com/photo-1631679706909-faa4ac2b8534?w=400&h=300&fit=crop",
      categoria: "Quartos"
    },
    {
      id: 7,
      titulo: "Closet Moderno",
      descricao: "Organização completa de closet com nichos e cabideiros",
      imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      categoria: "Organização"
    },
    {
      id: 8,
      titulo: "Painel TV Suspenso",
      descricao: "Instalação de painel suspenso com iluminação LED",
      imagem: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop",
      categoria: "Entretenimento"
    },
    {
      id: 9,
      titulo: "Armário Banheiro",
      descricao: "Montagem de armário planejado para banheiro",
      imagem: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop",
      categoria: "Planejados"
    }
  ];

  const categorias = ["Todos", ...Array.from(new Set(trabalhos.map(t => t.categoria)))];
  const [categoriaSelecionada, setCategoriaSecionada] = React.useState("Todos");

  const trabalhosFiltrados = categoriaSelecionada === "Todos" 
    ? trabalhos 
    : trabalhos.filter(trabalho => trabalho.categoria === categoriaSelecionada);

  return (
    <div className="page-container">
      <Navbar />
      
      <header className="page-header">
        <div className="container">
          <div className="header-content">
            <h1>Galeria de Trabalhos</h1>
            <p>Veja alguns dos nossos trabalhos realizados com qualidade e dedicação ao longo dos anos</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          {/* Filtros */}
          <section className="filters-section">
            <div className="filters-container">
              <h3>Filtrar por categoria:</h3>
              <div className="filter-buttons">
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    className={`filter-btn ${categoriaSelecionada === categoria ? 'active' : ''}`}
                    onClick={() => setCategoriaSecionada(categoria)}
                  >
                    {categoria}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Galeria */}
          <section className="gallery-section">
            <div className="gallery-grid">
              {trabalhosFiltrados.map((trabalho) => (
                <div key={trabalho.id} className="gallery-item">
                  <div className="image-container">
                    <img 
                      src={trabalho.imagem} 
                      alt={trabalho.titulo}
                      loading="lazy"
                    />
                    <div className="overlay">
                      <div className="overlay-content">
                        <span className="category-tag">{trabalho.categoria}</span>
                        <h3>{trabalho.titulo}</h3>
                        <p>{trabalho.descricao}</p>
                        <a 
                          href={`https://wa.me/5519996615949?text=Olá! Vi o trabalho "${trabalho.titulo}" na galeria e gostaria de solicitar um orçamento similar.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp btn-small"
                        >
                          💬 Solicitar Similar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {trabalhosFiltrados.length === 0 && (
              <div className="empty-state">
                <p>Nenhum trabalho encontrado nesta categoria.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setCategoriaSecionada("Todos")}
                >
                  Ver Todos os Trabalhos
                </button>
              </div>
            )}
          </section>
          
          {/* Call to Action */}
          <section className="cta-section">
            <div className="cta-content">
              <h2>Gostou do que Viu?</h2>
              <p>Todos esses trabalhos foram realizados com a mesma qualidade e cuidado que teremos com o seu projeto!</p>
              <div className="cta-buttons">
                <a 
                  href="https://wa.me/5519996615949" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  💬 Solicitar Orçamento
                </a>
                <Link href="/contato" className="btn btn-secondary">
                  📧 Formulário de Contato
                </Link>
                <Link href="/servicos" className="btn btn-primary">
                  📋 Ver Serviços e Preços
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .main-content {
          padding: 60px 0;
          background: var(--background-gray);
        }

        /* Filtros */
        .filters-section {
          margin-bottom: 40px;
        }

        .filters-container {
          text-align: center;
          background: var(--background);
          padding: 30px;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
        }

        .filters-container h3 {
          color: var(--text-dark);
          margin-bottom: 20px;
          font-size: 18px;
        }

        .filter-buttons {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 20px;
          border: 2px solid var(--border-color);
          background: var(--background);
          color: var(--text-gray);
          border-radius: var(--border-radius);
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
        }

        .filter-btn:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .filter-btn.active {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
        }

        /* Galeria */
        .gallery-section {
          margin-bottom: 60px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .gallery-item {
          background: var(--background);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          transition: var(--transition);
        }

        .gallery-item:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl);
        }

        .image-container {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .gallery-item:hover .image-container img {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(transparent 30%, rgba(0,0,0,0.9));
          color: white;
          padding: 30px 25px 25px;
          display: flex;
          align-items: flex-end;
          opacity: 0;
          transition: var(--transition);
        }

        .gallery-item:hover .overlay {
          opacity: 1;
        }

        .overlay-content {
          width: 100%;
        }

        .category-tag {
          background: var(--primary-color);
          color: white;
          padding: 4px 12px;
          border-radius: var(--border-radius);
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 10px;
          display: inline-block;
        }

        .overlay-content h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .overlay-content p {
          font-size: 14px;
          opacity: 0.9;
          line-height: 1.5;
          margin-bottom: 15px;
        }

        .btn-small {
          padding: 8px 16px;
          font-size: 13px;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: var(--text-gray);
        }

        .empty-state p {
          font-size: 18px;
          margin-bottom: 20px;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 80px 60px;
          border-radius: var(--border-radius-lg);
          text-align: center;
        }

        .cta-content h2 {
          font-size: clamp(28px, 4vw, 36px);
          margin-bottom: 20px;
        }

        .cta-content p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .filters-container {
            padding: 20px;
          }

          .filter-buttons {
            gap: 8px;
          }

          .filter-btn {
            padding: 8px 16px;
            font-size: 14px;
          }

          .overlay {
            opacity: 1;
            background: linear-gradient(transparent 40%, rgba(0,0,0,0.8));
          }

          .cta-section {
            padding: 60px 30px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .filter-buttons {
            flex-direction: column;
          }

          .filter-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default GaleriaPage;
