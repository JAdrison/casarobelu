import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="bg-dark-text text-off-white/80 px-5 sm:px-6 pt-16 sm:pt-20 pb-10">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-14">
      <div>
        <a
          href="#top"
          style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}
          className="text-2xl sm:text-3xl uppercase tracking-[0.12em] sm:tracking-[0.15em] text-off-white"
        >
          CASA ROBELÚ
        </a>
        <p className="font-serif-italic italic text-base sm:text-lg mt-5 max-w-sm text-off-white/60">
          Refúgio exclusivo nas falésias de Morro Branco.
        </p>
        <a
          href="https://instagram.com/casarobelu"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-8 text-sm tracking-[0.2em] uppercase text-off-white/70 hover:text-gold transition-colors"
        >
          <Instagram className="w-4 h-4" strokeWidth={1.3} />
          @casarobelu
        </a>
      </div>

      <div className="md:text-right space-y-4 text-sm">
        <p className="eyebrow eyebrow-light mb-4">Contato</p>
        <p className="flex md:justify-end items-start gap-3 text-off-white/75">
          <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" strokeWidth={1.3} />
          Av. Beira Mar, S/N — Morro Branco, Beberibe/CE
        </p>
        <p className="flex md:justify-end items-center gap-3 text-off-white/75">
          <Phone className="w-4 h-4 text-gold" strokeWidth={1.3} />
          <a href="tel:+5585997640313" className="hover:text-off-white transition-colors">(85) 99764-0313</a>
        </p>
        <p className="flex md:justify-end items-center gap-3 text-off-white/75">
          <Mail className="w-4 h-4 text-gold" strokeWidth={1.3} />
          <a href="mailto:faturamento@solldistribuidora.com" className="hover:text-off-white transition-colors">
            faturamento@solldistribuidora.com
          </a>
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-12 sm:mt-16 pt-8 border-t border-off-white/10 flex flex-col md:flex-row justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase text-off-white/40">
      <p>© 2026 Casa Robelú — Todos os direitos reservados.</p>
      <p>Morro Branco · Beberibe · Ceará · Brasil</p>
    </div>
  </footer>
);
