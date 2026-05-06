import heroImg from "@/assets/aerea-falesia.webp";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { easeLuxe, stagger, wordReveal } from "@/lib/motion";

const TITLE_LINE_1 = ["Onde", "as", "falésias"];
const TITLE_LINE_2 = ["encontram", "o", "horizonte."];

export const Hero = () => {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let pending = false;
    const onScroll = () => {
      if (pending) return;
      pending = true;
      raf = requestAnimationFrame(() => {
        setY(window.scrollY * 0.3);
        pending = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[88svh] md:min-h-[760px] lg:min-h-[820px] w-full overflow-hidden"
    >
      {/* Background w/ Ken Burns */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${y}px, 0)` }}
      >
        <motion.img
          src={heroImg}
          alt="Falésias de Morro Branco ao pôr do sol — Casa Robelú"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
        {/* Cinematic gradient — left-to-right + bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--terracota) / 0.12) 0%, hsl(var(--ocean) / 0.08) 100%)",
          }}
        />
      </div>

      {/* Content — left aligned */}
      <div className="relative min-h-[88svh] md:min-h-[760px] lg:min-h-[820px] flex items-center px-5 sm:px-10 md:px-14 lg:px-20 py-24">
        <motion.div
          className="max-w-2xl w-full"
          variants={stagger(0.25, 0.12)}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow with line */}
          <motion.div
            className="flex items-center gap-3 mb-6 sm:mb-8"
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0, transition: { duration: 1, ease: easeLuxe } },
            }}
          >
            <span aria-hidden style={{ width: 48, height: 1, background: "#C4915A" }} />
            <span
              className="uppercase"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: "#E0B582",
                letterSpacing: "0.22em",
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              Morro Branco · Ceará
            </span>
          </motion.div>

          {/* Headline — word by word */}
          <h1
            className="font-display text-off-white leading-[1.04] text-balance"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5.2rem)",
              fontWeight: 400,
              letterSpacing: "-0.015em",
              textShadow: "0 4px 24px rgba(0,0,0,0.45)",
            }}
          >
            <span className="block overflow-hidden">
              {TITLE_LINE_1.map((w, i) => (
                <motion.span key={i} variants={wordReveal} className="inline-block mr-[0.25em]">
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden italic" style={{ color: "#F5E6D0" }}>
              {TITLE_LINE_2.map((w, i) => (
                <motion.span key={i} variants={wordReveal} className="inline-block mr-[0.25em]">
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            className="font-serif-italic mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl"
            style={{
              color: "rgba(255,255,255,0.95)",
              letterSpacing: "0.015em",
              maxWidth: 560,
              lineHeight: 1.55,
              fontWeight: 400,
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 1, ease: easeLuxe } },
            }}
          >
            Pé na areia, vista 180° e estrutura completa para até 25 pessoas.
            Um refúgio em Morro Branco para quem não aceita o comum.
          </motion.p>

          <motion.div
            className="mt-9 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 1, ease: easeLuxe, delay: 0.2 } },
            }}
          >
            <a
              href="#reservas"
              className="group relative inline-flex items-center justify-center gap-3 font-sans-soft uppercase transition-all duration-500 hover:-translate-y-0.5 overflow-hidden"
              style={{
                background: "#A0522D",
                color: "#FAF7F2",
                padding: "18px 40px",
                fontSize: "14px",
                letterSpacing: "0.14em",
                fontWeight: 600,
                borderRadius: "2px",
                boxShadow: "0 14px 36px -14px rgba(160,82,45,0.6)",
              }}
            >
              <span className="relative z-10">Verificar Disponibilidade</span>
              <span aria-hidden className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">→</span>
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
                }}
              />
            </a>
            <a
              href="#casa"
              className="inline-flex items-center justify-center gap-3 font-sans-soft uppercase transition-all duration-500 hover:bg-white/10 hover:-translate-y-0.5"
              style={{
                background: "transparent",
                color: "#FAF7F2",
                padding: "18px 40px",
                fontSize: "14px",
                letterSpacing: "0.14em",
                fontWeight: 600,
                borderRadius: "2px",
                border: "1px solid rgba(255,255,255,0.7)",
              }}
            >
              Conhecer a Casa
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom-right floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLuxe, delay: 1.2 }}
          className="hidden md:flex absolute bottom-10 right-10 items-center gap-3 px-5 py-3 backdrop-blur-md"
          style={{
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(196,145,90,0.35)",
            borderRadius: "2px",
          }}
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(196,145,90,0.18)", border: "1px solid #C4915A" }}>
            <span className="font-display italic text-gold text-lg">R</span>
          </div>
          <div>
            <p className="uppercase text-gold" style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "12px", letterSpacing: "0.18em", fontWeight: 600 }}>
              Desde 1986
            </p>
            <p className="text-off-white/95 font-serif-italic italic" style={{ fontSize: "14px" }}>
              40 anos recebendo
            </p>
          </div>
        </motion.div>

        <div className="hidden sm:block absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
          <svg width="22" height="36" viewBox="0 0 22 36" fill="none" className="text-off-white/70">
            <rect x="1" y="1" width="20" height="34" rx="10" stroke="currentColor" strokeWidth="1" />
            <circle cx="11" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
};
