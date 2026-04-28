import { useEffect, useState } from "react";
import aerial from "@/assets/gallery-aerial.jpg";
import pool from "@/assets/gallery-pool.jpg";
import veranda from "@/assets/gallery-veranda.jpg";
import cliffs from "@/assets/gallery-cliffs.jpg";
import bbq from "@/assets/gallery-bbq.jpg";
import quarto1 from "@/assets/quarto-1.jpg";
import quarto2 from "@/assets/quarto-2.jpg";
import quarto3 from "@/assets/quarto-3.jpg";

const quartoSlides = [quarto1, quarto2, quarto3];

const QuartoSlide = ({ cls }: { cls: string }) => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % quartoSlides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <figure className={`reveal reveal-delay-2 group relative overflow-hidden ${cls}`}>
      {quartoSlides.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="Quarto da Casa Robelú"
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-terracota/0 group-hover:bg-terracota/60 transition-colors duration-700" />
      <figcaption className="absolute inset-x-0 bottom-0 p-6 text-off-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
        <p className="eyebrow eyebrow-light text-[10px] mb-1" style={{ color: "hsl(var(--off-white) / 0.7)" }}>
          Casa Robelú
        </p>
        <h3 className="font-display italic text-xl">Acomodações</h3>
      </figcaption>
      <div className="absolute bottom-3 right-3 flex gap-1.5 z-10">
        {quartoSlides.map((_, idx) => (
          <span
            key={idx}
            className={`h-1 rounded-full transition-all duration-500 ${
              idx === i ? "w-5 bg-off-white" : "w-1.5 bg-off-white/50"
            }`}
          />
        ))}
      </div>
    </figure>
  );
};

type Item = { src: string; title: string; cls: string };
const items: Item[] = [
  { src: aerial, title: "Vista aérea", cls: "md:col-span-2 md:row-span-1 aspect-[16/10]" },
  { src: pool, title: "Piscina ao entardecer", cls: "aspect-square" },
  { src: veranda, title: "Varanda com redes", cls: "aspect-square" },
  { src: cliffs, title: "Falésia ao pôr do sol", cls: "md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full" },
  { src: bbq, title: "Deck e churrasqueira", cls: "aspect-square" },
];

export const Galeria = () => (
  <section className="bg-off-white py-28 md:py-40 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="reveal eyebrow mb-6">Galeria</p>
        <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-6xl text-dark-text leading-[1.1] text-balance">
          Cada ângulo é uma tela.
          <br />
          <span className="italic">Cada momento, uma lembrança.</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[280px]">
        {items.slice(0, 4).map((it, i) => (
          <figure
            key={it.title}
            className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden ${it.cls}`}
          >
            <img
              src={it.src}
              alt={it.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-terracota/0 group-hover:bg-terracota/60 transition-colors duration-700" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-off-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <p className="eyebrow eyebrow-light text-[10px] mb-1" style={{ color: "hsl(var(--off-white) / 0.7)" }}>
                Casa Robelú
              </p>
              <h3 className="font-display italic text-xl">{it.title}</h3>
            </figcaption>
          </figure>
        ))}
        {items.slice(4).map((it, i) => (
          <figure
            key={it.title}
            className={`reveal reveal-delay-${((i + 4) % 4) + 1} group relative overflow-hidden ${it.cls}`}
          >
            <img
              src={it.src}
              alt={it.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-terracota/0 group-hover:bg-terracota/60 transition-colors duration-700" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-off-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <p className="eyebrow eyebrow-light text-[10px] mb-1" style={{ color: "hsl(var(--off-white) / 0.7)" }}>
                Casa Robelú
              </p>
              <h3 className="font-display italic text-xl">{it.title}</h3>
            </figcaption>
          </figure>
        ))}
        <QuartoSlide cls="aspect-square" />
      </div>
    </div>
  </section>
);
