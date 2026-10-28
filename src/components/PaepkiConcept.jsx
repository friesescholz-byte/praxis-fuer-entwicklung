import React from 'react';
import { Brain, Activity, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { MEDIA } from '../constants/media';

export default function PaepkiConcept() {
  return (
    <section
      id="konzept"
      className="relative -mt-2 pt-28 pb-28 md:pt-36 md:pb-36 bg-fixed bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('${MEDIA.practiceEntrance}')`
      }}
    >
      {/* Top Designer Multi-Layer Wave (Full Width 100% Stretch) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20 md:h-28 block"
        >
          {/* Layer 1: Base Solid Fill Matching Hero */}
          <path
            d="M0,0 L1440,0 L1440,45 C1200,95 950,15 720,55 C480,95 240,25 0,70 Z"
            fill="#F8FAFC"
          />

          {/* Layer 2: Subtle Semi-transparent Wave Layer */}
          <path
            d="M0,20 C320,85 640,10 960,65 C1200,100 1350,50 1440,35 L1440,65 C1200,110 960,35 720,75 C480,115 240,45 0,90 Z"
            fill="#25518E"
            fillOpacity="0.08"
          />

          {/* Layer 3: Delicate Designer Wave Stroke Line 1 */}
          <path
            d="M0,72 C240,27 480,97 720,57 C950,17 1200,97 1440,47"
            stroke="#1B3B68"
            strokeWidth="2"
            strokeOpacity="0.25"
          />

          {/* Layer 4: Delicate Designer Wave Stroke Line 2 */}
          <path
            d="M0,88 C260,35 520,105 780,60 C1040,15 1280,90 1440,55"
            stroke="#1A382B"
            strokeWidth="1.2"
            strokeOpacity="0.3"
            strokeDasharray="6 6"
          />

          {/* Layer 5: Third Accent Curve Line */}
          <path
            d="M0,60 C360,110 720,30 1080,80 C1260,105 1380,65 1440,50"
            stroke="#25518E"
            strokeWidth="1"
            strokeOpacity="0.2"
          />
        </svg>
      </div>

      {/* Lightened, High-Clarity Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/75 via-[#FFFFFF]/55 to-[#EDF3FA]/80 backdrop-blur-[1px]" />

      {/* Subtle organic light spots */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-[#25518E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1A382B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#CBD5E1] text-[#0B192C] text-xs font-bold tracking-wide shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#25518E]" />
            <span>Das wissenschaftliche Fundament</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B192C] tracking-tight leading-tight">
            Warum das Problem nicht im Kopf, sondern im Körper beginnt.
          </h2>
          
          <p className="text-base sm:text-lg text-[#1E293B]/85 leading-relaxed font-medium">
            In den ersten 12 bis 18 Lebensmonaten durchläuft jeder Mensch einen natürlichen Aufrichtungsprozess. Wenn einzelne Entwicklungsschritte unvollständig bleiben, muss das Gehirn ständig kompensieren.
          </p>
        </div>

        {/* 2-Column Concept Visual & Explanations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: The Problem & The Solution */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Card 1: The Dilemma */}
            <div className="bg-white/95 backdrop-blur-md p-7 sm:p-8 rounded-3xl border border-white/80 shadow-xl relative overflow-hidden text-[#1E293B] hover:shadow-2xl transition-all">
              <div className="w-2 bg-[#25518E] absolute left-0 top-0 bottom-0" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5EFFB] flex items-center justify-center shrink-0 text-[#1B3B68]">
                  <Activity className="w-6 h-6 text-[#1B3B68]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#0B192C]">
                    Das Phänomen der „Neuromotorischen Aufrichtungsdefizite“
                  </h3>
                  <p className="text-sm sm:text-base text-[#1E293B]/85 mt-2 leading-relaxed">
                    Wenn frühkindliche Reflexe nicht vollständig integriert wurden oder Meilensteine wie das Krabbeln übersprungen wurden, fehlt dem Kind die innere Rumpf- und Kopfstabilität. Das Kind muss unbewusst bis zu <strong>80% seiner mentalen Energie</strong> allein dafür aufwenden, aufrecht auf dem Stuhl zu sitzen – für Konzentration, Rechnen oder Schreiben bleibt kaum Kapazität übrig.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: The PäPKi® Solution */}
            <div className="bg-[#1A382B]/95 backdrop-blur-md text-white p-7 sm:p-8 rounded-3xl shadow-xl border border-white/20 relative overflow-hidden hover:shadow-2xl transition-all">
              <div className="w-2 bg-[#8BA695] absolute left-0 top-0 bottom-0" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0 text-[#FAF7F2]">
                  <Brain className="w-6 h-6 text-[#FAF7F2]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Die Lösung: Das gezielte Nachtrainieren am Boden
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 mt-2 leading-relaxed">
                    Das PäPKi®-Konzept (nach Prof. Dr. phil. Wibke Bein-Wierzbinski) gibt dem zentralen Nervensystem eine zweite Chance. Durch einfache, gezielte gymnastische Bodenübungen (10–15 Min. täglich zu Hause) werden die unvollendeten Meilensteine auf physiologischer Ebene harmonisch nachgereift.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Core Benefits (Crystal Clear Dark Typography) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/90 shadow-md">
                <p className="font-bold text-sm text-[#0B192C]">1. Keine Schuld</p>
                <p className="text-xs text-[#334155] font-normal mt-1 leading-relaxed">
                  Kinder sind weder faul noch unbegabt – ihr Körper braucht Reife.
                </p>
              </div>
              <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/90 shadow-md">
                <p className="font-bold text-sm text-[#0B192C]">2. Alltagstauglich</p>
                <p className="text-xs text-[#334155] font-normal mt-1 leading-relaxed">
                  Einfach zu Hause umsetzbar – ohne zeitfressende Terminfluten.
                </p>
              </div>
              <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/90 shadow-md">
                <p className="font-bold text-sm text-[#0B192C]">3. Nachhaltig</p>
                <p className="text-xs text-[#334155] font-normal mt-1 leading-relaxed">
                  Stärkt das Fundament für ein Leben lang – von 0 bis 18 Jahren.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Stage with Genuine Photo (Clean, Unobstructed) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src={MEDIA.kathrinHoldingGirlMat}
                alt="Kathrin Raddatz bei der gezielten PäPKi® neuromotorischen Entwicklungsbegleitung"
                className="w-full h-[480px] object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Multi-Layer Wave (Full Width 100% Stretch) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20 md:h-28 block"
        >
          {/* Layer 1: Semi-transparent under-wave */}
          <path
            d="M0,60 C360,110 720,20 1080,75 C1260,105 1380,70 1440,55 L1440,120 L0,120 Z"
            fill="#25518E"
            fillOpacity="0.08"
          />

          {/* Layer 2: Main Solid Curve into Age Compass */}
          <path
            d="M0,75 C360,125 720,35 1080,90 C1260,115 1380,80 1440,65 L1440,120 L0,120 Z"
            fill="#EDF3FA"
          />

          {/* Layer 3: Delicate Accent Stroke Line 1 */}
          <path
            d="M0,75 C360,125 720,35 1080,90 C1260,115 1380,80 1440,65"
            stroke="#1B3B68"
            strokeWidth="2"
            strokeOpacity="0.25"
          />

          {/* Layer 4: Delicate Dashed Accent Line 2 */}
          <path
            d="M0,62 C340,112 700,22 1060,77 C1240,102 1360,67 1440,52"
            stroke="#1A382B"
            strokeWidth="1.2"
            strokeOpacity="0.3"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

    </section>
  );
}
