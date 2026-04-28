import heroImg from "@/assets/hero-casa-aerial.webp";
import { useEffect, useState } from "react";

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
    <section id="top" className="relative min-h-[100svh] md:min-h-[820px] lg:min-h-[900px] w-full overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${y}px, 0) scale(1.08)` }}
      >
        <img
          src={heroImg}
          alt="Falésias de Morro Branco ao pôr do sol — Casa Robelú"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
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

      <div className="relative min-h-[100svh] md:min-h-[820px] lg:min-h-[900px] flex flex-col items-center justify-center text-center px-5 sm:px-6 py-24">
        <span
          aria-hidden
          className="anim-fade-up anim-d1 block mx-auto mb-6 sm:mb-8"
          style={{ width: 60, height: 0, borderTop: "2px solid #C4915A" }}
        />

        <h1
          className="anim-fade-up anim-d2 font-display italic text-off-white leading-[1.05] text-balance max-w-5xl"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            fontWeight: 500,
            textShadow: "0 4px 24px rgba(0,0,0,0.45)",
          }}
        >
          Onde as falésias
          <br />
          encontram o horizonte.
        </h1>

        <p
          className="anim-fade-up anim-d3 font-serif-italic font-light mt-6 sm:mt-8 text-base sm:text-lg md:text-xl px-2"
          style={{
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.08em",
            maxWidth: 520,
          }}
        >
          Um refúgio exclusivo em Morro Branco para quem escolhe momentos
          inesquecíveis acima de qualquer coisa.
        </p>

        <div className="anim-fade-up anim-d4 mt-10 sm:mt-12 w-full sm:w-auto px-4 sm:px-0 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reservas"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto font-sans-soft text-[12px] sm:text-sm uppercase transition-all duration-500 hover:brightness-110 hover:-translate-y-0.5"
            style={{
              background: "#A0522D",
              color: "#FAF7F2",
              padding: "16px 40px",
              letterSpacing: "0.15em",
              borderRadius: "2px",
              boxShadow: "0 14px 36px -14px rgba(160,82,45,0.6)",
            }}
          >
            Verificar Disponibilidade <span aria-hidden>→</span>
          </a>
          <a
            href="#casa"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto font-sans-soft text-[12px] sm:text-sm uppercase transition-all duration-500 hover:bg-white/10 hover:-translate-y-0.5"
            style={{
              background: "transparent",
              color: "#FAF7F2",
              padding: "16px 40px",
              letterSpacing: "0.15em",
              borderRadius: "2px",
              border: "1px solid rgba(255,255,255,0.7)",
            }}
          >
            Conhecer a Casa
          </a>
        </div>

        {/* Badge de localização */}
        <div
          className="anim-fade-up anim-d3 absolute bottom-6 sm:bottom-10 left-5 sm:left-8 inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md"
          style={{
            background: "rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "2px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4915A" strokeWidth="1.6" className="shrink-0">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span
            className="text-[10px] sm:text-[11px] text-off-white"
            style={{ fontFamily: "'Quicksand', sans-serif", fontVariant: "small-caps", letterSpacing: "0.22em", fontWeight: 500 }}
          >
            Morro Branco · Ceará
          </span>
        </div>

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
