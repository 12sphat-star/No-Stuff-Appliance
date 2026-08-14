import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, ArrowRight, Sparkles } from 'lucide-react';
import { galleryItems } from '../data/galleryData';
import './GalleryPreview.css';

export default function GalleryPreview({ onOpenAskWidget }) {
  // Show first 3 preview items featuring real uploaded photos
  const previewItems = galleryItems.slice(0, 3);

  return (
    <section className="section gallery-preview-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Showroom & Inventory</span>
          <h2>Real Appliance Photography</h2>
          <p>
            Take a look inside No Stuff Appliances in Chesapeake, VA. View our actual showroom units and inventory selections.
          </p>
        </div>

        <div className="gallery-preview-grid">
          {previewItems.map((item) => (
            <div key={item.id} className="preview-card">
              <div className="preview-image-frame">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="preview-real-img"
                  style={{ objectPosition: item.focalPoint }}
                  loading="lazy"
                />
                <span className="preview-tag-badge">{item.category}</span>
              </div>
              <div className="preview-card-caption">
                <h3 className="preview-title">{item.title}</h3>
                <p className="preview-desc">{item.description}</p>
                <button
                  type="button"
                  className="btn btn-outline btn-sm preview-ask-btn"
                  onClick={onOpenAskWidget}
                >
                  <Sparkles size={14} aria-hidden="true" />
                  <span>Ask Harry About This</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center gallery-cta-wrapper">
          <Link to="/gallery" className="btn btn-secondary">
            <span>View Full Photo Gallery</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
