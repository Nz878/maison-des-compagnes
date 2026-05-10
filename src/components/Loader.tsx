import { useEffect, useState } from "react";
import hero from "@/assets/hero.jpg";
import lace from "@/assets/lace.jpg";
import companion from "@/assets/companion.jpg";
import atelier from "@/assets/atelier.jpg";
import portrait from "@/assets/portrait.jpg";

const slides = [hero, lace, atelier, companion, portrait];

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const total = 4000;
    let raf = 0;
    const tick = () => {
      const p = Math.min(1, (performance.now() - start) / total);
      setProgress(p);
      setActive(Math.min(slides.length - 1, Math.floor(p * slides.length)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setExiting(true);
        setTimeout(onDone, 1200);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div className={`fixed inset-0 z-[300] bg-[var(--noir)] text-[var(--ivory)] transition-opacity duration-[1200ms] ${exiting ? "opacity-0" : "opacity-100"}`}>
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${i === active ? "opacity-60" : "opacity-0"}`}
            style={{
              transform: `scale(${1.05 + (i === active ? progress * 0.05 : 0)})`,
              transition: "transform 4s ease-out, opacity 1.4s ease-out",
            }}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[var(--noir)]/40" />
          </div>
        ))}
      </div>

      <div className="relative flex h-full flex-col items-center justify-between px-8 py-12">
        <div className="font-display text-[10px] tracking-couture uppercase opacity-70">Maison des Compagnes</div>

        <div className="text-center">
          <div className="font-display italic text-3xl md:text-5xl opacity-80">Une introduction</div>
          <div className="mt-3 text-[10px] uppercase tracking-couture opacity-50">Paris — Couture</div>
        </div>

        <div className="w-full max-w-xl">
          <div className="flex items-baseline justify-between text-[10px] uppercase tracking-couture opacity-70">
            <span>Entrée</span>
            <span>{String(Math.round(progress * 100)).padStart(3, "0")}</span>
          </div>
          <div className="mt-3 h-px w-full bg-[var(--ivory)]/20">
            <div className="h-full bg-[var(--gold)]" style={{ width: `${progress * 100}%`, transition: "width 80ms linear" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
