import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Compass, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { MEDIA } from '../constants/media';

const ease = [0.22, 1, 0.36, 1];

const SLIDES = [
  {
    image: MEDIA.kathrinWithChild7,
    title: 'Individuelle Begleitung auf Augenhöhe',
    subtitle: 'Kathrin Raddatz mit Kind in der Praxis für Entwicklung'
  },
  {
    image: MEDIA.babyBoyPraxis,
    title: 'Frühkindliche Aufrichtung & Diagnostik',
    subtitle: 'Sanfte Meilenstein-Förderung für Babys & Kleinkinder'
  },
  {
    image: MEDIA.childWriting6,
    title: 'Feinmotorik & Schulvorbereitung',
    subtitle: 'Entspannte Stifthaltung und Freude am Gestalten'
  },
  {
    image: MEDIA.childWriting10,
    title: 'Lern- & Konzentrationsstärkung',
    subtitle: 'Den täglichen Hausaufgabenstress nachhaltig lösen'
  },
  {
    image: MEDIA.kathrinRaddatz,
    title: 'Kathrin Raddatz • Praxisinhaberin',
    subtitle: 'Zertifizierte PäPKi® Entwicklungs- & Lerntherapie'
  },
  {
    image: MEDIA.practiceEntrance,
    title: 'Praxisräume zum Wohlfühlen',
    subtitle: 'Nordertorstriftweg 11, 31582 Nienburg (Weser)'
  },
  {
    image: MEDIA.motivationCards,
    title: 'Motivationskärtchen für zu Hause',
    subtitle: 'Spielerische Unterstützung für das 10-Minuten-Bodenprogramm'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EDF3FA] to-[#F8FAFC]">
      {/* Subtle organic background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#A2C2E8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#25518E]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Organic Designer Stroke Lines in Hero (Soft & Placed only at Right Perimeter) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-15"
        >
          {/* Gentle Arches framing the right-side visual only */}
          <path
            d="M800,100 C1050,40 1350,220 1500,180"
            stroke="#1B3B68"
            strokeWidth="1.5"
          />
          <path
            d="M750,250 C1000,180 1300,480 1550,380"
            stroke="#1A382B"
            strokeWidth="1"
            strokeDasharray="6 6"
          />
          <path
            d="M900,650 C1100,520 1350,750 1500,680"
            stroke="#25518E"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Sales Copy & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EFFB] border border-[#C9DEF5] text-[#0B192C] text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#25518E] animate-pulse" />
              <span>Ganzheitliche Entwicklungs- & Lerntherapie (0–18 Jahre)</span>
            </div>

            {/* Main Headline (Clean, Modern, Friendly Typography for Children & Youth) */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0B192C] tracking-tight leading-[1.14]">
              Wenn der Körper in Balance findet, kann{' '}
              <span className="text-[#1A382B] font-black underline decoration-[#1A382B]/30 decoration-wavy decoration-2">
                Lernen gelingen.
              </span>
            </h1>

            {/* Subline with deep empathy */}
            <p className="text-lg sm:text-xl text-[#1E293B]/80 font-normal leading-relaxed max-w-2xl">
              Wir lösen Entwicklungs-, Haltungs- und Schulblockaden an der echten Ursache. Mit der wissenschaftlich fundierten <strong>PäPKi®-Therapie</strong> unterstützen wir Babys, Kinder und Jugendliche dabei, neuromotorische Meilensteine sanft nachzuholen.
            </p>

            {/* Dual CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#1A382B] hover:bg-[#264E3D] text-white font-bold text-base shadow-xl shadow-[#1A382B]/25 hover:shadow-2xl hover:shadow-[#1A382B]/35 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 border border-white/20 group cursor-pointer"
              >
                <span>Erstgespräch anfragen</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#altersstufen"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-[#F8FAFC] text-[#0B192C] border-2 border-[#CBD5E1] hover:border-[#1B3B68] font-bold text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <Compass className="w-5 h-5 text-[#25518E]" />
                <span>Altersstufen (0–18 J.)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Seamless Layered Crossfade Slideshow (Zero White Flash) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top Right Floating Badge (Positioned gracefully on the outer edge) */}
            <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#CBD5E1] flex items-center gap-2.5 z-30">
              <div className="w-8 h-8 rounded-xl bg-[#EBF3EE] border border-[#CFDDD4] flex items-center justify-center text-[#1A382B]">
                <ShieldCheck className="w-4 h-4 text-[#1A382B]" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-[#1A382B] font-bold uppercase tracking-wider">Zertifiziert</p>
                <p className="font-display font-bold text-xs text-[#0B192C]">PäPKi® Konzept</p>
              </div>
            </div>

            {/* Main Visual Card Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0B192C] group h-[460px] sm:h-[520px]">
              
              {/* Stacked Images for True Seamless Crossfade */}
              {SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    {/* Subtle Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/25 to-transparent" />
                  </div>
                );
              })}
              {/* Bottom Info Bar inside Photo */}
              <div className="absolute bottom-4 left-4 right-4 z-20 space-y-2 text-white">
                <div className="bg-[#0B192C]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#A2C2E8] uppercase tracking-wider mb-1">
                    <Heart className="w-3.5 h-3.5 text-[#A2C2E8]" />
                    <span>Praxis für Entwicklung • Nienburg</span>
                  </div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-white leading-tight">
                    {SLIDES[currentSlide].title}
                  </h4>
                  <p className="text-xs text-white/80 mt-0.5">
                    {SLIDES[currentSlide].subtitle}
                  </p>
                </div>

                {/* Progress / Slide Indicators */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex gap-1.5">
                    {SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          idx === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Manual Arrow Controls */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={prevSlide}
                      className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
                      aria-label="Vorheriges Bild"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
                      aria-label="Nächstes Bild"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
