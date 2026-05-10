import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import lace from "@/assets/lace.jpg";
import womenswear from "@/assets/womenswear.jpg";
import companion from "@/assets/companion.jpg";
import atelier from "@/assets/atelier.jpg";
import portrait from "@/assets/portrait.jpg";
import silk from "@/assets/silk.jpg";
import garden from "@/assets/garden.jpg";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Collection — Maison des Compagnes" },
      { name: "description", content: "An editorial archive of couture pieces, accessories, and intimate atelier moments." },
    ],
  }),
  component: CollectionPage,
});

const pieces = [
  { src: hero, t: "Robe Aurore", n: "01", desc: "Dentelle ivoire, soie blush", col: "md:col-span-7", h: "h-[90vh]" },
  { src: lace, t: "Corsage Perlé", n: "02", desc: "Perles, chantilly", col: "md:col-span-5 md:mt-32", h: "h-[70vh]" },
  { src: womenswear, t: "Robe Toile", n: "03", desc: "Toile de Jouy, royal", col: "md:col-span-6 md:col-start-7", h: "h-[80vh]" },
  { src: portrait, t: "Voile Cherie", n: "04", desc: "Voile, perle, rouge", col: "md:col-span-5 md:-mt-24", h: "h-[75vh]" },
  { src: silk, t: "Or & Cerise", n: "05", desc: "Soie cerise, broderie or", col: "md:col-span-7 md:col-start-6", h: "h-[60vh]" },
  { src: companion, t: "Compagnes", n: "06", desc: "Accessoires intimes", col: "md:col-span-5", h: "h-[80vh]" },
  { src: garden, t: "Jardins Oubliés", n: "07", desc: "Campagne printemps", col: "md:col-span-8 md:col-start-3", h: "h-[80vh]" },
  { src: atelier, t: "L'Atelier", n: "08", desc: "Photographie privée", col: "md:col-span-6", h: "h-[70vh]" },
];

function CollectionPage() {
  return (
    <Layout>
      <section className="px-6 md:px-16 pt-44 pb-24">
        <Reveal>
          <div className="text-[10px] uppercase tracking-couture text-[var(--rouge)] mb-8">Édition I — MMXXV</div>
          <h1 className="font-display italic text-6xl md:text-[9rem] leading-[0.9]">La Collection.</h1>
          <p className="mt-10 font-serif italic max-w-xl text-lg opacity-80 leading-relaxed">
            Un journal photographique des pièces nées au salon. Chaque image est une page, chaque page un secret.
          </p>
        </Reveal>
      </section>

      <section className="px-6 md:px-16 pb-32">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {pieces.map((p, i) => (
            <Reveal key={p.n} delay={i * 60} className={p.col}>
              <figure className="zoomable overflow-hidden">
                <img src={p.src} alt={p.t} className={`w-full ${p.h} object-cover`} loading="lazy" />
              </figure>
              <figcaption className="mt-4 flex justify-between items-baseline">
                <div>
                  <div className="font-display italic text-2xl">{p.t}</div>
                  <div className="text-[10px] uppercase tracking-couture opacity-60 mt-1">{p.desc}</div>
                </div>
                <div className="font-serif text-sm text-[var(--gold)]">N° {p.n}</div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
