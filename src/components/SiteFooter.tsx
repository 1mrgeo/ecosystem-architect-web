import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { usePick } from "@/lib/i18n";

export function SiteFooter() {
  const pick = usePick();

  const groups = [
    {
      title: pick({ en: "Financial Services", es: "Servicios Financieros" }),
      items: pick({
        en: ["Personal Taxes", "Corporate Taxes", "Bookkeeping", "Business Formation", "Health Insurance", "Life Insurance"],
        es: ["Impuestos Personales", "Impuestos Corporativos", "Contabilidad", "Formación de Empresa", "Seguro de Salud", "Seguro de Vida"],
      }),
    },
    {
      title: pick({ en: "Business Academy", es: "Academia de Negocios" }),
      items: pick({
        en: ["TAX360", "TAX360 CORP", "SALES360", "Curriculum", "Mentorship", "Certification"],
        es: ["TAX360", "TAX360 CORP", "SALES360", "Plan de estudios", "Mentoría", "Certificación"],
      }),
    },
    {
      title: "DTODOS ADN",
      items: pick({
        en: ["Ownership Program", "Team Building", "Expansion", "Technology Stack", "DTODOS CRM", "Automation"],
        es: ["Programa de Propiedad", "Construcción de Equipo", "Expansión", "Stack Tecnológico", "DTODOS CRM", "Automatización"],
      }),
    },
    {
      title: pick({ en: "Company", es: "Compañía" }),
      items: pick({
        en: ["About MrGEO", "Press", "Careers", "Contact", "Legal", "Privacy"],
        es: ["Sobre MrGEO", "Prensa", "Carreras", "Contacto", "Legal", "Privacidad"],
      }),
    },
  ];

  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-0 bg-radial-gold opacity-40 pointer-events-none" />
      <div className="container-x relative py-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" aria-label="DTODOS Financial Group home">
              <Logo size={42} />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {pick({
                en: "Taxes. Insurance. Business. Education. One ecosystem built to turn clients into financial professionals, and professionals into agency owners.",
                es: "Impuestos. Seguros. Negocios. Educación. Un ecosistema diseñado para convertir clientes en profesionales financieros, y profesionales en dueños de agencia.",
              })}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link to="/contact" className="btn-gold !py-2.5 !px-5 text-[13px]">
                {pick({ en: "Book a consultation", es: "Reservar consulta" })}
              </Link>
              <Link to="/agency-network" className="btn-ghost !py-2.5 !px-5 text-[13px]">
                {pick({ en: "Become an agent", es: "Hazte agente" })}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="eyebrow mb-4">{g.title}</div>
                <ul className="space-y-2.5">
                  {g.items.map((i) => (
                    <li key={i}>
                      <span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        {i}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DTODOS Financial Group. {pick({ en: "All rights reserved.", es: "Todos los derechos reservados." })}
          </p>
          <p className="text-xs text-muted-foreground">
            {pick({
              en: "Miami, FL · A modern financial services ecosystem.",
              es: "Miami, FL · Un ecosistema moderno de servicios financieros.",
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
