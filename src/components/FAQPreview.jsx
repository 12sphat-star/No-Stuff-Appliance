import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight, HelpCircle } from 'lucide-react';
import { faqData } from '../data/faqData';
import './FAQPreview.css';

export default function FAQPreview() {
  const [openId, setOpenId] = useState(1);
  const previewFaqs = faqData.slice(0, 4);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section faq-preview-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Questions & Answers</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Quick answers to common questions about No Stuff Appliances and how to inquire about available units.
          </p>
        </div>

        <div className="faq-preview-accordion">
          {previewFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`faq-preview-item ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  className="faq-preview-question"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="faq-icon">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-preview-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center faq-cta-wrapper">
          <Link to="/faq" className="btn btn-outline">
            <span>View All Questions</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
