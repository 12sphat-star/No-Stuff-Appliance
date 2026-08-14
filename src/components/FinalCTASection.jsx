import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail } from 'lucide-react';
import './FinalCTASection.css';

export default function FinalCTASection({ onOpenAskWidget }) {
  return (
    <section className="section final-cta-section text-center">
      <div className="container">
        <div className="final-cta-box">
          <h2 className="final-cta-headline">Looking for a Specific Appliance?</h2>
          <p className="final-cta-subtext">
            Don't waste hours searching national retailer sites. Ask Harry Cole directly about available refrigerators, washers, dryers, ranges, or dishwashers in Chesapeake, VA.
          </p>

          <div className="final-cta-actions">
            <button 
              type="button" 
              className="btn btn-primary final-btn"
              onClick={onOpenAskWidget}
            >
              <Sparkles size={18} aria-hidden="true" />
              <span>Ask Harry Now</span>
            </button>

            <Link to="/contact" className="btn btn-secondary final-btn">
              <Mail size={18} aria-hidden="true" />
              <span>Contact Page</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
