import { Calendar, Wallet, Users, AlertCircle, MessageCircle } from "lucide-react";
import ctaBg from "@/assets/reservas-bg.webp";

const WHATSAPP_RESERVA =
  "https://wa.me/5585997640313?text=Ol%C3%A1!%20Tenho%20interesse%20em%20reservar%20a%20Casa%20Robel%C3%BA.%20Pode%20me%20passar%20a%20disponibilidade%3F";
const WHATSAPP_GRUPO =
  "https://wa.me/5585997640313?text=Ol%C3%A1!%20Tenho%20um%20grupo%20com%20mais%20de%2025%20pessoas%20e%20gostaria%20de%20conversar%20sobre%20a%20Casa%20Robel%C3%BA.";

export const Reservas = () => {
  return (
    <section id="reservas" className="relative py-20 sm:py-28 md:py-40 px-5 sm:px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
        <div className="absolute inset-0 bg-dark-text/40" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center text-off-white">
        <p className="reveal eyebrow eyebrow-light mb-6">
          <span className="ornament" /> Reservas <span className="ornament" />
        </p>
        <h2 className="reveal reveal-delay-1 font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
          Seu próximo refúgio está
          <br />a uma mensagem de distância.
        </h2>
        <p className="reveal reveal-delay-2 mt-6 sm:mt-8 font-serif-italic text-lg sm:text-2xl text-off-white/95 max-w-2xl mx-auto leading-snug">
          Disponibilidade limitada para feriados, Réveillon e alta temporada.
          Fale conosco direto pelo WhatsApp e garanta sua data.
        </p>

        <div className="reveal reveal-delay-3 grid sm:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-14 max-w-4xl mx-auto text-left">
          <div className="flex items-start gap-3 text-off-white">
            <Calendar className="w-5 h-5 mt-0.5 text-gold shrink-0" strokeWidth={1.2} />
            <p style={{ fontSize: "15px", lineHeight: 1.55 }}>Check-in 9h · Check-out 16h</p>
          </div>
          <div className="flex items-start gap-3 text-off-white">
            <Wallet className="w-5 h-5 mt-0.5 text-gold shrink-0" strokeWidth={1.2} />
            <p style={{ fontSize: "15px", lineHeight: 1.55 }}>
              Diária: R$ 2.000<br />
              Final de semana (sex+sáb+dom): R$ 4.000<br />
              <span className="text-off-white/70">Reserva mínima: 2 noites</span>
            </p>
          </div>
          <div className="flex items-start gap-3 text-off-white">
            <Users className="w-5 h-5 mt-0.5 text-gold shrink-0" strokeWidth={1.2} />
            <p style={{ fontSize: "15px", lineHeight: 1.55 }}>
              Capacidade até 25 pessoas
            </p>
          </div>
        </div>

        {/* Aviso destacado */}
        <div className="reveal reveal-delay-4 mt-8 sm:mt-10 max-w-3xl mx-auto flex items-center gap-3 px-5 sm:px-6 py-4 border border-gold bg-gold/10 text-gold">
          <AlertCircle className="w-5 h-5 shrink-0" strokeWidth={1.4} />
          <p className="text-left" style={{ fontSize: "15px", lineHeight: 1.5 }}>
            Não realizamos reservas de apenas 1 diária. <strong className="font-semibold">Estadia mínima: 2 noites.</strong>
          </p>
        </div>

        {/* CTAs WhatsApp */}
        <div className="reveal reveal-delay-4 mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href={WHATSAPP_RESERVA}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 text-off-white font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_30px_-6px_rgba(37,211,102,0.55)]"
            style={{ background: "#25D366", borderRadius: 2, fontSize: "16px" }}
          >
            <MessageCircle className="w-5 h-5" strokeWidth={1.8} />
            Reservar pelo WhatsApp
            <span aria-hidden>→</span>
          </a>
          <a
            href={WHATSAPP_GRUPO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-gold border border-gold/60 hover:bg-gold/10 transition-colors"
            style={{ borderRadius: 2, fontSize: "15px" }}
          >
            Grupos +25 pessoas
          </a>
        </div>

        <p className="reveal mt-8 text-off-white/70 text-sm">
          Resposta rápida · Atendimento direto com a casa
        </p>
      </div>
    </section>
  );
};
