import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison des Compagnes" },
      { name: "description", content: "Request a private salon appointment at Maison des Compagnes, Paris." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="px-6 md:px-16 pt-44 pb-24">
        <Reveal>
          <div className="text-[10px] uppercase tracking-couture mb-6 text-[var(--rouge)]">Correspondance</div>
          <h1 className="font-display italic text-6xl md:text-[10rem] leading-[0.9]">
            Écrivez-nous.
          </h1>
        </Reveal>
      </section>

      <section className="px-6 md:px-16 pb-32 grid md:grid-cols-12 gap-16">
        <Reveal className="md:col-span-5 space-y-10">
          <div>
            <div className="text-[10px] uppercase tracking-couture opacity-60 mb-3">Salon privé</div>
            <p className="font-serif italic text-lg leading-relaxed">
              14 rue du Faubourg<br/>Saint-Honoré<br/>75008 Paris
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-couture opacity-60 mb-3">Heures</div>
            <p className="font-serif italic text-lg">Sur rendez-vous, du mardi au samedi.</p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-couture opacity-60 mb-3">Direct</div>
            <p className="font-serif italic text-lg">salon@maisondescompagnes.fr<br/>+33 1 42 00 00 00</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-7 md:col-start-7">
          {sent ? (
            <div className="font-display italic text-3xl md:text-5xl leading-tight">
              Merci.<br/>
              <span className="text-[var(--rouge)]">Votre message</span> repose<br/>
              à présent dans notre salon.
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-10"
            >
              {[
                { id: "name", label: "Votre nom" },
                { id: "email", label: "Adresse électronique", type: "email" },
                { id: "occasion", label: "Occasion (facultatif)" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block text-[10px] uppercase tracking-couture opacity-60 mb-3">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type ?? "text"}
                    required={f.id !== "occasion"}
                    className="w-full bg-transparent border-b border-[var(--noir)]/30 py-3 font-serif italic text-lg focus:outline-none focus:border-[var(--rouge)] transition-colors"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="msg" className="block text-[10px] uppercase tracking-couture opacity-60 mb-3">
                  Votre lettre
                </label>
                <textarea
                  id="msg"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-[var(--noir)]/30 py-3 font-serif italic text-lg focus:outline-none focus:border-[var(--rouge)] transition-colors resize-none"
                />
              </div>
              <button type="submit" className="link-couture text-[11px] uppercase tracking-couture">
                Envoyer la lettre →
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </Layout>
  );
}
