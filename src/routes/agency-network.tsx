import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Crown, Users, MapPin, Cpu } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import goldTexture from "@/assets/texture-gold.jpg";

export const Route = createFileRoute("/agency-network")({
  head: () => ({
    meta: [
      { title: "DTODOS ADN — Agency Development Network" },
      { name: "description", content: "DTODOS ADN (Agency Development Network) — open your own financial agency under the DTODOS umbrella. Ownership, team building, expansion markets and a full technology stack." },
      { property: "og:title", content: "DTODOS ADN — Agency Development Network" },
      { property: "og:description", content: "From operator to agency owner." },
      { property: "og:url", content: "/agency-network" },
    ],
    links: [{ rel: "canonical", href: "/agency-network" }],
  }),
  component: Page,
});

const pillars = [
  { icon: Crown, name: "Agency Ownership Program", desc: "Open your own DTODOS-branded agency with a proven onboarding, compliance and revenue model." },
  { icon: Users, name: "Team Building", desc: "Recruiting playbooks, training systems and compensation structures that scale with you." },
  { icon: MapPin, name: "Expansion Opportunities", desc: "Open markets across the U.S. — protected territories, real demand, real Hispanic communities." },
  { icon: Cpu, name: "Technology Stack", desc: "DTODOS CRM, automation, calendars and reporting — the operating system for your agency." },
] as const;

function Page() {
  return (
    <>
      <PageHero
        eyebrow="DTODOS ADN · Agency Development Network"
        title={<>Own your agency. <span className="text-gradient-gold italic">Plug into an ecosystem.</span></>}
        description="DTODOS ADN (Agency Development Network) is built for licensed professionals ready to run their own firm — but tired of doing it alone. Brand, technology, training, recruiting and a national network — all at your back."
      >
        <Link to="/contact" className="btn-gold">Request agency info <ArrowRight size={16} /></Link>
        <Link to="/business-academy" className="btn-ghost">Get licensed first</Link>
      </PageHero>

      <section className="relative py-24">
        <div className="container-x grid gap-px bg-white/5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} className="bg-background">
              <div className="p-10 h-full">
                <p.icon className="text-gold" size={26} strokeWidth={1.4} />
                <h3 className="display mt-6 text-2xl">{p.name}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-24 border-t border-white/5 overflow-hidden">
        <img src={goldTexture} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" aria-hidden />
        <div className="container-x relative grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow">DTODOS CRM</p>
            <h2 className="display mt-6 text-4xl">An operating system for <span className="text-gradient-gold italic">your agency.</span></h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              CRM, automation, calendars, pipelines and reporting — the same
              technology stack our top-performing agencies use to run lean,
              predictable practices. Yours from day one.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-panel rounded-2xl p-8 space-y-4">
              {["Lead pipelines", "Automated follow-ups", "Calendar & booking", "Client portal", "Team performance", "Revenue dashboards"].map((f) => (
                <div key={f} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm">{f}</span>
                  <span className="text-[11px] uppercase tracking-widest text-gold/80">Included</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
