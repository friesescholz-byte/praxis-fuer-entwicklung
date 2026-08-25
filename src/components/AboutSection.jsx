import React from 'react';
import { Heart, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { MEDIA } from '../constants/media';

export default function AboutSection() {
  return (
    <section id="ueber-mich" className="py-24 md:py-32 bg-[#EDF3FA]/70 relative overflow-hidden">
      {/* Background Designer Contour Curves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-20"
        >
          <path
            d="M-50,300 C350,150 700,600 1100,250 C1300,100 1450,300 1550,250"
            stroke="#1A382B"
            strokeWidth="1.5"
          />
          <path
            d="M50,500 C400,250 800,700 1250,400"
            stroke="#1B3B68"
            strokeWidth="1.2"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait of Kathrin Raddatz */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src={MEDIA.kathrinRaddatz}
                alt="Kathrin Raddatz – Praxis für Entwicklung"
                className="w-full h-[480px] sm:h-[540px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/85 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#A2C2E8]">
                  Therapeutin & Praxisinhaberin
                </p>
                <h3 className="font-display font-bold text-2xl text-white">
                  Kathrin Raddatz
                </h3>
                <p className="text-xs text-white/80">
                  Zertifizierte PäPKi® Entwicklungs- & Lerntherapie
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Empathy & Philosophy Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-[#0B192C] text-xs font-bold tracking-wide">
              <Heart className="w-3.5 h-3.5 text-[#25518E]" />
              <span>Mit Herz, Verstand & Geduld</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0B192C] tracking-tight">
              „Jedes Kind trägt sein volles Potenzial bereits in sich.“
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#1E293B]/80 leading-relaxed font-normal">
              <p>
                Als Mutter und Therapeutin weiß ich aus eigener Erfahrung, wie belastend es sein kann, wenn ein Kind in der Schule kämpft, der Hausaufgabenalltag in Tränen versinkt oder sich bereits beim Baby die ersten Entwicklungsfragen auftun.
              </p>
              <p>
                Meine feste Überzeugung: <strong>Kein Kind zappelt mit Absicht, kein Kind ist faul.</strong> Wenn der Körper noch unbewusst mit unvollendeten neuromotorischen Aufrichtungsschritten ringt, fehlt schlicht die Energie für Konzentration, gelöste Stifthaltung oder innere Ruhe.
              </p>
              <p>
                In der <em>Praxis für Entwicklung</em> schaffe ich einen geschützten Raum, in dem wir gemeinsam die Ursachen aufspüren. Wir holen fehlende Meilensteine spielerisch am Boden nach – für spürbare Entlastung und ein Lächeln auf den Lippen Ihres Kindes.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#E2E8F0] text-sm text-[#0B192C] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#25518E] shrink-0" />
                <span>Empathie & Wertschätzung</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#E2E8F0] text-sm text-[#0B192C] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#25518E] shrink-0" />
                <span>Wissenschaftliche Methodik</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#E2E8F0] text-sm text-[#0B192C] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#25518E] shrink-0" />
                <span>Begleitung auf Augenhöhe</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#E2E8F0] text-sm text-[#0B192C] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#25518E] shrink-0" />
                <span>Praxis ohne Druck & Kittel</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#1A382B] hover:bg-[#264E3D] text-white font-bold text-sm shadow-xl shadow-[#1A382B]/20 hover:shadow-2xl transition-all duration-300 group"
              >
                <span>Kathrin Raddatz kennenlernen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
