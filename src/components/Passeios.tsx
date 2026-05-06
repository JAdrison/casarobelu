import { motion } from "framer-motion";
import bgFalesias from "@/assets/exp-falesias.jpg";
import bgBuggy from "@/assets/exp-buggy.jpg";
import parapente from "@/assets/parapente.webp";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { fadeUp, stagger, viewportOnce, easeLuxe } from "@/lib/motion";

type Passeio = {
  label: string;
  title: string;
  desc: string;
  meta: string;
  bg?: string;
  placeholder?: string;
};

const passeios: Passeio[] = [
  {
    label: "Natureza",
    title: "Falésias de Morro Branco",
    desc: "Trilha pelas formações coloridas, labirinto natural e piscinas entre as rochas.",
    meta: "A pé · 10 min da casa",
    bg: bgFalesias,
  },
  {
    label: "Aventura",
    title: "Passeio de Buggy",
    desc: "Dunas, lagoas escondidas e praias desertas no roteiro clássico do litoral leste.",
    meta: "Dia inteiro · com guia",
    bg: bgBuggy,
  },
  {
    label: "Adrenalina",
    title: "Voo de Parapente",
    desc: "Decolagem em Canoa Quebrada com vista aérea das falésias e do mar.",
    meta: "30 min · 25 km da casa",
    bg: parapente,
  },
];

export const Passeios = () => (
  <section
    id="passeios"
    className="relative bg-dark-text text-off-white py-24 md:py-36 px-5 sm:px-6 overflow-hidden"
  >
    <div className="absolute inset-0 bg-grain opacity-40" />
    <div className="relative max-w-7xl mx-auto">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
        variants={stagger(0.08, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.p variants={fadeUp} className="eyebrow eyebrow-light mb-6">
          <span className="ornament" /> O que fazer na região{" "}
          <span className="ornament" />
        </motion.p>
        <motion.span
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 1, ease: easeLuxe } },
          }}
          className="block mx-auto origin-center"
          style={{ width: 56, height: 1, background: "#C4915A", marginBottom: 24 }}
        />
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.1] text-off-white text-balance"
        >
          Aventura, natureza e cultura{" "}
          <span className="italic" style={{ color: "#E0B582" }}>
            à porta da casa.
          </span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
        variants={stagger(0.08, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {passeios.map((p) => (
          <motion.article
            key={p.title}
            variants={fadeUp}
            className="group relative overflow-hidden border border-off-white/15 hover:border-gold/40 transition-all duration-700 min-h-[420px] flex flex-col justify-end"
          >
            {p.bg ? (
              <>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.bg})` }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-dark-text via-dark-text/75 to-dark-text/20 transition-colors duration-700"
                />
              </>
            ) : (
              <div className="absolute inset-0">
                <PhotoPlaceholder
                  description={p.placeholder ?? ""}
                  aspectRatio="auto"
                  className="h-full"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-dark-text/95 via-dark-text/70 to-dark-text/20"
                />
              </div>
            )}
            <div className="relative p-7 sm:p-8">
              <p className="eyebrow eyebrow-light">{p.label}</p>
              <h3 className="font-display italic text-2xl sm:text-3xl mt-4 text-off-white">
                {p.title}
              </h3>
              <div className="w-10 h-px bg-gold my-4 transition-all duration-500 group-hover:w-20" />
              <p className="font-serif-italic italic text-base text-off-white/85 leading-snug mb-4">
                {p.desc}
              </p>
              <p
                className="uppercase"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: "#E0B582",
                  fontSize: "12px",
                  letterSpacing: "0.18em",
                  fontWeight: 600,
                }}
              >
                {p.meta}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);
