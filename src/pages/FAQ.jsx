import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { ChevronDown, ChevronUp, MessageSquare, HelpCircle } from 'lucide-react';
import { faqData } from '../data/faqData';
import './FAQ.css';

export default function FAQ({ onOpenAskWidget }) {
  const [openIds, setOpenIds] = useState([1, 2]);

  const toggleAccordion = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(i => i !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <main className="faq-page">
      <SEOHead 
        title="Frequently Asked Questions"
        description="Find answers to common questions about appliance availability, store location, and contacting No Stuff Appliances in Chesapeake, VA."
      />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container text-center">
          <span className="section-tag">Help & Information</span>
          <h1>Frequently Asked Questions</h1>
          <p className="banner-subtitle">
            Everything you need to know about inquiring and viewing appliances at No Stuff Appliances.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container faq-container">
          <div className="faq-accordion-list">
            {faqData.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div key={faq.id} className={`faq-full-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-full-question"
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-title">{faq.question}</span>
                    <span className="faq-toggle-icon">
                      {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-full-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Ask No Stuff Box */}
          <div className="faq-ask-card text-center">
            <HelpCircle size={40} className="faq-help-icon" />
            <h3>Have a question not listed here?</h3>
            <p>
              Tell Harry Cole what appliance you're looking for, and we'll answer your questions directly.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenAskWidget}
            >
              <MessageSquare size={18} aria-hidden="true" />
              <span>Ask No Stuff Directly</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
