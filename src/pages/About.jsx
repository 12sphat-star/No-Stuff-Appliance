import React from 'react';
import SEOHead from '../components/SEOHead';
import { MapPin, ShieldCheck, HeartHandshake, Sparkles, UserCheck } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './About.css';

export default function About({ onOpenAskWidget }) {
  return (
    <main className="about-page">
      <SEOHead 
        title="About Harry Cole & No Stuff Appliances"
        description="Meet Harry Cole, owner of No Stuff Appliances in Chesapeake, VA. Providing friendly, personal, and straightforward home appliance service."
      />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="section-tag">About No Stuff Appliances</span>
          <h1>Meet Harry Cole & Our Local Store</h1>
          <p className="banner-subtitle">
            Helping homeowners, renters, and property managers in Chesapeake, VA find the right home appliances without the hassle.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Personal Appliance Service in Chesapeake, VA</h2>
            <p>
              At {businessInfo.name}, we believe buying home appliances should be simple, honest, and straightforward. Located in <strong>Chesapeake, Virginia</strong>, we focus on serving our local community throughout Chesapeake and the wider <strong>Hampton Roads</strong> area.
            </p>

            <p>
              When you contact {businessInfo.name}, you talk directly with <strong>{businessInfo.contactPerson}</strong>. Instead of dealing with automated call centers or high-pressure sales reps, you get direct answers about what appliances are currently on hand, cutout size fits, and replacement options.
            </p>

            <h3 className="about-subheading">Why Local Customers Choose No Stuff</h3>
            <ul className="about-list">
              <li>
                <ShieldCheck size={20} className="about-list-icon" />
                <span><strong>Straightforward Answers:</strong> Real inventory advice and practical dimension guidance for your kitchen or laundry room.</span>
              </li>
              <li>
                <MapPin size={20} className="about-list-icon" />
                <span><strong>Chesapeake Local Business:</strong> Rooted locally so you can inquire easily and receive fast personal service.</span>
              </li>
              <li>
                <HeartHandshake size={20} className="about-list-icon" />
                <span><strong>Personal Help with Harry:</strong> Have a question about a washer, dryer, refrigerator, or range? Ask Harry directly.</span>
              </li>
            </ul>

            <div className="about-actions mt-4">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onOpenAskWidget}
              >
                <Sparkles size={18} aria-hidden="true" />
                <span>Ask Harry Cole About Available Units</span>
              </button>
            </div>
          </div>

          <div className="about-sidebar">
            {/* Real Photograph of Harry Cole outside No Stuff Appliances */}
            <div className="about-real-image-card harry-card">
              <img 
                src="/images/harry-cole-storefront.png" 
                alt="Harry Cole outside No Stuff Appliances Storefront in Chesapeake VA"
                className="about-harry-img"
              />
              <div className="about-img-caption">
                <div className="caption-badge">
                  <UserCheck size={16} />
                  <span>Harry Cole</span>
                </div>
                <strong>No Stuff Appliances</strong>
                <p>Chesapeake, VA Storefront</p>
              </div>
            </div>

            <div className="about-fact-card">
              <h4>Quick Local Facts</h4>
              <p><strong>Business Name:</strong> {businessInfo.name}</p>
              <p><strong>Primary Contact:</strong> {businessInfo.contactPerson}</p>
              <p><strong>Primary Market:</strong> Chesapeake, VA & Hampton Roads</p>
              <p><strong>Major Categories:</strong> Refrigerators, Ranges, Washers, Dryers, Dishwashers</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
