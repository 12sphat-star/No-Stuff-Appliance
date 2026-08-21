import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import ApplianceCategories from '../components/ApplianceCategories';
import ServiceSection from '../components/ServiceSection';
import WhyNoStuff from '../components/WhyNoStuff';
import GalleryPreview from '../components/GalleryPreview';
import AskNoStuffSection from '../components/AskNoStuffSection';
import AboutPreview from '../components/AboutPreview';
import ReviewsSection from '../components/ReviewsSection';
import FAQPreview from '../components/FAQPreview';
import LocationSection from '../components/LocationSection';
import FinalCTASection from '../components/FinalCTASection';

export default function Home({ onOpenAskWidget }) {
  return (
    <main>
      <SEOHead 
        title="No Stuff Appliances | Appliance Store in Chesapeake VA"
        description="Explore appliances from No Stuff Appliances in Chesapeake, Virginia. Looking for something specific? Send No Stuff an inquiry and ask about current availability."
      />
      
      {/* 1. Hero */}
      <Hero onOpenAskWidget={onOpenAskWidget} />

     {/* 2. Appliance Categories */}
<ApplianceCategories onOpenAskWidget={onOpenAskWidget} />

{/* 3. Appliance Repair & Service */}
<ServiceSection onOpenAskWidget={onOpenAskWidget} />

{/* 4. Why No Stuff */}
<WhyNoStuff onOpenAskWidget={onOpenAskWidget} />

      {/* 4. Featured Photos */}
    <GalleryPreview onOpenAskWidget={onOpenAskWidget} />

      {/* 5. Ask No Stuff Lead Gen Section */}
      <AskNoStuffSection onOpenAskWidget={onOpenAskWidget} />

      {/* 6. About Preview */}
      <AboutPreview />

      {/* 7. Customer Reviews / Testimonials (Placeholder) */}
      <ReviewsSection />

      {/* 8. FAQ Preview */}
      <FAQPreview />

      {/* 9. Location & Map Placeholder */}
      <LocationSection />

      {/* 10. Final CTA */}
      <FinalCTASection onOpenAskWidget={onOpenAskWidget} />
    </main>
  );
}
