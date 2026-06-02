import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Building2, BookOpen, Briefcase, Heart, Shield } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import officeImg from "@/assets/office-interior.jpg";

export const Route = createFileRoute("/financial-services")({
  head: () => ({
    meta: [
      { title: "Financial Services — DTODOS Financial Group" },
      { name: "description", content: "Personal & corporate taxes, bookkeeping, business formation, health and life insurance. Concierge financial services for Hispanic entrepreneurs." },
      { property: "og:title", content: "Financial Services — DTODOS" },
      { property: "og:description", content: "Concierge financial services, end to end." },
      { property: "og:url", content: "/financial-services" },
    ],
    links: [{ rel: "canonical", href: "/financial-services" }],
  }),
  component: Page,
});

const services = [
  { icon: FileText, name: "Personal Taxes", desc: "Maximize your return with bilingual tax professionals who treat your file like their own." },
  { icon: Building2, name: "Corporate Taxes", desc: "Strategy and filings for LLCs, S-Corps and C-Corps — built for owners who plan ahead." },
  { icon: BookOpen, name: "Bookkeeping", desc: "Monthly books, clean P&Ls and tax-ready statements so you always know the number." },
  { icon: Briefcase, name: "Business Formation", desc: "From EIN to operating agreement — launch the right entity, the right way, in days." },
  { icon: Heart, name: "Health Insurance", desc: "Marketplace and private plans matched to your family, your budget and your business." },
  { icon: Shield, name: "Life Insurance", desc: "Term, whole and IUL strategies that protect your family and build long-term wealth." },
] as const;

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Financial Services"
        title={<>The full financial stack — <span className="text-gradient-gold italic">handled with care.</span></>}
        description="Six services, one team, one relationship. Whether you need a tax return filed this week or a five-year wealth plan, DTODOS is the firm that does both — without losing the human touch."
      >
        <Link to="/contact" className="btn-gold">Book a consultation <ArrowRight size={16} /></Link>
        <Link to="/business-academy" className="btn-ghost">Become a professional</Link>
      </PageHero>

      <section className="relative py-24">
        <div className="container-x">
          <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 60} className="bg-background">
                <div className="group p-8 h-full hover:bg-card transition-colors">
                  <s.icon className="text-gold" size={26} strokeWidth={1.4} />
                  <h3 className="mt-6 text-xl font-medium">{s.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 link-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/5">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={officeImg} alt="DTODOS boardroom" className="rounded-2xl object-cover w-full aspect-[4/3] shadow-elev" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Concierge by design</p>
            <h2 className="display mt-6 text-4xl">A dedicated advisor. <span className="text-gradient-gold italic">Not a call queue.</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Every client is matched with a primary advisor and a back-office team.
              You get one number, one email and one relationship — even when the work
              spans tax, insurance and bookkeeping.
            </p>
            <Link to="/contact" className="btn-gold mt-10">Meet your advisor <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
