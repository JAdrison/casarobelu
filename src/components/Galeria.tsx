import g1 from "@/assets/galeria-1.webp";
import g2 from "@/assets/galeria-2.webp";
import g3 from "@/assets/galeria-3.webp";
import g4 from "@/assets/galeria-4.webp";
import g5 from "@/assets/galeria-5.webp";
import g6 from "@/assets/galeria-6.webp";

type Tile = { src: string; alt: string; cls: string };

/**
 * Masonry grid — desktop (4 cols × 4 rows):
 *  ┌───────────┬─────┬─────┐
 *  │  g3 wide  │ g1  │ g6  │   row 1-2 (g3 spans col 1-2 row 1)
 *  │           │ tall│     │
 *  ├───────────┤     ├─────┤
 *  │  g5 wide  │     │ g4  │   row 2 (g5 spans col 1-2 row 2)
 *  ├───────────┴─────┴─────┤
 *  │       g2 panorâmica    │   row 3 (full width)
 *  └────────────────────────┘
 */
const tiles: Tile[] = [
  {
    src: g3,
    alt: "Vista panorâmica com coqueiros e mar",
    cls: "md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-1",
  },
  {
    src: g1,
    alt: "Falésia, casa e piscina",
    cls: "md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-1",
  },
  {
    src: g6,
    alt: "Capelinha com falésia ao fundo",
    cls: "md:col-span-1 md:row-span-1 md:col-start-4 md:row-start-1",
  },
  {
    src: g5,
    alt: "Área gourmet com churrasqueira",
    cls: "md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-2",
  },
  {
    src: g4,
    alt: "Deck com mesa e vista para o mar",
    cls: "md:col-span-1 md:row-span-1 md:col-start-4 md:row-start-2",
  },
  {
    src: g2,
    alt: "Passarela com coqueiros e vista para o mar",
    cls: "md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-3",
  },
];

export const Galeria = () => (
  <section className="bg-off-white py-20 sm:py-28 md:py-40 px-5 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <p className="reveal eyebrow mb-6">Galeria</p>
        <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl md:text-6xl text-dark-text leading-[1.1] text-balance">
          Cada ângulo é uma tela.
          <br />
          <span className="italic">Cada momento, uma lembrança.</span>
        </h2>
      </div>

      <div
        className="
          reveal
          grid
          grid-cols-2 auto-rows-[140px] gap-1
          sm:auto-rows-[200px] sm:gap-1.5
          md:grid-cols-4 md:grid-rows-[220px_220px_300px] md:gap-2
          lg:grid-rows-[280px_280px_360px]
        "
      >
        {tiles.map((t, i) => (
          <figure
            key={i}
            className={`relative overflow-hidden group ${t.cls}`}
          >
            <img
              src={t.src}
              alt={t.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-dark-text/0 group-hover:bg-dark-text/30 transition-colors duration-300" />
          </figure>
        ))}
      </div>
    </div>
  </section>
);
