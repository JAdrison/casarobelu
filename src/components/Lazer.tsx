import { motion } from "framer-motion";
import piscinaPergolado from "@/assets/piscina-pergolado.webp";
import quadraVolei from "@/assets/quadra-volei.webp";
import capela from "@/assets/capela.jpg";
import { fadeUp, fadeIn, stagger, easeLuxe } from "@/lib/motion";

const amenities = [
  "Piscina 4m × 8m sob pergolado de madeira",
  "Deck com churrasqueira e freezer",
  "Quadra poliesportiva com rede de vôlei",
  "Capela de oração no jardim",
  "Espreguiçadeiras de frente para o mar",
  "Estacionamento privativo dentro da propriedade",
  "Wi-Fi em toda a casa",
  "Cozinha equipada e enxoval completo",
];

const RomanNumeral = ({ n }: { n: string }) => (
  <span
    aria-hidden
    className="font-display italic absolute -top-6 -left-2 select-none pointer-events-none"
    style={{ fontSize: "5rem", color: "rgba(160,82,45,0.13)", lineHeight: 1 }}
  >
    {n}
  </span>
);

export const Lazer = () => (
  <section id="estrutura" className="bg-off-white py-20 sm:py-28 md:py-36 px-5 sm:px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={maskReveal}
        className="relative"
      >
        <img
          src={capela}
          alt="Capela de oração no jardim da Casa Robelú"
          loading="lazy"
          decoding="async"
          className="w-full object-cover"
          style={{ aspectRatio: "4/5", borderRadius: 2, boxShadow: "0 30px 60px -20px rgba(0,0,0,0.3)" }}
        />
        <div
          className="hidden md:block absolute -bottom-8 -right-8 w-[42%] overflow-hidden"
          style={{
            border: "8px solid #FAF7F2",
            borderRadius: 2,
            boxShadow: "0 24px 50px -16px rgba(0,0,0,0.35)",
            aspectRatio: "1/1",
          }}
        >
          <img src={piscinaPergolado} alt="Piscina sob pergolado com vista para o mar" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div
          className="hidden md:block absolute -top-6 -left-6 w-[28%] overflow-hidden"
          style={{
            border: "8px solid #FAF7F2",
            borderRadius: 2,
            boxShadow: "0 24px 50px -16px rgba(0,0,0,0.35)",
            aspectRatio: "1/1",
          }}
        >
          <img src={quadraVolei} alt="Quadra de vôlei" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.05, 0.08)}
        className="relative"
      >
        <RomanNumeral n="II" />
        <motion.p variants={fadeUp} className="eyebrow mb-6">Lazer & Estrutura</motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance"
          style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          Tudo o que importa,
          <br />
          <span className="italic" style={{ color: "#A0522D" }}>do deck à capela.</span>
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
          className="text-[17px] sm:text-[18px] leading-[1.7] text-dark-text/90 mb-7"
        >
          Reúna até 25 pessoas em uma estrutura pensada para grupos: piscina de
          4×8m sob pergolado, deck com churrasqueira e freezer, quadra com rede de
          vôlei, espreguiçadeiras de frente pro mar e uma capela no jardim.
          Tudo em uma só casa, sem precisar sair.
        </motion.p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {amenities.map((a) => (
            <motion.li
              key={a}
              variants={fadeUp}
              className="flex items-start gap-3 text-dark-text/92"
              style={{ fontSize: "16px", lineHeight: 1.55 }}
            >
              <span className="mt-2 w-1.5 h-1.5 bg-terracota shrink-0" />
              {a}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);
