import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  GraduationCap,
  Network,
  Cpu,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-abstract.jpg";
import founderImg from "@/assets/mrgeo-portrait.png.asset.json";
import goldTexture from "@/assets/texture-gold.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DTODOS Financial Group — Taxes. Insurance. Business. Education." },
      { name: "description", content: "A premium financial ecosystem for Hispanic entrepreneurs. From your first tax return to your own agency — DTODOS is the modern way to build financial professionals and business owners." },
      { property: "og:title", content: "DTODOS Financial Group" },
      { property: "og:description", content: "Taxes. Insurance. Business. Education. One ecosystem." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const divisions = [
  {
    icon: Building2,
    name: "Financial Services",
    tag: "01",
    desc: "Personal & corporate taxes, bookkeeping, business formation, health and life insurance — handled by professionals, delivered with concierge precision.",
    items: ["Personal Taxes", "Corporate Taxes", "Bookkeeping", "Business Formation", "Health Insurance", "Life Insurance"],
  },
  {
    icon: GraduationCap,
    name: "Business Academy",
    tag: "02",
    desc: "TAX360, TAX360 CORP and SALES360 — the curriculum that turns clients into licensed professionals and confident operators.",
    items: ["TAX360", "TAX360 CORP", "SALES360", "Certification", "Mentorship", "Live cohorts"],
  },
  {
    icon: Network,
    name: "DTODOS ADN",
    tag: "03",
    desc: "The Agency Development Network. Build your own agency under the DTODOS umbrella — ownership, team building and expansion opportunities, backed by a proven playbook.",
    items: ["Agency Ownership", "Team Building", "Expansion", "Recruiting", "Revenue share", "Branding"],
  },
  {
    icon: Cpu,
    name: "Technology",
    tag: "04",
    desc: "DTODOS CRM, automation and growth tools that let every operator move like a fintech-grade business — without the engineering team.",
    items: ["DTODOS CRM", "Automation", "Pipelines", "Calendars", "Reporting", "Integrations"],
  },
] as const;

const journey = [
  { step: "Client", note: "Start with a tax return or insurance plan." },
  { step: "Student", note: "Enroll in TAX360 and learn the craft." },
  { step: "Tax Professional", note: "Earn certification. Serve real clients." },
  { step: "Team Builder", note: "Recruit, train and lead a small team." },
  { step: "Agency Owner", note: "Own your office. Plug into the network." },
] as const;

const reasons = [
  { icon: ShieldCheck, title: "Real licenses, real compliance", desc: "Not a course factory. A regulated practice that trains operators inside a working firm." },
  { icon: TrendingUp, title: "Built to scale", desc: "Systems, CRM and playbooks designed for owners who want a P&L, not a side hustle." },
  { icon: Users, title: "Hispanic-first", desc: "Bilingual support, cultural fluency, and a community of operators who look like you." },
  { icon: Sparkles, title: "Concierge experience", desc: "From the first call to your first agency — every step engineered to feel premium." },
] as const;

const metrics = [
  { k: "12,400+", l: "Clients served" },
  { k: "1,800+", l: "Students enrolled" },
  { k: "320+", l: "Active agents" },
  { k: "48", l: "Markets reached" },
] as const;

const testimonials = [
  {
    quote: "I came in to file my taxes. Two years later I own a tax office with five agents. DTODOS didn't sell me a dream — they handed me a system.",
    name: "Carolina M.",
    role: "Agency Owner · Orlando",
  },
  {
    quote: "TAX360 is the most serious training I've taken in this industry. It feels like getting hired by a top firm and getting paid to learn.",
    name: "Andrés R.",
    role: "Tax Professional · Houston",
  },
  {
    quote: "The CRM and the team support are what set them apart. I run my agency like a real company now, not a kitchen-table operation.",
    name: "Patricia L.",
    role: "Agency Owner · Miami",
  },
] as const;

function Home() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative min-h-[100vh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury Miami executive office at dusk"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-radial-gold opacity-60" />

        <div className="container-x relative pb-24 pt-40">
          <div className="max-w-4xl float-in">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold" />
              <p className="eyebrow !text-gold">DTODOS Financial Group</p>
            </div>
            <h1 className="display text-5xl sm:text-7xl lg:text-8xl text-foreground">
              Taxes. Insurance. <br />
              Business.{" "}
              <span className="text-gradient-gold italic">Education.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-foreground/80 leading-relaxed">
              One ecosystem to build financial professionals — and turn financial
              professionals into agency owners. Premium service, modern technology,
              built for Hispanic entrepreneurs.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-gold">
                Book a consultation <ArrowRight size={16} />
              </Link>
              <Link to="/business-academy" className="btn-ghost">
                Explore TAX360 <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 max-w-3xl">
              {metrics.map((m) => (
                <div key={m.l} className="bg-background/60 backdrop-blur p-5">
                  <div className="text-2xl sm:text-3xl text-gradient-gold font-serif">{m.k}</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── COMPANY OVERVIEW ───── */}
      <section className="relative py-32">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">The Company</p>
              <h2 className="display mt-6 text-4xl sm:text-5xl">
                A modern financial firm,
                <br />
                <span className="text-gradient-gold italic">engineered like a fintech.</span>
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                DTODOS isn't a tax office that grew into a school. It's a financial
                services group designed from day one as a complete ecosystem —
                practice, academy, agency network and technology, all under one roof.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We serve thousands of clients across the United States, train the
                next generation of bilingual tax and insurance professionals, and
                give the best of them a path to own their own agency.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/financial-services" className="link-gold">Our services <ArrowRight size={14} /></Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/agency-network" className="link-gold">DTODOS ADN <ArrowRight size={14} /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── FOUR DIVISIONS ───── */}
      <section className="relative py-32 border-t border-white/5">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Four divisions · One ecosystem</p>
            <h2 className="display mt-6 text-4xl sm:text-5xl max-w-3xl">
              Every part of a financial life,
              <span className="text-gradient-gold italic"> handled.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px bg-white/5 sm:grid-cols-2">
            {divisions.map((d, i) => (
              <Reveal key={d.name} delay={i * 80} className="bg-background">
                <div className="group p-8 sm:p-10 h-full flex flex-col transition-all duration-500 hover:bg-card">
                  <div className="flex items-start justify-between">
                    <d.icon className="text-gold" size={28} strokeWidth={1.4} />
                    <span className="text-xs tracking-widest text-muted-foreground">{d.tag}</span>
                  </div>
                  <h3 className="display mt-8 text-3xl">{d.name}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{d.desc}</p>
                  <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/80">
                    {d.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-gold/70" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── WHY DTODOS ───── */}
      <section className="relative py-32 border-t border-white/5">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">Why DTODOS</p>
              <h2 className="display mt-6 text-4xl sm:text-5xl">
                Trusted by clients.
                <br />
                <span className="text-gradient-gold italic">Chosen by operators.</span>
              </h2>
            </Reveal>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-white/5">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 80} className="bg-background p-8">
                  <r.icon className="text-gold" size={22} strokeWidth={1.4} />
                  <h3 className="mt-6 text-lg font-medium">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── JOURNEY ───── */}
      <section className="relative py-32 border-t border-white/5 overflow-hidden">
        <img src={goldTexture} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.07]" aria-hidden />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow">The Transformation Path</p>
            <h2 className="display mt-6 text-4xl sm:text-5xl max-w-3xl">
              From your first tax return to
              <span className="text-gradient-gold italic"> your own agency.</span>
            </h2>
          </Reveal>

          <div className="mt-16 relative">
            <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <div className="grid gap-10 md:grid-cols-5">
              {journey.map((j, i) => (
                <Reveal key={j.step} delay={i * 100} className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-background text-gold text-sm font-medium">
                    0{i + 1}
                  </div>
                  <h3 className="mt-6 text-base font-medium">{j.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{j.note}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── FOUNDER ───── */}
      <section className="relative py-32 border-t border-white/5">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-radial-gold opacity-60 blur-3xl" />
                <img
                  src={founderImg.url}
                  alt="MrGEO, founder of DTODOS Financial Group"
                  className="relative w-full max-w-md mx-auto object-contain drop-shadow-2xl"
                  loading="lazy"
                  width={1080}
                  height={1080}
                  style={{ filter: "drop-shadow(0 30px 60px oklch(0.82 0.13 84 / 0.25))" }}
                />
              </div>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={120}>
              <p className="eyebrow">Founder</p>
              <h2 className="display mt-6 text-4xl sm:text-5xl">
                MrGEO. <span className="text-gradient-gold italic">Operator, educator, builder.</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                MrGEO built DTODOS from a single desk into a multi-state financial
                ecosystem by refusing to choose between practice and education.
                He believes the best schools are run by the best operators — and
                that the Hispanic community deserves both.
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Today he leads a network of agents, instructors and technologists
                building the financial firm he wished existed when he started.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/business-academy" className="btn-gold">See his curriculum <ArrowRight size={16} /></Link>
                <Link to="/agency-network" className="btn-ghost">Join the network</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="relative py-32 border-t border-white/5">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Success Stories</p>
            <h2 className="display mt-6 text-4xl sm:text-5xl max-w-3xl">
              Real operators. <span className="text-gradient-gold italic">Real outcomes.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="glass-panel rounded-2xl p-8 h-full flex flex-col">
                  <Quote className="text-gold/70" size={24} />
                  <blockquote className="mt-6 text-foreground/90 leading-relaxed flex-1">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-white/5">
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="relative py-32 border-t border-white/5">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 px-8 sm:px-16 py-20 sm:py-28">
              <img src={goldTexture} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
              <div className="relative max-w-2xl">
                <p className="eyebrow">Start your journey</p>
                <h2 className="display mt-6 text-4xl sm:text-6xl">
                  Your first move into the
                  <span className="text-gradient-gold italic"> DTODOS ecosystem.</span>
                </h2>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                  Book a 20-minute strategy call. We'll map your fastest path —
                  client, student, professional, or agency owner.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-gold">Book a call <ArrowRight size={16} /></Link>
                  <Link to="/business-academy" className="btn-ghost">Enroll in TAX360</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
