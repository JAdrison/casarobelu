import { motion } from "framer-motion";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import salaEstar from "@/assets/sala-estar.png";
import internaSala from "@/assets/interna-sala.webp";
import internaJantar from "@/assets/interna-jantar.webp";
import { fadeUp, stagger, viewportOnce, easeLuxe } from "@/lib/motion";

export const Gastronomia = () => (
  <section
    id="ambientes"
    className="bg-off-white py-24 md:py-36 px-5 sm:px-6 relative overflow-hidden"
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.05, 0.1)}
      >
        <motion.p variants={fadeUp} className="eyebrow mb-6">
          Por Dentro da Casa
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance"
          style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Ambientes para{" "}
          <span className="italic" style={{ color: "#A0522D" }}>
            viver a casa.
          </span>
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
          className="text-[17px] leading-[1.75] text-dark-text/85 mb-5"
        >
          Cada cômodo da Casa Robelú foi pensado para receber. Da sala de estar
          ampla à mesa de jantar para todos, da cozinha equipada aos cantos de
          descanso — a casa convida a viver junto, sem pressa.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-[17px] leading-[1.75] text-dark-text/85 mb-5"
        >
          Móveis em madeira maciça, peças de artesanato local e enxoval
          completo compõem ambientes confortáveis e acolhedores em cada detalhe.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="font-serif-italic italic text-[17px] text-dark-text/70"
        >
          Uma casa que se sente em casa.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.08, 0.12)}
        className="grid grid-cols-2 gap-4 sm:gap-5"
      >
        <motion.figure
          variants={fadeUp}
          className="overflow-hidden"
          style={{
            aspectRatio: "1/1",
            borderRadius: 2,
            boxShadow: "0 20px 40px -16px rgba(26,20,16,0.3)",
          }}
        >
          <img
            src={salaEstar}
            alt="Sala de estar com sofás e poltronas em madeira maciça"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.figure>
        <motion.figure
          variants={fadeUp}
          className="overflow-hidden"
          style={{
            aspectRatio: "1/1",
            borderRadius: 2,
            boxShadow: "0 20px 40px -16px rgba(26,20,16,0.3)",
          }}
        >
          <img
            src={internaJantar}
            alt="Mesa de jantar para 10 pessoas"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.figure>
        <motion.figure
          variants={fadeUp}
          className="overflow-hidden"
          style={{
            aspectRatio: "1/1",
            borderRadius: 2,
            boxShadow: "0 20px 40px -16px rgba(26,20,16,0.3)",
          }}
        >
          <img
            src={internaSala}
            alt="Outro ângulo da sala de estar"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.figure>
        <motion.div variants={fadeUp}>
          <PhotoPlaceholder
            description="Cozinha equipada da casa"
            aspectRatio="1/1"
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);
