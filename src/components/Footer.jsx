import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Wrench } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './Footer.css';

export default function Footer({ onOpenAskWidget }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand">
              <span className="footer-icon">
                <Wrench size={22} aria-hidden="true" />
              </span>
              <span>{businessInfo.name}</span>
            </Link>
            <p className="footer-tagline">{businessInfo.tagline}</p>
            <p className="footer-desc">
              Your local appliance retailer serving Chesapeake, Virginia and surrounding Hampton Roads communities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="/#appliances">Appliance Categories</a></li>
              <li><Link to="/gallery">Photo Gallery</Link></li>
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/contact">Contact Page</Link></li>
            </ul>
          </div>

          {/* Local Contact Info */}
          <div className="footer-col">
            <h4 className="footer-title">Location & Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>{businessInfo.fullAddress}</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>Harry Cole: {businessInfo.phone}</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>Direct Inquiry: Ask Harry Widget</span>
              </li>
            </ul>
            <div className="footer-cta-box">
              <button 
                type="button" 
                className="btn btn-secondary btn-sm" 
                onClick={onOpenAskWidget}
              >
                Ask Harry
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} {businessInfo.name}. All rights reserved. {businessInfo.fullAddress}.
          </p>
          <div className="footer-legal">
            <span className="legal-link">Privacy Policy (Placeholder)</span>
            <span className="legal-divider">•</span>
            <span className="legal-link">Terms of Service (Placeholder)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
