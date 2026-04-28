import { useEffect, useState } from "react";

const links = [
  { href: "#casa", label: "A Casa" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#reservas", label: "Reservas" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#top"
          style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 }}
          className={`text-lg sm:text-2xl uppercase tracking-[0.12em] sm:tracking-[0.15em] ${scrolled ? "text-terracota" : "text-off-white"}`}
        >
          CASA ROBELÚ
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-sans-soft text-[13px] tracking-[0.2em] uppercase transition-colors ${
                  scrolled ? "text-dark-text hover:text-terracota" : "text-off-white/85 hover:text-off-white"
                }`}
              >
                {l.label}
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
        <div className="md:hidden bg-off-white border-t border-border">
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
              <a href="#reservas" onClick={() => setOpen(false)} className="btn-hero mt-4">
                Reservar
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
