'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SobrePage: React.FC = () => {
  const estatisticas = [
    { numero: '10+', texto: 'Anos de Experiência' },
    { numero: '500+', texto: 'Móveis Montados' },
    { numero: '100%', texto: 'Clientes Satisfeitos' },
    { numero: '24h', texto: 'Resposta WhatsApp' }
  ];

  const servicos = [
    'Móveis Planejados',
    'Guarda-roupas',
    'Racks e Painéis',
    'Estantes',
    'Camas e Berços',
    'Mesas e Cadeiras',
    'Organizadores',
    'Suportes TV'
  ];

  return (
    <div className="page-container">
      <Navbar />
      
      <header className="page-header">
        <div className="container">
          <div className="header-content">
            <h1>Sobre Nosso Trabalho</h1>
            <p>Conheça a história, experiência e compromisso que torna nosso serviço referência na região</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          {/* História */}
          <section className="story-section">
            <div className="story-content">
              <div className="story-text">
                <h2>Nossa História</h2>
                <p>Há mais de 10 anos, iniciamos nossa jornada no ramo de montagem de móveis movidos pela paixão em transformar espaços e proporcionar praticidade para nossos clientes.</p>
                
                <p>O que começou como um trabalho de final de semana se tornou nossa especialidade, e hoje atendemos toda a região de Campinas com a mesma dedicação e cuidado que tivemos desde o primeiro dia.</p>
                
                <p>Nossa experiência abrange desde móveis simples até projetos complexos de móveis planejados, sempre priorizando a qualidade do acabamento e a satisfação total do cliente.</p>
              </div>
              
              <div className="story-image">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=400&fit=crop" 
                  alt="Profissional montando móveis"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Estatísticas */}
          <section className="stats-section">
            <div className="stats-grid">
              {estatisticas.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.numero}</div>
                  <div className="stat-text">{stat.texto}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Compromissos */}
          <section className="commitments-section">
            <h2>Nossos Compromissos</h2>
            <div className="commitments-grid">
              <div className="card commitment-card">
                <div className="commitment-icon">🎯</div>
                <h3>Qualidade Garantida</h3>
                <p>Utilizamos apenas ferramentas profissionais e seguimos rigorosamente as instruções do fabricante para garantir a durabilidade e segurança da montagem.</p>
              </div>
              
              <div className="card commitment-card">
                <div className="commitment-icon">⏰</div>
                <h3>Pontualidade</h3>
                <p>Respeitamos seu tempo. Chegamos no horário combinado e cumprimos os prazos estabelecidos, mantendo você sempre informado sobre o andamento do serviço.</p>
              </div>
              
              <div className="card commitment-card">
                <div className="commitment-icon">🧹</div>
                <h3>Organização</h3>
                <p>Deixamos seu ambiente limpo e organizado após o serviço. Recolhemos embalagens e garantimos que tudo esteja em perfeito estado de uso.</p>
              </div>
              
              <div className="card commitment-card">
                <div className="commitment-icon">💰</div>
                <h3>Preço Justo</h3>
                <p>Oferecemos orçamentos transparentes e competitivos, sem taxas escondidas. Você paga apenas pelo serviço contratado, com total clareza nos valores.</p>
              </div>
              
              <div className="card commitment-card">
                <div className="commitment-icon">🛡️</div>
                <h3>Garantia</h3>
                <p>Todos os nossos serviços possuem garantia de 90 dias. Se algo não estiver funcionando perfeitamente, retornamos para ajustar sem custo adicional.</p>
              </div>
              
              <div className="card commitment-card">
                <div className="commitment-icon">📞</div>
                <h3>Atendimento</h3>
                <p>Estamos sempre disponíveis para esclarecer dúvidas e fornecer suporte. Mantemos comunicação clara e direta em todas as etapas do processo.</p>
              </div>
            </div>
          </section>

          {/* Especialidades */}
          <section className="specialties-section">
            <div className="specialties-content">
              <div className="specialties-text">
                <h2>Especialidades</h2>
                <p>Ao longo dos anos, desenvolvemos expertise em diversas categorias de móveis e situações de montagem:</p>
                
                <div className="services-list">
                  {servicos.map((servico, index) => (
                    <div key={index} className="service-item">
                      <span className="service-icon">✅</span>
                      <span className="service-name">{servico}</span>
                    </div>
                  ))}
                </div>

                <p>Não importa se é um móvel simples ou um projeto complexo de móveis planejados - temos a experiência e as ferramentas necessárias para realizar o trabalho com excelência.</p>
              </div>
              
              <div className="specialties-image">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop" 
                  alt="Móveis planejados montados"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Processo */}
          <section className="process-section">
            <h2>Como Trabalhamos</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Contato Inicial</h3>
                  <p>Entre em contato via WhatsApp ou formulário. Entendemos suas necessidades e agendamos uma visita ou fazemos o orçamento por foto.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Orçamento</h3>
                  <p>Fornecemos um orçamento claro e detalhado, explicando tempo de execução, valor e o que está incluso no serviço.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Agendamento</h3>
                  <p>Combinamos data e horário que seja conveniente para você. Confirmamos na véspera e chegamos pontualmente.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Execução</h3>
                  <p>Realizamos a montagem com cuidado e precisão, mantendo o ambiente limpo e organizando as peças adequadamente.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Finalização</h3>
                  <p>Verificamos se tudo está perfeito, limpamos o local e explicamos cuidados importantes para a conservação do móvel.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-section">
            <div className="cta-content">
              <h2>Pronto para Conhecer Nosso Trabalho?</h2>
              <p>Entre em contato e descubra por que somos a escolha preferida na região!</p>
              <div className="cta-buttons">
                <a 
                  href="https://wa.me/5519996615949" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  💬 Falar no WhatsApp
                </a>
                <Link href="/galeria" className="btn btn-secondary">
                  🖼️ Ver Nossos Trabalhos
                </Link>
                <Link href="/servicos" className="btn btn-primary">
                  📋 Conhecer Serviços
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
        }

        /* História */
        .story-section {
          margin-bottom: 80px;
        }

        .story-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .story-text h2 {
          font-size: 36px;
          color: var(--text-dark);
          margin-bottom: 30px;
        }

        .story-text p {
          font-size: 18px;
          color: var(--text-gray);
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .story-image img {
          width: 100%;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-lg);
        }

        /* Estatísticas */
        .stats-section {
          background: var(--background-gray);
          padding: 60px;
          border-radius: var(--border-radius-lg);
          margin-bottom: 80px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 10px;
        }

        .stat-text {
          font-size: 16px;
          color: var(--text-gray);
          font-weight: 600;
        }

        /* Compromissos */
        .commitments-section {
          margin-bottom: 80px;
        }

        .commitments-section h2 {
          font-size: 36px;
          color: var(--text-dark);
          text-align: center;
          margin-bottom: 50px;
        }

        .commitments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .commitment-card {
          text-align: center;
          padding: 40px 30px;
        }

        .commitment-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .commitment-card h3 {
          font-size: 20px;
          color: var(--text-dark);
          margin-bottom: 15px;
        }

        .commitment-card p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        /* Especialidades */
        .specialties-section {
          margin-bottom: 80px;
        }

        .specialties-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .specialties-text h2 {
          font-size: 36px;
          color: var(--text-dark);
          margin-bottom: 20px;
        }

        .specialties-text p {
          font-size: 18px;
          color: var(--text-gray);
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .services-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin: 30px 0;
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .service-icon {
          color: var(--secondary-color);
          font-weight: bold;
        }

        .service-name {
          color: var(--text-dark);
          font-weight: 500;
        }

        .specialties-image img {
          width: 100%;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-lg);
        }

        /* Processo */
        .process-section {
          margin-bottom: 80px;
        }

        .process-section h2 {
          font-size: 36px;
          color: var(--text-dark);
          text-align: center;
          margin-bottom: 50px;
        }

        .process-steps {
          display: grid;
          gap: 30px;
        }

        .step {
          display: flex;
          gap: 25px;
          align-items: flex-start;
          padding: 30px;
          background: var(--background);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-content h3 {
          font-size: 20px;
          color: var(--text-dark);
          margin-bottom: 10px;
        }

        .step-content p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        /* CTA */
        .cta-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 80px 60px;
          border-radius: var(--border-radius-lg);
          text-align: center;
        }

        .cta-content h2 {
          font-size: 36px;
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
        @media (max-width: 968px) {
          .story-content,
          .specialties-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .services-list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .commitments-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .step {
            flex-direction: column;
            text-align: center;
          }

          .cta-section {
            padding: 60px 30px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default SobrePage;
