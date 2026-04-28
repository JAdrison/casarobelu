import { Lock, Waves, Users } from "lucide-react";
import bgFalesias from "@/assets/gallery-cliffs.webp";

const pillars = [
  { icon: Lock, title: "Privacidade Total", text: "Acesso exclusivo. Sem vizinhos, sem compromissos." },
  { icon: Waves, title: "Vista 180° para o Mar", text: "Falésias, coqueiros e horizonte infinito." },
  { icon: Users, title: "Para Grupos de Até 10", text: "Capacidade para até 10 hóspedes com conforto e privacidade total." },
];

export const Promise = () => (
  <section
    className="relative overflow-hidden"
    style={{
      background: "#F5F0E8",
      padding: "72px 20px",
    }}
  >
    {/* Foto de fundo em baixíssima opacidade */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url(${bgFalesias})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.06,
      }}
    />
    {/* Vinheta sutil para preservar legibilidade */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(245,240,232,0) 0%, rgba(245,240,232,0.6) 85%)",
      }}
    />

    <div className="promise-inner relative max-w-4xl mx-auto text-center">
      <p className="reveal eyebrow mb-6 sm:mb-8">
        <span className="ornament" /> Morro Branco — Beberibe, CE <span className="ornament" />
      </p>

      {/* Linha decorativa acima do headline */}
      <span
        aria-hidden
        className="reveal reveal-delay-1 block mx-auto"
        style={{
          width: 48,
          height: 0,
          borderTop: "1px solid #C4915A",
          marginBottom: 24,
        }}
      />

      <h2
        className="reveal reveal-delay-1 font-display leading-[1.15] text-balance"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          fontWeight: 400,
          color: "#1A1A1A",
        }}
      >
        Não é uma casa de praia.
        <br />
        <span className="italic" style={{ color: "#A0522D" }}>
          É um destino.
        </span>
      </h2>

      <p
        className="reveal reveal-delay-2 mx-auto"
        style={{
          maxWidth: 580,
          marginTop: 32,
          lineHeight: 1.9,
          fontSize: "1.05rem",
          color: "#6B5E52",
        }}
      >
        A Casa Robelú nasceu para grupos que recusam o comum. Com vista privilegiada
        de 180° para o mar, falésias em tons de terracota ao redor e estrutura
        completa para até 10 pessoas, cada estadia aqui se torna uma memória
        que não se esquece.
      </p>

      <p
        className="reveal reveal-delay-3 mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 text-[11px] sm:text-[12px] text-gold text-center max-w-full px-2"
        style={{ fontFamily: "'Quicksand', sans-serif" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        <span>Estadia mínima de 2 noites · Check-in 9h · Check-out 16h</span>
      </p>
    </div>

    <div className="relative max-w-6xl mx-auto mt-14 sm:mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
      {pillars.map((p, i) => (
        <div
          key={p.title}
          className={`reveal reveal-delay-${i + 1} text-center transition-all duration-500 hover:-translate-y-1`}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(160,82,45,0.15)",
            padding: "32px 24px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            borderRadius: 2,
          }}
        >
          <p.icon size={28} strokeWidth={1.3} className="mx-auto" style={{ color: "#A0522D" }} />
          <h3
            className="mt-6"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontSize: "0.85rem",
              color: "#1A1A1A",
            }}
          >
            {p.title}
          </h3>
          <div
            aria-hidden
            className="mx-auto"
            style={{ width: 24, height: 1, background: "#C4915A", margin: "14px auto 14px" }}
          />
          <p
            className="font-serif-italic italic"
            style={{
              fontSize: "1.02rem",
              lineHeight: 1.65,
              color: "#6B5E52",
            }}
          >
            {p.text}
          </p>
        </div>
      ))}
    </div>
  </section>
);
