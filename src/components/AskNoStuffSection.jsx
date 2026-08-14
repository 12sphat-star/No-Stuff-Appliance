import React from 'react';
import { Sparkles, HelpCircle, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './AskNoStuffSection.css';

export default function AskNoStuffSection({ onOpenAskWidget }) {
  const helpfulTopics = [
    "Not sure if a 30\" or 33\" unit will fit?",
    "Confused between top-load vs front-load washers?",
    "Need advice on electric vs gas range connections?",
    "Replacing an old model and don't know what matches?"
  ];

  return (
    <section className="section ask-section">
      <div className="container">
        <div className="ask-box">
          <div className="ask-icon-badge">
            <Sparkles size={26} aria-hidden="true" />
          </div>

          <span className="ask-section-tag">Signature Customer Feature</span>
          <h2 className="ask-headline">Confused About an Appliance? Just Ask Harry.</h2>
          <p className="ask-subtext">
            Buying an appliance shouldn't be confusing. If you have questions about sizes, cutout dimensions, replacement options, or current availability, talk directly to Harry Cole.
          </p>

          <div className="topics-grid">
            {helpfulTopics.map((topic, idx) => (
              <div key={idx} className="topic-item">
                <CheckCircle2 size={16} className="topic-icon" />
                <span>{topic}</span>
              </div>
            ))}
          </div>

          <button 
            type="button" 
            className="btn btn-secondary ask-btn"
            onClick={onOpenAskWidget}
          >
            <Sparkles size={20} aria-hidden="true" />
            <span>Ask Harry Now</span>
          </button>

          <span className="ask-subnote">
            No automated phone menus or bots. Quick, straightforward answers from a local Chesapeake business.
          </span>
        </div>
      </div>
    </section>
  );
}
