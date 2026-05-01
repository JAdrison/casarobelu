import { motion } from "framer-motion";
import sala from "@/assets/interna-sala.webp";
import jantar from "@/assets/interna-jantar.webp";
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

export const EspacoInterno = () => (
  <section className="bg-champagne py-20 sm:py-28 md:py-36 px-5 sm:px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.05, 0.08)}
        className="order-2 md:order-1 relative"
      >
        <RomanNumeral n="III" />
        <motion.p variants={fadeUp} className="eyebrow mb-6">Áreas Sociais</motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance"
          style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Ambientes para
          <br />
          <span className="italic" style={{ color: "#A0522D" }}>receber, conversar e descansar.</span>
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
          className="text-base sm:text-[17px] leading-[1.85] sm:leading-[1.9] text-dark-text/75"
        >
          Sala ampla com sofás para todos, mesa de jantar para 10, cozinha equipada
          e enxoval completo. Receber 23 pessoas aqui é simples — a casa foi feita
          para isso há quase 40 anos.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="order-1 md:order-2"
      >
        <PhotoStack
          imageBack={sala}
          imageFront={jantar}
          altBack="Sala de estar com sofás amplos"
          altFront="Sala de jantar para 10 pessoas"
        />
      </motion.div>
    </div>
  </section>
);
