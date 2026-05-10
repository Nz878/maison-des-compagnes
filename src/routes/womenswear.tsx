import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import womenswear from "@/assets/womenswear.jpg";
import lace from "@/assets/lace.jpg";
import portrait from "@/assets/portrait.jpg";
import garden from "@/assets/garden.jpg";

export const Route = createFileRoute("/womenswear")({
  head: () => ({
    meta: [
      { title: "Womenswear — Maison des Compagnes" },
      { name: "description", content: "Couture womenswear from the Maison: dresses, gowns and atelier pieces." },
    ],
  }),
  component: WomenswearPage,
});

const looks = [
  { src: hero, name: "Aurore", note: "LE CAFÉ" },
  { src: womenswear, name: "Versailles", note: "Robe Toile de Jouy, soie royale" },
  { src: lace, name: "Pearl", note: "Bustier perlé, ivoire" },
  { src: portrait, name: "Cherie", note: "Voile et perles, rouge" },
  { src: garden, name: "Brume", note: "Robe du matin, mousseline" },
];

function WomenswearPage() {
  return (
    <Layout>
      <section className="px-6 md:px-16 pt-44 pb-16">
        <Reveal>
          <div className="text-[10px] uppercase tracking-couture mb-6 text-[var(--toile)]">Womenswear</div>
          <h1 className="font-display italic text-6xl md:text-[9rem] leading-[0.9]">
            Vêtir<br/>une <span className="text-[var(--toile)]">émotion</span>.
          </h1>
        </Reveal>
      </section>

      <section className="space-y-32 md:space-y-48 pb-32">
        {looks.map((l, i) => (
          <div key={l.name} className="px-6 md:px-16 grid md:grid-cols-12 gap-8 items-end">
            <Reveal className={`md:col-span-7 ${i % 2 ? "md:col-start-6" : ""}`}>
              <div className="zoomable overflow-hidden">
                <img src={l.src} alt={l.name} className="w-full h-[90vh] object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={120} className={`md:col-span-4 ${i % 2 ? "md:col-start-2 md:row-start-1" : "md:col-start-9"}`}>
              <div className="text-[10px] uppercase tracking-couture text-[var(--gold)] mb-4">Look {String(i + 1).padStart(2, "0")}</div>
              <h2 className="font-display italic text-5xl md:text-6xl">{l.name}</h2>
              <p className="mt-6 font-serif italic opacity-80">{l.note}</p>
              <div className="mt-8 text-[10px] uppercase tracking-couture opacity-60">Sur rendez-vous</div>
            </Reveal>
          </div>
        ))}
      </section>
    </Layout>
  );
}
