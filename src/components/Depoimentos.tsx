const items = [
  {
    text: "A vista para as falésias ao amanhecer foi inesquecível. Reunimos a família inteira e todos querem voltar.",
    name: "Família Albuquerque",
    city: "Fortaleza",
  },
  {
    text: "Privacidade, conforto e uma vista que você não encontra em hotel nenhum. Voltamos no Réveillon.",
    name: "Grupo de amigos",
    city: "Fortaleza",
  },
  {
    text: "Do café da manhã na varanda ao último mergulho na piscina — tudo impecável. Nosso refúgio favorito no Ceará.",
    name: "Família Carneiro",
    city: "Fortaleza",
  },
];

export const Depoimentos = () => (
  <section className="bg-champagne py-20 sm:py-28 md:py-40 px-5 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14 sm:mb-20">
        <p className="reveal eyebrow mb-6">Hóspedes</p>
        <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl md:text-5xl text-dark-text italic">
          Quem chega, volta.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {items.map((t, i) => (
          <figure
            key={t.name}
            className={`reveal reveal-delay-${i + 1} relative bg-off-white p-8 sm:p-10 md:p-12 border-t-2 border-terracota/30`}
          >
            <span
              aria-hidden
              className="absolute top-2 left-6 font-serif-italic text-[120px] leading-none text-terracota/20 select-none"
            >
              “
            </span>
            <blockquote className="relative font-serif-italic italic text-base sm:text-lg md:text-xl text-dark-text leading-relaxed">
              {t.text}
            </blockquote>
            <figcaption className="mt-8 pt-6 border-t border-border">
              <p className="font-sans-soft text-[13px] tracking-[0.2em] uppercase text-terracota">{t.name}</p>
              <p className="font-serif-italic italic text-muted-foreground mt-1">{t.city}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
