import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative bg-[var(--noir)] text-[var(--ivory)]">
      <div className="px-6 py-24 md:px-12 md:py-32">
        <div className="font-display italic text-4xl md:text-7xl leading-[0.95] max-w-4xl">
          Pour celles qui<br/>habitent la beauté<br/>en silence.
        </div>
        <div className="mt-20 grid gap-12 md:grid-cols-4 text-[11px] uppercase tracking-editorial">
          <div>
            <div className="opacity-50 mb-4">Maison</div>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="link-couture">About</Link>
              <Link to="/contact" className="link-couture">Contact</Link>
            </div>
          </div>
          <div>
            <div className="opacity-50 mb-4">Collections</div>
            <div className="flex flex-col gap-2">
              <Link to="/womenswear" className="link-couture">Womenswear</Link>
              <Link to="/companion" className="link-couture">Companion</Link>
              <Link to="/collection" className="link-couture">Archive</Link>
            </div>
          </div>
          <div>
            <div className="opacity-50 mb-4">Adresse</div>
            <div className="opacity-80 normal-case tracking-normal font-serif italic text-sm leading-relaxed">
              14 rue du Faubourg<br/>Saint-Honoré<br/>75008 Paris
            </div>
          </div>
          <div>
            <div className="opacity-50 mb-4">Correspondance</div>
            <div className="opacity-80 normal-case tracking-normal font-serif italic text-sm">
              salon@maisondescompagnes.fr
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-couture opacity-50">
          <span>© MMXXV Maison des Compagnes</span>
          <span>Paris — Couture privée</span>
        </div>
      </div>
    </footer>
  );
}
