import g1 from "@/assets/galeria-1.webp";
import g2 from "@/assets/galeria-2.webp";
import g3 from "@/assets/galeria-3.webp";
import g4 from "@/assets/galeria-4.webp";
import g5 from "@/assets/galeria-5.webp";
import g6 from "@/assets/galeria-6.webp";

const tiles = [
  { src: g3, alt: "Vista panorâmica com coqueiros e mar" },
  { src: g1, alt: "Falésia, casa e piscina" },
  { src: g6, alt: "Capelinha com falésia ao fundo" },
  { src: g5, alt: "Área gourmet com churrasqueira" },
  { src: g4, alt: "Deck com mesa e vista para o mar" },
  { src: g2, alt: "Passarela com coqueiros e vista para o mar" },
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

      <div className="reveal galeria-uniform">
        {tiles.map((t, i) => (
          <figure key={i} className="relative overflow-hidden group">
            <img
              src={t.src}
              alt={t.alt}
              loading="lazy"
              decoding="async"
              className="transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-dark-text/0 group-hover:bg-dark-text/30 transition-colors duration-300" />
          </figure>
        ))}
      </div>
    </div>
  </section>
);
