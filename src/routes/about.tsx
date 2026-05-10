import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import atelier from "@/assets/atelier.jpg";
import portrait from "@/assets/portrait.jpg";
import lace from "@/assets/lace.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Maison — Maison des Compagnes" },
      { name: "description", content: "The story of Maison des Compagnes — a Parisian house of intimate couture and feminine companionship." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="px-6 md:px-16 pt-44 pb-16">
        <Reveal>
          <div className="text-[10px] uppercase tracking-couture mb-6 text-[var(--rouge)]">About the Maison</div>
          <h1 className="font-display italic text-6xl md:text-[10rem] leading-[0.9] max-w-5xl">
            Une maison<br/>née d'un<br/><span className="text-[var(--rouge)]">soupir</span>.
          </h1>
        </Reveal>
      </section>

      <section className="px-6 md:px-16 grid md:grid-cols-12 gap-12 pb-32">
        <Reveal className="md:col-span-7">
          <div className="zoomable overflow-hidden">
            <img src={atelier} alt="L'atelier" className="w-full h-[90vh] object-cover" loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={120} className="md:col-span-4 md:col-start-9 self-end">
          <p className="font-serif italic text-xl md:text-2xl leading-relaxed">
            Maison des Compagnes a été fondée à Paris comme un refuge — un appartement plutôt qu'une boutique, une lettre plutôt qu'une vitrine.
          </p>
        </Reveal>
      </section>

      <section className="bg-[var(--blush)] px-6 md:px-16 py-32 md:py-48">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-5">
            <div className="text-[10px] uppercase tracking-couture mb-6 text-[var(--toile)]">Philosophie</div>
            <h2 className="font-display italic text-5xl md:text-7xl leading-[0.95]">
              Tout est<br/>une <span className="italic text-[var(--toile)]">compagnie</span>.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7 space-y-8 font-serif italic leading-relaxed text-lg opacity-90">
            <p>Une robe est une présence. Une dentelle, une mémoire. Un parfum, une lettre que l'on relit.</p>
            <p>Nous habillons les femmes qui choisissent l'intimité avant l'apparat — celles qui préfèrent la lumière d'une bougie au flash d'un défilé.</p>
            <p>Notre maison ne crée pas des saisons. Elle compose des chapitres.</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-16 py-32 grid md:grid-cols-2 gap-12">
        <Reveal>
          <img src={portrait} alt="Portrait" className="w-full h-[80vh] object-cover" loading="lazy" />
          <div className="mt-4 text-[10px] uppercase tracking-couture opacity-60">Muse — Anonyme</div>
        </Reveal>
        <Reveal delay={120} className="self-end">
          <img src={lace} alt="Détail" className="w-full h-[60vh] object-cover" loading="lazy" />
          <div className="mt-4 text-[10px] uppercase tracking-couture opacity-60">Détail — Atelier Paris</div>
        </Reveal>
      </section>

      <section className="px-6 md:px-16 py-32 text-center">
        <Reveal>
          <p className="font-display italic text-4xl md:text-7xl max-w-4xl mx-auto leading-[1.05]">
            "Habiller, c'est consoler."
          </p>
          <div className="mt-8 text-[10px] uppercase tracking-couture opacity-60">— La Maison</div>
        </Reveal>
      </section>
    </Layout>
  );
}
