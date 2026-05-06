import { motion } from "framer-motion";
import gramadoMar from "@/assets/deck-mar-1.png";
import virgemMar from "@/assets/deck-mar-2.png";
import { PhotoStack } from "./PhotoStack";
import { fadeUp, stagger, viewportOnce, easeLuxe } from "@/lib/motion";

const RomanNumeral = ({ n }: { n: string }) => (
  <span
    aria-hidden
    className="font-display italic absolute -top-6 -left-2 select-none pointer-events-none"
    style={{ fontSize: "5rem", color: "rgba(160,82,45,0.13)", lineHeight: 1 }}
  >
    {n}
  </span>
);

export const PeNaAreia = () => (
  <section id="casa" className="bg-champagne py-20 sm:py-28 md:py-36 px-5 sm:px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="order-2 md:order-1"
      >
        <PhotoStack
          imageBack={gramadoMar}
          imageFront={virgemMar}
          altBack="Gramado com coqueiros e horizonte do mar"
          altFront="Imagem da Virgem na ponta da falésia com vista para o mar"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.05, 0.1)}
        className="order-1 md:order-2 relative"
      >
        <RomanNumeral n="I" />
        <motion.p variants={fadeUp} className="eyebrow mb-6 relative">
          A Localização
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance"
          style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Pé na areia. Vista 180°.
          <br />
          <span className="italic" style={{ color: "#A0522D" }}>Privacidade absoluta.</span>
        </motion.h2>
        <motion.div
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 0.9, ease: easeLuxe } },
          }}
          className="w-16 h-px bg-terracota my-6 sm:my-8 origin-left"
        />
        <motion.p
          variants={fadeUp}
          className="text-[17px] sm:text-[18px] leading-[1.7] text-dark-text/90"
        >
          Você acorda com o som do mar e abre os olhos para o horizonte. A passarela
          leva direto à praia — sem ruas para atravessar, sem turistas no caminho.
          Aqui o dia começa onde a maioria das férias termina.
        </motion.p>
        <motion.a
          variants={fadeUp}
          href="#galeria"
          className="inline-flex items-center gap-2 mt-8 uppercase text-terracota hover:text-gold transition-colors"
          style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "13px", letterSpacing: "0.16em", fontWeight: 600, borderBottom: "1px solid currentColor", paddingBottom: 4 }}
        >
          Ver Galeria <span aria-hidden>→</span>
        </motion.a>
      </motion.div>
    </div>
  </section>
);
