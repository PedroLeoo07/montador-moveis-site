import React, { useState } from 'react';

const ContatoPage: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Mensagem enviada!');
  };

  return (
    <div className="container">
      <header>
        <h1>Contato</h1>
      </header>
      <main>
        <h2>Entre em contato</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Mensagem:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreva sua mensagem aqui"
              required
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        <p>Ou entre em contato pelo WhatsApp:</p>
        <a href="https://wa.me/5519996615949" target="_blank" rel="noopener noreferrer">
          Chamar no WhatsApp
        </a>
      </main>
      <footer>
        <p>© 2025 Montador de Móveis - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default ContatoPage;
