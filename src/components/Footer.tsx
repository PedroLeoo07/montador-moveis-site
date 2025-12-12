'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Montador de Móveis</h3>
            <p>Serviço profissional de montagem de móveis em toda a região com qualidade garantida.</p>
            <div className="social-links">
              <a 
                href="https://wa.me/5519996615949" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link whatsapp"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Navegação</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/servicos">Serviços</Link></li>
              <li><Link href="/galeria">Galeria</Link></li>
              <li><Link href="/sobre">Sobre</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Serviços</h4>
            <ul>
              <li>Montagem de Móveis Planejados</li>
              <li>Guarda-roupas e Racks</li>
              <li>Estantes e Painéis</li>
              <li>Suportes e Acessórios</li>
              <li>Reparos e Ajustes</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-info">
              <p>📱 <strong>WhatsApp:</strong> (19) 99661-5949</p>
              <p>📍 <strong>Região:</strong> Campinas e região</p>
              <p>🕐 <strong>Horário:</strong> Seg-Sáb 8h-18h</p>
              <p>📧 <strong>Email:</strong> contato@montadormoveis.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Montador de Móveis - Todos os direitos reservados</p>
          <p>Desenvolvido com qualidade e dedicação</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;