import React, { useEffect } from 'react';
import { businessInfo } from '../data/businessInfo';

export default function SEOHead({ title, description, canonicalPath = "" }) {
  useEffect(() => {
    // 1. Dynamic Title Tag
    const fullTitle = title 
      ? `${title} | ${businessInfo.name}`
      : `${businessInfo.name} | Appliance Store in Chesapeake VA`;
    document.title = fullTitle;

    // 2. Meta Description Tag
    const metaDescription = description || 
      "Explore appliances from No Stuff Appliances in Chesapeake, Virginia. Looking for something specific? Send No Stuff an inquiry and ask about current availability.";
    
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (!metaDescEl) {
      metaDescEl = document.createElement('meta');
      metaDescEl.name = "description";
      document.head.appendChild(metaDescEl);
    }
    metaDescEl.content = metaDescription;

    // 3. JSON-LD Structured Data for LocalBusiness
    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": businessInfo.name,
      "description": "Local appliance retailer serving Chesapeake, Virginia and surrounding Hampton Roads market.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": businessInfo.city,
        "addressRegion": businessInfo.state,
        "addressCountry": "US"
      },
      "areaServed": [
        "Chesapeake, VA",
        "Hampton Roads, VA"
      ],
      "knowsAbout": [
        "Refrigerators",
        "Washing Machines",
        "Clothes Dryers",
        "Ranges and Stoves",
        "Dishwashers",
        "Home Appliances"
      ],
      "founder": {
        "@type": "Person",
        "name": businessInfo.contactPerson
      }
    };

    let scriptLdEl = document.getElementById('json-ld-local-business');
    if (!scriptLdEl) {
      scriptLdEl = document.createElement('script');
      scriptLdEl.id = 'json-ld-local-business';
      scriptLdEl.type = 'application/ld+json';
      document.head.appendChild(scriptLdEl);
    }
    scriptLdEl.textContent = JSON.stringify(jsonLdData);

  }, [title, description, canonicalPath]);

  return null;
}
