'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          🔧 Montador de Móveis
        </Link>
        <div className="nav-menu">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/servicos" className={`nav-link ${pathname === '/servicos' ? 'active' : ''}`}>
            Serviços
          </Link>
          <Link href="/galeria" className={`nav-link ${pathname === '/galeria' ? 'active' : ''}`}>
            Galeria
          </Link>
          <Link href="/sobre" className={`nav-link ${pathname === '/sobre' ? 'active' : ''}`}>
            Sobre
          </Link>
          <Link href="/contato" className={`nav-link ${pathname === '/contato' ? 'active' : ''}`}>
            Contato
          </Link>
        </div>
        <div className="nav-mobile">
          <a 
            href="https://wa.me/5519996615949" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            📱 WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;