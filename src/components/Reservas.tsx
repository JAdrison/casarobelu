import { useState } from "react";
import { Calendar, Wallet, Users } from "lucide-react";
import ctaBg from "@/assets/reservas-bg.jpg";

const WHATSAPP = "https://wa.me/5585997640313?text=Ol%C3%A1!%20Tenho%20interesse%20em%20reservar%20a%20Casa%20Robel%C3%BA.";

export const Reservas = () => {
  const [form, setForm] = useState({ nome: "", tel: "", inicio: "", fim: "", hospedes: "10" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de verificar disponibilidade na Casa Robelú.%0A%0ANome: ${form.nome}%0ATelefone: ${form.tel}%0AChegada: ${form.inicio}%0ASaída: ${form.fim}%0AHóspedes: ${form.hospedes}`;
    window.open(`https://wa.me/5585997640313?text=${msg}`, "_blank");
  };

  return (
    <section id="reservas" className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
        <div className="absolute inset-0 bg-dark-text/40" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center text-off-white">
        <p className="reveal eyebrow eyebrow-light mb-6">
          <span className="ornament" /> Reservas <span className="ornament" />
        </p>
        <h2 className="reveal reveal-delay-1 font-display italic text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
          Seu próximo refúgio está
          <br />a uma reserva de distância.
        </h2>
        <p className="reveal reveal-delay-2 mt-8 font-serif-italic text-xl text-off-white/80 max-w-2xl mx-auto">
          Disponibilidade limitada para feriados, Réveillon e alta temporada.
          Reserve com antecedência e garanta sua experiência.
        </p>

        <div className="reveal reveal-delay-3 grid sm:grid-cols-3 gap-6 mt-14 max-w-3xl mx-auto text-left">
          {[
            { icon: Calendar, t: "Check-in 9h · Check-out 16h" },
            { icon: Wallet, t: "A partir de R$ 2.000/diária" },
            { icon: Users, t: "Capacidade até 23 pessoas" },
          ].map((it) => (
            <div key={it.t} className="flex items-start gap-3 text-off-white/85">
              <it.icon className="w-5 h-5 mt-0.5 text-gold shrink-0" strokeWidth={1.2} />
              <p className="text-sm leading-relaxed">{it.t}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal reveal-delay-4 mt-14 max-w-3xl mx-auto bg-off-white/5 backdrop-blur-md border border-off-white/20 p-8 md:p-10 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nome completo" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} required />
            <Field label="Telefone / WhatsApp" value={form.tel} onChange={(v) => setForm({ ...form, tel: v })} required />
            <Field label="Data de chegada" type="date" value={form.inicio} onChange={(v) => setForm({ ...form, inicio: v })} />
            <Field label="Data de saída" type="date" value={form.fim} onChange={(v) => setForm({ ...form, fim: v })} />
            <div className="sm:col-span-2">
              <label className="block text-[11px] tracking-[0.25em] uppercase text-off-white/60 mb-2">Hóspedes</label>
              <select
                value={form.hospedes}
                onChange={(e) => setForm({ ...form, hospedes: e.target.value })}
                className="w-full bg-transparent border-b border-off-white/30 py-3 text-off-white focus:border-gold outline-none transition-colors"
              >
                {Array.from({ length: 23 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n} className="bg-dark-text">
                    {n} {n === 1 ? "pessoa" : "pessoas"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn-ghost-light mt-10 w-full sm:w-auto justify-center">
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
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) => (
  <div>
    <label className="block text-[11px] tracking-[0.25em] uppercase text-off-white/60 mb-2">{label}</label>
    <input
      type={type}
      value={value}
      required={required}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent border-b border-off-white/30 py-3 text-off-white placeholder:text-off-white/30 focus:border-gold outline-none transition-colors"
    />
  </div>
);
