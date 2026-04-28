import aerial from "@/assets/gallery-aerial.jpg";
import pool from "@/assets/gallery-pool.jpg";
import veranda from "@/assets/gallery-veranda.jpg";
import cliffs from "@/assets/gallery-cliffs.jpg";
import bbq from "@/assets/gallery-bbq.jpg";

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
        {items.map((it, i) => (
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
      </div>
    </div>
  </section>
);
