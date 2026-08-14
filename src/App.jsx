import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PaepkiConcept from './components/PaepkiConcept';
import AgeCompass from './components/AgeCompass';
import VideoSection from './components/VideoSection';
import ProcessSteps from './components/ProcessSteps';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import ContactBooking from './components/ContactBooking';
import Footer from './components/Footer';

export default function App() {
  const [selectedAgeId, setSelectedAgeId] = useState(null);

  const handleSelectAge = (ageId) => {
    setSelectedAgeId(ageId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B] antialiased selection:bg-[#25518E]/20 selection:text-[#0B192C]">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Designer Hero */}
        <Hero />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. The PäPKi Concept & Root Causes */}
        <PaepkiConcept />

        {/* 4. Interactive Age Compass (0–18 Years) */}
        <AgeCompass onSelectAge={handleSelectAge} />

        {/* 5. Practice Atmosphere & Video Section */}
        <VideoSection />

        {/* 6. 4-Step Process */}
        <ProcessSteps />

        {/* 7. About Kathrin Raddatz */}
        <AboutSection />

        {/* 8. FAQs for Parents */}
        <FaqSection />

        {/* 9. Contact & Booking Form */}
        <ContactBooking selectedAgeId={selectedAgeId} />
      </main>

      {/* Footer & Legal */}
      <Footer />
    </div>
  );
}
