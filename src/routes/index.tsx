import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import lace from "@/assets/lace.jpg";
import womenswearImg from "@/assets/womenswear.jpg";
import companionImg from "@/assets/companion.jpg";
import atelier from "@/assets/atelier.jpg";
import garden from "@/assets/garden.jpg";
import silk from "@/assets/silk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison des Compagnes — Couture privée, Paris" },
      { name: "description", content: "An intimate Parisian maison dedicated to feminine couture, companion accessories, and the quiet poetry of luxury." },
      { property: "og:title", content: "Maison des Compagnes" },
      { property: "og:description", content: "Couture privée, Paris." },
    ],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (heroRef.current) {
        const img = heroRef.current.querySelector("img");
        if (img) (img as HTMLImageElement).style.transform = `translateY(${y * 0.3}px) scale(${1.05 + y * 0.0002})`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen overflow-hidden vignette">
        <img src={hero} alt="Maison des Compagnes hero" className="absolute inset-0 h-[115%] w-full object-cover" style={{ transform: "scale(1.05)" }} />
        <div className="absolute inset-0 bg-[var(--noir)]/30" />
        <div className="relative z-10 flex h-full flex-col justify-between px-6 py-32 md:px-16 md:py-40 text-[var(--ivory)]">
          <div className="flex justify-between text-[10px] uppercase tracking-couture opacity-80">
            <span>Collection — Hiver MMXXV</span>
            <span className="hidden md:block">Édition I</span>
          </div>
          <Reveal>
            <h1 className="font-display italic text-6xl md:text-[10rem] leading-[0.9] max-w-6xl">
              Une maison<br/>de <span className="not-italic font-serif">compagnes.</span>
            </h1>
          </Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <p className="font-serif italic max-w-md text-base md:text-lg opacity-90 leading-relaxed">
              Une intimité parisienne pour celles qui s'habillent comme l'on confie un secret.
            </p>
            <Link to="/collection" className="link-couture text-[11px] uppercase tracking-couture">
              Entrer dans la collection
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-[var(--noir)]/10 py-6 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track font-display italic text-2xl md:text-4xl gap-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              Couture privée
              <span className="text-[var(--gold)]">✦</span>
              Soie & dentelle
              <span className="text-[var(--gold)]">✦</span>
              Compagnes intimes
              <span className="text-[var(--gold)]">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="px-6 md:px-16 py-32 md:py-48">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12 items-end">
          <Reveal className="md:col-span-5">
            <div className="text-[10px] uppercase tracking-couture mb-6 text-[var(--rouge)]">Chapitre I — Le Salon</div>
            <h2 className="font-display italic text-5xl md:text-7xl leading-[0.95]">
              Le luxe<br/>d'être <span className="text-[var(--rouge)]">aimée</span><br/>en silence.
            </h2>
            <p className="mt-10 font-serif italic text-base md:text-lg leading-relaxed max-w-md opacity-80">
              Chaque pièce est née dans un salon parisien, à la lueur des bougies, entre la patience et la mémoire des femmes qui nous ont précédées.
            </p>
          </Reveal>
          <Reveal delay={150} className="md:col-span-7">
            <div className="zoomable overflow-hidden">
              <img src={atelier} alt="Atelier" className="w-full h-[70vh] object-cover" loading="lazy" />
            </div>
            <div className="mt-4 flex justify-between text-[10px] uppercase tracking-couture opacity-60">
              <span>L'atelier</span><span>Paris VIIIᵉ</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WOMENSWEAR FEATURE */}
      <section className="relative bg-[var(--blush)] py-32 md:py-48 overflow-hidden">
        <div className="px-6 md:px-16 grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-7 md:order-2">
            <div className="zoomable overflow-hidden">
              <img src={womenswearImg} alt="Womenswear" className="w-full h-[80vh] object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:order-1">
            <div className="text-[10px] uppercase tracking-couture mb-6 text-[var(--toile)]">Womenswear</div>
            <h2 className="font-display italic text-5xl md:text-7xl leading-[0.95] text-[var(--toile)]">
              Toile,<br/>soie,<br/>silence.
            </h2>
            <p className="mt-10 font-serif italic max-w-sm leading-relaxed opacity-80">
              Robes de jour, robes du soir, pièces uniques offertes à la rare patience d'un essayage privé.
            </p>
            <Link to="/womenswear" className="mt-10 inline-block link-couture text-[11px] uppercase tracking-couture">
              Découvrir Womenswear
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SILK BAND */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={silk} alt="Silk" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[var(--noir)]/20" />
        <div className="relative h-full flex items-center justify-center px-6">
          <Reveal>
            <p className="font-display italic text-[var(--ivory)] text-3xl md:text-6xl text-center max-w-3xl leading-[1.1]">
              "La couture est une lettre qu'on n'envoie jamais."
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPANION */}
      <section className="px-6 md:px-16 py-32 md:py-48">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-6">
            <div className="zoomable overflow-hidden">
              <img src={companionImg} alt="Companion" className="w-full h-[80vh] object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:col-start-8">
            <div className="text-[10px] uppercase tracking-couture mb-6 text-[var(--gold)]">The Companion Collection</div>
            <h2 className="font-display italic text-5xl md:text-7xl leading-[0.95]">
              Les objets<br/>qui nous<br/>accompagnent.
            </h2>
            <p className="mt-10 font-serif italic max-w-sm leading-relaxed opacity-80">
              Gants de soie, perles d'héritage, mouchoirs de dentelle — la grammaire intime du quotidien.
            </p>
            <Link to="/companion" className="mt-10 inline-block link-couture text-[11px] uppercase tracking-couture">
              Voir la collection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[var(--noir)] text-[var(--ivory)] px-6 md:px-16 py-40 md:py-56">
        <Reveal>
          <div className="text-[10px] uppercase tracking-couture mb-12 text-[var(--gold)]">Philosophie</div>
        </Reveal>
        <Reveal delay={150}>
          <p className="font-display italic text-3xl md:text-6xl leading-[1.15] max-w-5xl">
            Nous croyons à la robe que l'on porte
            comme une <span className="text-[var(--gold)]">confidence</span>,
            au geste lent du couturier,
            à la mémoire des femmes
            <span className="block mt-6 opacity-70">— et à la solitude amoureuse de Paris.</span>
          </p>
        </Reveal>
      </section>

      {/* GARDEN */}
      <section className="relative h-screen overflow-hidden">
        <img src={garden} alt="Garden" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--noir)]/60 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-6 md:p-16 text-[var(--ivory)]">
          <Reveal>
            <div className="text-[10px] uppercase tracking-couture mb-4">Campagne — Printemps</div>
            <h2 className="font-display italic text-5xl md:text-8xl leading-[0.95] max-w-4xl">
              Les jardins<br/>oubliés.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* lace closing */}
      <section className="px-6 md:px-16 py-32 md:py-48 text-center">
        <Reveal>
          <p className="font-display italic text-3xl md:text-5xl max-w-3xl mx-auto leading-[1.1]">
            Bienvenue à la maison.
          </p>
          <Link to="/contact" className="mt-12 inline-block link-couture text-[11px] uppercase tracking-couture">
            Prendre rendez-vous au salon
          </Link>
        </Reveal>
        <div className="mt-20 max-w-md mx-auto opacity-60">
          <img src={lace} alt="Lace" className="w-full" loading="lazy" />
        </div>
      </section>
    </Layout>
  );
}
