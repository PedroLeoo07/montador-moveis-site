import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>Montador de Móveis Profissional</h1>
        <p>Serviço rápido, limpo e de confiança para toda a região.</p>
      </header>
      <main>
        <section className="services">
          <h2>Serviços Oferecidos</h2>
          <ul>
            <li>Montagem de móveis planejados</li>
            <li>Montagem de guarda-roupas, racks, painéis e estantes</li>
            <li>Instalação de suportes e acessórios</li>
            <li>Reparo e ajustes em móveis já montados</li>
          </ul>
        </section>
        <section className="contact">
          <h2>Contato</h2>
          <p>Entre em contato e faça seu orçamento!</p>
          <a href="https://wa.me/5519996615949" target="_blank" rel="noopener noreferrer">
            Chamar no WhatsApp
          </a>
        </section>
      </main>
      <footer>
        <p>© 2025 Montador de Móveis - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default HomePage;
