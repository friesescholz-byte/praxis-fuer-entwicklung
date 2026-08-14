import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { MEDIA } from '../constants/media';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'py-2.5 bg-[#0B192C]/95 backdrop-blur-md shadow-xl border-b border-white/10'
          : 'py-4 sm:py-5 bg-gradient-to-b from-[#F8FAFC]/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo with Real Favicon/Logo Asset */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-2xl overflow-hidden shadow-md border-2 border-white/80 bg-white flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <img
                src={MEDIA.logoFavicon}
                alt="Praxis für Entwicklung Logo Kathrin Raddatz"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display font-extrabold text-base sm:text-lg leading-tight transition-colors whitespace-nowrap ${
                  isScrolled ? 'text-white' : 'text-[#0B192C]'
                }`}
              >
                Praxis für Entwicklung
              </span>
              <span
                className={`text-[11px] font-semibold tracking-wider uppercase whitespace-nowrap transition-colors ${
                  isScrolled ? 'text-[#A2C2E8]' : 'text-[#25518E]'
                }`}
              >
                Kathrin Raddatz • PäPKi®
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-medium">
            <a
              href="#konzept"
              className={`transition-colors whitespace-nowrap ${
                isScrolled ? 'text-white/85 hover:text-white' : 'text-[#1E293B]/80 hover:text-[#0B192C]'
              }`}
            >
              Das PäPKi® Konzept
            </a>
            <a
              href="#altersstufen"
              className={`transition-colors whitespace-nowrap ${
                isScrolled ? 'text-white/85 hover:text-white' : 'text-[#1E293B]/80 hover:text-[#0B192C]'
              }`}
            >
              Altersstufen (0–18 J.)
            </a>
            <a
              href="#ablauf"
              className={`transition-colors whitespace-nowrap ${
                isScrolled ? 'text-white/85 hover:text-white' : 'text-[#1E293B]/80 hover:text-[#0B192C]'
              }`}
            >
              Therapieablauf
            </a>
            <a
              href="#ueber-mich"
              className={`transition-colors whitespace-nowrap ${
                isScrolled ? 'text-white/85 hover:text-white' : 'text-[#1E293B]/80 hover:text-[#0B192C]'
              }`}
            >
              Über Kathrin
            </a>
            <a
              href="#praxis"
              className={`transition-colors whitespace-nowrap ${
                isScrolled ? 'text-white/85 hover:text-white' : 'text-[#1E293B]/80 hover:text-[#0B192C]'
              }`}
            >
              Die Praxis
            </a>
            <a
              href="#faq"
              className={`transition-colors whitespace-nowrap ${
                isScrolled ? 'text-white/85 hover:text-white' : 'text-[#1E293B]/80 hover:text-[#0B192C]'
              }`}
            >
              FAQ
            </a>
          </nav>

          {/* Medium Screens Navigation (Compact) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-semibold">
            <a href="#konzept" className={isScrolled ? 'text-white/85' : 'text-[#1E293B]/80'}>Konzept</a>
            <a href="#altersstufen" className={isScrolled ? 'text-white/85' : 'text-[#1E293B]/80'}>0–18 Jahre</a>
            <a href="#ablauf" className={isScrolled ? 'text-white/85' : 'text-[#1E293B]/80'}>Ablauf</a>
            <a href="#ueber-mich" className={isScrolled ? 'text-white/85' : 'text-[#1E293B]/80'}>Über mich</a>
            <a href="#praxis" className={isScrolled ? 'text-white/85' : 'text-[#1E293B]/80'}>Praxis</a>
            <a href="#faq" className={isScrolled ? 'text-white/85' : 'text-[#1E293B]/80'}>FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:+4917646669641"
              className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-full transition-all whitespace-nowrap shadow-sm hover:scale-102 ${
                isScrolled
                  ? 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
                  : 'bg-[#E5EFFB] hover:bg-[#C9DEF5] text-[#0B192C] border border-[#BFDBFE]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#25518E]" />
              <span>0176 46669641</span>
            </a>
            
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#1A382B] hover:bg-[#264E3D] px-5 py-2.5 rounded-full shadow-md hover:shadow-xl hover:scale-102 active:scale-98 transition-all group whitespace-nowrap border border-white/25 cursor-pointer"
            >
              <span>Ersttermin anfragen</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-2xl transition-colors ${
              isScrolled ? 'text-white hover:bg-white/10' : 'text-[#0B192C] hover:bg-[#E5EFFB]'
            }`}
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto px-4 mt-2">
          <div className="bg-[#0B192C] text-white rounded-3xl border border-white/15 p-6 shadow-2xl space-y-4">
            <nav className="flex flex-col space-y-3 text-sm font-semibold">
              <a
                href="#konzept"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-white/10 hover:text-[#A2C2E8]"
              >
                Das PäPKi® Konzept
              </a>
              <a
                href="#altersstufen"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-white/10 hover:text-[#A2C2E8]"
              >
                Altersstufen (0–18 Jahre)
              </a>
              <a
                href="#ablauf"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-white/10 hover:text-[#A2C2E8]"
              >
                Therapieablauf
              </a>
              <a
                href="#ueber-mich"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-white/10 hover:text-[#A2C2E8]"
              >
                Über Kathrin Raddatz
              </a>
              <a
                href="#praxis"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-white/10 hover:text-[#A2C2E8]"
              >
                Einblick in die Praxis
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#A2C2E8]"
              >
                Häufige Fragen (FAQ)
              </a>
            </nav>

            <div className="pt-2 space-y-2">
              <a
                href="tel:+4917646669641"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/10 text-white font-bold text-xs"
              >
                <Phone className="w-4 h-4 text-[#A2C2E8]" />
                <span>0176 46669641 anrufen</span>
              </a>
              <a
                href="#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#25518E] text-white font-bold text-xs shadow"
              >
                <span>Erstgespräch anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
