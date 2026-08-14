import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, Store } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './AboutPreview.css';

export default function AboutPreview() {
  return (
    <section className="section about-preview-section">
      <div className="container about-preview-grid">
        <div className="about-preview-content">
          <span className="section-tag">About No Stuff</span>
          <h2>Your Friendly Local Appliance Retailer</h2>
          <p>
            No Stuff Appliances is proud to serve Chesapeake, Virginia and the surrounding Hampton Roads communities. Our focus is straightforward: helping local customers find reliable home appliances with personal, approachable service.
          </p>
          <p>
            Whether you need a single replacement unit or are searching for specific appliance options, contact Harry Cole to get straightforward assistance without the hassle.
          </p>
          <div className="about-preview-cta">
            <Link to="/about" className="btn btn-outline">
              <span>Learn More About Us</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="about-preview-media">
          <div className="image-placeholder about-placeholder">
            <Store size={44} aria-hidden="true" />
            <h4>Local Store & Team</h4>
            <p className="image-placeholder-label">
              [Placeholder: Local Store / Harry Cole Photo - Insert authentic business image here]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
