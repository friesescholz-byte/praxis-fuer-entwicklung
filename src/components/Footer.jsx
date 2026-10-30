import React, { useState } from 'react';
import { ArrowUp, Star } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { MEDIA } from '../constants/media';

export default function Footer() {
  const [modalType, setModalType] = useState(null); // 'impressum' | 'datenschutz' | null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B192C] text-[#F8FAFC] pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Mission & Google Review Button (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md border-2 border-white/80 bg-white flex items-center justify-center shrink-0">
                <img
                  src={MEDIA.logoFavicon}
                  alt="Praxis für Entwicklung Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block font-display font-bold text-lg text-white">
                  Praxis für Entwicklung
                </span>
                <span className="block text-xs text-[#A2C2E8]">
                  Kathrin Raddatz • PäPKi® Therapie
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              Ganzheitliche Entwicklungs- und Lerntherapie nach PäPKi® für Kinder und Jugendliche von 0 bis 18 Jahren. Ursachenorientiert, wissenschaftlich fundiert und mit Herz.
            </p>

            {/* Social & Google Review Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.google.com/search?q=Kathrin+Raddatz+-+Praxis+f%C3%BCr+Entwicklung#lrd=0x47b08d6671529693:0x8e69f2c621c5ee4,3,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-all hover:scale-102 group"
                aria-label="Google Bewertung abgeben"
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <span>Google Bewertung</span>
              </a>

              <a
                href="https://www.instagram.com/praxis_fuer_entwicklung__/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram Profil"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <a href="#konzept" className="hover:text-white transition-colors">Das PäPKi® Konzept</a>
              </li>
              <li>
                <a href="#altersstufen" className="hover:text-white transition-colors">Altersstufen (0–18 Jahre)</a>
              </li>
              <li>
                <a href="#ablauf" className="hover:text-white transition-colors">Therapieablauf in 4 Schritten</a>
              </li>
              <li>
                <a href="#ueber-mich" className="hover:text-white transition-colors">Über Kathrin Raddatz</a>
              </li>
              <li>
                <a href="#praxis" className="hover:text-white transition-colors">Einblick in die Praxis</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Häufige Fragen (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Praxis-Informationen
            </h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              <strong>Praxis für Entwicklung – Kathrin Raddatz</strong><br />
              Nordertorstriftweg 11<br />
              31582 Nienburg (Weser)
            </p>
            <p className="text-xs text-[#A2C2E8]">
              Telefon: <a href="tel:+4917646669641" className="text-white font-semibold hover:underline">0176 46669641</a><br />
              Sprechzeiten: Di – Do, 15:00 – 18:00 Uhr
            </p>

            <div className="pt-2">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <span>Terminanfrage senden</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Praxis für Entwicklung • Kathrin Raddatz. Alle Rechte vorbehalten.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('impressum')}
              className="hover:text-white transition-colors underline"
            >
              Impressum
            </button>
            <button
              onClick={() => setModalType('datenschutz')}
              className="hover:text-white transition-colors underline"
            >
              Datenschutz
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-[#1E293B] max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F8FAFC] text-[#0B192C] flex items-center justify-center font-bold text-sm hover:bg-[#E5EFFB]"
            >
              ✕
            </button>

            {modalType === 'impressum' && (
              <div className="space-y-4 text-xs sm:text-sm">
                <h3 className="font-display font-bold text-2xl text-[#0B192C]">Impressum</h3>
                <p><strong>Angaben gemäß § 5 TMG:</strong></p>
                <p>
                  Praxis für Entwicklung<br />
                  Inhaberin: Kathrin Raddatz<br />
                  Nordertorstriftweg 11<br />
                  31582 Nienburg (Weser)<br />
                  Entwicklungs- und Lerntherapie nach PäPKi®
                </p>
                <p><strong>Kontakt:</strong></p>
                <p>
                  Telefon: 0176 46669641<br />
                  E-Mail: info@praxis-fuer-entwicklung.de
                </p>
                <p><strong>Öffnungszeiten:</strong></p>
                <p>
                  Dienstag – Donnerstag: 15:00 – 18:00 Uhr<br />
                  Montag, Freitag, Samstag, Sonntag: nach Vereinbarung
                </p>
                <p><strong>Berufsbezeichnung & berufsrechtliche Regelungen:</strong></p>
                <p>
                  Zertifizierte PäPKi®-Therapeutin für Entwicklungs- und Lernförderung nach Prof. Dr. phil. Wibke Bein-Wierzbinski.
                </p>
                <p><strong>Haftungshinweis:</strong></p>
                <p>
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>
            )}

            {modalType === 'datenschutz' && (
              <div className="space-y-4 text-xs sm:text-sm">
                <h3 className="font-display font-bold text-2xl text-[#0B192C]">Datenschutzerklärung</h3>
                <p><strong>1. Datenschutz auf einen Blick</strong></p>
                <p>
                  Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten, die Sie uns über das Kontaktformular oder per E-Mail übermitteln, werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO) behandelt.
                </p>
                <p><strong>2. Erhebung und Speicherung personenbezogener Daten</strong></p>
                <p>
                  Wenn Sie mit uns in Kontakt treten (z. B. per Formular oder Telefon), werden Ihre Angaben zwecks Bearbeitung der Anfrage sowie für den Fall von Anschlussfragen bei uns verarbeitet. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre ausdrückliche Zustimmung.
                </p>
                <p><strong>3. Ihre Rechte</strong></p>
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
