import { useReveal } from "@/hooks/useReveal";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Apresentacao } from "@/components/Apresentacao";
import { CasaInteira } from "@/components/CasaInteira";
import { PeNaAreia } from "@/components/PeNaAreia";
import { Lazer } from "@/components/Lazer";
import { EspacoInterno } from "@/components/EspacoInterno";
import { Quartos } from "@/components/Quartos";
import { Gastronomia } from "@/components/Gastronomia";
import { Passeios } from "@/components/Passeios";
import { Regiao } from "@/components/Regiao";
import { Galeria } from "@/components/Galeria";
import { Eventos } from "@/components/Eventos";
import { Hospitalidade } from "@/components/Hospitalidade";
import { Depoimentos } from "@/components/Depoimentos";
import { Stats } from "@/components/Stats";
import { Reservas } from "@/components/Reservas";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useEffect } from "react";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Casa Robelú · Refúgio nas Falésias de Morro Branco · Ceará";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Casa Robelú — refúgio pé na areia em Morro Branco, Beberibe/CE. Até 23 hóspedes, vista 180° para o mar, piscina, vôlei e privacidade total."
    );
  }, []);

  return (
    <main className="bg-off-white text-dark-text overflow-x-hidden">
      <Navbar />
      <Hero />
      <Apresentacao />
      <CasaInteira />
      <PeNaAreia />
      <Lazer />
      <EspacoInterno />
      <Quartos />
      <Gastronomia />
      <Passeios />
      <Regiao />
      <Galeria />
      <Eventos />
      <Hospitalidade />
      <Depoimentos />
      <Stats />
      <Reservas />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
