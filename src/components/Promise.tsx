import { Lock, Waves, Users } from "lucide-react";
import { motion } from "framer-motion";
import bgFalesias from "@/assets/gallery-cliffs.webp";
import { fadeUp, stagger, viewportOnce, easeLuxe } from "@/lib/motion";

const pillars = [
  { icon: Lock, title: "Privacidade Total", text: "Acesso exclusivo. Sem vizinhos, sem compromissos." },
  { icon: Waves, title: "Vista 180° para o Mar", text: "Falésias, coqueiros e horizonte infinito." },
  { icon: Users, title: "Para Grupos de Até 10", text: "Capacidade para até 10 hóspedes com conforto." },
];

export const Promise = () => (
  <section
    className="promise-section relative overflow-hidden"
    style={{ background: "#F5F0E8" }}
  >
    {/* Watermark image */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url(${bgFalesias})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.05,
      }}
    />
    {/* Soft vignette */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(245,240,232,0) 0%, rgba(245,240,232,0.7) 90%)",
      }}
    />

    {/* Decorative oversized quote */}
    <span
      aria-hidden
      className="absolute top-10 left-1/2 -translate-x-1/2 font-display italic select-none pointer-events-none"
      style={{
        fontSize: "clamp(8rem, 18vw, 18rem)",
        color: "rgba(160,82,45,0.05)",
        lineHeight: 1,
      }}
    >
      “
    </span>

    <motion.div
      className="promise-inner relative max-w-3xl mx-auto text-center"
      variants={stagger(0.1, 0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <motion.p variants={fadeUp} className="eyebrow mb-6 sm:mb-8">
        <span className="ornament" /> Diferenciais <span className="ornament" />
      </motion.p>

      <motion.span
        aria-hidden
        variants={{
          hidden: { scaleX: 0 },
          show: { scaleX: 1, transition: { duration: 1.1, ease: easeLuxe } },
        }}
        className="block mx-auto origin-center"
        style={{
          width: 56,
          height: 1,
          background: "#C4915A",
          marginBottom: 28,
        }}
      />

      <motion.h2
        variants={fadeUp}
        className="font-display leading-[1.12] text-balance"
        style={{
          fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)",
          fontWeight: 400,
          color: "#1A1A1A",
          letterSpacing: "-0.01em",
        }}
      >
        Não é uma casa de praia.
        <br />
        <span className="italic" style={{ color: "#A0522D" }}>
          É um destino.
        </span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mx-auto"
        style={{
          maxWidth: 580,
          marginTop: 32,
          lineHeight: 1.85,
          fontSize: "1.05rem",
          color: "#6B5E52",
        }}
      >
        A Casa Robelú nasceu para grupos que recusam o comum. Vista privilegiada
        de 180° para o mar, falésias em tons de terracota e estrutura completa
        para até 10 pessoas — cada estadia se torna uma memória que não se esquece.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-8 inline-flex items-center justify-center gap-2 text-[11px] sm:text-[12px] text-gold"
        style={{ fontFamily: "'Quicksand', sans-serif", letterSpacing: "0.15em" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        <span>Estadia mínima 2 noites · Check-in 9h · Check-out 16h</span>
      </motion.p>
    </motion.div>

    {/* Flat pillars with vertical dividers */}
    <motion.div
      className="relative max-w-5xl mx-auto mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0"
      variants={stagger(0.2, 0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {pillars.map((p, i) => (
        <motion.div
          key={p.title}
          variants={fadeUp}
          className="relative text-center px-6 md:px-10"
          style={
            i > 0
              ? { borderLeft: "1px solid rgba(160,82,45,0.18)" }
              : undefined
          }
        >
          <div
            className="mx-auto flex items-center justify-center mb-5"
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "rgba(160,82,45,0.08)",
            }}
          >
            <p.icon size={26} strokeWidth={1.3} style={{ color: "#A0522D" }} />
          </div>
          <h3
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontSize: "0.78rem",
              color: "#1A1A1A",
            }}
          >
            {p.title}
          </h3>
          <div className="mx-auto my-3" style={{ width: 20, height: 1, background: "#C4915A" }} />
          <p
            className="font-serif-italic italic"
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#6B5E52",
              maxWidth: 240,
              marginInline: "auto",
            }}
          >
            {p.text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);
