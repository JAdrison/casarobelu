import { Wifi, Car, Coffee, Waves } from "lucide-react";
import { motion } from "framer-motion";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const items = [
  { icon: Wifi, title: "Wi-Fi Rápido", desc: "Internet de alta velocidade em toda a casa." },
  { icon: Car, title: "Estacionamento", desc: "Privativo, seguro e dentro da propriedade." },
  { icon: Waves, title: "Piscina 4×8m", desc: "Deck com churrasqueira e vista para o mar." },
  { icon: Coffee, title: "Cozinha Equipada", desc: "Pronta para receber o seu chef ou seu time." },
];

export const Servicos = () => (
  <section className="relative bg-off-white px-5 sm:px-6 -mt-10 md:-mt-16 z-20">
    <motion.div
      className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
      variants={stagger(0.05, 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {items.map((it) => (
        <motion.div
          key={it.title}
          variants={fadeUp}
          className="group bg-off-white text-center p-5 sm:p-6 md:p-7 transition-all duration-500 hover:-translate-y-1"
          style={{
            border: "1px solid rgba(160,82,45,0.12)",
            boxShadow: "0 14px 40px -18px rgba(26,20,16,0.18)",
            borderRadius: 2,
          }}
        >
          <it.icon
            size={26}
            strokeWidth={1.3}
            className="mx-auto transition-colors duration-500 group-hover:text-gold"
            style={{ color: "#A0522D" }}
          />
          <h3
            className="mt-4"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontSize: "13.5px",
              color: "#1A1A1A",
            }}
          >
            {it.title}
          </h3>
          <div className="mx-auto my-3" style={{ width: 22, height: 1, background: "#C4915A" }} />
          <p
            className="font-serif-italic italic leading-snug"
            style={{ color: "#3D2F24", fontSize: "16px", lineHeight: 1.5 }}
          >
            {it.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);
