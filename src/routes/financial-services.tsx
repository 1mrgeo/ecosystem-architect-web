import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Building2, BookOpen, Briefcase, Heart, Shield } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import officeImg from "@/assets/office-interior.jpg";
import { usePick } from "@/lib/i18n";

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

function Page() {
  const pick = usePick();

  const services = [
    { icon: FileText, name: pick({ en: "Personal Taxes", es: "Impuestos Personales" }),
      desc: pick({ en: "Maximize your return with bilingual tax professionals who treat your file like their own.", es: "Maximiza tu reembolso con profesionales bilingües que tratan tu declaración como propia." }) },
    { icon: Building2, name: pick({ en: "Corporate Taxes", es: "Impuestos Corporativos" }),
      desc: pick({ en: "Strategy and filings for LLCs, S-Corps and C-Corps — built for owners who plan ahead.", es: "Estrategia y declaraciones para LLCs, S-Corps y C-Corps — para dueños que planifican." }) },
    { icon: BookOpen, name: pick({ en: "Bookkeeping", es: "Contabilidad" }),
      desc: pick({ en: "Monthly books, clean P&Ls and tax-ready statements so you always know the number.", es: "Libros mensuales, P&L limpios y estados listos para impuestos — siempre sabes tu número." }) },
    { icon: Briefcase, name: pick({ en: "Business Formation", es: "Formación de Empresa" }),
      desc: pick({ en: "From EIN to operating agreement — launch the right entity, the right way, in days.", es: "Desde el EIN hasta el acuerdo operativo — lanza la entidad correcta, de la forma correcta, en días." }) },
    { icon: Heart, name: pick({ en: "Health Insurance", es: "Seguro de Salud" }),
      desc: pick({ en: "Marketplace and private plans matched to your family, your budget and your business.", es: "Planes del marketplace y privados ajustados a tu familia, presupuesto y negocio." }) },
    { icon: Shield, name: pick({ en: "Life Insurance", es: "Seguro de Vida" }),
      desc: pick({ en: "Term, whole and IUL strategies that protect your family and build long-term wealth.", es: "Estrategias de term, whole e IUL que protegen a tu familia y construyen riqueza a largo plazo." }) },
  ];

  return (
    <>
      <PageHero
        eyebrow={pick({ en: "Financial Services", es: "Servicios Financieros" })}
        title={pick({
          en: <>The full financial stack — <span className="text-gradient-gold italic">handled with care.</span></>,
          es: <>El stack financiero completo — <span className="text-gradient-gold italic">manejado con cuidado.</span></>,
        })}
        description={pick({
          en: "Six services, one team, one relationship. Whether you need a tax return filed this week or a five-year wealth plan, DTODOS is the firm that does both — without losing the human touch.",
          es: "Seis servicios, un equipo, una relación. Ya sea que necesites una declaración esta semana o un plan de riqueza a cinco años, DTODOS es la firma que hace ambos — sin perder el toque humano.",
        })}
      >
        <Link to="/contact" className="btn-gold">{pick({ en: "Book a consultation", es: "Reservar consulta" })} <ArrowRight size={16} /></Link>
        <Link to="/business-academy" className="btn-ghost">{pick({ en: "Become a professional", es: "Hazte profesional" })}</Link>
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
                    {pick({ en: "Learn more", es: "Saber más" })} <ArrowRight size={14} />
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
            <p className="eyebrow">{pick({ en: "Concierge by design", es: "Concierge por diseño" })}</p>
            <h2 className="display mt-6 text-4xl">
              {pick({
                en: <>A dedicated advisor. <span className="text-gradient-gold italic">Not a call queue.</span></>,
                es: <>Un asesor dedicado. <span className="text-gradient-gold italic">No una fila de llamadas.</span></>,
              })}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              {pick({
                en: "Every client is matched with a primary advisor and a back-office team. You get one number, one email and one relationship — even when the work spans tax, insurance and bookkeeping.",
                es: "Cada cliente se empareja con un asesor principal y un equipo de soporte. Tienes un solo número, un solo correo y una sola relación — aunque el trabajo cubra impuestos, seguros y contabilidad.",
              })}
            </p>
            <Link to="/contact" className="btn-gold mt-10">{pick({ en: "Meet your advisor", es: "Conoce a tu asesor" })} <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
