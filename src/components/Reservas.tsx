import { useState } from "react";
import { Calendar, Wallet, Users, AlertCircle } from "lucide-react";
import ctaBg from "@/assets/reservas-bg.webp";

const WHATSAPP = "https://wa.me/5585997640313?text=Ol%C3%A1!%20Tenho%20interesse%20em%20reservar%20a%20Casa%20Robel%C3%BA.%20Pode%20me%20passar%20a%20disponibilidade%3F";

export const Reservas = () => {
  const [form, setForm] = useState({ nome: "", tel: "", inicio: "", fim: "", hospedes: "2" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de verificar disponibilidade na Casa Robelú.%0A%0ANome: ${form.nome}%0ATelefone: ${form.tel}%0AChegada: ${form.inicio}%0ASaída: ${form.fim}%0AHóspedes: ${form.hospedes}`;
    window.open(`https://wa.me/5585997640313?text=${msg}`, "_blank");
  };

  const hospedesNum = parseInt(form.hospedes, 10);
  const grupoGrande = hospedesNum > 10;

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
          <br />a uma reserva de distância.
        </h2>
        <p className="reveal reveal-delay-2 mt-6 sm:mt-8 font-serif-italic text-base sm:text-xl text-off-white/80 max-w-2xl mx-auto">
          Disponibilidade limitada para feriados, Réveillon e alta temporada.
          Reserve com antecedência e garanta sua experiência.
        </p>

        <div className="reveal reveal-delay-3 grid sm:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-14 max-w-4xl mx-auto text-left">
          <div className="flex items-start gap-3 text-off-white/85">
            <Calendar className="w-5 h-5 mt-0.5 text-gold shrink-0" strokeWidth={1.2} />
            <p className="text-sm leading-relaxed">Check-in 9h · Check-out 16h</p>
          </div>
          <div className="flex items-start gap-3 text-off-white/85">
            <Wallet className="w-5 h-5 mt-0.5 text-gold shrink-0" strokeWidth={1.2} />
            <p className="text-sm leading-relaxed">
              Diária: R$ 2.000<br />
              Final de semana (sex+sáb+dom): R$ 4.000<br />
              <span className="text-off-white/60">Reserva mínima: 2 noites</span>
            </p>
          </div>
          <div className="flex items-start gap-3 text-off-white/85">
            <Users className="w-5 h-5 mt-0.5 text-gold shrink-0" strokeWidth={1.2} />
            <p className="text-sm leading-relaxed">Capacidade até 23 pessoas<br /><span className="text-off-white/60">Grupos maiores sob consulta</span></p>
          </div>
        </div>

        {/* Aviso destacado */}
        <div className="reveal reveal-delay-4 mt-8 sm:mt-10 max-w-3xl mx-auto flex items-center gap-3 px-5 sm:px-6 py-4 border border-gold bg-gold/10 text-gold">
          <AlertCircle className="w-5 h-5 shrink-0" strokeWidth={1.4} />
          <p className="text-sm tracking-wide text-left">
            Não realizamos reservas de apenas 1 diária. <strong className="font-semibold">Estadia mínima: 2 noites.</strong>
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal reveal-delay-4 mt-8 sm:mt-10 max-w-3xl mx-auto bg-off-white/5 backdrop-blur-md border border-off-white/20 p-6 sm:p-8 md:p-10 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nome completo" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} required maxLength={100} />
            <Field label="Telefone / WhatsApp" value={form.tel} onChange={(v) => setForm({ ...form, tel: v })} required maxLength={20} />
            <Field label="Data de chegada" type="date" value={form.inicio} onChange={(v) => setForm({ ...form, inicio: v })} />
            <Field label="Data de saída" type="date" value={form.fim} onChange={(v) => setForm({ ...form, fim: v })} />

            {/* Aviso dentro do form, abaixo das datas */}
            <div className="sm:col-span-2 flex items-start gap-2 text-gold/90 text-xs">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={1.4} />
              <span>Estadia mínima de 2 noites. Reservas de 1 diária não são aceitas.</span>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] tracking-[0.25em] uppercase text-off-white/60 mb-2">Hóspedes</label>
              <select
                value={form.hospedes}
                onChange={(e) => setForm({ ...form, hospedes: e.target.value })}
                className="w-full bg-transparent border-b border-off-white/30 py-3 text-off-white focus:border-gold outline-none transition-colors"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n} className="bg-dark-text">
                    {n} {n === 1 ? "pessoa" : "pessoas"}
                  </option>
                ))}
                <option value="11" className="bg-dark-text">Mais de 23 pessoas</option>
              </select>
              {grupoGrande && (
                <p className="mt-3 text-xs text-gold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" strokeWidth={1.4} />
                  Para grupos acima de 23 pessoas, entre em contato pelo WhatsApp.
                </p>
              )}
            </div>
          </div>

          <button type="submit" className="btn-ghost-light mt-8 sm:mt-10 w-full sm:w-auto justify-center">
            Verificar Disponibilidade <span aria-hidden>→</span>
          </button>
        </form>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="reveal mt-10 inline-block font-serif-italic italic text-lg text-gold hover:text-off-white transition-colors"
        >
          Ou fale diretamente pelo WhatsApp →
        </a>
      </div>
    </section>
  );
};

const Field = ({
  label, value, onChange, type = "text", required, maxLength,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; maxLength?: number }) => (
  <div>
    <label className="block text-[11px] tracking-[0.25em] uppercase text-off-white/60 mb-2">{label}</label>
    <input
      type={type}
      value={value}
      required={required}
      maxLength={maxLength}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent border-b border-off-white/30 py-3 text-off-white placeholder:text-off-white/30 focus:border-gold outline-none transition-colors"
    />
  </div>
);
