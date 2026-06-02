import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import academyImg from "@/assets/academy-class.jpg";

export const Route = createFileRoute("/business-academy")({
  head: () => ({
    meta: [
      { title: "Business Academy — TAX360, TAX360 CORP, SALES360" },
      { name: "description", content: "Train inside a working financial firm. TAX360, TAX360 CORP and SALES360 — the curriculum that turns ambitious people into licensed professionals." },
      { property: "og:title", content: "DTODOS Business Academy" },
      { property: "og:description", content: "Become a tax professional. Become a business owner." },
      { property: "og:image", content: academyImg },
      { property: "og:url", content: "/business-academy" },
    ],
    links: [{ rel: "canonical", href: "/business-academy" }],
  }),
  component: Page,
});

const programs = [
  {
    name: "TAX360",
    tag: "Foundation",
    desc: "The complete personal tax curriculum. From W-2 to Schedule C, you'll learn the craft inside a working firm.",
    bullets: ["Live cohorts", "Bilingual instruction", "Real client cases", "Certification path"],
  },
  {
    name: "TAX360 CORP",
    tag: "Advanced",
    desc: "Corporate taxation, entity strategy and multi-state filings — the curriculum for the operator who wants to serve businesses.",
    bullets: ["LLC, S-Corp, C-Corp", "Entity strategy", "Multi-state filings", "Advisory frameworks"],
  },
  {
    name: "SALES360",
    tag: "Growth",
    desc: "The sales and client-experience system that turns a licensed professional into a thriving practice.",
    bullets: ["Discovery process", "Pricing & packaging", "Retention", "Referral engine"],
  },
] as const;

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Business Academy"
        title={<>Train inside a <span className="text-gradient-gold italic">working firm.</span></>}
        description="DTODOS Academy isn't a course library — it's apprenticeship inside an active financial practice. Live cohorts, real client cases, and a path to certification, your own clients, and eventually your own agency."
      >
        <Link to="/contact" className="btn-gold">Enroll in TAX360 <ArrowRight size={16} /></Link>
        <Link to="/agency-network" className="btn-ghost">See the agency path</Link>
      </PageHero>

      <section className="relative py-24">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="glass-panel rounded-2xl p-8 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{p.tag}</span>
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="display mt-6 text-3xl text-gradient-gold">{p.name}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                <ul className="mt-8 space-y-2.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <Check className="text-gold" size={14} strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="link-gold mt-10">Apply to this program <ArrowRight size={14} /></Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-24 border-t border-white/5">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow">Learning by doing</p>
            <h2 className="display mt-6 text-4xl">The classroom is a <span className="text-gradient-gold italic">real practice.</span></h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Students sit alongside senior tax professionals, see real returns,
              shadow real client meetings and graduate with a portfolio of completed
              work — not a PDF certificate.
            </p>
            <Link to="/contact" className="btn-gold mt-10">Talk to admissions <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal delay={120}>
            <img src={academyImg} alt="DTODOS Academy in session" className="rounded-2xl object-cover w-full aspect-[4/3] shadow-elev" loading="lazy" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
