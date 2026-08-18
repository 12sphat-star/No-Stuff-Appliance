import React from 'react';
import SEOHead from '../components/SEOHead';

export default function Privacy() {
  return (
    <main>
      <SEOHead
        title="Privacy Policy | No Stuff Appliances"
        description="Privacy Policy for No Stuff Appliances in Chesapeake, Virginia."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <span className="section-tag">Privacy</span>
          <h1>Privacy Policy</h1>

          <p><strong>Last Updated: August 18, 2026</strong></p>

          <h2>Information We Collect</h2>
          <p>
            When you contact No Stuff Appliances through this website, including
            through the Ask Harry feature, we may collect information you
            voluntarily provide such as your name, phone number, email address,
            appliance needs, service request details, and other information
            included in your message.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            Information submitted through this website is used to respond to
            appliance inquiries, service requests, questions, and other requests
            you make to No Stuff Appliances.
          </p>

          <h2>How Information Is Received and Stored</h2>
          <p>
            Website inquiries may be transmitted by email and recorded in a
            business inquiry log so No Stuff Appliances can review and respond
            to customer requests.
          </p>

          <h2>Sharing of Information</h2>
          <p>
            No Stuff Appliances does not sell personal information submitted
            through this website. Information may be processed using service
            providers necessary to operate the website, receive inquiries, and
            communicate with customers.
          </p>

          <h2>Google Services</h2>
          <p>
            This website may use Google services, including Google Maps and
            Google-related services used to process or maintain website
            inquiries. Those services are also subject to Google's applicable
            privacy policies.
          </p>

          <h2>Information Security</h2>
          <p>
            Reasonable measures are used to protect information submitted through
            the website. However, no internet transmission or electronic storage
            system can be guaranteed to be completely secure.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may choose not to submit personal information through the
            website and may contact No Stuff Appliances directly instead.
          </p>

          <h2>Contact</h2>
          <p>
            Questions regarding this Privacy Policy may be directed to No Stuff
            Appliances in Chesapeake, Virginia.
          </p>
        </div>
      </section>
    </main>
  );
}