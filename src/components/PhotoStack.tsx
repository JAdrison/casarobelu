import { motion } from "framer-motion";
import { easeLuxe } from "@/lib/motion";

interface Props {
  imageBack: string;
  imageFront: string;
  altBack?: string;
  altFront?: string;
}

export const PhotoStack = ({ imageBack, imageFront, altBack = "", altFront = "" }: Props) => (
  <div className="relative w-full" style={{ aspectRatio: "5/4" }}>
    {/* Back image */}
    <motion.div
      initial={{ opacity: 0, x: -30, y: -10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, ease: easeLuxe }}
      className="absolute top-0 left-0 w-[70%] h-[78%] overflow-hidden"
      style={{
        boxShadow: "0 30px 60px -20px rgba(0,0,0,0.25)",
        border: "8px solid #FAF7F2",
        borderRadius: 2,
      }}
    >
      <img src={imageBack} alt={altBack} loading="lazy" decoding="async" className="w-full h-full object-cover" />
    </motion.div>

    {/* Front image — overlapping */}
    <motion.div
      initial={{ opacity: 0, x: 30, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, ease: easeLuxe, delay: 0.18 }}
      className="absolute bottom-0 right-0 w-[62%] h-[68%] overflow-hidden"
      style={{
        boxShadow: "0 40px 80px -24px rgba(0,0,0,0.35)",
        border: "8px solid #FAF7F2",
        borderRadius: 2,
      }}
    >
      <img src={imageFront} alt={altFront} loading="lazy" decoding="async" className="w-full h-full object-cover" />
    </motion.div>

    {/* Decorative dot pattern */}
    <div
      aria-hidden
      className="hidden md:block absolute -bottom-6 -left-6 w-24 h-24 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(rgba(160,82,45,0.4) 1.2px, transparent 1.2px)",
        backgroundSize: "10px 10px",
      }}
    />
  </div>
);
