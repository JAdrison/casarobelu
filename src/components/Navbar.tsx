import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import logoRobelu from "@/assets/logo-robelu-transparent.png";

const links = [
  { href: "#casa", label: "A Casa" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#reservas", label: "Reservas" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-off-white/95 backdrop-blur-md shadow-[0_1px_0_hsl(var(--border))]" : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[2px] origin-left"
        style={{ background: "linear-gradient(90deg, #A0522D, #C4915A)", scaleX: progress }}
      />

      <nav className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 h-16 sm:h-20 flex items-center justify-between">
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center"
          aria-label="Casa Robelú — início"
        >
          <img
            src={logoRobelu}
            alt="Casa Robelú"
            className={`h-10 sm:h-14 w-auto transition-all duration-500 ${scrolled ? "" : "brightness-0 invert"}`}
            style={!scrolled ? { filter: "brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0,0,0,0.45))" } : undefined}
          />
        </motion.a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative font-sans-soft text-[13px] tracking-[0.2em] uppercase transition-colors group ${
                  scrolled ? "text-dark-text hover:text-terracota" : "text-off-white/85 hover:text-off-white"
                }`}
              >
                {l.label}
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-1 h-px scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: "#C4915A" }}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5585997640313?text=Ol%C3%A1!%20Tenho%20interesse%20em%20reservar%20a%20Casa%20Robel%C3%BA."
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-[12px] tracking-[0.2em] uppercase bg-terracota text-off-white hover:bg-terracota/90 transition-all shadow-[var(--shadow-elegant)]"
        >
          Reservar via WhatsApp
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className={`md:hidden flex flex-col gap-1.5 ${scrolled || open ? "text-dark-text" : "text-off-white"}`}
        >
          <span className={`block h-px w-7 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-7 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-7 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden bg-off-white border-t border-border"
        >
          <ul className="px-8 py-8 space-y-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-2xl text-dark-text hover:text-terracota transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/5585997640313?text=Ol%C3%A1!%20Tenho%20interesse%20em%20reservar%20a%20Casa%20Robel%C3%BA."
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn-hero mt-4 w-full justify-center"
              >
                Reservar via WhatsApp
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};
