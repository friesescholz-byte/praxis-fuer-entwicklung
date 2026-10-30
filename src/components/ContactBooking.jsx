import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, ShieldCheck, MapPin, Sparkles, Clock, Star, ExternalLink, Navigation } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { AGE_GROUPS } from '../data/ageData';

export default function ContactBooking({ selectedAgeId }) {
  const [selectedAge, setSelectedAge] = useState(selectedAgeId || 'school');
  const [selectedTopic, setSelectedTopic] = useState('Konzentration & Schulstress');
  const [formData, setFormData] = useState({
    parentName: '',
    childNameAge: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: 'Nachmittags (14–18 Uhr)'
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedAgeId) {
      setSelectedAge(selectedAgeId);
    }
  }, [selectedAgeId]);

  const topics = [
    'Säuglings-Aufrichtung & Weinen',
    'Motorik, Krabbeln & Gangbild',
    'Stifthaltung & Feinmotorik (Vorschule)',
    'Konzentration & Schulstress (6–12 J.)',
    'Haltung & Prüfungsdruck (Jugendliche)',
    'Allgemeine Erstberatung'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-[#EDF3FA]/70 relative overflow-hidden">
      {/* Background Designer Shapes & Accent Lines (Softened) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 1200"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-12"
        >
          {/* Top Right Floating Circle */}
          <circle cx="1300" cy="180" r="110" stroke="#1B3B68" strokeWidth="1.2" strokeDasharray="5 5" />

          {/* Left Floating Rounded Square */}
          <rect x="80" y="320" width="90" height="90" rx="22" transform="rotate(-15 80 320)" stroke="#1A382B" strokeWidth="1" strokeDasharray="4 4" />

          {/* Mid Flow Line */}
          <path
            d="M-50,750 C400,620 800,880 1300,720"
            stroke="#1B3B68"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EFFB] border border-[#C9DEF5] text-[#0B192C] text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#25518E]" />
            <span>Unverbindliches Erstgespräch</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0B192C] tracking-tight">
            Gemeinsam den ersten Schritt gehen
          </h2>

          <p className="text-base sm:text-lg text-[#1E293B]/75 leading-relaxed">
            Erzählen Sie uns kurz von der aktuellen Situation Ihres Kindes. Wir melden uns zeitnah und einfühlsam bei Ihnen zurück, um die nächsten Schritte in Ruhe zu besprechen.
          </p>
        </div>

        {/* 2-Column Grid: Form Left, Direct Channels & Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 shadow-xl border border-[#E2E8F0]">
            {submitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#E5EFFB] text-[#0B192C] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9 text-[#25518E]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#0B192C]">
                  Vielen Dank für Ihr Vertrauen!
                </h3>
                <p className="text-sm sm:text-base text-[#1E293B]/80 max-w-md mx-auto leading-relaxed">
                  Ihre Anfrage ist sicher bei uns eingegangen. Kathrin Raddatz wird sich in Kürze persönlich bei Ihnen melden, um Ihr Anliegen in Ruhe zu besprechen.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-[#0B192C] bg-[#F8FAFC] border border-[#CBD5E1] hover:bg-[#E5EFFB] transition-colors"
                >
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Age Selection Pills */}
                <div>
                  <label className="block text-xs font-bold text-[#0B192C] uppercase tracking-wider mb-2.5">
                    1. Altersstufe Ihres Kindes auswählen:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {AGE_GROUPS.map((group) => (
                      <button
                        type="button"
                        key={group.id}
                        onClick={() => setSelectedAge(group.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                          selectedAge === group.id
                            ? 'bg-[#0B192C] text-white shadow-sm'
                            : 'bg-[#F8FAFC] text-[#1E293B]/70 hover:bg-[#E2E8F0] border border-[#CBD5E1]'
                        }`}
                      >
                        {group.tabLabel}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Topic Picker */}
                <div>
                  <label className="block text-xs font-bold text-[#0B192C] uppercase tracking-wider mb-2.5">
                    2. Hauptanliegen / Schwerpunkt:
                  </label>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#1B3B68]/20"
                  >
                    {topics.map((t, idx) => (
                      <option key={idx} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Personal Data */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] mb-1.5">
                      Ihr Name (Elternteil) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="z. B. Julia Müller"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#1E293B] placeholder:text-[#1E293B]/40 focus:outline-none focus:ring-2 focus:ring-[#1B3B68]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] mb-1.5">
                      Name & Alter des Kindes
                    </label>
                    <input
                      type="text"
                      placeholder="z. B. Paul (8 Jahre)"
                      value={formData.childNameAge}
                      onChange={(e) => setFormData({ ...formData, childNameAge: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#1E293B] placeholder:text-[#1E293B]/40 focus:outline-none focus:ring-2 focus:ring-[#1B3B68]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] mb-1.5">
                      Telefonnummer für Rückruf *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="z. B. 0176 12345678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#1E293B] placeholder:text-[#1E293B]/40 focus:outline-none focus:ring-2 focus:ring-[#1B3B68]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] mb-1.5">
                      E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      placeholder="name@beispiel.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#1E293B] placeholder:text-[#1E293B]/40 focus:outline-none focus:ring-2 focus:ring-[#1B3B68]/20"
                    />
                  </div>
                </div>

                {/* 4. Message / Context */}
                <div>
                  <label className="block text-xs font-bold text-[#0B192C] mb-1.5">
                    Ihre Nachricht / Kurze Beschreibung der Situation
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Wobei können wir Ihnen und Ihrem Kind am besten helfen?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#1E293B] placeholder:text-[#1E293B]/40 focus:outline-none focus:ring-2 focus:ring-[#1B3B68]/20"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#1A382B] hover:bg-[#264E3D] text-white font-bold text-base shadow-xl shadow-[#1A382B]/25 hover:shadow-2xl hover:shadow-[#1A382B]/35 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 border border-white/20 flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  <span>Unverbindliches Erstgespräch anfragen</span>
                </button>

                <p className="text-center text-[11px] text-[#1E293B]/60 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25518E]" />
                  <span>Ihre Angaben werden streng vertraulich und nach DSGVO behandelt.</span>
                </p>

              </form>
            )}
          </div>

          {/* Direct Channels Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-[#0B192C] text-white p-7 sm:p-8 rounded-3xl shadow-xl space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#A2C2E8]">
                  Direkter Kontakt
                </p>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  Wir sind für Sie & Ihr Kind da
                </h3>
                <p className="text-xs text-white/80 mt-2 leading-relaxed">
                  Haben Sie vorab eine dringende Frage? Rufen Sie gern direkt an oder schreiben Sie uns unkompliziert per WhatsApp.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="tel:+4917646669641"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#A2C2E8]" />
                  <div>
                    <p className="text-xs text-white/70">Telefonische Sprechzeit</p>
                    <p className="font-semibold text-sm text-white">0176 46669641</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/4917646669641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-xs text-white/70">WhatsApp Direktanfrage</p>
                    <p className="font-semibold text-sm text-white">0176 46669641</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/praxis_fuer_entwicklung__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <InstagramIcon className="w-5 h-5 text-pink-400" />
                  <div>
                    <p className="text-xs text-white/70">Instagram Community</p>
                    <p className="font-semibold text-sm text-white">@praxis_fuer_entwicklung__</p>
                  </div>
                </a>
              </div>

              {/* Opening Hours */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-white/85">
                <div className="flex items-center gap-2 font-bold text-white mb-2">
                  <Clock className="w-4 h-4 text-[#A2C2E8]" />
                  <span>Öffnungszeiten & Sprechzeiten</span>
                </div>
                <div className="grid grid-cols-2 gap-1 text-[11px]">
                  <span className="text-white/70">Dienstag:</span>
                  <span className="font-semibold text-right">15:00 – 18:00 Uhr</span>
                  <span className="text-white/70">Mittwoch:</span>
                  <span className="font-semibold text-right">15:00 – 18:00 Uhr</span>
                  <span className="text-white/70">Donnerstag:</span>
                  <span className="font-semibold text-right">15:00 – 18:00 Uhr</span>
                  <span className="text-white/70">Mo, Fr, Sa, So:</span>
                  <span className="font-semibold text-right text-[#A2C2E8]">Nach Vereinbarung</span>
                </div>
              </div>

              {/* Google Review Badge inside Card */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://www.google.com/search?q=Kathrin+Raddatz+-+Praxis+f%C3%BCr+Entwicklung&oq=Kathrin+Raddatz+-+Praxis+f%C3%BCr+Entwicklung#lrd=0x47b08d6671529693:0x8e69f2c621c5ee4,3,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/15 hover:bg-white/25 transition-all text-xs font-semibold"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-300">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                      ))}
                    </div>
                    <span>Google Bewertungen</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Dedicated Location & Interactive Google Maps Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E2E8F0] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Location details */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5EFFB] border border-[#C9DEF5] text-[#0B192C] text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#25518E]" />
                <span>Zentraler Praxisstandort in Nienburg</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0B192C]">
                Praxis für Entwicklung
              </h3>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] space-y-1 text-sm text-[#1E293B]">
                <p className="font-bold text-[#0B192C]">Kathrin Raddatz</p>
                <p>Nordertorstriftweg 11</p>
                <p>31582 Nienburg (Weser)</p>
                <p className="text-xs text-[#25518E] font-semibold pt-1">
                  Hinreise: Nur 5 Min. vom Bahnhof / Stadtzentrum
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47b08d6671529693:0x8e69f2c621c5ee4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#0B192C] hover:bg-[#1B3B68] text-white text-xs font-bold shadow transition-all group"
                >
                  <Navigation className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform" />
                  <span>Route via Google Maps</span>
                </a>

                <a
                  href="https://www.google.com/search?q=Kathrin+Raddatz+-+Praxis+f%C3%BCr+Entwicklung#lrd=0x47b08d6671529693:0x8e69f2c621c5ee4,3,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#F8FAFC] hover:bg-[#E5EFFB] text-[#0B192C] border border-[#CBD5E1] text-xs font-bold transition-colors"
                >
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Bewertung auf Google</span>
                </a>
              </div>
            </div>

            {/* Right side: Responsive Google Maps Embed */}
            <div className="lg:col-span-7 h-[360px] sm:h-[400px] rounded-2xl overflow-hidden shadow-inner border border-[#CBD5E1] relative bg-[#F8FAFC]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.102536380972!2d9.214985700000002!3d52.640060500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b08d6671529693%3A0x8e69f2c621c5ee4!2sPraxis%20f%C3%BCr%20Entwicklung!5e0!3m2!1sde!2sus!4v1786699258781!5m2!1sde!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Google Maps Standort Praxis für Entwicklung Nienburg"
                className="w-full h-full"
              />
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Wave Transition to Dark Footer */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-16 block text-[#0B192C]"
        >
          <path
            d="M0,35 C360,70 720,0 1080,45 C1260,65 1380,40 1440,30 L1440,70 L0,70 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
