import { Lock, Waves, Users } from "lucide-react";
import { motion } from "framer-motion";
import bgFalesias from "@/assets/gallery-cliffs.webp";
import { fadeUp, stagger, viewportOnce, easeLuxe } from "@/lib/motion";

const pillars = [
  { icon: Lock, title: "Privacidade Total", text: "Acesso exclusivo. Sem vizinhos, sem compromissos." },
  { icon: Waves, title: "Vista 180° para o Mar", text: "Falésias, coqueiros e horizonte infinito." },
  { icon: Users, title: "Para Grupos de Até 25", text: "Capacidade para até 25 hóspedes com conforto e estrutura completa." },
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
              letterSpacing: "0.14em",
              fontSize: "0.95rem",
              color: "#1A1A1A",
            }}
          >
            {p.title}
          </h3>
          <div className="mx-auto my-3" style={{ width: 24, height: 1, background: "#C4915A" }} />
          <p
            className="font-serif-italic italic"
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.55,
              color: "#3D2F24",
              maxWidth: 260,
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
