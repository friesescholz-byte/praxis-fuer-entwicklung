import React from 'react';
import { Award, Users, Home, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const items = [
    {
      icon: Award,
      title: 'PäPKi® Zertifiziert',
      desc: 'Wissenschaftlich fundiert & anerkannt'
    },
    {
      icon: Users,
      title: '0 bis 18 Jahre',
      desc: 'Vom Säugling bis zum Teenager'
    },
    {
      icon: Home,
      title: '10–15 Min. täglich',
      desc: 'Leichte Übungen im Familienalltag'
    },
    {
      icon: Sparkles,
      title: '100% Ursachentherapie',
      desc: 'Ursachen lösen statt Symptome deckeln'
    }
  ];

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 mb-8">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className={`flex items-start gap-4 ${idx > 0 ? 'pt-5 sm:pt-0 sm:pl-6' : ''}`}>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] border border-[#CFDDD4] flex items-center justify-center shrink-0 text-[#1A382B]">
                <Icon className="w-6 h-6 text-[#1A382B]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-[#0B192C] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#1E293B]/70 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
