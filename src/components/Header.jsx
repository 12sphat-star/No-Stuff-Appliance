import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageSquare, Wrench, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './Header.css';

export default function Header({ onOpenAskWidget }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleAppliancesClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    if (location.pathname === '/') {
      const el = document.getElementById('appliances');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#appliances');
    }
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="brand-logo" onClick={closeMobileMenu}>
          <span className="brand-icon">
            <Wrench size={22} aria-hidden="true" />
          </span>
          <div className="brand-text-block">
            <span className="brand-name">{businessInfo.name}</span>
            <span className="brand-tagline-sm">Chesapeake, VA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' && !location.hash ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <a 
                href="#appliances" 
                onClick={handleAppliancesClick}
                className="nav-link"
              >
                Appliances
              </a>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/faq" 
                className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Header Action CTA - Ask Harry */}
        <div className="header-actions">
          <button 
            type="button" 
            className="btn btn-primary header-cta" 
            onClick={onOpenAskWidget}
          >
            <Sparkles size={16} aria-hidden="true" className="ask-sparkle-icon" />
            <span>Ask Harry</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              <li>
                <Link to="/" onClick={closeMobileMenu}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMobileMenu}>About</Link>
              </li>
              <li>
                <a href="#appliances" onClick={handleAppliancesClick}>Appliances</a>
              </li>
              <li>
                <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
              </li>
              <li>
                <Link to="/faq" onClick={closeMobileMenu}>FAQ</Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
              </li>
            </ul>
            <div className="mobile-cta-wrapper">
              <button 
                type="button" 
                className="btn btn-primary w-full"
                onClick={() => {
                  closeMobileMenu();
                  onOpenAskWidget();
                }}
              >
                <Sparkles size={18} aria-hidden="true" />
                <span>Ask Harry</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
