import React from 'react';

const ServicosPage: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>Serviços</h1>
      </header>
      <main>
        <h2>O que oferecemos</h2>
        <ul>
          <li>Montagem de móveis planejados</li>
          <li>Montagem de guarda-roupas, racks, painéis e estantes</li>
          <li>Instalação de suportes e acessórios</li>
          <li>Reparo e ajustes em móveis já montados</li>
        </ul>
      </main>
      <footer>
        <p>© 2025 Montador de Móveis - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default ServicosPage;
