import { motion } from "framer-motion";
import bemvindo from "@/assets/regiao-bemvindo.jpg";
import vila from "@/assets/regiao-vila.jpg";
import pescador from "@/assets/regiao-pescador.jpg";
import { fadeUp, stagger, viewportOnce, easeLuxe } from "@/lib/motion";

const items = [
  {
    src: bemvindo,
    label: "Bem-vindo",
    title: "Morro Branco",
    desc: "O cartão-postal de boas-vindas, onde o azul do mar encontra as cores da vila.",
  },
  {
    src: vila,
    label: "A Vila",
    title: "Vista da falésia",
    desc: "Barracas de praia, coqueirais e o azul intenso do Atlântico — a alma do lugar.",
  },
  {
    src: pescador,
    label: "Cultura",
    title: "Praça da Mentira",
    desc: "Onde pescadores e contadores de história se reúnem — tradição viva do Ceará.",
  },
];

export const Regiao = () => (
  <section className="bg-off-white py-20 sm:py-28 md:py-36 px-5 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-12 sm:mb-16 md:mb-20"
        variants={stagger(0.1, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.p variants={fadeUp} className="eyebrow mb-6">
          <span className="ornament" /> A Região <span className="ornament" />
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
          Morro Branco te recebe.
          <br />
          <span className="italic" style={{ color: "#A0522D" }}>O Ceará te conquista.</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-7"
        variants={stagger(0.1, 0.14)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {items.map((it) => (
          <motion.figure key={it.title} variants={fadeUp} className="group">
            <div
              className="relative overflow-hidden bg-off-white"
              style={{
                boxShadow: "0 24px 60px -20px rgba(26,20,16,0.35)",
                borderRadius: 2,
                aspectRatio: "3/4",
              }}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-text/85 via-dark-text/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-off-white">
                <p
                  className="uppercase"
                  style={{ fontFamily: "'Quicksand', sans-serif", color: "#E0B582", fontSize: "13px", letterSpacing: "0.2em", fontWeight: 600 }}
                >
                  {it.label}
                </p>
                <h3 className="font-display italic text-2xl sm:text-3xl mt-2 text-off-white">
                  {it.title}
                </h3>
                <div className="w-10 h-px bg-gold my-3 transition-all duration-500 group-hover:w-20" />
                <p className="font-serif-italic italic text-off-white/90 leading-snug" style={{ fontSize: "16px" }}>
                  {it.desc}
                </p>
              </figcaption>
            </div>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  </section>
);
