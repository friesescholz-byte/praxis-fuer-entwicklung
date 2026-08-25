import React from 'react';
import { MessageSquare, Search, Sparkles, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      title: 'Ausführliche Erstanamnese',
      subtitle: 'Wir hören Ihnen zu',
      desc: 'In einem ruhigen, vertraulichen Erstgespräch beleuchten wir die bisherige Entwicklung Ihres Kindes von der Schwangerschaft und Geburt bis zum heutigen Tag.',
      icon: MessageSquare
    },
    {
      title: 'PäPKi® Diagnostik & Reflex-Check',
      subtitle: 'Die Ursachen aufspüren',
      desc: 'Wir untersuchen spielerisch die neuromotorischen Aufrichtungsmuster, Haltungsreaktionen und frühkindlichen Reflexe, um die genauen Blockaden zu identifizieren.',
      icon: Search
    },
    {
      title: 'Individueller Übungsplan für zu Hause',
      subtitle: '10–15 Minuten täglich',
      desc: 'Sie erhalten gezielte gymnastische Bodenübungen für zu Hause. Wir üben jeden Handgriff gemeinsam in der Praxis ein, damit Sie volle Sicherheit haben.',
      icon: Sparkles
    },
    {
      title: 'Begleitende Verlaufskontrollen',
      subtitle: 'Fortschritte sichern',
      desc: 'Alle 4 bis 6 Wochen überprüfen wir die Veränderungen und passen die Übungen an die neu gewonnene neuromotorische Reife Ihres Kindes an.',
      icon: RefreshCw
    }
  ];

  return (
    <section id="ablauf" className="py-24 md:py-32 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EFFB] border border-[#C9DEF5] text-[#0B192C] text-xs font-bold tracking-wide">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#25518E]" />
            <span>Klarer, transparenter Ablauf</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0B192C] tracking-tight">
            Ihr Weg zu mehr Leichtigkeit in 4 Schritten
          </h2>

          <p className="text-base sm:text-lg text-[#1E293B]/75 leading-relaxed">
            Keine unüberschaubaren Dauertherapien. Wir begleiten Sie strukturiert, transparent und mit messbaren Zwischenerfolgen.
          </p>
        </div>

        {/* 4 Cards Grid with Organic Connecting Line */}
        <div className="relative">
          {/* Desktop Connecting Curve */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-20 pointer-events-none z-0">
            <svg
              viewBox="0 0 1200 100"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full opacity-40"
            >
              <path
                d="M50,50 C200,10 400,90 600,50 C800,10 1000,90 1150,50"
                stroke="#1B3B68"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl p-7 border border-[#CBD5E1] shadow-sm hover:shadow-xl hover:border-[#1A382B]/40 hover:-translate-y-1.5 transition-all duration-300 relative flex flex-col justify-between"
                >
                  <div>
                    {/* Animated Icon Container with Mouseover Animation */}
                    <div className="w-14 h-14 rounded-2xl bg-[#E5EFFB] border border-[#C9DEF5] flex items-center justify-center text-[#1B3B68] mb-5 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1A382B] group-hover:text-white group-hover:shadow-md group-hover:rotate-3">
                      <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <p className="text-xs font-bold text-[#25518E] uppercase tracking-wider mb-1.5">
                      {step.subtitle}
                    </p>

                    <h3 className="font-display font-bold text-lg text-[#0B192C] mb-3 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#1E293B]/75 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[#E2E8F0] flex items-center gap-1.5 text-xs font-bold text-[#1A382B]">
                    <span>Schritt {idx + 1} von 4</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-[#0B192C] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              Haben Sie Fragen zum Einstieg oder Ablauf?
            </h4>
            <p className="text-sm text-white/80">
              Gerne klären wir in einem unverbindlichen Vorab-Telefonat, ob PäPKi® der passende Weg für Ihr Kind ist.
            </p>
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#1A382B] hover:bg-[#264E3D] text-white font-bold text-sm transition-all duration-300 shrink-0 shadow-lg shadow-[#1A382B]/20 cursor-pointer"
          >
            <span>Jetzt unverbindlich anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
