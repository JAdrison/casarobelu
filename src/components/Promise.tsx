import { Lock, Waves, Users } from "lucide-react";

const pillars = [
  { icon: Lock, title: "Privacidade Total", text: "Acesso exclusivo. Sem vizinhos, sem compromissos." },
  { icon: Waves, title: "Vista 180° para o Mar", text: "Falésias, coqueiros e horizonte infinito." },
  { icon: Users, title: "Para Grupos de Até 23", text: "Oito quartos. Estrutura completa para reunir os seus. Grupos maiores sob consulta." },
];

export const Promise = () => (
  <section className="bg-off-white py-20 sm:py-28 md:py-40 px-5 sm:px-6">
    <div className="max-w-4xl mx-auto text-center">
      <p className="reveal eyebrow mb-6 sm:mb-8">
        <span className="ornament" /> Morro Branco — Beberibe, CE <span className="ornament" />
      </p>
      <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl md:text-6xl text-dark-text leading-[1.1] text-balance">
        Não é uma casa de praia.
        <br />
        <span className="italic">É um destino.</span>
      </h2>
      <p className="reveal reveal-delay-2 mt-8 sm:mt-10 text-base sm:text-[17px] leading-[1.8] sm:leading-[1.85] text-muted-foreground max-w-2xl mx-auto">
        A Casa Robelú nasceu para grupos que recusam o comum. Com vista privilegiada
        de 180° para o mar, falésias em tons de terracota ao redor e estrutura
        completa para até 10 pessoas, cada estadia aqui se torna uma memória
        que não se esquece.
      </p>
      <p className="reveal reveal-delay-3 mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 text-[11px] sm:text-[12px] text-gold text-center max-w-full px-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
        <span>Estadia mínima de 2 noites · Check-in 9h · Check-out 16h</span>
      </p>
    </div>

    <div className="max-w-6xl mx-auto mt-16 sm:mt-24 grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border">
      {pillars.map((p, i) => (
        <div
          key={p.title}
          className={`reveal reveal-delay-${i + 1} bg-off-white p-8 sm:p-10 md:p-12 text-center group`}
        >
          <p.icon className="w-7 h-7 mx-auto text-terracota stroke-[1.2]" />
          <h3 className="font-display text-xl sm:text-2xl mt-5 sm:mt-6 text-dark-text">{p.title}</h3>
          <p className="font-serif-italic italic text-base sm:text-lg text-muted-foreground mt-3">{p.text}</p>
        </div>
      ))}
    </div>
  </section>
);
