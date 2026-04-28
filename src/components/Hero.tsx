import heroImg from "@/assets/hero-casa-aerial.jpg";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY * 0.3);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] sm:min-h-[680px] w-full overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${y}px) scale(1.08)` }}
      >
        <img
          src={heroImg}
          alt="Falésias de Morro Branco ao pôr do sol — Casa Robelú"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--dark-text) / 0.35) 0%, hsl(var(--dark-text) / 0.25) 40%, hsl(var(--dark-text) / 0.7) 80%, hsl(var(--dark-text) / 0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--terracota) / 0.15) 0%, hsl(var(--ocean) / 0.1) 100%)",
          }}
        />
      </div>

      <div className="relative min-h-[100svh] sm:min-h-[680px] flex flex-col items-center justify-center text-center px-5 sm:px-6 py-24">
        <p
          className="anim-fade-up anim-d1 font-sans-soft text-[10px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-off-white mb-6 sm:mb-8"
          style={{ textShadow: "0 2px 12px hsl(var(--dark-text) / 0.6)" }}
        >
          <span className="ornament" /> Morro Branco · Ceará <span className="ornament" />
        </p>

        <h1 className="anim-fade-up anim-d2 font-display italic text-off-white text-[2.5rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.05] text-balance max-w-5xl">
          Onde as falésias
          <br />
          encontram o horizonte.
        </h1>

        <p className="anim-fade-up anim-d3 font-serif-italic font-light text-off-white/85 text-base sm:text-xl md:text-2xl mt-6 sm:mt-8 max-w-2xl text-balance px-2">
          Um refúgio exclusivo em Morro Branco para quem escolhe momentos
          inesquecíveis acima de qualquer coisa.
        </p>

        <div className="anim-fade-up anim-d4 mt-10 sm:mt-12 w-full sm:w-auto px-4 sm:px-0">
          <a href="#reservas" className="btn-hero w-full sm:w-auto justify-center">
            Verificar Disponibilidade <span aria-hidden>→</span>
          </a>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
          <svg width="22" height="36" viewBox="0 0 22 36" fill="none" className="text-off-white/70">
            <rect x="1" y="1" width="20" height="34" rx="10" stroke="currentColor" strokeWidth="1" />
            <circle cx="11" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
};
