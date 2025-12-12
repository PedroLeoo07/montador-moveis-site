'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ContatoPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoServico: '',
    endereco: '',
    mensagem: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const tiposServico = [
    'Móveis Planejados',
    'Guarda-roupa',
    'Rack/Painel TV',
    'Estantes/Prateleiras',
    'Cama/Berço',
    'Mesa/Cadeiras',
    'Reparo/Ajuste',
    'Suporte TV',
    'Outro'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio (aqui você adicionaria a lógica real de envio)
    setTimeout(() => {
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setIsSubmitting(false);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        tipoServico: '',
        endereco: '',
        mensagem: ''
      });
      
      // Remove mensagem após 5 segundos
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  const createWhatsAppMessage = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para ${formData.tipoServico || 'montagem de móveis'}.

👤 Nome: ${formData.nome || 'Não informado'}
📞 Telefone: ${formData.telefone || 'Não informado'}
📍 Endereço: ${formData.endereco || 'Não informado'}

📝 Mensagem: ${formData.mensagem || 'Gostaria de mais informações sobre o serviço.'}`;
    
    return encodeURIComponent(message);
  };

  return (
    <div className="page-container">
      <Navbar />
      
      <header className="page-header">
        <div className="container">
          <div className="header-content">
            <h1>Entre em Contato</h1>
            <p>Estamos prontos para atender suas necessidades de montagem de móveis com qualidade e agilidade</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="contact-grid">
            {/* Formulário */}
            <div className="form-section">
              <div className="card">
                <div className="form-header">
                  <h2>Solicite seu Orçamento</h2>
                  <p>Preencha os dados abaixo e entraremos em contato rapidamente</p>
                </div>
                
                {submitMessage && (
                  <div className="success-message">
                    ✅ {submitMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nome" className="form-label">Nome Completo *</label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="telefone" className="form-label">WhatsApp *</label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="(19) 99999-9999"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="seu@email.com"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="tipoServico" className="form-label">Tipo de Serviço *</label>
                      <select
                        id="tipoServico"
                        name="tipoServico"
                        value={formData.tipoServico}
                        onChange={handleInputChange}
                        className="form-select"
                        required
                      >
                        <option value="">Selecione o serviço</option>
                        {tiposServico.map((tipo, index) => (
                          <option key={index} value={tipo}>{tipo}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="endereco" className="form-label">Endereço *</label>
                    <input
                      type="text"
                      id="endereco"
                      name="endereco"
                      value={formData.endereco}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Cidade ou bairro (para calcular deslocamento)"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="mensagem" className="form-label">Mensagem</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Descreva detalhes sobre o serviço que precisa..."
                      rows="4"
                    />
                  </div>
                  
                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? '🔄 Enviando...' : '📧 Enviar Solicitação'}
                    </button>
                    
                    <div className="form-divider">
                      <span>ou</span>
                    </div>
                    
                    <a 
                      href={`https://wa.me/5519996615949?text=${createWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-full"
                    >
                      💬 Enviar via WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="info-section">
              <div className="card contact-info">
                <h2>Informações de Contato</h2>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h3>WhatsApp</h3>
                    <p>(19) 99661-5949</p>
                    <small>Resposta rápida até 24h</small>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h3>Região de Atendimento</h3>
                    <p>Campinas e Região Metropolitana</p>
                    <small>Consulte outras localidades</small>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🕰️</div>
                  <div className="contact-details">
                    <h3>Horário de Atendimento</h3>
                    <p>Segunda a Sábado: 8h às 18h</p>
                    <small>Urgências: contato por WhatsApp</small>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h3>E-mail</h3>
                    <p>contato@montadormoveis.com</p>
                    <small>Resposta em até 24 horas</small>
                  </div>
                </div>
              </div>
              
              {/* Ações Rápidas */}
              <div className="card quick-actions">
                <h3>Ações Rápidas</h3>
                
                <div className="quick-action">
                  <a 
                    href="https://wa.me/5519996615949?text=Olá! Preciso de um orçamento urgente para montagem de móveis."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-full"
                  >
                    ⚡ Orçamento Urgente
                  </a>
                </div>
                
                <div className="quick-action">
                  <Link href="/galeria" className="btn btn-outline btn-full">
                    🖼️ Ver Trabalhos Realizados
                  </Link>
                </div>
                
                <div className="quick-action">
                  <Link href="/servicos" className="btn btn-outline btn-full">
                    📋 Lista de Serviços e Preços
                  </Link>
                </div>
              </div>
              
              {/* Dicas */}
              <div className="card tips">
                <h3>Dicas para seu Orçamento</h3>
                <ul>
                  <li>✅ Tenha fotos do móvel em mãos</li>
                  <li>✅ Informe dimensões do ambiente</li>
                  <li>✅ Verifique se todas as peças estão disponíveis</li>
                  <li>✅ Considere o acesso ao local de montagem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .main-content {
          padding: 60px 0;
          background: var(--background-gray);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: flex-start;
        }

        /* Formulário */
        .form-section .card {
          padding: 40px;
        }

        .form-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .form-header h2 {
          font-size: 28px;
          color: var(--text-dark);
          margin-bottom: 10px;
        }

        .form-header p {
          color: var(--text-gray);
          font-size: 16px;
        }

        .success-message {
          background: #d1fae5;
          color: #047857;
          padding: 15px;
          border-radius: var(--border-radius);
          margin-bottom: 30px;
          text-align: center;
          font-weight: 600;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-actions {
          margin-top: 30px;
        }

        .btn-full {
          width: 100%;
          justify-content: center;
        }

        .form-divider {
          text-align: center;
          margin: 20px 0;
          position: relative;
        }

        .form-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--border-color);
        }

        .form-divider span {
          background: var(--background);
          color: var(--text-gray);
          padding: 0 20px;
          font-size: 14px;
        }

        /* Seção de Informações */
        .info-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-info {
          padding: 30px;
        }

        .contact-info h2 {
          font-size: 24px;
          color: var(--text-dark);
          margin-bottom: 30px;
          text-align: center;
        }

        .contact-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
        }

        .contact-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .contact-icon {
          font-size: 24px;
          flex-shrink: 0;
          width: 40px;
          text-align: center;
        }

        .contact-details h3 {
          font-size: 16px;
          color: var(--text-dark);
          margin-bottom: 5px;
        }

        .contact-details p {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 5px;
        }

        .contact-details small {
          color: var(--text-gray);
          font-size: 13px;
        }

        /* Ações Rápidas */
        .quick-actions {
          padding: 25px;
        }

        .quick-actions h3 {
          font-size: 18px;
          color: var(--text-dark);
          margin-bottom: 20px;
          text-align: center;
        }

        .quick-action {
          margin-bottom: 15px;
        }

        .quick-action:last-child {
          margin-bottom: 0;
        }

        .btn-outline {
          background: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .btn-outline:hover {
          background: var(--primary-color);
          color: white;
        }

        /* Dicas */
        .tips {
          padding: 25px;
        }

        .tips h3 {
          font-size: 18px;
          color: var(--text-dark);
          margin-bottom: 20px;
          text-align: center;
        }

        .tips ul {
          list-style: none;
        }

        .tips li {
          padding: 8px 0;
          color: var(--text-gray);
          font-size: 14px;
          border-bottom: 1px solid var(--border-color);
        }

        .tips li:last-child {
          border-bottom: none;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .form-section .card {
            padding: 30px 20px;
          }

          .contact-info {
            padding: 25px 20px;
          }

          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContatoPage;
