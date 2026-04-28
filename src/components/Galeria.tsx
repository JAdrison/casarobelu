import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";

type Tile = { src: string; alt: string; cls: string };

// Masonry: large (col-span-2), medium x2, tall (row-span-2), small x2
const tiles: Tile[] = [
  { src: g3, alt: "Vista aérea / fachada da Casa Robelú", cls: "md:col-span-2 md:row-span-1 aspect-[16/9]" },
  { src: g6, alt: "Falésia ao pôr do sol", cls: "md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full" },
  { src: g1, alt: "Piscina e área de lazer", cls: "aspect-[4/3]" },
  { src: g4, alt: "Varanda com vista panorâmica", cls: "aspect-[4/3]" },
  { src: g5, alt: "Espaço gourmet e churrasqueira", cls: "aspect-[4/3]" },
  { src: g2, alt: "Espreguiçadeiras à beira-mar", cls: "aspect-[4/3]" },
];

export const Galeria = () => (
  <section className="bg-off-white py-28 md:py-40 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-20">
        <p className="reveal eyebrow mb-6">Galeria</p>
        <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-6xl text-dark-text leading-[1.1] text-balance">
          Cada ângulo é uma tela.
          <br />
          <span className="italic">Cada momento, uma lembrança.</span>
        </h2>
      </div>

      <div className="reveal grid grid-cols-1 md:grid-cols-3 md:auto-rows-[260px] gap-4 md:gap-5">
        {tiles.map((t, i) => (
          <figure
            key={i}
            className={`relative overflow-hidden group shadow-[var(--shadow-elegant)] ${t.cls}`}
          >
            <img
              src={t.src}
              alt={t.alt}
              loading={i < 2 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-text/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </figure>
        ))}
      </div>
    </div>
  </section>
);
