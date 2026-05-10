import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import companion from "@/assets/companion.jpg";
import lace from "@/assets/lace.jpg";
import silk from "@/assets/silk.jpg";

export const Route = createFileRoute("/companion")({
  head: () => ({
    meta: [
      { title: "The Companion Collection — Maison des Compagnes" },
      { name: "description", content: "Intimate accessories: silk gloves, pearls, lace handkerchiefs and heirloom companions." },
    ],
  }),
  component: CompanionPage,
});

const items = [
  { src: companion, name: "Gants Aurélie", price: "Sur demande", desc: "Gants de soie blush, finition cousue main." },
  { src: lace, name: "Mouchoir Lacé", price: "Sur demande", desc: "Mouchoir de Chantilly, monogramme brodé." },
  { src: silk, name: "Foulard Cerise", price: "Sur demande", desc: "Soie cerise, broderie or, édition limitée." },
  { src: companion, name: "Perle d'Héritage", price: "Sur demande", desc: "Sautoir de perles, fermoir antique." },
];

function CompanionPage() {
  return (
    <Layout>
      <section className="px-6 md:px-16 pt-44 pb-24 max-w-7xl">
        <Reveal>
          <div className="text-[10px] uppercase tracking-couture mb-6 text-[var(--gold)]">Companion Collection</div>
          <h1 className="font-display italic text-6xl md:text-[9rem] leading-[0.9]">
            Les <span className="text-[var(--gold)]">compagnes</span><br/>silencieuses.
          </h1>
          <p className="mt-10 font-serif italic max-w-xl text-lg opacity-80">
            Petites œuvres tendres — elles vivent dans une poche, un tiroir, contre le cou.
          </p>
        </Reveal>
      </section>

      <section className="px-6 md:px-16 pb-32 grid md:grid-cols-2 gap-12 md:gap-20">
        {items.map((it, i) => (
          <Reveal key={it.name} delay={i * 80}>
            <div className="zoomable overflow-hidden">
              <img src={it.src} alt={it.name} className="w-full h-[70vh] object-cover" loading="lazy" />
            </div>
            <div className="mt-6 flex justify-between items-baseline">
              <div>
                <h3 className="font-display italic text-3xl">{it.name}</h3>
                <p className="mt-2 text-sm font-serif italic opacity-70">{it.desc}</p>
              </div>
              <div className="text-[10px] uppercase tracking-couture text-[var(--rouge)]">{it.price}</div>
            </div>
          </Reveal>
        ))}
      </section>
    </Layout>
  );
}
