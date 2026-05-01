import parapente from "@/assets/parapente.webp";
import bgFalesias from "@/assets/exp-falesias.jpg";
import bgBuggy from "@/assets/exp-buggy.jpg";
import bgSabores from "@/assets/exp-sabores.jpg";

const cards = [
  {
    label: "Natureza",
    title: "As Falésias de Morro Branco",
    text: "Formações geológicas únicas, cores que vão do branco ao terracota, mares revoltos e piscinas naturais. O cartão-postal do Ceará a poucos passos da casa.",
    bg: bgFalesias,
  },
  {
    label: "Aventura",
    title: "Buggy & Quadriciclo",
    text: "Percorra as dunas e praias desertas da região com a adrenalina dos buggys — o modo mais autêntico de descobrir a costa cearense.",
    bg: bgBuggy,
  },
  {
    label: "Gastronomia",
    title: "Sabores do Nordeste",
    text: "Frutos do mar frescos, culinária local e drinks ao pôr do sol no deck com churrasqueira. Cada refeição aqui é parte da experiência.",
    bg: bgSabores,
  },
];

export const Experiencias = () => (
  <section id="experiencias" className="relative bg-dark-text text-off-white py-20 sm:py-28 md:py-40 px-5 sm:px-6 overflow-hidden">
    <div className="absolute inset-0 bg-grain opacity-40" />
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <p className="reveal eyebrow eyebrow-light mb-6">
          <span className="ornament" /> Experiências <span className="ornament" />
        </p>
        <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl md:text-6xl leading-[1.1] text-off-white text-balance">
          Além das paredes da casa,
          <br />
          <span className="italic">o Ceará te espera.</span>
        </h2>
      </div>

      <div className="mt-14 sm:mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((c, i) => (
          <article
            key={c.title}
            className={`reveal reveal-delay-${i + 1} group relative overflow-hidden p-7 sm:p-10 border border-off-white/15 hover:border-gold/40 transition-all duration-700 min-h-[420px] flex flex-col justify-end`}
          >
            {/* Background image */}
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${c.bg})` }}
            />
            {/* Dark gradient for legibility */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-dark-text via-dark-text/75 to-dark-text/20 group-hover:from-dark-text group-hover:via-dark-text/65 transition-colors duration-700"
            />
            <div className="relative">
              <p className="eyebrow eyebrow-light">{c.label}</p>
              <h3 className="font-display italic text-2xl sm:text-3xl mt-5 sm:mt-6 text-off-white">{c.title}</h3>
              <div className="w-10 h-px bg-gold my-5 sm:my-6 transition-all duration-500 group-hover:w-20" />
              <p className="font-serif-italic text-base sm:text-lg text-off-white/85 leading-relaxed">{c.text}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Highlight: Paragliding */}
      <div className="mt-16 sm:mt-24 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        <figure className="reveal relative overflow-hidden" style={{ borderRadius: 2, boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)" }}>
          <img
            src={parapente}
            alt="Parapente sobrevoando as falésias e o mar"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "4/5" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-text/60 via-transparent to-transparent" />
        </figure>
        <div className="reveal reveal-delay-1">
          <p className="eyebrow eyebrow-light mb-5">Em destaque</p>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-off-white text-balance" style={{ fontWeight: 400 }}>
            Voe sobre as falésias.
            <br />
            <span className="italic text-gold">Uma vista que não cabe em fotos.</span>
          </h3>
          <div className="w-16 h-px bg-gold my-6 sm:my-8" />
          <p className="font-serif-italic text-base sm:text-lg text-off-white/75 leading-relaxed max-w-xl">
            A poucos minutos da casa, em Canoa Quebrada, você decola de parapente e
            vê de cima o que torna esse pedaço do Ceará único: as cores das falésias,
            o azul do mar e a praia desenhando o horizonte.
          </p>
          <a
            href="#reservas"
            className="inline-flex items-center gap-2 mt-8 uppercase text-gold hover:text-off-white transition-colors"
            style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "14px", letterSpacing: "0.14em", fontWeight: 600, borderBottom: "1px solid currentColor", paddingBottom: 4 }}
          >
            Reservar a estadia <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);
