import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const items = [
  { to: "/", label: "Maison" },
  { to: "/collection", label: "Collection" },
  { to: "/womenswear", label: "Womenswear" },
  { to: "/companion", label: "Companion" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled ? "bg-[var(--ivory)]/80 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="flex items-center justify-between px-6 py-6 md:px-12">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Maison des Compagnes" className="h-8 w-auto" />
            <span className="hidden sm:block font-display text-sm tracking-couture uppercase">
              Maison <span className="italic font-light">des</span> Compagnes
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-editorial">
            {items.slice(1).map((i) => (
              <Link
                key={i.to}
                to={i.to}
                className="link-couture"
                activeProps={{ className: "link-couture text-[var(--rouge)]" }}
              >
                {i.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[11px] uppercase tracking-editorial"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile / overlay menu */}
      <div className={`fixed inset-0 z-[60] bg-[var(--noir)] text-[var(--ivory)] transition-all duration-1000 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex h-full flex-col px-8 py-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-sm tracking-couture uppercase">Maison</span>
            <button onClick={() => setOpen(false)} className="text-[11px] uppercase tracking-editorial" aria-label="Close menu">Fermer</button>
          </div>
          <nav className="my-auto flex flex-col gap-6">
            {items.map((i, idx) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="font-display italic text-5xl md:text-7xl"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {i.label}
              </Link>
            ))}
          </nav>
          <div className="text-[10px] uppercase tracking-couture opacity-60">Paris · MMXXV</div>
        </div>
      </div>
    </>
  );
}
