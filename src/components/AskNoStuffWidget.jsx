import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, Minus, Send, CheckCircle2, AlertCircle, Wrench, UserCheck } from 'lucide-react';
import { submitLeadInquiry } from '../services/leadService';
import { businessInfo } from '../data/businessInfo';
import './AskNoStuffWidget.css';

export default function AskNoStuffWidget({ isOpen, onToggle, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
const [formData, setFormData] = useState({
  leadType: 'Appliance Inquiry',
  applianceRequest: '',
  name: '',
  phone: '',
  email: '',
  message: ''
});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const inputRef = useRef(null);

  // Focus input on step change
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, currentStep, isMinimized]);

  // Keyboard shortcut: Escape closes widget
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.applianceRequest.trim()) {
        newErrors.applianceRequest = "Please describe what appliance or question Harry can help with.";
      }
    } else if (step === 2) {
      if (!formData.name.trim()) {
        newErrors.name = "Your name is required so Harry knows who he is speaking with.";
      }
    } else if (step === 3) {
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required so Harry can follow up.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      if (currentStep < 5) {
        setCurrentStep((prev) => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitLeadInquiry({
        ...formData,
        source: "No Stuff Website - Ask Harry"
      });
      setIsSubmitted(true);
    } catch (err) {
      setErrors({ submit: "There was a problem submitting your question. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
   setFormData({
  leadType: 'Appliance Inquiry',
  applianceRequest: '',
  name: '',
  phone: '',
  email: '',
  message: ''
});
    setCurrentStep(1);
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <>
      {/* Signature Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          className="ask-floating-btn"
          onClick={onToggle}
          aria-label="Open Ask Harry appliance inquiry tool"
        >
          <Sparkles size={22} className="ask-btn-icon" />
          <span className="ask-btn-text">Ask Harry</span>
        </button>
      )}

      {/* Conversational Lead Modal Widget */}
      {isOpen && (
        <div className={`ask-widget-card ${isMinimized ? 'minimized' : ''}`} role="dialog" aria-modal="true" aria-labelledby="widget-title">
          {/* Header Bar */}
          <div className="widget-header">
            <div className="widget-brand">
             <span className="widget-harry-avatar">
  <img
    src="/images/ask-harry.png"
    alt="Harry Cole"
  />
</span>
              <div>
                <h3 id="widget-title" className="widget-title">Ask Harry Cole</h3>
                <span className="widget-subtitle">No Stuff Appliances • Chesapeake, VA</span>
              </div>
            </div>

            <div className="widget-controls">
              <button
                type="button"
                className="widget-control-btn"
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? "Expand Ask Harry widget" : "Minimize Ask Harry widget"}
              >
                <Minus size={18} />
              </button>
              <button
                type="button"
                className="widget-control-btn"
                onClick={onClose}
                aria-label="Close Ask Harry widget"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Minimized view bar */}
          {isMinimized && (
            <div className="widget-minimized-bar" onClick={() => setIsMinimized(false)}>
              <span>Click to continue asking Harry Cole</span>
            </div>
          )}

          {/* Expanded Widget Body */}
          {!isMinimized && (
            <div className="widget-body">
              {!isSubmitted ? (
                <>
                  {/* Personal Greeting Bubble */}
                  <div className="chat-bubble bot-bubble">
                    <p>
  Hi! I'm Harry. Whether you're looking for an appliance or need help with appliance repair, tell me how I can help.</p>
                  </div>

                  {/* Step Progress Bar */}
                  <div className="step-progress">
                    <span>Step {currentStep} of 5</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${(currentStep / 5) * 100}%` }}></div>
                    </div>
                  </div>

                  {/* Step Forms */}
                  <form onSubmit={handleNext} className="widget-form">
                   {currentStep === 1 && (
  <div className="step-content">

    <div className="step-question">
      How can Harry help you today?
    </div>

    <div className="inquiry-type-options">

      <button
        type="button"
        className={`inquiry-type-btn ${
          formData.leadType === 'Appliance Inquiry' ? 'active' : ''
        }`}
        onClick={() => handleChange('leadType', 'Appliance Inquiry')}
      >
        Looking for an Appliance
      </button>

      <button
        type="button"
        className={`inquiry-type-btn ${
          formData.leadType === 'Service Request' ? 'active' : ''
        }`}
        onClick={() => handleChange('leadType', 'Service Request')}
      >
        Need Appliance Repair / Service
      </button>

    </div>

    <label htmlFor="applianceRequest" className="step-question inquiry-detail-question">
      {formData.leadType === 'Service Request'
        ? 'Tell Harry which appliance needs service and what is happening.'
        : 'What appliance or question can Harry help you with?'}
    </label>
                        <textarea
                          id="applianceRequest"
                          ref={inputRef}
                          rows={3}
                          className="form-control"
                          placeholder="e.g. Need a stainless top-freezer refrigerator, top-load washer replacement, or size advice..."
                          value={formData.applianceRequest}
                          onChange={(e) => handleChange('applianceRequest', e.target.value)}
                        />
                        {errors.applianceRequest && (
                          <div className="form-error"><AlertCircle size={14} /> {errors.applianceRequest}</div>
                        )}
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="step-content">
                        <label htmlFor="leadName" className="step-question">
                          Step 2: What's your name? <span className="req">*</span>
                        </label>
                        <input
                          id="leadName"
                          ref={inputRef}
                          type="text"
                          className="form-control"
                          placeholder="First & Last Name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                        />
                        {errors.name && (
                          <div className="form-error"><AlertCircle size={14} /> {errors.name}</div>
                        )}
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="step-content">
                        <label htmlFor="leadPhone" className="step-question">
                          Step 3: What's the best phone number for Harry to reach you? <span className="req">*</span>
                        </label>
                        <input
                          id="leadPhone"
                          ref={inputRef}
                          type="tel"
                          className="form-control"
                          placeholder="(757) 555-0199"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                        />
                        {errors.phone && (
                          <div className="form-error"><AlertCircle size={14} /> {errors.phone}</div>
                        )}
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="step-content">
                        <label htmlFor="leadEmail" className="step-question">
                          Step 4: What's your email address? <span className="opt">(Optional)</span>
                        </label>
                        <input
                          id="leadEmail"
                          ref={inputRef}
                          type="email"
                          className="form-control"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                        />
                      </div>
                    )}

                    {currentStep === 5 && (
                      <div className="step-content">
                        <label htmlFor="leadMessage" className="step-question">
                          Step 5: Any specific brand, dimension, or timeframe Harry should know? <span className="opt">(Optional)</span>
                        </label>
                        <textarea
                          id="leadMessage"
                          ref={inputRef}
                          rows={3}
                          className="form-control"
                          placeholder="e.g. Must fit 30-inch opening, electric hookup..."
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                        />
                      </div>
                    )}

                    {/* Step Navigation Actions */}
                    <div className="widget-actions">
                      {currentStep > 1 && (
                        <button
                          type="button"
                          className="btn btn-outline btn-sm"
                          onClick={handleBack}
                        >
                          Back
                        </button>
                      )}

                      <button
                        type="submit"
                        className="btn btn-primary btn-sm widget-next-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : currentStep === 5 ? (
                          <><span>Send to Harry</span> <Send size={16} /></>
                        ) : (
                          "Next"
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Explicit Business Disclosure */}
                  <div className="widget-disclosure">
                    <span>
                      Notice: Your information will be sent directly to Harry Cole at No Stuff Appliances so he can follow up with you.
                    </span>
                  </div>
                </>
              ) : (
                /* Success Confirmation State */
                <div className="widget-success">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h4>Question Sent to Harry!</h4>
                  <p className="chat-bubble bot-bubble">
                    Thanks! Your request has been sent directly to Harry Cole at No Stuff Appliances. He will review your request and follow up with you regarding availability.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm mt-3"
                    onClick={handleReset}
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
