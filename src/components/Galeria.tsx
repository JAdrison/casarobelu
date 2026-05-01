import { motion } from "framer-motion";
import g1 from "@/assets/galeria-1.webp";
import g2 from "@/assets/galeria-2.webp";
import g3 from "@/assets/galeria-3.webp";
import g4 from "@/assets/galeria-4.webp";
import g5 from "@/assets/galeria-5.webp";
import g6 from "@/assets/galeria-6.webp";
import { fadeUp, stagger, viewportOnce, easeLuxe } from "@/lib/motion";

const tiles = [
  { src: g3, alt: "Vista panorâmica com coqueiros e mar", label: "Panorâmica" },
  { src: g1, alt: "Falésia, casa e piscina", label: "Falésia" },
  { src: g6, alt: "Capelinha com falésia ao fundo", label: "Capela" },
  { src: g5, alt: "Área gourmet com churrasqueira", label: "Gourmet" },
  { src: g4, alt: "Deck com mesa e vista para o mar", label: "Deck" },
  { src: g2, alt: "Passarela com coqueiros e vista para o mar", label: "Coqueiros" },
];

export const Galeria = () => (
  <section id="galeria" className="bg-off-white py-20 sm:py-28 md:py-36 px-5 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-12 sm:mb-16 md:mb-20"
        variants={stagger(0.1, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.p variants={fadeUp} className="eyebrow mb-6">
          <span className="ornament" /> Galeria <span className="ornament" />
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
          className="font-display text-3xl sm:text-4xl md:text-6xl text-dark-text leading-[1.1] text-balance"
          style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Cada ângulo é uma tela.
          <br />
          <span className="italic" style={{ color: "#A0522D" }}>Cada momento, uma lembrança.</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="galeria-uniform"
        variants={stagger(0.08, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {tiles.map((t, i) => (
          <motion.figure
            key={i}
            variants={fadeUp}
            className="relative overflow-hidden group"
          >
            <img
              src={t.src}
              alt={t.alt}
              loading="lazy"
              decoding="async"
              className="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-text/75 via-dark-text/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-off-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <p
                className="text-[10px] uppercase tracking-[0.28em]"
                style={{ fontFamily: "'Quicksand', sans-serif", color: "#C4915A" }}
              >
                {String(i + 1).padStart(2, "0")} / {String(tiles.length).padStart(2, "0")}
              </p>
              <p className="font-serif-italic italic text-base mt-1">{t.label}</p>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  </section>
);
