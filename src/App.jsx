import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AskNoStuffWidget from './components/AskNoStuffWidget';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isAskWidgetOpen, setIsAskWidgetOpen] = useState(false);

  const handleOpenAskWidget = () => {
    setIsAskWidgetOpen(true);
  };

  const handleCloseAskWidget = () => {
    setIsAskWidgetOpen(false);
  };

  const handleToggleAskWidget = () => {
    setIsAskWidgetOpen((prev) => !prev);
  };

  return (
    <Router>
      <ScrollToTop />
      <Header onOpenAskWidget={handleOpenAskWidget} />
      
      <Routes>
        <Route path="/" element={<Home onOpenAskWidget={handleOpenAskWidget} />} />
        <Route path="/about" element={<About onOpenAskWidget={handleOpenAskWidget} />} />
        <Route path="/gallery" element={<Gallery onOpenAskWidget={handleOpenAskWidget} />} />
        <Route path="/faq" element={<FAQ onOpenAskWidget={handleOpenAskWidget} />} />
        <Route path="/contact" element={<Contact onOpenAskWidget={handleOpenAskWidget} />} />
      </Routes>

      <Footer onOpenAskWidget={handleOpenAskWidget} />

      {/* Global Floating Lead Widget */}
      <AskNoStuffWidget
        isOpen={isAskWidgetOpen}
        onToggle={handleToggleAskWidget}
        onClose={handleCloseAskWidget}
      />
    </Router>
  );
}
