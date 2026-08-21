import React from 'react';
import { MapPin, Navigation, Clock, Phone, User, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './LocationSection.css';

export default function LocationSection() {
  return (
    <section className="section section-alt location-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Find Us</span>
          <h2>Store Location & Service Area</h2>
          <p>
            Conveniently serving customers at our Chesapeake, Virginia store and across the Hampton Roads region.
          </p>
        </div>

        <div className="location-grid">
          {/* Details Card */}
          <div className="location-card">
            <h3 className="location-card-title">{businessInfo.name}</h3>

            <div className="location-detail-item">
              <MapPin size={22} className="loc-icon" />
              <div>
                <strong>Physical Address:</strong>
                <p>{businessInfo.fullAddress}</p>
              </div>
            </div>

            <div className="location-detail-item">
              <User size={22} className="loc-icon" />
              <div>
                <strong>Primary Contact:</strong>
                <p>{businessInfo.contactPerson}</p>
              </div>
            </div>

            <div className="location-detail-item">
              <Phone size={22} className="loc-icon" />
              <div>
                <strong>Phone Inquiry:</strong>
                <p>{businessInfo.phone}</p>
              </div>
            </div>

            <div className="location-detail-item">
              <Clock size={22} className="loc-icon" />
              <div>
                <strong>Hours & Viewing:</strong>
                <p>Contact Diandra Atkinson directly to confirm current viewing options and store availability.</p>
              </div>
            </div>

            <div className="location-card-action">
              <a 
                href={businessInfo.googleMapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary w-full"
              >
                <Navigation size={18} aria-hidden="true" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Interactive Google Map Frame */}
          <div className="location-map-wrapper">
            <iframe
              title="No Stuff Appliances Location Map"
              src={businessInfo.googleEmbedIframeUrl}
              className="google-map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-bottom-bar">
              <a 
                href={businessInfo.googleMapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-direct-link"
              >
                <MapPin size={16} />
                <span>Open 1415 Atlantic Ave on Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
