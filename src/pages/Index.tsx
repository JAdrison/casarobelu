import { useReveal } from "@/hooks/useReveal";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Promise } from "@/components/Promise";
import { Casa } from "@/components/Casa";
import { Experiencias } from "@/components/Experiencias";
import { Galeria } from "@/components/Galeria";
import { Depoimentos } from "@/components/Depoimentos";

import { Stats } from "@/components/Stats";
import { Reservas } from "@/components/Reservas";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Casa Robelú · Refúgio nas Falésias de Morro Branco · Ceará";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Casa Robelú — refúgio exclusivo nas falésias de Morro Branco, Beberibe/CE. Até 10 hóspedes, vista 180° para o mar e privacidade total.");
  }, []);

  return (
    <main className="bg-off-white text-dark-text overflow-x-hidden">
      <Navbar />
      <Hero />
      <Promise />
      <Casa />
      <Experiencias />
      <Galeria />
      <Depoimentos />
      
      <Stats />
      <Reservas />
      <Footer />
    </main>
  );
};

export default Index;
