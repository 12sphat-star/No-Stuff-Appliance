import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, MapPin, Sparkles, UserCheck } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './Hero.css';

export default function Hero({ onOpenAskWidget }) {
  const scrollToAppliances = (e) => {
    e.preventDefault();
    const el = document.getElementById('appliances');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <MapPin size={16} aria-hidden="true" />
            <span>Local Appliance Store • Chesapeake, VA</span>
          </div>

          <h1 className="hero-title">
            Quality Appliances.<br />
            Local Service.<br />
            <span className="title-highlight">No Stuff.</span>
          </h1>

          <p className="hero-subtitle">
            {businessInfo.heroSubheadline}
          </p>

          <div className="hero-benefits">
            <div className="benefit-item">
              <UserCheck size={18} className="benefit-icon" />
              <span>Talk Directly to Harry Cole</span>
            </div>
            <div className="benefit-item">
              <ShieldCheck size={18} className="benefit-icon" />
              <span>Straightforward Size & Fit Guidance</span>
            </div>
          </div>

          <div className="hero-actions">
            <button 
              type="button" 
              className="btn btn-primary hero-btn-main"
              onClick={onOpenAskWidget}
            >
              <Sparkles size={18} aria-hidden="true" />
              <span>Ask Harry About Inventory</span>
            </button>

            <a 
              href="#appliances" 
              className="btn btn-outline hero-btn-sub"
              onClick={scrollToAppliances}
            >
              <span>Browse Categories</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Hero Media Showcase using New Appliance Lineup Photograph */}
        <div className="hero-media">
          <div className="hero-image-card main-hero-card">
            <div className="hero-image-frame hero-frame-lineup">
              <img 
                src="/images/appliance-lineup-main.png" 
                alt="No Stuff Appliances Major Appliance Lineup in Chesapeake VA"
                className="hero-img hero-img-lineup"
                loading="eager"
              />
              <div className="hero-img-badge">
                <span className="badge-dot"></span>
                <span>Major Appliances • Chesapeake, VA</span>
              </div>
            </div>

            <div className="hero-overlay-card">
             <img 
  src="/images/ask-harry.png" 
  alt="Ask Harry at No Stuff Appliances"
  className="hero-overlay-thumb"
/>
              <div className="hero-overlay-info">
                <strong>Have a question for Harry?</strong>
                <p>Get straightforward answers on sizes & availability.</p>
                <button 
                  type="button" 
                  className="hero-overlay-link"
                  onClick={onOpenAskWidget}
                >
                  Ask Harry Now &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
