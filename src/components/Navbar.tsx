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
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className={`font-display text-2xl tracking-wide ${scrolled ? "text-terracota" : "text-off-white"}`}>
          Casa <span className="italic font-serif-italic">Robelú</span>
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
          href="#reservas"
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[12px] tracking-[0.2em] uppercase border transition-all ${
            scrolled
              ? "border-terracota text-terracota hover:bg-terracota hover:text-off-white"
              : "border-off-white/70 text-off-white hover:bg-off-white hover:text-terracota"
          }`}
        >
          Reservar
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
