import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import quarto1 from "@/assets/quarto-novo-1.png";
import quarto2 from "@/assets/quarto-novo-2.png";
import quarto3 from "@/assets/quarto-novo-3.png";
import quarto4 from "@/assets/quarto-novo-4.png";
import quarto5 from "@/assets/quarto-novo-5.png";
import quarto6 from "@/assets/quarto-novo-6.png";
import { fadeUp, stagger, viewportOnce, easeLuxe } from "@/lib/motion";

const slides = [quarto1, quarto2, quarto3, quarto4, quarto5, quarto6];

const distribuicao = [
  "2 suítes com ar-condicionado (cama casal + cama solteiro)",
  "3 suítes com ventilador (cama casal + cama solteiro)",
  "1 quarto casal com ventilador",
  "1 quarto com 2 camas de solteiro",
  "1 quarto externo com 5 camas de solteiro",
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

const QuartoSlideshow = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: 1 | -1) => {
    setPaused(true);
    setI((p) => (p + dir + slides.length) % slides.length);
  };

  return (
    <div
      className="relative w-full overflow-hidden group"
      style={{
        aspectRatio: "5/4",
        borderRadius: 2,
        boxShadow: "0 30px 60px -20px rgba(0,0,0,0.3)",
      }}
    >
      {slides.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="Quartos da Casa Robelú"
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Foto anterior"
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-off-white/85 hover:bg-off-white text-dark-text shadow-lg backdrop-blur-sm transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
        style={{ borderRadius: 2 }}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Próxima foto"
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-off-white/85 hover:bg-off-white text-dark-text shadow-lg backdrop-blur-sm transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
        style={{ borderRadius: 2 }}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-4 right-4 flex gap-1.5 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Ir para foto ${idx + 1}`}
            onClick={() => {
              setPaused(true);
              setI(idx);
            }}
            className={`h-1 rounded-full transition-all duration-500 ${
              idx === i ? "w-6 bg-off-white" : "w-1.5 bg-off-white/50 hover:bg-off-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const Quartos = () => (
  <section id="quartos" className="bg-off-white py-20 sm:py-28 md:py-36 px-5 sm:px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 1, ease: easeLuxe }}
      >
        <QuartoSlideshow />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.05, 0.08)}
        className="relative"
      >
        <RomanNumeral n="IV" />
        <motion.p variants={fadeUp} className="eyebrow mb-6">Acomodações</motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance"
          style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
        >
          8 quartos,{" "}
          <span className="italic" style={{ color: "#A0522D" }}>25 pessoas, zero concessão.</span>
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
          className="text-base sm:text-[17px] leading-[1.85] sm:leading-[1.9] text-dark-text/75 mb-6"
        >
          Cada quarto pensado para um perfil diferente de hóspede. Casais ganham
          suíte com ar-condicionado, crianças e amigos têm espaços próprios — todos
          com enxoval completo (forros, colchas, fronhas e lençóis incluídos).
        </motion.p>
        <ul className="space-y-3">
          {distribuicao.map((d) => (
            <motion.li
              key={d}
              variants={fadeUp}
              className="flex items-start gap-3 text-dark-text/80 text-[15px]"
            >
              <span className="mt-2 w-1 h-1 bg-terracota shrink-0" />
              {d}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);
