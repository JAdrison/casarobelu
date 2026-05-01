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
        <p className="font-serif-italic italic text-lg sm:text-xl mt-5 max-w-sm text-off-white/80">
          Refúgio exclusivo nas falésias de Morro Branco.
        </p>
        <a
          href="https://instagram.com/casarobelu"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-8 uppercase text-off-white/85 hover:text-gold transition-colors"
          style={{ fontSize: "14px", letterSpacing: "0.14em", fontWeight: 600 }}
        >
          <Instagram className="w-4 h-4" strokeWidth={1.3} />
          @casarobelu
        </a>
      </div>

      <div className="md:text-right space-y-4" style={{ fontSize: "15px" }}>
        <p className="eyebrow eyebrow-light mb-4">Contato</p>
        <p className="flex md:justify-end items-start gap-3 text-off-white/85">
          <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" strokeWidth={1.3} />
          Av. Beira Mar, S/N — Morro Branco, Beberibe/CE
        </p>
        <p className="flex md:justify-end items-center gap-3 text-off-white/85">
          <Phone className="w-4 h-4 text-gold" strokeWidth={1.3} />
          <a href="tel:+5585997640313" className="hover:text-off-white transition-colors">(85) 99764-0313</a>
        </p>
        <p className="flex md:justify-end items-center gap-3 text-off-white/85">
          <Mail className="w-4 h-4 text-gold" strokeWidth={1.3} />
          <a href="mailto:reservas@casarobelu.com.br" className="hover:text-off-white transition-colors">
            reservas@casarobelu.com.br
          </a>
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-12 sm:mt-16 pt-8 border-t border-off-white/10 flex flex-col md:flex-row justify-between gap-3 sm:gap-4 uppercase text-off-white/55" style={{ fontSize: "12.5px", letterSpacing: "0.14em" }}>
      <p>© 2026 Casa Robelú — Todos os direitos reservados.</p>
      <p>Morro Branco · Beberibe · Ceará · Brasil</p>
    </div>
  </footer>
);
