import React from 'react';
import SEOHead from '../components/SEOHead';

export default function Terms() {
  return (
    <main>
      <SEOHead
        title="Terms of Service | No Stuff Appliances"
        description="Website Terms of Service for No Stuff Appliances in Chesapeake, Virginia."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <span className="section-tag">Website Terms</span>
          <h1>Terms of Service</h1>

          <p><strong>Last Updated: August 18, 2026</strong></p>

          <h2>Website Information</h2>
          <p>
            This website provides general information about No Stuff Appliances,
            its appliance offerings, services, and ways to contact the business.
          </p>

          <h2>Appliance Availability</h2>
          <p>
            Appliance inventory and availability may change. Images and
            descriptions displayed on this website may be representative and
            should not be interpreted as confirmation that a specific appliance
            is currently available.
          </p>

          <h2>Pricing and Product Details</h2>
          <p>
            Prices, product condition, specifications, availability, delivery
            options, warranties, and other purchase details should be confirmed
            directly with No Stuff Appliances before making a purchasing
            decision.
          </p>

          <h2>Appliance Repair and Service</h2>
          <p>
            Appliance repair and service calls are provided for a fee.
            Availability, service area, scheduling, applicable charges, and the
            ability to service a particular appliance should be confirmed
            directly with No Stuff Appliances.
          </p>

          <h2>Ask Harry and Website Inquiries</h2>
          <p>
            The Ask Harry feature allows visitors to submit questions and
            requests to No Stuff Appliances. Submitting an inquiry does not
            guarantee appliance availability, a service appointment, or a
            specific response time.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            This website may contain links to or use third-party services,
            including Google Maps and Google Reviews. No Stuff Appliances is not
            responsible for the content or operation of third-party websites or
            services.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            These Terms may be updated as the website, products, or services
            change.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms may be directed to No Stuff Appliances
            in Chesapeake, Virginia.
          </p>
        </div>
      </section>
    </main>
  );
}