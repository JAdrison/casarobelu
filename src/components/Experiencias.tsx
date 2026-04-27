const cards = [
  {
    label: "Natureza",
    title: "As Falésias de Morro Branco",
    text: "Formações geológicas únicas, cores que vão do branco ao terracota, mares revoltos e piscinas naturais. O cartão-postal do Ceará a poucos passos da casa.",
  },
  {
    label: "Aventura",
    title: "Buggy & Quadriciclo",
    text: "Percorra as dunas e praias desertas da região com a adrenalina dos buggys — o modo mais autêntico de descobrir a costa cearense.",
  },
  {
    label: "Gastronomia",
    title: "Sabores do Nordeste",
    text: "Frutos do mar frescos, culinária local e drinks ao pôr do sol no deck com churrasqueira. Cada refeição aqui é parte da experiência.",
  },
];

export const Experiencias = () => (
  <section id="experiencias" className="relative bg-dark-text text-off-white py-28 md:py-40 px-6 overflow-hidden">
    <div className="absolute inset-0 bg-grain opacity-40" />
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <p className="reveal eyebrow eyebrow-light mb-6">
          <span className="ornament" /> Experiências <span className="ornament" />
        </p>
        <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-6xl leading-[1.1] text-off-white text-balance">
          Além das paredes da casa,
          <br />
          <span className="italic">o Ceará te espera.</span>
        </h2>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <article
            key={c.title}
            className={`reveal reveal-delay-${i + 1} group p-10 border border-off-white/15 bg-off-white/[0.02] hover:bg-off-white/[0.05] hover:border-gold/40 transition-all duration-700`}
          >
            <p className="eyebrow eyebrow-light text-[11px]">{c.label}</p>
            <h3 className="font-display italic text-3xl mt-6 text-off-white">{c.title}</h3>
            <div className="w-10 h-px bg-gold my-6 transition-all duration-500 group-hover:w-20" />
            <p className="font-serif-italic text-lg text-off-white/70 leading-relaxed">{c.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
