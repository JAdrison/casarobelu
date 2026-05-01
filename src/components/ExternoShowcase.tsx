import { motion } from "framer-motion";
import deckMar from "@/assets/externa-deck-mar.webp";
import peNaAreia from "@/assets/externa-pe-na-areia.webp";
import redes from "@/assets/externa-redes.webp";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const items = [
  {
    src: peNaAreia,
    label: "Pé na Areia",
    desc: "Acesso direto à praia em poucos passos — sem ruas, sem desvios.",
  },
  {
    src: deckMar,
    label: "Deck com Vista 180°",
    desc: "Piscina, mesas e o mar como cenário do amanhecer ao pôr do sol.",
  },
  {
    src: redes,
    label: "Varanda das Redes",
    desc: "Espaço de descanso à sombra, com brisa do mar o dia inteiro.",
  },
];

export const ExternoShowcase = () => (
  <section
    className="relative px-5 sm:px-6 -mt-12 md:-mt-24 z-10"
    aria-label="Áreas externas"
  >
    <motion.div
      className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-7"
      variants={stagger(0.1, 0.14)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {items.map((it) => (
        <motion.figure key={it.label} variants={fadeUp} className="group">
          <div
            className="relative overflow-hidden bg-off-white"
            style={{
              boxShadow: "0 24px 60px -20px rgba(26,20,16,0.35)",
              borderRadius: 2,
              aspectRatio: "4/5",
            }}
          >
            <img
              src={it.src}
              alt={it.label}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-text/65 via-dark-text/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-off-white">
              <p
                className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em]"
                style={{ fontFamily: "'Quicksand', sans-serif", color: "#C4915A" }}
              >
                {it.label}
              </p>
              <p className="font-serif-italic italic text-sm sm:text-base mt-1.5 text-off-white/90 leading-snug">
                {it.desc}
              </p>
            </figcaption>
          </div>
        </motion.figure>
      ))}
    </motion.div>
  </section>
);
