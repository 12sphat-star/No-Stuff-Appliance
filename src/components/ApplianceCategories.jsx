import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { applianceCategories } from '../data/applianceCategories';
import './ApplianceCategories.css';

export default function ApplianceCategories({ onOpenAskWidget }) {
  return (
    <section id="appliances" className="section appliance-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Appliance Categories</span>
          <h2>Browse Major Appliance Categories</h2>
          <p>
            Explore our main appliance categories below. Because inventory changes quickly at our Chesapeake location, reach out to ask Harry Cole about what units are currently on hand.
          </p>
        </div>

        <div className="categories-grid">
          {applianceCategories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image-container">
                <img 
                  src={category.image} 
                  alt={category.imageAlt}
                  className="category-card-img"
                  style={{ objectPosition: category.focalPoint }}
                  loading="lazy"
                />
                <span className="category-card-tag">{category.title}</span>
              </div>

              <div className="category-card-body">
                <h3 className="category-card-title">{category.title}</h3>
                <p className="category-card-desc">{category.description}</p>

                <ul className="category-features-list">
                  {category.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} className="feature-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="category-card-action">
                  <button
                    type="button"
                    className="btn btn-primary category-btn"
                    onClick={onOpenAskWidget}
                  >
                    <Sparkles size={16} aria-hidden="true" />
                    <span>Ask Harry Availability</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
