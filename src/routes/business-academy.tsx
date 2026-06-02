import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import academyImg from "@/assets/academy-class.jpg";
import { usePick } from "@/lib/i18n";

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

function Page() {
  const pick = usePick();

  const programs = [
    {
      name: "TAX360",
      tag: pick({ en: "Foundation", es: "Fundamentos" }),
      desc: pick({
        en: "The complete personal tax curriculum. From W-2 to Schedule C, you'll learn the craft inside a working firm.",
        es: "El currículo completo de impuestos personales. Desde el W-2 hasta el Schedule C, aprendes el oficio dentro de una firma activa.",
      }),
      bullets: pick({
        en: ["Live cohorts", "Bilingual instruction", "Real client cases", "Certification path"],
        es: ["Cohortes en vivo", "Instrucción bilingüe", "Casos reales de clientes", "Camino a certificación"],
      }),
    },
    {
      name: "TAX360 CORP",
      tag: pick({ en: "Advanced", es: "Avanzado" }),
      desc: pick({
        en: "Corporate taxation, entity strategy and multi-state filings — the curriculum for the operator who wants to serve businesses.",
        es: "Impuestos corporativos, estrategia de entidades y declaraciones multi-estatales — el currículo para el operador que quiere servir a negocios.",
      }),
      bullets: pick({
        en: ["LLC, S-Corp, C-Corp", "Entity strategy", "Multi-state filings", "Advisory frameworks"],
        es: ["LLC, S-Corp, C-Corp", "Estrategia de entidades", "Declaraciones multi-estatales", "Marcos de asesoría"],
      }),
    },
    {
      name: "SALES360",
      tag: pick({ en: "Growth", es: "Crecimiento" }),
      desc: pick({
        en: "The sales and client-experience system that turns a licensed professional into a thriving practice.",
        es: "El sistema de ventas y experiencia del cliente que convierte a un profesional licenciado en una práctica próspera.",
      }),
      bullets: pick({
        en: ["Discovery process", "Pricing & packaging", "Retention", "Referral engine"],
        es: ["Proceso de descubrimiento", "Precios y empaquetado", "Retención", "Motor de referidos"],
      }),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={pick({ en: "Business Academy", es: "Academia de Negocios" })}
        title={pick({
          en: <>Train inside a <span className="text-gradient-gold italic">working firm.</span></>,
          es: <>Entrena dentro de una <span className="text-gradient-gold italic">firma activa.</span></>,
        })}
        description={pick({
          en: "DTODOS Academy isn't a course library — it's apprenticeship inside an active financial practice. Live cohorts, real client cases, and a path to certification, your own clients, and eventually your own agency.",
          es: "La Academia DTODOS no es una librería de cursos — es aprendizaje dentro de una práctica financiera activa. Cohortes en vivo, casos reales y un camino hacia la certificación, tus propios clientes y eventualmente tu propia agencia.",
        })}
      >
        <Link to="/contact" className="btn-gold">{pick({ en: "Enroll in TAX360", es: "Inscríbete en TAX360" })} <ArrowRight size={16} /></Link>
        <Link to="/agency-network" className="btn-ghost">{pick({ en: "See the agency path", es: "Ver el camino a agencia" })}</Link>
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
                <Link to="/contact" className="link-gold mt-10">{pick({ en: "Apply to this program", es: "Aplicar a este programa" })} <ArrowRight size={14} /></Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-24 border-t border-white/5">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow">{pick({ en: "Learning by doing", es: "Aprender haciendo" })}</p>
            <h2 className="display mt-6 text-4xl">
              {pick({
                en: <>The classroom is a <span className="text-gradient-gold italic">real practice.</span></>,
                es: <>El salón de clase es una <span className="text-gradient-gold italic">práctica real.</span></>,
              })}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {pick({
                en: "Students sit alongside senior tax professionals, see real returns, shadow real client meetings and graduate with a portfolio of completed work — not a PDF certificate.",
                es: "Los estudiantes se sientan junto a profesionales senior, ven declaraciones reales, acompañan reuniones reales con clientes y se gradúan con un portafolio de trabajo terminado — no un certificado en PDF.",
              })}
            </p>
            <Link to="/contact" className="btn-gold mt-10">{pick({ en: "Talk to admissions", es: "Hablar con admisiones" })} <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal delay={120}>
            <img src={academyImg} alt="DTODOS Academy in session" className="rounded-2xl object-cover w-full aspect-[4/3] shadow-elev" loading="lazy" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
