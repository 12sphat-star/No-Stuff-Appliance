import React from 'react';
import { Wrench, Refrigerator, WashingMachine, Phone } from 'lucide-react';
import './ServiceSection.css';

export default function ServiceSection({ onOpenAskWidget }) {
  return (
    <section className="section service-section">
      <div className="container">
        
        <div className="service-header">
          <span className="service-tag">APPLIANCE REPAIR & SERVICE</span>

          <h2>Appliance Giving You Trouble?</h2>

          <p>
            No Stuff Appliances provides in-home appliance repair and service.
            If one of your major household appliances isn't working properly,
            tell us what's happening and request a service call.
          </p>
        </div>

        <div className="service-types">
          <div className="service-type">
            <Refrigerator size={28} aria-hidden="true" />
            <span>Refrigerators</span>
          </div>

          <div className="service-type">
            <WashingMachine size={28} aria-hidden="true" />
            <span>Washers & Dryers</span>
          </div>

          <div className="service-type">
            <Wrench size={28} aria-hidden="true" />
            <span>Ranges & Stoves</span>
          </div>

          <div className="service-type">
            <Wrench size={28} aria-hidden="true" />
            <span>Other Major Appliances</span>
          </div>
        </div>

        <div className="service-action">
          <button
            type="button"
            className="btn btn-primary service-btn"
            onClick={onOpenAskWidget}
          >
            <Phone size={20} aria-hidden="true" />
            Request a Service Call
          </button>

          <p className="service-note">
            Service calls are provided for a fee. Contact No Stuff Appliances
            for current service information and availability.
          </p>
        </div>

      </div>
    </section>
  );
}