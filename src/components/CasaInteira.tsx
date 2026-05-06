import { motion } from "framer-motion";
import piscinaPergolado from "@/assets/piscina-pergolado.webp";
import { fadeUp, stagger, viewportOnce, easeLuxe } from "@/lib/motion";

const inclusos = [
  "Até 25 pessoas · 8 quartos",
  "Piscina 4×8m com pergolado de madeira",
  "Quadra de vôlei e capela própria",
  "Deck com churrasqueira à beira-mar",
  "Pé na areia · vista 180° para o mar",
  "Enxoval completo (lençóis, colchas, fronhas)",
  "Wi-Fi e ar-condicionado nas suítes",
  "Estacionamento privativo",
];

export const CasaInteira = () => (
  <section
    id="conceito"
    className="bg-champagne py-24 md:py-36 px-5 sm:px-6 relative overflow-hidden"
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <motion.figure
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 1.1, ease: easeLuxe }}
        className="relative overflow-hidden order-2 md:order-1"
        style={{
          boxShadow: "0 40px 80px -24px rgba(26,20,16,0.45)",
          borderRadius: 2,
          aspectRatio: "4/5",
        }}
      >
        <img
          src={piscinaPergolado}
          alt="Piscina e área externa da Casa Robelú"
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
        className="order-1 md:order-2"
      >
        <motion.p variants={fadeUp} className="eyebrow mb-6">
          O Conceito
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance"
          style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          A casa é{" "}
          <span className="italic" style={{ color: "#A0522D" }}>
            toda sua.
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
          className="text-[17px] leading-[1.75] text-dark-text/85 mb-7"
        >
          Aluguel exclusivo da casa inteira — sem dividir a piscina, o gramado
          ou a vista com ninguém. Pensada para reunir família e amigos com
          conforto, privacidade e o melhor do litoral cearense.
        </motion.p>
        <motion.ul
          variants={stagger(0.04, 0.04)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8"
        >
          {inclusos.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-start gap-3 text-dark-text/85 text-[15px] leading-[1.5]"
            >
              <span className="mt-2 w-1.5 h-1.5 bg-terracota shrink-0 rounded-full" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <motion.a
          variants={fadeUp}
          href="#reservas"
          className="inline-flex items-center gap-2 uppercase text-terracota hover:text-gold transition-colors"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.16em",
            fontWeight: 600,
            borderBottom: "1px solid currentColor",
            paddingBottom: 4,
          }}
        >
          Solicitar orçamento <span aria-hidden>→</span>
        </motion.a>
      </motion.div>
    </div>
  </section>
);
