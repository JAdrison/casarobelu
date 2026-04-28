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
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden">
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
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-dark-text/20" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p className="anim-fade-up anim-d1 eyebrow eyebrow-light mb-8">
          <span className="ornament" /> Morro Branco · Ceará <span className="ornament" />
        </p>

        <h1 className="anim-fade-up anim-d2 font-display italic text-off-white text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.05] text-balance max-w-5xl">
          Onde as falésias
          <br />
          encontram o horizonte.
        </h1>

        <p className="anim-fade-up anim-d3 font-serif-italic font-light text-off-white/85 text-xl md:text-2xl mt-8 max-w-2xl text-balance">
          Um refúgio exclusivo em Morro Branco para quem escolhe momentos
          inesquecíveis acima de qualquer coisa.
        </p>

        <div className="anim-fade-up anim-d4 mt-12">
          <a href="#reservas" className="btn-hero">
            Verificar Disponibilidade <span aria-hidden>→</span>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
          <svg width="22" height="36" viewBox="0 0 22 36" fill="none" className="text-off-white/70">
            <rect x="1" y="1" width="20" height="34" rx="10" stroke="currentColor" strokeWidth="1" />
            <circle cx="11" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
};
