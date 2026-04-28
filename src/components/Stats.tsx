const stats = [
  { n: "40", suf: " anos", label: "de história" },
  { n: "8", suf: "", label: "quartos distribuídos" },
  { n: "10", suf: "", label: "pessoas por estadia" },
  { n: "180", suf: "°", label: "de vista para o mar" },
];

export const Stats = () => (
  <section className="bg-terracota text-off-white py-16 sm:py-24 md:py-32 px-5 sm:px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 sm:gap-y-14 gap-x-6 sm:gap-x-8 text-center">
      {stats.map((s, i) => (
        <div key={s.label} className={`reveal reveal-delay-${i + 1}`}>
          <p className="font-display text-4xl sm:text-5xl md:text-7xl leading-none">
            {s.n}
            <span className="text-gold">{s.suf}</span>
          </p>
          <div className="w-8 h-px bg-off-white/40 mx-auto my-5" />
          <p className="font-sans-soft text-[12px] tracking-[0.25em] uppercase text-off-white/80">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);
