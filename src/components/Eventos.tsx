import bg from "@/assets/cta-night.webp";

const WHATSAPP =
  "https://wa.me/5585997640313?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20evento%20na%20Casa%20Robel%C3%BA.";

export const Eventos = () => (
  <section className="relative py-24 sm:py-32 md:py-40 px-5 sm:px-6 overflow-hidden">
    <div className="absolute inset-0">
      <img src={bg} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.8) 100%)",
        }}
      />
    </div>

    <div className="relative max-w-3xl mx-auto text-center text-off-white">
      <p className="reveal eyebrow eyebrow-light mb-6">
        <span className="ornament" /> Eventos <span className="ornament" />
      </p>
      <span
        aria-hidden
        className="reveal reveal-delay-1 block mx-auto"
        style={{ width: 48, height: 0, borderTop: "1px solid #C4915A", marginBottom: 24 }}
      />
      <h2
        className="reveal reveal-delay-1 font-display leading-[1.1] text-balance"
        style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400 }}
      >
        Aniversários e <span className="italic" style={{ color: "#C4915A" }}>Confraternizações</span>
      </h2>
      <p
        className="reveal reveal-delay-2 mx-auto font-serif-italic italic mt-6"
        style={{ maxWidth: 540, fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
      >
        Reúna até 10 pessoas num cenário que dispensa decoração.
      </p>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="reveal reveal-delay-3 inline-flex items-center justify-center gap-3 mt-10 sm:mt-12 font-sans-soft text-[12px] sm:text-sm uppercase transition-all duration-500 hover:brightness-110 hover:-translate-y-0.5"
        style={{
          background: "#A0522D",
          color: "#FAF7F2",
          padding: "16px 40px",
          letterSpacing: "0.15em",
          borderRadius: "2px",
          boxShadow: "0 14px 36px -14px rgba(160,82,45,0.6)",
        }}
      >
        Solicitar Orçamento no WhatsApp <span aria-hidden>→</span>
      </a>
    </div>
  </section>
);
