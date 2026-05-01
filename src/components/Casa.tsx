import { motion } from "framer-motion";
import pool from "@/assets/lazer-piscina.webp";
import aerial from "@/assets/acesso-historia.webp";
import bbq from "@/assets/gallery-bbq.webp";
import veranda from "@/assets/gallery-veranda.webp";
import quarto1 from "@/assets/quarto-1.webp";
import quarto2 from "@/assets/quarto-2.webp";
import { PhotoStack } from "./PhotoStack";
import { fadeUp, stagger, maskReveal, viewportOnce, easeLuxe } from "@/lib/motion";

const amenities = [
  "Piscina 4m × 8m (1,40m)",
  "Deck com churrasqueira e freezer",
  "Varanda com redes",
  "Campo de vôlei",
  "Cozinha equipada",
  "Wi-Fi disponível",
  "Enxoval completo",
  "Estacionamento privativo",
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

export const Casa = () => (
  <section id="casa" className="bg-champagne py-20 sm:py-28 md:py-36 px-5 sm:px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32 md:space-y-36">
      {/* I — Quartos com PhotoStack */}
      <div id="estrutura" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="order-2 md:order-1"
        >
          <PhotoStack imageBack={quarto1} imageFront={quarto2} altBack="Suíte" altFront="Quarto familiar" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.05, 0.1)}
          className="order-1 md:order-2 relative"
        >
          <RomanNumeral n="I" />
          <motion.p variants={fadeUp} className="eyebrow mb-6 relative">A Casa</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance"
          >
            Oito quartos. <span className="italic">Uma experiência.</span>
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
            São 8 quartos cuidadosamente distribuídos — 2 suítes com ar-condicionado e
            cama casal, 3 suítes com ventilador, 1 quarto casal com ventilador, 1 quarto
            com 2 camas de solteiro e 1 quarto externo com 5 camas. Um espaço pensado
            para reunir família e amigos sem concessões de conforto.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#galeria"
            className="inline-flex items-center gap-2 mt-8 text-[12px] uppercase tracking-[0.2em] text-terracota hover:text-gold transition-colors"
            style={{ fontFamily: "'Quicksand', sans-serif", borderBottom: "1px solid currentColor", paddingBottom: 4 }}
          >
            Ver Galeria <span aria-hidden>→</span>
          </motion.a>
        </motion.div>
      </div>

      {/* II — Lazer com imagem editorial */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={maskReveal}
          className="relative"
        >
          <img
            src={pool}
            alt="Piscina e deck com vista para o mar"
            loading="lazy"
            decoding="async"
            className="w-full object-cover"
            style={{ aspectRatio: "5/4", borderRadius: 2, boxShadow: "0 30px 60px -20px rgba(0,0,0,0.3)" }}
          />
          {/* Inset polaroid */}
          <div
            className="hidden md:block absolute -bottom-8 -right-8 w-[40%] overflow-hidden"
            style={{
              border: "8px solid #FAF7F2",
              borderRadius: 2,
              boxShadow: "0 24px 50px -16px rgba(0,0,0,0.35)",
              aspectRatio: "1/1",
            }}
          >
            <img src={bbq} alt="Área gourmet" loading="lazy" className="w-full h-full object-cover" />
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
          <motion.p variants={fadeUp} className="eyebrow mb-6">Lazer & Conforto</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance"
          >
            Refúgio completo, <span className="italic">do deck ao mar.</span>
          </motion.h2>
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              show: { scaleX: 1, transition: { duration: 0.9, ease: easeLuxe } },
            }}
            className="w-16 h-px bg-terracota my-6 sm:my-8 origin-left"
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {amenities.map((a) => (
              <motion.li
                key={a}
                variants={fadeUp}
                className="flex items-start gap-3 text-dark-text/80 text-[15px]"
              >
                <span className="mt-2 w-1 h-1 bg-terracota shrink-0" />
                {a}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* III — Acesso & História */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.05, 0.08)}
          className="order-2 md:order-1 relative"
        >
          <RomanNumeral n="III" />
          <motion.p variants={fadeUp} className="eyebrow mb-6">Acesso & História</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance"
          >
            Quarenta anos de história
            <br />
            <span className="italic">neste pedaço do Ceará.</span>
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
            O proprietário conhece cada maré, cada trilha, cada segredo de Morro Branco
            há quase 40 anos. O translado é seguro, orientado pelas marés e sem nenhuma
            dificuldade — você chega, desfruta e descansa.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={maskReveal}
          className="order-1 md:order-2 relative"
        >
          <img
            src={aerial}
            alt="Vista aérea da Casa Robelú nas falésias"
            loading="lazy"
            decoding="async"
            className="w-full object-cover"
            style={{ aspectRatio: "5/4", borderRadius: 2, boxShadow: "0 30px 60px -20px rgba(0,0,0,0.3)" }}
          />
          <div
            className="hidden md:block absolute -top-8 -left-8 w-[38%] overflow-hidden"
            style={{
              border: "8px solid #FAF7F2",
              borderRadius: 2,
              boxShadow: "0 24px 50px -16px rgba(0,0,0,0.35)",
              aspectRatio: "1/1",
            }}
          >
            <img src={veranda} alt="Varanda" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
