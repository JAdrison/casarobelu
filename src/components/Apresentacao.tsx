import { motion } from "framer-motion";
import gramadoMar from "@/assets/gramado-mar.webp";
import virgemMar from "@/assets/virgem-mar.webp";
import piscinaPergolado from "@/assets/piscina-pergolado.webp";
import { fadeUp, stagger, viewportOnce, easeLuxe } from "@/lib/motion";

export const Apresentacao = () => (
  <section
    id="apresentacao"
    className="bg-off-white py-24 md:py-36 px-5 sm:px-6 relative overflow-hidden"
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.06, 0.1)}
      >
        <motion.p variants={fadeUp} className="eyebrow mb-6">
          Sobre a Casa
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance"
          style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Casa Robelú —{" "}
          <span className="italic" style={{ color: "#A0522D" }}>
            refúgio nas falésias de Morro Branco.
          </span>
        </motion.h2>
        <motion.div
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 0.9, ease: easeLuxe } },
          }}
          className="w-16 h-px bg-terracota my-7 sm:my-8 origin-left"
        />
        <motion.p
          variants={fadeUp}
          className="text-[17px] sm:text-[18px] leading-[1.75] text-dark-text/85 mb-5"
        >
          De frente para o mar, a Casa Robelú nasceu para ser mais do que uma
          hospedagem: um refúgio de calma, beleza e encontros, na beira da praia
          de Morro Branco.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-[17px] sm:text-[18px] leading-[1.75] text-dark-text/85 mb-5"
        >
          Cada espaço foi pensado para que você desacelere — o som das ondas, o
          vento que bate constante, os coqueiros, a vista 180° das falésias e
          do oceano emoldurando cada momento.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-[17px] sm:text-[18px] leading-[1.75] text-dark-text/85"
        >
          Aqui, a casa é toda sua. Até 23 hóspedes, 8 quartos, piscina, quadra
          de vôlei e churrasqueira — tudo para receber família e amigos com a
          privacidade de um lar e o cuidado de um refúgio.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.08, 0.15)}
        className="grid grid-cols-2 gap-4 sm:gap-5"
      >
        <motion.figure
          variants={fadeUp}
          className="col-span-2 overflow-hidden"
          style={{
            boxShadow: "0 30px 60px -20px rgba(26,20,16,0.3)",
            borderRadius: 2,
            aspectRatio: "16/10",
          }}
        >
          <img
            src={gramadoMar}
            alt="Gramado da Casa Robelú com vista para o mar"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </motion.figure>
        <motion.figure
          variants={fadeUp}
          className="overflow-hidden"
          style={{
            boxShadow: "0 24px 50px -18px rgba(26,20,16,0.3)",
            borderRadius: 2,
            aspectRatio: "1/1",
          }}
        >
          <img
            src={piscinaPergolado}
            alt="Piscina com pergolado"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </motion.figure>
        <motion.figure
          variants={fadeUp}
          className="overflow-hidden"
          style={{
            boxShadow: "0 24px 50px -18px rgba(26,20,16,0.3)",
            borderRadius: 2,
            aspectRatio: "1/1",
          }}
        >
          <img
            src={virgemMar}
            alt="Imagem da Virgem na ponta da falésia"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </motion.figure>
      </motion.div>
    </div>
  </section>
);
