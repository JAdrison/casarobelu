import { useEffect, useState } from "react";
import pool from "@/assets/lazer-piscina.webp";
import aerial from "@/assets/acesso-historia.webp";
import quarto1 from "@/assets/quarto-1.webp";
import quarto2 from "@/assets/quarto-2.webp";
import quarto3 from "@/assets/quarto-3.webp";

const quartoSlides = [quarto1, quarto2, quarto3];

const QuartoSlideshow = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % quartoSlides.length), 4500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden shadow-[var(--shadow-elegant)]">
      {quartoSlides.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="Quartos da Casa Robelú"
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-4 right-4 flex gap-1.5 z-10">
        {quartoSlides.map((_, idx) => (
          <span
            key={idx}
            className={`h-1 rounded-full transition-all duration-500 ${
              idx === i ? "w-6 bg-off-white" : "w-1.5 bg-off-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const amenities = [
  "Piscina 4m × 8m (1,40m)",
  "Deck com churrasqueira e freezer",
  "Varanda com redes",
  "Campo de vôlei",
  "Cozinha equipada",
  "Wi-Fi disponível",
  "Enxoval completo",
  "Estacionamento privativo",
];

export const Casa = () => (
  <section id="casa" className="bg-champagne py-20 sm:py-28 md:py-40 px-5 sm:px-6">
    <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28 md:space-y-32">
      {/* 3A */}
      <div id="estrutura" className="casa-block">
        <div className="reveal casa-text">
          <p className="eyebrow mb-6">A Casa</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance">
            Oito quartos. <span className="italic">Uma experiência.</span>
          </h2>
          <div className="w-16 h-px bg-terracota my-6 sm:my-8" />
          <p className="text-base sm:text-[17px] leading-[1.85] sm:leading-[1.9] text-dark-text/75">
            São 8 quartos cuidadosamente distribuídos — 2 suítes com ar-condicionado e
            cama casal, 3 suítes com ventilador, 1 quarto casal com ventilador, 1 quarto
            com 2 camas de solteiro e 1 quarto externo com 5 camas. Um espaço pensado
            para reunir família e amigos sem concessões de conforto.
          </p>
        </div>
        <div className="reveal reveal-delay-1 casa-media">
          <QuartoSlideshow />
        </div>
      </div>

      {/* 3B */}
      <div className="casa-block casa-block--reverse">
        <div className="reveal casa-media">
          <img
            src={pool}
            alt="Piscina e deck com vista para o mar"
            loading="lazy"
            decoding="async"
            className="casa-img"
          />
        </div>
        <div className="reveal reveal-delay-1 casa-text">
          <p className="eyebrow mb-6">Lazer & Conforto</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance">
            Refúgio completo, <span className="italic">do deck ao mar.</span>
          </h2>
          <div className="w-16 h-px bg-terracota my-6 sm:my-8" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {amenities.map((a) => (
              <li key={a} className="flex items-start gap-3 text-dark-text/80 text-[15px]">
                <span className="mt-2 w-1 h-1 bg-terracota shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3C */}
      <div className="casa-block">
        <div className="reveal casa-text">
          <p className="eyebrow mb-6">Acesso & História</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-dark-text leading-[1.1] text-balance">
            Quarenta anos de história
            <br />
            <span className="italic">neste pedaço do Ceará.</span>
          </h2>
          <div className="w-16 h-px bg-terracota my-6 sm:my-8" />
          <p className="text-base sm:text-[17px] leading-[1.85] sm:leading-[1.9] text-dark-text/75">
            O proprietário conhece cada maré, cada trilha, cada segredo de Morro Branco
            há quase 40 anos. O translado é seguro, orientado pelas marés e sem nenhuma
            dificuldade — você chega, desfruta e descansa.
          </p>
        </div>
        <div className="reveal reveal-delay-1 casa-media">
          <img
            src={aerial}
            alt="Vista aérea da Casa Robelú nas falésias"
            loading="lazy"
            decoding="async"
            className="casa-img"
          />
        </div>
      </div>
    </div>
  </section>
);
