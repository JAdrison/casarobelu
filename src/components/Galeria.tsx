import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";

const slides = [
  { src: g1, title: "Campo de vôlei e piscina" },
  { src: g2, title: "Espreguiçadeiras à beira-mar" },
  { src: g3, title: "Vista do jardim para o oceano" },
  { src: g4, title: "Deck com vista panorâmica" },
  { src: g5, title: "Espaço gourmet e churrasqueira" },
  { src: g6, title: "Capela à beira das falésias" },
];

export const Galeria = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
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

        <div className="reveal relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((s, i) => (
                <div
                  key={s.title}
                  className="relative flex-[0_0_100%] md:flex-[0_0_72%] lg:flex-[0_0_60%] min-w-0 px-2 md:px-4"
                >
                  <figure className="relative overflow-hidden aspect-[4/5] md:aspect-[16/10] shadow-[var(--shadow-elegant)]">
                    <img
                      src={s.src}
                      alt={s.title}
                      loading={i === 0 ? "eager" : "lazy"}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1.4s] ease-out ${
                        selected === i ? "scale-100 opacity-100" : "scale-105 opacity-70"
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark-text/70 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-off-white">
                      <p
                        className="eyebrow eyebrow-light text-[10px] mb-1"
                        style={{ color: "hsl(var(--off-white) / 0.75)" }}
                      >
                        Casa Robelú
                      </p>
                      <h3 className="font-display italic text-xl md:text-2xl">{s.title}</h3>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => emblaApi?.scrollPrev()}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-2 lg:-left-4 w-12 h-12 items-center justify-center bg-off-white/90 hover:bg-off-white text-dark-text shadow-[var(--shadow-elegant)] transition-all hover:scale-105 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => emblaApi?.scrollNext()}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-2 lg:-right-4 w-12 h-12 items-center justify-center bg-off-white/90 hover:bg-off-white text-dark-text shadow-[var(--shadow-elegant)] transition-all hover:scale-105 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                selected === i ? "w-10 bg-terracota" : "w-2 bg-dark-text/20 hover:bg-dark-text/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
