import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Anatomischer Fußabdruck LINKS (Baby / Kind)
 * Großer Zeh liegt innen (rechts), kleinster Zeh außen (links).
 */
function FootprintLeft({ className = '' }) {
  return (
    <g className={className}>
      {/* Sohle: Ferse, Längsgewölbe & Ballen */}
      <path 
        d="M 16.5,10 C 17,6.5 7,6.5 5.5,10 C 4.2,13.5 6,16.5 7,19.5 C 7.8,22 8.2,25.5 11.5,25.5 C 14.8,25.5 15.2,22 16,19.5 C 17,16.5 17.2,13 16.5,10 Z" 
      />
      {/* 5 Zehen oval & anatomisch verjüngt */}
      <ellipse cx="16.8" cy="3.5" rx="2.4" ry="2.9" />
      <ellipse cx="12.8" cy="3.0" rx="1.8" ry="2.2" />
      <ellipse cx="9.4" cy="3.8" rx="1.5" ry="1.9" />
      <ellipse cx="6.5" cy="5.4" rx="1.3" ry="1.6" />
      <ellipse cx="4.2" cy="7.5" rx="1.0" ry="1.3" />
    </g>
  );
}

/**
 * Anatomischer Fußabdruck RECHTS (Baby / Kind)
 * Großer Zeh liegt innen (links), kleinster Zeh außen (rechts).
 */
function FootprintRight({ className = '' }) {
  return (
    <g className={className}>
      {/* Sohle: Ferse, Längsgewölbe & Ballen */}
      <path 
        d="M 5.5,10 C 5,6.5 15,6.5 16.5,10 C 17.8,13.5 16,16.5 15,19.5 C 14.2,22 13.8,25.5 10.5,25.5 C 7.2,25.5 6.8,22 6,19.5 C 5,16.5 4.8,13 5.5,10 Z" 
      />
      {/* 5 Zehen oval & anatomisch verjüngt */}
      <ellipse cx="5.2" cy="3.5" rx="2.4" ry="2.9" />
      <ellipse cx="9.2" cy="3.0" rx="1.8" ry="2.2" />
      <ellipse cx="12.6" cy="3.8" rx="1.5" ry="1.9" />
      <ellipse cx="15.5" cy="5.4" rx="1.3" ry="1.6" />
      <ellipse cx="17.8" cy="7.5" rx="1.0" ry="1.3" />
    </g>
  );
}

/**
 * PaepkiHeroButton
 * 
 * Bespoke 3D Pill Button für "Praxis für Entwicklung – Kathrin Raddatz":
 * - Symmetrische 3D Stadium-Kapsel mit 6px Extrusions-Sockel & haptischem Klick (active:translate-y-[4px])
 * - Tag (Default): Strahlendes Weiß, edle dunkelblaue Kontur (#0B192C) & 3D-Sockel
 * - Nacht (Hover): Wechselt zu tiefem Dunkelblau (#0E2138) mit funkelnden Sternen & Stardust
 * - PäPKi® Geh-Sequenz (Laufen nach VORNE):
 *   6 Entwicklungsschritte (L -> R -> L -> R -> L -> R), deren Zehen anatomisch nach RECHTS (nach vorne)
 *   in Laufrichtung zeigen und bei Mausover in strahlendem Gold (#FACC15) nacheinander zum Pfeil laufen!
 * - Streng INNERHALB des Buttons: Alles sauber geclippt, nichts ragt heraus.
 * - Runder 3D Push-Badge mit Action-Pfeil im warmen Bernstein-Gold-Verlauf.
 */
export default function PaepkiHeroButton({
  to = '#kontakt',
  onClick,
  text = 'Erstgespräch anfragen',
  subtext,
  className = ''
}) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
      return;
    }
    if (to.startsWith('#')) {
      const target = document.querySelector(to);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Bei langen Labels wie "Ersttermin für diesen Altersbereich anfragen" sauber in Hauptzeile + Subline teilen
  let mainText = text;
  let secondaryText = subtext;

  if (!secondaryText && text.includes('Altersbereich')) {
    mainText = 'Ersttermin anfragen';
    secondaryText = 'für diesen Altersbereich';
  }

  const fontSizeClass = mainText.length > 25
    ? 'text-[14px] sm:text-[15px]'
    : mainText.length > 21
      ? 'text-[15px] sm:text-[17px]'
      : 'text-[17px] sm:text-[19px]';

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`group relative inline-flex items-center select-none focus:outline-none paepki-hero-btn filter drop-shadow-[0_12px_24px_rgba(11,25,44,0.16)] active:drop-shadow-[0_4px_8px_rgba(11,25,44,0.22)] ${className}`}
    >
      {/* 
        3D PILL BUTTON CONTAINER:
        - Symmetrische Kapsel-Form (Stadium Pill)
        - Physischer 3D-Sockel (Extrusion) unten + Druck-Interaktion (active:translate-y-[4px])
      */}
      <div className="relative w-[345px] sm:w-[425px] h-[68px] sm:h-[72px] transition-transform duration-200 ease-out group-hover:-translate-y-0.5 active:translate-y-[4px]">
        
        {/* 1. SVG 3D CHASSIS (Symmetrische Stadium-Kapsel mit 6px 3D-Sockel) */}
        <svg 
          className="absolute inset-0 w-full h-full overflow-visible" 
          viewBox="0 0 425 72" 
          preserveAspectRatio="none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Exakter ClipPath: Schließt das gesamte Innenleben sauber innerhalb des Buttons ein */}
            <clipPath id="paepkiPillInteriorClip">
              <rect x="2" y="2" width="421" height="62" rx="31" />
            </clipPath>
          </defs>

          {/* A) 3D PHYSICAL EXTRUSION SOCKEL (6px sichtbare Tiefe an der Unterkante) */}
          <rect
            x="2"
            y="8"
            width="421"
            height="62"
            rx="31"
            className="fill-[#050B14] group-hover:fill-[#03070E] transition-colors duration-500"
          />

          {/* B) BUTTON-FRONTFLÄCHE:
              - Tag: Reines Weiß
              - Hover: Edles Dunkelblau (#0E2138) mit Saphir-Rand (#25518E)
          */}
          <rect
            x="2"
            y="2"
            width="421"
            height="62"
            rx="31"
            className="fill-white group-hover:fill-[#0E2138] stroke-[#0B192C] group-hover:stroke-[#25518E] transition-all duration-500"
            strokeWidth="2.5"
          />

          {/* C) 3D LICHTKANTE (Highlight-Reflexion am oberen Rand) */}
          <path
            d="M 34,3.5 L 391,3.5"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="group-hover:opacity-20 transition-opacity duration-500"
          />
        </svg>

        {/* 2. INNENLEBEN (Exakt innerhalb der Pill-Kapsel geclippt!) */}
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            clipPath: 'url(#paepkiPillInteriorClip)',
            WebkitClipPath: 'url(#paepkiPillInteriorClip)'
          }}
        >
          {/* A) Dezente funkelnde Sterne & Stardust bei Nacht/Dunkelblau (Hover) */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0">
            <svg className="w-full h-full" viewBox="0 0 425 72" fill="none">
              <circle cx="46" cy="18" r="1.1" fill="#FFFFFF" opacity="0.75" />
              <circle cx="88" cy="14" r="1.3" fill="#FEF08A" opacity="0.85" />
              <circle cx="140" cy="22" r="0.9" fill="#93C5FD" opacity="0.8" />
              <circle cx="185" cy="12" r="1.2" fill="#FFFFFF" opacity="0.7" />
              <circle cx="225" cy="16" r="0.8" fill="#FEF08A" opacity="0.65" />
              <circle cx="395" cy="14" r="1.1" fill="#FFFFFF" opacity="0.75" />
              {/* Kleine 4-strahlige Sternchen */}
              <path d="M 205,14 L 206.5,15.5 L 205,17 L 203.5,15.5 Z" fill="#FACC15" opacity="0.85" />
              <path d="M 382,22 L 383.5,23.5 L 382,25 L 380.5,23.5 Z" fill="#FEF08A" opacity="0.8" />
            </svg>
          </div>

          {/* B) PÄPKI® FUSSABDRÜCKE: LAUFEN NACH VORNE (NACH RECHTS) ZUM PFEIL
              - 6 Schritte streng innerhalb des Buttons (zwischen x=222 und x=365)
              - Zehen zeigen in Laufrichtung nach VORNE (nach rechts!)
              - Tag: Alle 6 Schritte dezent sichtbar
              - Hover: Leuchten in warmem Gold (#FACC15) nacheinander auf
          */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <svg 
              viewBox="0 0 425 72" 
              className="w-full h-full overflow-hidden" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dezent angedeutete Entwicklungs-Bodenlinie */}
              <path 
                d="M 205,60 Q 285,54 375,59" 
                stroke="#0B192C" 
                strokeWidth="1.2" 
                strokeDasharray="3 3" 
                className="opacity-15 group-hover:opacity-30 group-hover:stroke-[#FACC15] transition-all duration-500" 
              />

              {/* Schritt 1: Kleiner Baby-Fuß LINKS (obere Bahn, Zehen zeigen nach rechts) */}
              <g transform="translate(222, 23) rotate(82 11 14) scale(0.70)">
                <g className="paepki-step-idle">
                  <FootprintLeft className="fill-[#0B192C]/20" />
                </g>
                <g className="paepki-walk-step paepki-step-1">
                  <FootprintLeft className="fill-[#FACC15]" />
                </g>
              </g>

              {/* Schritt 2: Baby-Fuß RECHTS (untere Bahn, Zehen zeigen nach rechts) */}
              <g transform="translate(250, 41) rotate(98 11 14) scale(0.74)">
                <g className="paepki-step-idle">
                  <FootprintRight className="fill-[#0B192C]/20" />
                </g>
                <g className="paepki-walk-step paepki-step-2">
                  <FootprintRight className="fill-[#FACC15]" />
                </g>
              </g>

              {/* Schritt 3: Kleinkind-Fuß LINKS (obere Bahn) */}
              <g transform="translate(278, 23) rotate(82 11 14) scale(0.78)">
                <g className="paepki-step-idle">
                  <FootprintLeft className="fill-[#0B192C]/20" />
                </g>
                <g className="paepki-walk-step paepki-step-3">
                  <FootprintLeft className="fill-[#FACC15]" />
                </g>
              </g>

              {/* Schritt 4: Kleinkind-Fuß RECHTS (untere Bahn) */}
              <g transform="translate(306, 41) rotate(98 11 14) scale(0.82)">
                <g className="paepki-step-idle">
                  <FootprintRight className="fill-[#0B192C]/20" />
                </g>
                <g className="paepki-walk-step paepki-step-4">
                  <FootprintRight className="fill-[#FACC15]" />
                </g>
              </g>

              {/* Schritt 5: Kind-Fuß LINKS (obere Bahn) */}
              <g transform="translate(334, 23) rotate(82 11 14) scale(0.86)">
                <g className="paepki-step-idle">
                  <FootprintLeft className="fill-[#0B192C]/20" />
                </g>
                <g className="paepki-walk-step paepki-step-5">
                  <FootprintLeft className="fill-[#FACC15]" />
                </g>
              </g>

              {/* Schritt 6: Kind-Fuß RECHTS (untere Bahn, direkt vor dem Pfeil) */}
              <g transform="translate(362, 41) rotate(98 11 14) scale(0.90)">
                <g className="paepki-step-idle">
                  <FootprintRight className="fill-[#0B192C]/20" />
                </g>
                <g className="paepki-walk-step paepki-step-6">
                  <FootprintRight className="fill-[#FACC15]" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* 3. VORDERGRUND: TYPOGRAFIE & CTA PFEIL */}
        <div className="relative z-30 flex items-center justify-between h-[64px] sm:h-[66px] px-5 sm:px-6">
          <div className="pl-1 sm:pl-2 flex flex-col justify-center text-left">
            <span className={`font-extrabold sm:font-black ${fontSizeClass} tracking-tight text-[#0B192C] group-hover:text-white transition-colors duration-500 whitespace-nowrap drop-shadow-sm leading-tight`}>
              {mainText}
            </span>
            {secondaryText && (
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#1A382B]/75 group-hover:text-white/80 transition-colors duration-500 whitespace-nowrap leading-tight mt-0.5">
                {secondaryText}
              </span>
            )}
          </div>

          {/* Action Pfeil-Kreis mit 3D Push (Warmer Bernstein-Gold-Verlauf) */}
          <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-[#D49A3D] to-[#F5BE58] group-hover:from-[#E5A93C] group-hover:to-[#FACC15] text-[#0A1D14] group-hover:translate-x-1.5 group-hover:scale-105 transition-all duration-300 flex-shrink-0 shadow-[0_2px_6px_rgba(212,154,61,0.28)] group-hover:shadow-[0_0_12px_rgba(250,204,21,0.6)]">
            <ArrowRight className="w-5 h-5 text-[#0A1D14]" strokeWidth={2.6} />
          </div>
        </div>

        {/* CSS KEYFRAMES: FLÜSSIGE GEH-SEQUENZ NACH VORNE */}
        <style>{`
          /* Ruhezustand: Die Geh-Schritte sind unsichtbar */
          .paepki-walk-step {
            opacity: 0;
            transform-origin: 11px 14px;
            transition: opacity 0.25s ease;
          }

          /* Bei Hover blendet der Ruhezustand sanft aus */
          .group:hover .paepki-step-idle {
            opacity: 0;
            transition: opacity 0.2s ease;
          }

          /* Bei Mausover (Hover) startet die flüssige Geh-Sequenz */
          .group:hover .paepki-walk-step {
            animation: paepkiWalkForward 2.1s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          }

          /* Taktung Schritt für Schritt (rhythmische Geh-Bewegung) */
          .group:hover .paepki-step-1 { animation-delay: 0.00s; }
          .group:hover .paepki-step-2 { animation-delay: 0.35s; }
          .group:hover .paepki-step-3 { animation-delay: 0.70s; }
          .group:hover .paepki-step-4 { animation-delay: 1.05s; }
          .group:hover .paepki-step-5 { animation-delay: 1.40s; }
          .group:hover .paepki-step-6 { animation-delay: 1.75s; }

          @keyframes paepkiWalkForward {
            0% {
              opacity: 0;
              transform: scale(1.15);
            }
            12% {
              opacity: 1;
              transform: scale(1);
              filter: drop-shadow(0 0 6px rgba(250, 204, 21, 0.95)) drop-shadow(0 0 12px rgba(245, 158, 11, 0.8));
            }
            50% {
              opacity: 1;
              transform: scale(1);
            }
            75% {
              opacity: 0.15;
              transform: scale(0.96);
            }
            100% {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </a>
  );
}
