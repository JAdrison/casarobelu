import { motion } from "framer-motion";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { fadeUp, stagger, viewportOnce, easeLuxe } from "@/lib/motion";

export const Gastronomia = () => (
  <section
    id="gastronomia"
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
          Gastronomia
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance"
          style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Sabores do Nordeste{" "}
          <span className="italic" style={{ color: "#A0522D" }}>
            à mesa.
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
          A comida é parte viva da experiência. Frutos do mar frescos, vindos
          diretamente da pesca local, preparados com receitas tradicionais do
          Ceará e o cuidado de quem entende que servir é um ato de afeto.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-[17px] leading-[1.75] text-dark-text/85 mb-5"
        >
          Café da manhã na varanda, almoço de peixada, churrasco no deck ao
          entardecer e drinks ao pôr do sol — cada refeição vira parte da
          memória da viagem.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="font-serif-italic italic text-[17px] text-dark-text/70"
        >
          O luxo se mede pelo prazer de comer bem, sem pressa, em boa companhia.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.08, 0.12)}
        className="grid grid-cols-2 gap-4 sm:gap-5"
      >
        <motion.div variants={fadeUp}>
          <PhotoPlaceholder
            description="Prato com frutos do mar (peixada cearense, camarões…)"
            aspectRatio="1/1"
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <PhotoPlaceholder
            description="Mesa posta do café da manhã / frutas e bolos"
            aspectRatio="1/1"
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <PhotoPlaceholder
            description="Churrasco no deck à beira-mar"
            aspectRatio="1/1"
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <PhotoPlaceholder
            description="Drink ou coco gelado com pôr do sol ao fundo"
            aspectRatio="1/1"
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);
