import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Baby, Sparkles, Heart } from 'lucide-react';
import { AGE_GROUPS } from '../data/ageData';
import PaepkiHeroButton from './PaepkiHeroButton';

export default function AgeCompass({ onSelectAge }) {
  const [activeTab, setActiveTab] = useState(AGE_GROUPS[3].id); // Default to Schulkinder (6-12 J.)

  const currentGroup = AGE_GROUPS.find((g) => g.id === activeTab) || AGE_GROUPS[0];

  const handleSelectAgeForContact = (ageId) => {
    if (onSelectAge) {
      onSelectAge(ageId);
    }
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="altersstufen" className="py-24 md:py-32 bg-[#EDF3FA]/70 relative overflow-hidden">
      {/* Background Designer Accent Curves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-25"
        >
          <path
            d="M-100,450 C300,200 650,650 1150,300 C1350,160 1500,400 1600,350"
            stroke="#1B3B68"
            strokeWidth="1.5"
          />
          <path
            d="M0,600 C400,350 800,800 1200,500 C1380,360 1520,550 1600,480"
            stroke="#1A382B"
            strokeWidth="1.2"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5EFFB] border border-[#C9DEF5] text-[#0B192C] text-xs font-bold tracking-wide shadow-sm">
            <Baby className="w-4 h-4 text-[#25518E]" />
            <span>Individuelle Förderung von 0 bis 18 Jahren</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B192C] tracking-tight">
            Der Alters-Kompass: Wo steht Ihr Kind aktuell?
          </h2>

          <p className="text-base sm:text-lg text-[#1E293B]/75 leading-relaxed">
            Jede Entwicklungsphase stellt eigene Anforderungen an Körper und Gehirn. Wählen Sie die Altersstufe Ihres Kindes, um typische Symptome und den maßgeschneiderten PäPKi®-Weg zu sehen.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto no-scrollbar pb-4 mb-10">
          {AGE_GROUPS.map((group) => {
            const isActive = group.id === activeTab;
            return (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`px-5 py-3 rounded-2xl font-display font-bold text-sm sm:text-base whitespace-nowrap transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#1A382B] text-white shadow-lg shadow-[#1A382B]/20 scale-105 border border-white/20'
                    : 'bg-white hover:bg-[#F8FAFC] text-[#334155] hover:text-[#0B192C] border border-[#CBD5E1] hover:border-[#1A382B]/40 shadow-sm'
                }`}
              >
                {group.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGroup.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#CBD5E1] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            
            {/* Left Sub-Column: Symptoms / Problems */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[#E5EFFB] text-[#1B3B68] text-xs font-bold border border-[#C9DEF5]">
                  {currentGroup.badge}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B192C] leading-tight">
                {currentGroup.title}
              </h3>

              {/* Clean & Classy Green Symptoms Checklist */}
              <div className="space-y-3 pt-1">
                <p className="text-xs font-bold text-[#1A382B] uppercase tracking-wider">
                  Häufige Herausforderungen & Sorgen der Eltern:
                </p>

                <div className="grid grid-cols-1 gap-2.5">
                  {currentGroup.problems.map((problem, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#EBF3EE] border border-[#CFDDD4] text-sm text-[#1A382B] shadow-sm hover:shadow transition-all"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#D4E4DB] flex items-center justify-center shrink-0 mt-0.5 text-[#1A382B]">
                        <span className="w-2 h-2 rounded-full bg-[#1A382B]" />
                      </div>
                      <span className="font-medium text-[#1E2922] leading-snug">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Box (Calm Blue Trust) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2.5 text-sm font-bold text-[#0B192C]">
                  <div className="w-7 h-7 rounded-xl bg-[#1A382B] text-white flex items-center justify-center shadow-sm">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base font-extrabold text-[#0B192C]">{currentGroup.solution.headline}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#1E293B]/80 leading-relaxed">
                  {currentGroup.solution.description}
                </p>
                <div className="pt-2 border-t border-[#CBD5E1] flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1A382B]">
                  <CheckCircle2 className="w-4 h-4 text-[#1A382B] shrink-0" />
                  <span><strong>Ziel:</strong> {currentGroup.solution.impact}</span>
                </div>
              </div>

              {/* Action Button (Bespoke 3D Hero Button) */}
              <div className="pt-2">
                <PaepkiHeroButton
                  text="Ersttermin für diesen Altersbereich anfragen"
                  onClick={() => handleSelectAgeForContact(currentGroup.id)}
                />
              </div>

            </div>

            {/* Right Sub-Column: Genuine Visual with Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F8FAFC]">
                <img
                  src={currentGroup.image}
                  alt={currentGroup.imageAlt}
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#A2C2E8] mb-1">
                    <Heart className="w-3.5 h-3.5 text-[#A2C2E8]" />
                    <span>Praxis-Einblick</span>
                  </div>
                  <p className="text-sm font-semibold text-white/95">
                    {currentGroup.caption}
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* Bottom Wave Transition to Video Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 block text-[#F8FAFC]"
        >
          <path
            d="M0,20 C480,60 960,0 1440,30 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
