import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { MEDIA } from '../constants/media';
import PaepkiHeroButton from './PaepkiHeroButton';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EDF3FA] to-[#F8FAFC]">
      {/* Subtle organic background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#A2C2E8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#25518E]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Organic Designer Stroke Lines in Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-15"
        >
          <path
            d="M150,80 C450,30 950,150 1400,100"
            stroke="#1B3B68"
            strokeWidth="1.5"
          />
          <path
            d="M50,220 C350,150 900,320 1450,260"
            stroke="#1A382B"
            strokeWidth="1"
            strokeDasharray="6 6"
          />
          <path
            d="M300,750 C700,600 1100,780 1450,680"
            stroke="#25518E"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Editorial Headline & Copy */}
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7">
          
          {/* Category Marker */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5EFFB] border border-[#C9DEF5] text-[#0B192C] text-xs font-bold tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A382B]" />
            <span>Ganzheitliche Entwicklungs- & Lerntherapie (0–18 Jahre)</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0B192C] tracking-tight leading-[1.12]"
          >
            Wenn der Körper in Balance findet, kann{' '}
            <span className="text-[#1A382B] font-black underline decoration-[#1A382B]/30 decoration-wavy decoration-2">
              Lernen gelingen.
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="text-lg sm:text-xl text-[#1E293B]/80 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            Wir lösen Entwicklungs-, Haltungs- und Schulblockaden an der echten Ursache. Mit der wissenschaftlich fundierten <strong>PäPKi®-Therapie</strong> unterstützen wir Babys, Kinder und Jugendliche dabei, neuromotorische Meilensteine sanft nachzuholen.
          </motion.p>

          {/* Dual CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2"
          >
            <PaepkiHeroButton
              text="Erstgespräch anfragen"
              to="#kontakt"
            />

            <a
              href="#altersstufen"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 h-[68px] sm:h-[72px] rounded-full border-2 border-slate-300/90 border-b-[5px] border-b-slate-400/80 hover:border-b-[#1A382B] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0B192C] font-extrabold text-[16px] sm:text-[17px] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-[4px] group backdrop-blur-sm cursor-pointer"
            >
              <Compass className="w-5 h-5 text-[#25518E] group-hover:scale-110 transition-transform duration-300" />
              <span>Altersstufen (0–18 J.)</span>
            </a>
          </motion.div>

        </div>

        {/* Large, Grand Panoramic Title Image Stage (Single Clean Frame, Flush to Edge) */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mt-12 sm:mt-16 max-w-6xl mx-auto"
        >
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(11,25,44,0.14)] border border-slate-200/90 bg-white">
            <img
              src={`${MEDIA.childrenFeetLineup}?v=3`}
              alt="Kinderfüße von Säugling bis Jugendlicher auf Holz- und Turnboden – Gesunde Aufrichtung von 0 bis 18 Jahren"
              className="w-full aspect-[16/9] sm:aspect-[2.35/1] object-cover object-center block"
              loading="eager"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
