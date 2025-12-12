'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ServicosPage: React.FC = () => {
  const servicos = [
    {
      categoria: 'Montagem Residencial',
      icon: '🏠',
      itens: [
        {
          nome: 'Móveis Planejados',
          descricao: 'Montagem completa de móveis planejados para cozinha, quarto, banheiro e área de serviço',
          tempo: '4-8 horas',
          preco: 'A partir de R$ 150'
        },
        {
          nome: 'Guarda-roupas',
          descricao: 'Montagem de guarda-roupas de 2, 3, 4 ou mais portas, com ou sem espelho',
          tempo: '3-6 horas',
          preco: 'A partir de R$ 120'
        },
        {
          nome: 'Camas e Berços',
          descricao: 'Montagem de camas de solteiro, casal, berços e camas auxiliares',
          tempo: '1-3 horas',
          preco: 'A partir de R$ 80'
        }
      ]
    },
    {
      categoria: 'Entretenimento',
      icon: '📺',
      itens: [
        {
          nome: 'Racks e Painéis TV',
          descricao: 'Montagem e instalação de racks, painéis para TV e centros de entretenimento',
          tempo: '2-4 horas',
          preco: 'A partir de R$ 100'
        },
        {
          nome: 'Suportes para TV',
          descricao: 'Instalação de suportes fixos, articulados e com inclinação para TVs até 75"',
          tempo: '1-2 horas',
          preco: 'A partir de R$ 60'
        },
        {
          nome: 'Home Theater',
          descricao: 'Organização e instalação completa de sistemas de home theater',
          tempo: '3-5 horas',
          preco: 'A partir de R$ 150'
        }
      ]
    },
    {
      categoria: 'Organização',
      icon: '📚',
      itens: [
        {
          nome: 'Estantes e Prateleiras',
          descricao: 'Montagem de estantes, prateleiras flutuantes e sistemas modulares',
          tempo: '2-4 horas',
          preco: 'A partir de R$ 80'
        },
        {
          nome: 'Organizadores',
          descricao: 'Montagem de gaveteiros, nichos, cubos organizadores e aramados',
          tempo: '1-3 horas',
          preco: 'A partir de R$ 60'
        },
        {
          nome: 'Escritório',
          descricao: 'Montagem completa de móveis para home office e escritórios',
          tempo: '3-6 horas',
          preco: 'A partir de R$ 120'
        }
      ]
    },
    {
      categoria: 'Manutenção',
      icon: '🔧',
      itens: [
        {
          nome: 'Reparos e Ajustes',
          descricao: 'Conserto de portas, gavetas, dobradiças e fechaduras',
          tempo: '1-2 horas',
          preco: 'A partir de R$ 50'
        },
        {
          nome: 'Troca de Peças',
          descricao: 'Substituição de puxadores, dobradiças, corrediças e acessórios',
          tempo: '30min-2h',
          preco: 'A partir de R$ 40'
        },
        {
          nome: 'Desmontagem',
          descricao: 'Desmontagem cuidadosa para mudanças e reorganização',
          tempo: '1-4 horas',
          preco: 'A partir de R$ 80'
        }
      ]
    }
  ];

  const diferenciais = [
    'Ferramentas profissionais próprias',
    'Garantia de 90 dias em todos os serviços',
    'Limpeza do local após o serviço',
    'Pontualidade e compromisso',
    'Orçamento sem compromisso',
    'Atendimento personalizado'
  ];

  return (
    <div className="page-container">
      <Navbar />
      
      <header className="page-header">
        <div className="container">
          <div className="header-content">
            <h1>Nossos Serviços</h1>
            <p>Soluções completas em montagem de móveis com qualidade profissional e preços justos</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <section className="services-grid">
            {servicos.map((categoria, index) => (
              <div key={index} className="category-section">
                <div className="category-header">
                  <span className="category-icon">{categoria.icon}</span>
                  <h2>{categoria.categoria}</h2>
                </div>
                
                <div className="services-list">
                  {categoria.itens.map((servico, servicoIndex) => (
                    <div key={servicoIndex} className="card service-item">
                      <div className="service-content">
                        <h3>{servico.nome}</h3>
                        <p>{servico.descricao}</p>
                        <div className="service-details">
                          <div className="detail">
                            <span className="detail-label">⏱️ Tempo:</span>
                            <span className="detail-value">{servico.tempo}</span>
                          </div>
                          <div className="detail">
                            <span className="detail-label">💰 Preço:</span>
                            <span className="detail-value">{servico.preco}</span>
                          </div>
                        </div>
                      </div>
                      <div className="service-action">
                        <a 
                          href={`https://wa.me/5519996615949?text=Olá! Gostaria de um orçamento para ${servico.nome}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp btn-small"
                        >
                          💬 Orçar
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="guarantees-section">
            <div className="guarantees-content">
              <h2>O que Você Ganha com Nossos Serviços</h2>
              <div className="guarantees-grid">
                {diferenciais.map((diferencial, index) => (
                  <div key={index} className="guarantee-item">
                    <span className="guarantee-icon">✅</span>
                    <span>{diferencial}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="pricing-info">
            <div className="card">
              <h2>Informações Importantes</h2>
              <div className="info-grid">
                <div className="info-item">
                  <h3>💰 Como Calculamos o Preço</h3>
                  <ul>
                    <li>Complexidade da montagem</li>
                    <li>Número de peças e módulos</li>
                    <li>Tempo estimado de execução</li>
                    <li>Ferramentas especiais necessárias</li>
                  </ul>
                </div>
                <div className="info-item">
                  <h3>📋 O que Está Incluso</h3>
                  <ul>
                    <li>Mão de obra especializada</li>
                    <li>Ferramentas profissionais</li>
                    <li>Limpeza do local</li>
                    <li>Garantia do serviço</li>
                  </ul>
                </div>
                <div className="info-item">
                  <h3>⚠️ Não Incluso</h3>
                  <ul>
                    <li>Peças e acessórios do móvel</li>
                    <li>Furação em azulejos</li>
                    <li>Instalações elétricas</li>
                    <li>Transporte do móvel</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="cta-content">
              <h2>Precisa de um Orçamento?</h2>
              <p>Entre em contato agora e receba seu orçamento personalizado sem compromisso!</p>
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
                <Link href="/galeria" className="btn btn-secondary">
                  🖼️ Ver Trabalhos Realizados
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

        .category-section {
          margin-bottom: 60px;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 3px solid var(--primary-color);
        }

        .category-icon {
          font-size: 32px;
        }

        .category-header h2 {
          font-size: 28px;
          color: var(--text-dark);
          margin: 0;
        }

        .services-list {
          display: grid;
          gap: 20px;
        }

        .service-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 25px;
          gap: 20px;
        }

        .service-content {
          flex: 1;
        }

        .service-content h3 {
          font-size: 20px;
          color: var(--text-dark);
          margin-bottom: 10px;
        }

        .service-content p {
          color: var(--text-gray);
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .service-details {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }

        .detail {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .detail-label {
          font-weight: 600;
          color: var(--text-gray);
        }

        .detail-value {
          color: var(--primary-color);
          font-weight: 600;
        }

        .service-action {
          flex-shrink: 0;
        }

        .btn-small {
          padding: 10px 20px;
          font-size: 14px;
        }

        .guarantees-section {
          background: var(--background);
          padding: 60px;
          border-radius: var(--border-radius-lg);
          margin: 60px 0;
          text-align: center;
        }

        .guarantees-content h2 {
          font-size: 32px;
          color: var(--text-dark);
          margin-bottom: 40px;
        }

        .guarantees-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          background: var(--background-gray);
          border-radius: var(--border-radius);
          font-weight: 500;
        }

        .guarantee-icon {
          font-size: 18px;
        }

        .pricing-info {
          margin: 40px 0;
        }

        .pricing-info h2 {
          text-align: center;
          font-size: 28px;
          color: var(--text-dark);
          margin-bottom: 30px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .info-item h3 {
          font-size: 18px;
          color: var(--primary-color);
          margin-bottom: 15px;
        }

        .info-item ul {
          list-style: none;
        }

        .info-item li {
          padding: 8px 0;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-gray);
        }

        .info-item li:last-child {
          border-bottom: none;
        }

        .cta-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 60px;
          border-radius: var(--border-radius-lg);
          text-align: center;
          margin-top: 40px;
        }

        .cta-content h2 {
          font-size: 32px;
          margin-bottom: 15px;
        }

        .cta-content p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 30px;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .service-item {
            flex-direction: column;
            text-align: center;
          }

          .service-details {
            justify-content: center;
          }

          .guarantees-section {
            padding: 40px 20px;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .category-header {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicosPage;
