import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Camera, Sparkles, X, ZoomIn } from 'lucide-react';
import { galleryItems } from '../data/galleryData';
import './Gallery.css';

export default function Gallery({ onOpenAskWidget }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const categories = ['All', 'Laundry', 'Refrigerators', 'Cooking', 'Bedding & Other'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <main className="gallery-page">
      <SEOHead 
        title="Real Photo Gallery"
        description="View real inventory photos of No Stuff Appliances store and showroom in Chesapeake, VA."
      />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container text-center">
          <span className="section-tag">Showroom & Inventory</span>
          <h1>No Stuff Appliance Photo Gallery</h1>
          <p className="banner-subtitle">
            Authentic photography from our Chesapeake showroom. Click any image to view details or ask Harry Cole about availability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="gallery-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-card">
                <div 
                  className="gallery-item-image-wrapper"
                  onClick={() => setActiveModalItem(item)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Zoom photo of ${item.title}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="gallery-real-img"
                    style={{ objectPosition: item.focalPoint }}
                    loading="lazy"
                  />
                  <div className="gallery-hover-overlay">
                    <ZoomIn size={28} className="zoom-icon" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>

                <div className="gallery-card-info">
                  <span className="gallery-card-category">{item.category}</span>
                  <h3 className="gallery-card-title">{item.title}</h3>
                  <p className="gallery-card-desc">{item.description}</p>
                  
                  <button 
                    type="button"
                    className="btn btn-primary btn-sm w-full mt-3"
                    onClick={onOpenAskWidget}
                  >
                    <Sparkles size={14} aria-hidden="true" />
                    <span>Ask Harry About This Item</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Image Modal */}
      {activeModalItem && (
        <div className="gallery-modal-overlay" onClick={() => setActiveModalItem(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="gallery-modal-close" 
              onClick={() => setActiveModalItem(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            <div className="modal-image-frame">
              <img 
                src={activeModalItem.image} 
                alt={activeModalItem.alt}
                className="modal-img"
              />
            </div>
            
            <div className="modal-caption">
              <h3>{activeModalItem.title}</h3>
              <p>{activeModalItem.description}</p>
              <button 
                type="button" 
                className="btn btn-primary mt-3"
                onClick={() => {
                  setActiveModalItem(null);
                  onOpenAskWidget();
                }}
              >
                <Sparkles size={16} aria-hidden="true" />
                <span>Ask Harry About Availability</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
