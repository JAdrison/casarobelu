import { motion } from "framer-motion";
import hospitalidadeVinho from "@/assets/hospitalidade-vinho.png";
import { fadeUp, stagger, viewportOnce, easeLuxe } from "@/lib/motion";

export const Hospitalidade = () => (
  <section
    id="equipe"
    className="bg-champagne py-24 md:py-36 px-5 sm:px-6 relative overflow-hidden"
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <motion.figure
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 1.1, ease: easeLuxe }}
        className="relative overflow-hidden"
        style={{
          boxShadow: "0 40px 80px -24px rgba(26,20,16,0.4)",
          borderRadius: 2,
          aspectRatio: "4/5",
        }}
      >
        <img
          src={hospitalidadeVinho}
          alt="Vinho e taças servidos na Casa Robelú — hospitalidade que recebe bem"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.figure>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.05, 0.08)}
      >
        <motion.p variants={fadeUp} className="eyebrow mb-6">
          Nossa Equipe
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance"
          style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Hospitalidade com{" "}
          <span className="italic" style={{ color: "#A0522D" }}>
            rosto, voz e história.
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
          A Casa Robelú é cuidada por uma equipe local — homens e mulheres de
          Morro Branco que conhecem cada canto da vila e carregam no coração o
          orgulho de receber bem.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-[17px] leading-[1.75] text-dark-text/85 mb-5"
        >
          Caseiro, cozinheira e camareiras estão à disposição para que você só
          precise se preocupar em aproveitar — café pronto pela manhã, almoço
          servido na hora certa, casa sempre arrumada.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="font-serif-italic italic text-[17px] text-dark-text/70"
        >
          Aqui o luxo não está no excesso. Está no calor humano de quem recebe.
        </motion.p>
      </motion.div>
    </div>
  </section>
);
