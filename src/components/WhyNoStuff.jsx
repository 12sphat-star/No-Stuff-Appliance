import React from 'react';
import { Building2, UserCheck, MapPin, MessageSquare, PhoneCall } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './WhyNoStuff.css';

export default function WhyNoStuff({ onOpenAskWidget }) {
  const reasons = [
    {
      icon: Building2,
      title: "Local Business",
      description: "Rooted in Chesapeake, VA. We serve our neighbors across the Hampton Roads community."
    },
    {
      icon: UserCheck,
      title: "Personal Service",
      description: "Speak directly with Harry Cole for straight answers and personalized assistance."
    },
    {
      icon: MapPin,
      title: "Convenient Location",
      description: "Easy local access for customers living and working in Chesapeake and surrounding areas."
    },
    {
      icon: MessageSquare,
      title: "Easy Appliance Inquiry",
      description: "No automated phone menus or complex steps. Simply tell us what appliance you're looking for."
    },
    {
      icon: PhoneCall,
      title: "Direct Communication",
      description: "We communicate clearly and directly so you get quick updates on available inventory."
    }
  ];

  return (
    <section className="section section-alt why-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">The No Stuff Difference</span>
          <h2>Why Work With No Stuff Appliances?</h2>
          <p>
            When you're looking for home appliances, working with a local business means personal service, straightforward answers, and genuine customer care.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="reason-card">
                <div className="reason-icon-wrapper">
                  <IconComponent size={24} className="reason-icon" />
                </div>
                <div className="reason-body">
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-desc">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="why-cta-wrapper text-center">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={onOpenAskWidget}
          >
            <span>Have Questions? Ask No Stuff</span>
          </button>
        </div>
      </div>
    </section>
  );
}
