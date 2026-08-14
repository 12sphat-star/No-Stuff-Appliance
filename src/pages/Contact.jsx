import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { MapPin, Phone, Mail, User, MessageSquare, Send, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { submitLeadInquiry } from '../services/leadService';
import './Contact.css';

export default function Contact({ onOpenAskWidget }) {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    applianceRequest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLeadInquiry({
        ...formState,
        source: "No Stuff Website - Contact Form"
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <SEOHead 
        title="Contact Us"
        description="Contact Harry Cole at No Stuff Appliances in Chesapeake, VA. Inquire about available refrigerators, washers, dryers, stoves, and dishwashers."
      />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container text-center">
          <span className="section-tag">Get In Touch</span>
          <h1>Contact No Stuff Appliances</h1>
          <p className="banner-subtitle">
            Have questions about appliance availability? Reach out directly to Harry Cole or visit our Chesapeake store.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info-col">
            <h2>Contact Information</h2>
            <p>
              No Stuff Appliances is located at 1415 Atlantic Ave in Chesapeake, VA, proudly serving local homeowners across the Hampton Roads market.
            </p>

            <div className="contact-cards-list">
              <div className="contact-card-item">
                <MapPin className="contact-item-icon" />
                <div>
                  <strong>Store Address:</strong>
                  <p>{businessInfo.fullAddress}</p>
                </div>
              </div>

              <div className="contact-card-item">
                <User className="contact-item-icon" />
                <div>
                  <strong>Contact Person:</strong>
                  <p>{businessInfo.contactPerson}</p>
                </div>
              </div>

              <div className="contact-card-item">
                <Phone className="contact-item-icon" />
                <div>
                  <strong>Phone Number:</strong>
                  <p>{businessInfo.phone}</p>
                </div>
              </div>

              <div className="contact-card-item">
                <Mail className="contact-item-icon" />
                <div>
                  <strong>Direct Online Inquiry:</strong>
                  <p>Use the "Ask Harry" widget or form below</p>
                </div>
              </div>
            </div>

            {/* Ask Harry Hero Callout */}
            <div className="contact-ask-callout">
              <h3>Fastest Response: Ask Harry</h3>
              <p>Use our step-by-step inquiry widget for the quickest response regarding available inventory.</p>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onOpenAskWidget}
              >
                <MessageSquare size={18} aria-hidden="true" />
                <span>Launch Ask Harry</span>
              </button>
            </div>
          </div>

          {/* Standard Contact Form Column */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3>Send an Inquiry Message</h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Your Name <span className="req">*</span></label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      className="form-control"
                      placeholder="First and Last Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">Phone Number <span className="req">*</span></label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      className="form-control"
                      placeholder="(757) 555-0199"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email Address <span className="opt">(Optional)</span></label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-control"
                      placeholder="your.email@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-appliance" className="form-label">Appliance Needed <span className="opt">(Optional)</span></label>
                    <input
                      id="contact-appliance"
                      type="text"
                      className="form-control"
                      placeholder="e.g. Refrigerator, Washer & Dryer..."
                      value={formState.applianceRequest}
                      onChange={(e) => setFormState({ ...formState, applianceRequest: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">Additional Message <span className="opt">(Optional)</span></label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      className="form-control"
                      placeholder="Tell us what size, features, or questions you have..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full"
                  >
                    {isSubmitting ? "Submitting..." : <><span>Submit Message</span> <Send size={16} /></>}
                  </button>

                  <p className="contact-disclosure mt-3">
                    Submitting this form sends your inquiry directly to Harry Cole at No Stuff Appliances for follow-up.
                  </p>
                </form>
              ) : (
                <div className="contact-success-box text-center">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h4>Thank You!</h4>
                  <p>Your message has been submitted to No Stuff Appliances. Harry Cole will review your inquiry and get back to you shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Store Location</span>
            <h2>1415 Atlantic Ave, Chesapeake, VA 23324</h2>
          </div>
          
          <div className="contact-map-frame-box">
            <iframe
              title="No Stuff Appliances Google Map"
              src={businessInfo.googleEmbedIframeUrl}
              className="contact-map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-map-bar text-center">
              <a 
                href={businessInfo.googleMapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-sm"
              >
                <Navigation size={16} />
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
