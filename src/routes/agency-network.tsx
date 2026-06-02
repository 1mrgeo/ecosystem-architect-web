import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Crown, Users, MapPin, Cpu } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import goldTexture from "@/assets/texture-gold.jpg";
import { usePick } from "@/lib/i18n";

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

function Page() {
  const pick = usePick();

  const pillars = [
    { icon: Crown,
      name: pick({ en: "Agency Ownership Program", es: "Programa de Propiedad de Agencia" }),
      desc: pick({ en: "Open your own DTODOS-branded agency with a proven onboarding, compliance and revenue model.", es: "Abre tu propia agencia con marca DTODOS, con un modelo probado de onboarding, cumplimiento e ingresos." }) },
    { icon: Users,
      name: pick({ en: "Team Building", es: "Construcción de Equipo" }),
      desc: pick({ en: "Recruiting playbooks, training systems and compensation structures that scale with you.", es: "Manuales de reclutamiento, sistemas de entrenamiento y estructuras de compensación que escalan contigo." }) },
    { icon: MapPin,
      name: pick({ en: "Expansion Opportunities", es: "Oportunidades de Expansión" }),
      desc: pick({ en: "Open markets across the U.S. — protected territories, real demand, real Hispanic communities.", es: "Mercados abiertos en todo EE.UU. — territorios protegidos, demanda real, comunidades hispanas reales." }) },
    { icon: Cpu,
      name: pick({ en: "Technology Stack", es: "Stack Tecnológico" }),
      desc: pick({ en: "DTODOS CRM, automation, calendars and reporting — the operating system for your agency.", es: "DTODOS CRM, automatización, calendarios y reportes — el sistema operativo de tu agencia." }) },
  ];

  return (
    <>
      <PageHero
        eyebrow="DTODOS ADN · Agency Development Network"
        title={pick({
          en: <>Own your agency. <span className="text-gradient-gold italic">Plug into an ecosystem.</span></>,
          es: <>Sé dueño de tu agencia. <span className="text-gradient-gold italic">Conéctate a un ecosistema.</span></>,
        })}
        description={pick({
          en: "DTODOS ADN (Agency Development Network) is built for licensed professionals ready to run their own firm — but tired of doing it alone. Brand, technology, training, recruiting and a national network — all at your back.",
          es: "DTODOS ADN (Agency Development Network) está hecho para profesionales licenciados listos para dirigir su propia firma — pero cansados de hacerlo solos. Marca, tecnología, entrenamiento, reclutamiento y una red nacional — todo a tu favor.",
        })}
      >
        <Link to="/contact" className="btn-gold">{pick({ en: "Request agency info", es: "Solicitar información" })} <ArrowRight size={16} /></Link>
        <Link to="/business-academy" className="btn-ghost">{pick({ en: "Get licensed first", es: "Obtén tu licencia primero" })}</Link>
      </PageHero>

      <section className="relative py-16">
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

      <section className="relative py-16 border-t border-white/5 overflow-hidden">
        <img src={goldTexture} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" aria-hidden />
        <div className="container-x relative grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow">DTODOS CRM</p>
            <h2 className="display mt-6 text-4xl">
              {pick({
                en: <>An operating system for <span className="text-gradient-gold italic">your agency.</span></>,
                es: <>Un sistema operativo para <span className="text-gradient-gold italic">tu agencia.</span></>,
              })}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {pick({
                en: "CRM, automation, calendars, pipelines and reporting — the same technology stack our top-performing agencies use to run lean, predictable practices. Yours from day one.",
                es: "CRM, automatización, calendarios, pipelines y reportes — el mismo stack que usan nuestras agencias top para operar prácticas eficientes y predecibles. Tuyo desde el día uno.",
              })}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-panel rounded-2xl p-8 space-y-4">
              {pick({
                en: ["Lead pipelines", "Automated follow-ups", "Calendar & booking", "Client portal", "Team performance", "Revenue dashboards"],
                es: ["Pipelines de leads", "Seguimientos automáticos", "Calendario y reservas", "Portal del cliente", "Desempeño del equipo", "Dashboards de ingresos"],
              }).map((f) => (
                <div key={f} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm">{f}</span>
                  <span className="text-[11px] uppercase tracking-widest text-gold/80">{pick({ en: "Included", es: "Incluido" })}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
