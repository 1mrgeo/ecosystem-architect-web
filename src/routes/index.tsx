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
import heroImg from "@/assets/hero-marble.jpg";
import founderImg from "@/assets/mrgeo-portrait.png.asset.json";
import goldTexture from "@/assets/texture-gold.jpg";
import { Reveal } from "@/components/Reveal";
import { usePick } from "@/lib/i18n";

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

function Home() {
  const pick = usePick();

  const divisions = [
    {
      icon: Building2,
      name: pick({ en: "Financial Services", es: "Servicios Financieros" }),
      tag: "01",
      desc: pick({
        en: "Personal & corporate taxes, bookkeeping, business formation, health and life insurance — handled by professionals, delivered with concierge precision.",
        es: "Impuestos personales y corporativos, contabilidad, formación de empresas, seguro de salud y vida — manejado por profesionales, con precisión concierge.",
      }),
      items: pick({
        en: ["Personal Taxes", "Corporate Taxes", "Bookkeeping", "Business Formation", "Health Insurance", "Life Insurance"],
        es: ["Impuestos Personales", "Impuestos Corporativos", "Contabilidad", "Formación de Empresa", "Seguro de Salud", "Seguro de Vida"],
      }),
    },
    {
      icon: GraduationCap,
      name: pick({ en: "Business Academy", es: "Academia de Negocios" }),
      tag: "02",
      desc: pick({
        en: "TAX360, TAX360 CORP and SALES360 — the curriculum that turns clients into licensed professionals and confident operators.",
        es: "TAX360, TAX360 CORP y SALES360 — el currículo que convierte clientes en profesionales licenciados y operadores con confianza.",
      }),
      items: pick({
        en: ["TAX360", "TAX360 CORP", "SALES360", "Certification", "Mentorship", "Live cohorts"],
        es: ["TAX360", "TAX360 CORP", "SALES360", "Certificación", "Mentoría", "Cohortes en vivo"],
      }),
    },
    {
      icon: Network,
      name: "DTODOS ADN",
      tag: "03",
      desc: pick({
        en: "The Agency Development Network. Build your own agency under the DTODOS umbrella — ownership, team building and expansion opportunities, backed by a proven playbook.",
        es: "La Red de Desarrollo de Agencias. Construye tu propia agencia bajo el paraguas DTODOS — propiedad, construcción de equipo y oportunidades de expansión, con un sistema comprobado.",
      }),
      items: pick({
        en: ["Agency Ownership", "Team Building", "Expansion", "Recruiting", "Revenue share", "Branding"],
        es: ["Propiedad de Agencia", "Construcción de Equipo", "Expansión", "Reclutamiento", "Participación", "Marca"],
      }),
    },
    {
      icon: Cpu,
      name: pick({ en: "Technology", es: "Tecnología" }),
      tag: "04",
      desc: pick({
        en: "DTODOS CRM, automation and growth tools that let every operator move like a fintech-grade business — without the engineering team.",
        es: "DTODOS CRM, automatización y herramientas de crecimiento que permiten a cada operador moverse como un negocio fintech — sin un equipo de ingeniería.",
      }),
      items: pick({
        en: ["DTODOS CRM", "Automation", "Pipelines", "Calendars", "Reporting", "Integrations"],
        es: ["DTODOS CRM", "Automatización", "Pipelines", "Calendarios", "Reportes", "Integraciones"],
      }),
    },
  ];

  const journey = pick({
    en: [
      { step: "Client", note: "Start with a tax return or insurance plan." },
      { step: "Student", note: "Enroll in TAX360 and learn the craft." },
      { step: "Tax Professional", note: "Earn certification. Serve real clients." },
      { step: "Team Builder", note: "Recruit, train and lead a small team." },
      { step: "Agency Owner", note: "Own your office. Plug into the network." },
    ],
    es: [
      { step: "Cliente", note: "Empieza con una declaración de impuestos o un plan de seguro." },
      { step: "Estudiante", note: "Inscríbete en TAX360 y aprende el oficio." },
      { step: "Profesional de Impuestos", note: "Obtén tu certificación. Atiende clientes reales." },
      { step: "Líder de Equipo", note: "Recluta, entrena y lidera un equipo pequeño." },
      { step: "Dueño de Agencia", note: "Sé dueño de tu oficina. Conéctate a la red." },
    ],
  });

  const reasons = [
    { icon: ShieldCheck,
      title: pick({ en: "Real licenses, real compliance", es: "Licencias reales, cumplimiento real" }),
      desc: pick({ en: "Not a course factory. A regulated practice that trains operators inside a working firm.", es: "No una fábrica de cursos. Una práctica regulada que entrena operadores dentro de una firma activa." }) },
    { icon: TrendingUp,
      title: pick({ en: "Built to scale", es: "Construido para escalar" }),
      desc: pick({ en: "Systems, CRM and playbooks designed for owners who want a P&L, not a side hustle.", es: "Sistemas, CRM y manuales diseñados para dueños que quieren un negocio real, no un pasatiempo." }) },
    { icon: Users,
      title: pick({ en: "Hispanic-first", es: "Hecho para la comunidad hispana" }),
      desc: pick({ en: "Bilingual support, cultural fluency, and a community of operators who look like you.", es: "Soporte bilingüe, fluidez cultural y una comunidad de operadores que se parecen a ti." }) },
    { icon: Sparkles,
      title: pick({ en: "Concierge experience", es: "Experiencia concierge" }),
      desc: pick({ en: "From the first call to your first agency — every step engineered to feel premium.", es: "Desde la primera llamada hasta tu primera agencia — cada paso diseñado para sentirse premium." }) },
  ];

  const metrics = [
    { k: "12,400+", l: pick({ en: "Clients served", es: "Clientes atendidos" }) },
    { k: "1,800+", l: pick({ en: "Students enrolled", es: "Estudiantes inscritos" }) },
    { k: "320+", l: pick({ en: "Active agents", es: "Agentes activos" }) },
    { k: "48", l: pick({ en: "Markets reached", es: "Mercados alcanzados" }) },
  ];

  const testimonials = pick({
    en: [
      { quote: "I came in to file my taxes. Two years later I own a tax office with five agents. DTODOS didn't sell me a dream — they handed me a system.", name: "Carolina M.", role: "Agency Owner · Orlando" },
      { quote: "TAX360 is the most serious training I've taken in this industry. It feels like getting hired by a top firm and getting paid to learn.", name: "Andrés R.", role: "Tax Professional · Houston" },
      { quote: "The CRM and the team support are what set them apart. I run my agency like a real company now, not a kitchen-table operation.", name: "Patricia L.", role: "Agency Owner · Miami" },
    ],
    es: [
      { quote: "Vine a hacer mis impuestos. Dos años después soy dueña de una oficina con cinco agentes. DTODOS no me vendió un sueño — me dio un sistema.", name: "Carolina M.", role: "Dueña de Agencia · Orlando" },
      { quote: "TAX360 es el entrenamiento más serio que he tomado en esta industria. Se siente como ser contratado por una firma top y que te paguen por aprender.", name: "Andrés R.", role: "Profesional de Impuestos · Houston" },
      { quote: "El CRM y el soporte del equipo son lo que los diferencia. Ahora manejo mi agencia como una empresa real, no como un negocio de cocina.", name: "Patricia L.", role: "Dueña de Agencia · Miami" },
    ],
  });

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt={pick({ en: "Luxury black marble with gold veins", es: "Mármol negro de lujo con vetas de oro" })}
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
              {pick({
                en: <>Taxes. Insurance. <br />Business. <span className="text-gradient-gold italic">Education.</span></>,
                es: <>Impuestos. Seguros. <br />Negocios. <span className="text-gradient-gold italic">Educación.</span></>,
              })}
            </h1>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-foreground/80 leading-relaxed">
              {pick({
                en: "One ecosystem to build financial professionals — and turn financial professionals into agency owners. Premium service, modern technology, built for Hispanic entrepreneurs.",
                es: "Un ecosistema para formar profesionales financieros — y convertir profesionales financieros en dueños de agencia. Servicio premium, tecnología moderna, hecho para emprendedores hispanos.",
              })}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-gold">
                {pick({ en: "Book a consultation", es: "Reservar consulta" })} <ArrowRight size={16} />
              </Link>
              <Link to="/business-academy" className="btn-ghost">
                {pick({ en: "Explore TAX360", es: "Explorar TAX360" })} <ArrowUpRight size={16} />
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

      {/* COMPANY */}
      <section className="relative py-20">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">{pick({ en: "The Company", es: "La Compañía" })}</p>
              <h2 className="display mt-6 text-4xl sm:text-5xl">
                {pick({
                  en: <>A modern financial firm,<br /><span className="text-gradient-gold italic">engineered like a fintech.</span></>,
                  es: <>Una firma financiera moderna,<br /><span className="text-gradient-gold italic">diseñada como una fintech.</span></>,
                })}
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {pick({
                  en: "DTODOS isn't a tax office that grew into a school. It's a financial services group designed from day one as a complete ecosystem — practice, academy, agency network and technology, all under one roof.",
                  es: "DTODOS no es una oficina de impuestos que se convirtió en escuela. Es un grupo de servicios financieros diseñado desde el día uno como un ecosistema completo — práctica, academia, red de agencias y tecnología, todo bajo un mismo techo.",
                })}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {pick({
                  en: "We serve thousands of clients across the United States, train the next generation of bilingual tax and insurance professionals, and give the best of them a path to own their own agency.",
                  es: "Atendemos a miles de clientes en todo Estados Unidos, formamos a la próxima generación de profesionales bilingües de impuestos y seguros, y damos a los mejores el camino para abrir su propia agencia.",
                })}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/financial-services" className="link-gold">{pick({ en: "Our services", es: "Nuestros servicios" })} <ArrowRight size={14} /></Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/agency-network" className="link-gold">DTODOS ADN <ArrowRight size={14} /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="relative py-20 border-t border-white/5">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">{pick({ en: "Four divisions · One ecosystem", es: "Cuatro divisiones · Un ecosistema" })}</p>
            <h2 className="display mt-6 text-4xl sm:text-5xl max-w-3xl">
              {pick({
                en: <>Every part of a financial life,<span className="text-gradient-gold italic"> handled.</span></>,
                es: <>Cada parte de tu vida financiera,<span className="text-gradient-gold italic"> resuelta.</span></>,
              })}
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

      {/* WHY */}
      <section className="relative py-20 border-t border-white/5">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">{pick({ en: "Why DTODOS", es: "Por qué DTODOS" })}</p>
              <h2 className="display mt-6 text-4xl sm:text-5xl">
                {pick({
                  en: <>Trusted by clients.<br /><span className="text-gradient-gold italic">Chosen by operators.</span></>,
                  es: <>Confianza de clientes.<br /><span className="text-gradient-gold italic">Elegido por operadores.</span></>,
                })}
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

      {/* JOURNEY */}
      <section className="relative py-20 border-t border-white/5 overflow-hidden">
        <img src={goldTexture} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.07]" aria-hidden />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow">{pick({ en: "The Transformation Path", es: "El Camino de Transformación" })}</p>
            <h2 className="display mt-6 text-4xl sm:text-5xl max-w-3xl">
              {pick({
                en: <>From your first tax return to<span className="text-gradient-gold italic"> your own agency.</span></>,
                es: <>Desde tu primera declaración hasta<span className="text-gradient-gold italic"> tu propia agencia.</span></>,
              })}
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

      {/* FOUNDER */}
      <section className="relative py-20 border-t border-white/5">
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
              <p className="eyebrow">{pick({ en: "Founder", es: "Fundador" })}</p>
              <h2 className="display mt-6 text-4xl sm:text-5xl">
                MrGEO. <span className="text-gradient-gold italic">{pick({ en: "Operator, educator, builder.", es: "Operador, educador, constructor." })}</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                {pick({
                  en: "MrGEO built DTODOS from a single desk into a multi-state financial ecosystem by refusing to choose between practice and education. He believes the best schools are run by the best operators — and that the Hispanic community deserves both.",
                  es: "MrGEO construyó DTODOS desde un solo escritorio hasta un ecosistema financiero multi-estatal negándose a elegir entre práctica y educación. Cree que las mejores escuelas las dirigen los mejores operadores — y que la comunidad hispana merece ambas.",
                })}
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {pick({
                  en: "Today he leads a network of agents, instructors and technologists building the financial firm he wished existed when he started.",
                  es: "Hoy lidera una red de agentes, instructores y tecnólogos construyendo la firma financiera que deseaba que existiera cuando él empezó.",
                })}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/business-academy" className="btn-gold">{pick({ en: "See his curriculum", es: "Ver su currículo" })} <ArrowRight size={16} /></Link>
                <Link to="/agency-network" className="btn-ghost">{pick({ en: "Join the network", es: "Únete a la red" })}</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-20 border-t border-white/5">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">{pick({ en: "Success Stories", es: "Historias de Éxito" })}</p>
            <h2 className="display mt-6 text-4xl sm:text-5xl max-w-3xl">
              {pick({
                en: <>Real operators. <span className="text-gradient-gold italic">Real outcomes.</span></>,
                es: <>Operadores reales. <span className="text-gradient-gold italic">Resultados reales.</span></>,
              })}
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

      {/* CTA */}
      <section className="relative py-20 border-t border-white/5">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 px-8 sm:px-16 py-14 sm:py-20">
              <img src={goldTexture} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
              <div className="relative max-w-2xl">
                <p className="eyebrow">{pick({ en: "Start your journey", es: "Comienza tu camino" })}</p>
                <h2 className="display mt-6 text-4xl sm:text-6xl">
                  {pick({
                    en: <>Your first move into the<span className="text-gradient-gold italic"> DTODOS ecosystem.</span></>,
                    es: <>Tu primer paso al<span className="text-gradient-gold italic"> ecosistema DTODOS.</span></>,
                  })}
                </h2>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                  {pick({
                    en: "Book a 20-minute strategy call. We'll map your fastest path — client, student, professional, or agency owner.",
                    es: "Reserva una llamada de estrategia de 20 minutos. Trazamos tu camino más rápido — cliente, estudiante, profesional o dueño de agencia.",
                  })}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-gold">{pick({ en: "Book a call", es: "Reservar llamada" })} <ArrowRight size={16} /></Link>
                  <Link to="/business-academy" className="btn-ghost">{pick({ en: "Enroll in TAX360", es: "Inscribirse en TAX360" })}</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
