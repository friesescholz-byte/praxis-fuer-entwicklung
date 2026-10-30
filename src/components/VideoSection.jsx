import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart } from 'lucide-react';
import { MEDIA } from '../constants/media';

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="praxis" className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Designer Circles, Squares & Curves (Softened) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-12"
        >
          {/* 1 Subtle Circle on left */}
          <circle cx="120" cy="220" r="100" stroke="#1B3B68" strokeWidth="1" strokeDasharray="4 4" />

          {/* 1 Floating Rounded Square on right */}
          <rect x="1300" y="140" width="80" height="80" rx="20" transform="rotate(15 1300 140)" stroke="#1A382B" strokeWidth="1" />

          {/* Flowing Organic Contour Curve */}
          <path
            d="M-50,650 C400,480 800,800 1300,580"
            stroke="#1B3B68"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EFFB] border border-[#C9DEF5] text-[#0B192C] text-xs font-bold tracking-wide">
            <Heart className="w-3.5 h-3.5 text-[#25518E]" />
            <span>Ein sicherer Ort für Kinder & Jugendliche</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0B192C] tracking-tight">
            Einblick in die Praxis: Raum für Entwicklung & Geborgenheit
          </h2>

          <p className="text-base sm:text-lg text-[#1E293B]/75 leading-relaxed">
            Keine sterile Klinikatmosphäre, sondern ein einladender Wohlfühlort, an dem sich Kinder verstanden fühlen, Ängste abbauen und mit Freude neue Fähigkeiten erlernen.
          </p>
        </div>

        {/* Video & Atmosphere Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Practice Video Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0B192C] group">
              <video
                ref={videoRef}
                src={MEDIA.practiceVideo}
                className="w-full h-[420px] sm:h-[500px] object-cover"
                playsInline
                loop
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

              {/* Center Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0B192C]/90 hover:bg-[#1B3B68] text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110"
                aria-label={isPlaying ? 'Video pausieren' : 'Video abspielen'}
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 sm:w-8 sm:h-8" />
                ) : (
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1" />
                )}
              </button>

              {/* Bottom Control Bar */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="font-semibold">Kathrin Raddatz über den Praxisalltag</span>
                </div>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors"
                  aria-label={isMuted ? 'Ton einschalten' : 'Ton stummschalten'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

            </div>
          </div>

          {/* Side Column: Entrance & Motivation Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Practice Entrance Photo */}
            <div className="bg-white p-4 rounded-3xl border border-[#E2E8F0] shadow-sm flex items-center gap-4 group">
              <img
                src={MEDIA.practiceEntrance}
                alt="Eingangsbereich der Praxis für Entwicklung"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shrink-0 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#25518E] uppercase tracking-wider">Hereinspaziert</span>
                <h4 className="font-display font-bold text-base text-[#0B192C]">
                  Herzlicher Empfang für Groß & Klein
                </h4>
                <p className="text-xs text-[#1E293B]/70 leading-relaxed">
                  Schon beim Betreten spüren Kinder und Eltern die ruhige, vertrauensvolle Atmosphäre.
                </p>
              </div>
            </div>

            {/* Card 2: Motivation Cards Photo */}
            <div className="bg-white p-4 rounded-3xl border border-[#E2E8F0] shadow-sm flex items-center gap-4 group">
              <img
                src={MEDIA.motivationCards}
                alt="Motivationskärtchen für die Kinder für das Üben zu Hause"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shrink-0 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#1B3B68] uppercase tracking-wider">Motivation & Freude</span>
                <h4 className="font-display font-bold text-base text-[#0B192C]">
                  Eigene Motivationskärtchen
                </h4>
                <p className="text-xs text-[#1E293B]/70 leading-relaxed">
                  Liebevoll gestaltete Kärtchen machen das 10-Minuten-Üben zu Hause zu einem spielerischen Ritual.
                </p>
              </div>
            </div>

            {/* Trust Quote Box */}
            <div className="p-5 rounded-2xl bg-[#E5EFFB] border border-[#C9DEF5] text-xs sm:text-sm text-[#0B192C] leading-relaxed">
              <p className="italic font-medium">
                „Manchmal ist im Schul- oder Familienalltag einfach alles zu viel. In der Praxis finden Kinder ein offenes Ohr und den passenden Raum, um wieder Kraft und Selbstvertrauen zu schöpfen.“
              </p>
              <p className="font-bold text-xs mt-2 text-[#25518E]">
                — Kathrin Raddatz
              </p>
            </div>

          </div>

        </div>

        {/* Practice Atmosphere Photo Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-3xl overflow-hidden shadow-md border-2 border-white bg-white group">
            <img
              src={MEDIA.kathrinDeskWritingGirl}
              alt="Kathrin Raddatz bei der einfühlsamen Lernbegleitung am Schreibtisch"
              className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#A2C2E8]">Lernbegleitung</p>
              <h4 className="text-sm font-bold text-white leading-snug">Konzentration & Feinmotorik ohne Druck</h4>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-md border-2 border-white bg-white group">
            <img
              src={MEDIA.girlCurlExercise}
              alt="Gezielte gymnastische Bodenübungen nach PäPKi auf der Turnmatte"
              className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#CFDDD4]">PäPKi® Bodenübungen</p>
              <h4 className="text-sm font-bold text-white leading-snug">10–15 Minuten gezielte Reifung für zu Hause</h4>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-md border-2 border-white bg-white group">
            <img
              src={MEDIA.kathrinBoyTummyTime}
              alt="Kathrin Raddatz begleitet spielerisch bei der Entwicklungsdiagnostik auf der Turnmatte"
              className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#A2C2E8]">Entwicklungsbegleitung</p>
              <h4 className="text-sm font-bold text-white leading-snug">Auf Augenhöhe & mit spielerischer Freude</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
