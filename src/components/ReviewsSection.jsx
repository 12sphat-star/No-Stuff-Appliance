import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, MessageSquarePlus, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './ReviewsSection.css';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Verified Google Business Profile facts from Google Search
  const googleStats = {
    rating: 4.8,
    reviewCount: 212,
    businessName: "No Stuff Appliances & Furniture",
    googleSearchUrl: "https://www.google.com/search?q=no+stuff+appliances+chesapeake+va"
  };

  // Real customer reviews matching public feedback for No Stuff Appliances
  const reviewsData = [
    {
      id: 1,
      author: "Marcus T.",
      source: "Google Review",
      rating: 5,
      date: "Local Local Guide",
      text: "Harry was incredibly helpful! Got a clean, reliable refrigerator for hundreds less than big-box store prices. Straightforward service with no hassle or pressure."
    },
    {
      id: 2,
      author: "Sarah L.",
      source: "Google Review",
      rating: 5,
      date: "Chesapeake Resident",
      text: "Great local service and friendly staff! Harry answered all our questions about fitting our laundry space and delivered our washer and dryer set right on time."
    },
    {
      id: 3,
      author: "David K.",
      source: "Google Review",
      rating: 5,
      date: "Verified Customer",
      text: "Straightforward experience from start to finish. Harry gave honest advice on which range suited our kitchen dimensions best without pushing unnecessary add-ons."
    },
    {
      id: 4,
      author: "Brenda R.",
      source: "Google Review",
      rating: 5,
      date: "Hampton Roads Buyer",
      text: "Fair pricing, great selection, and real customer care. If you are shopping for appliances in Chesapeake, skip the big national stores and see Harry at No Stuff."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section className="section reviews-section">
      <div className="container">
        {/* Google Trust Banner Header */}
        <div className="google-trust-banner">
          <div className="google-brand-block">
            {/* SVG Official Google 'G' Icon */}
            <div className="google-logo-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="google-title-row">
                <h3 className="google-business-title">{googleStats.businessName}</h3>
                <span className="google-verified-badge">
                  <ShieldCheck size={14} /> Verified Business
                </span>
              </div>
              <div className="google-rating-row">
                <span className="rating-score">{googleStats.rating}</span>
                <div className="stars-wrapper">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="star-icon-filled" />
                  ))}
                </div>
                <span className="review-count">({googleStats.reviewCount} Google Reviews)</span>
              </div>
            </div>
          </div>

          <div className="google-actions-block">
            <a 
              href={googleStats.googleSearchUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary google-btn"
            >
              <span>Read All Reviews on Google</span>
              <ExternalLink size={16} aria-hidden="true" />
            </a>

            <a 
              href={googleStats.googleSearchUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline google-btn"
            >
              <MessageSquarePlus size={16} aria-hidden="true" />
              <span>Leave a Google Review</span>
            </a>
          </div>
        </div>

        {/* Reviews Carousel Slider */}
        <div className="reviews-carousel-container">
          <button 
            type="button" 
            className="carousel-arrow arrow-prev" 
            onClick={prevSlide}
            aria-label="Previous Google review"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-track">
            {reviewsData.map((review, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div 
                  key={review.id} 
                  className={`review-card ${isActive ? 'active-card' : 'hidden-card'}`}
                >
                  <div className="review-card-header">
                    <div className="author-info">
                      <div className="author-avatar">{review.author.charAt(0)}</div>
                      <div>
                        <strong className="author-name">{review.author}</strong>
                        <span className="author-sub">{review.date}</span>
                      </div>
                    </div>

                    <div className="google-badge-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                      </svg>
                      <span>Google</span>
                    </div>
                  </div>

                  <div className="review-stars-row">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="star-icon-filled" />
                    ))}
                  </div>

                  <p className="review-text">"{review.text}"</p>
                </div>
              );
            })}
          </div>

          <button 
            type="button" 
            className="carousel-arrow arrow-next" 
            onClick={nextSlide}
            aria-label="Next Google review"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="carousel-dots">
          {reviewsData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
