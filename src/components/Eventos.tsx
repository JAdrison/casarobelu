import { motion } from "framer-motion";
import { Check } from "lucide-react";
import bg from "@/assets/cta-night.webp";
import veranda from "@/assets/gallery-veranda.webp";
import bgFalesias from "@/assets/gallery-cliffs.webp";
import { fadeUp, stagger, maskReveal, viewportOnce, easeLuxe } from "@/lib/motion";

const WHATSAPP =
  "https://wa.me/5585997640313?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20evento%20na%20Casa%20Robel%C3%BA.";

const bullets = [
  "Aniversários e confraternizações",
  "Casamentos íntimos com vista para o mar",
  "Retiros corporativos com privacidade total",
  "Equipe de apoio e parceiros locais sob demanda",
];

export const Eventos = () => (
  <section
    id="eventos"
    className="relative overflow-hidden py-20 sm:py-28 md:py-36 px-5 sm:px-6"
    style={{ background: "#A0522D" }}
  >
    {/* Decorative background image */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url(${bgFalesias})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        opacity: 0.1,
        mixBlendMode: "overlay",
      }}
    />
    {/* Soft texture */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at top left, rgba(196,145,90,0.18) 0%, transparent 60%)",
      }}
    />

    <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      {/* Left: copy */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.08, 0.1)}
        className="text-off-white"
      >
        <motion.p variants={fadeUp} className="eyebrow eyebrow-light mb-6">
          <span className="ornament" /> Eventos & Celebrações <span className="ornament" />
        </motion.p>

        <motion.span
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 0.9, ease: easeLuxe } },
          }}
          className="block origin-left"
          style={{ width: 56, height: 1, background: "#C4915A", marginBottom: 24 }}
        />

        <motion.h2
          variants={fadeUp}
          className="font-display leading-[1.08] text-balance"
          style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.6rem)", fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Um cenário que <span className="italic" style={{ color: "#F5E6D0" }}>dispensa decoração.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-serif-italic italic mt-6"
          style={{ maxWidth: 520, fontSize: "1.15rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}
        >
          Reúna até 23 pessoas em um refúgio nas falésias para celebrar o que importa
          — com privacidade, beleza e atendimento sob medida.
        </motion.p>

        <ul className="mt-8 space-y-4">
          {bullets.map((b) => (
            <motion.li key={b} variants={fadeUp} className="flex items-start gap-3 text-off-white">
              <span
                className="shrink-0 mt-1 flex items-center justify-center"
                style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(196,145,90,0.25)", border: "1px solid #C4915A" }}
              >
                <Check size={12} strokeWidth={2.5} className="text-gold" />
              </span>
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "16.5px", lineHeight: 1.55, fontWeight: 400 }}>{b}</span>
            </motion.li>
          ))}
        </ul>

        <motion.a
          variants={fadeUp}
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 mt-10 font-sans-soft uppercase transition-all duration-500 hover:-translate-y-0.5 overflow-hidden"
          style={{
            background: "#FAF7F2",
            color: "#A0522D",
            padding: "18px 40px",
            fontSize: "14px",
            letterSpacing: "0.14em",
            fontWeight: 600,
            borderRadius: "2px",
            boxShadow: "0 14px 36px -14px rgba(0,0,0,0.35)",
          }}
        >
          <span className="relative z-10">Solicitar Orçamento</span>
          <span aria-hidden className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">→</span>
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            style={{
              background:
                "linear-gradient(120deg, transparent 30%, rgba(196,145,90,0.25) 50%, transparent 70%)",
            }}
          />
        </motion.a>
      </motion.div>

      {/* Right: floating photo */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={maskReveal}
        className="relative"
      >
        <div
          className="relative overflow-hidden"
          style={{
            aspectRatio: "4/5",
            borderRadius: 2,
            boxShadow: "0 40px 80px -24px rgba(0,0,0,0.5)",
            border: "8px solid #FAF7F2",
          }}
        >
          <img
            src={veranda}
            alt="Varanda Casa Robelú ao pôr do sol"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Inset secondary photo */}
        <div
          className="hidden md:block absolute -bottom-8 -left-8 w-[42%] overflow-hidden"
          style={{
            aspectRatio: "1/1",
            border: "8px solid #FAF7F2",
            borderRadius: 2,
            boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5)",
          }}
        >
          <img src={bg} alt="Casa à noite" loading="lazy" className="w-full h-full object-cover" />
        </div>

        {/* Decorative dots */}
        <div
          aria-hidden
          className="hidden md:block absolute -top-6 -right-6 w-24 h-24 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.45) 1.2px, transparent 1.2px)",
            backgroundSize: "10px 10px",
          }}
        />
      </motion.div>
    </div>
  </section>
);
