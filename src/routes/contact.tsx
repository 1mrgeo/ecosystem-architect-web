import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { usePick } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DTODOS Financial Group" },
      { name: "description", content: "Book a 20-minute strategy call. We'll map your fastest path — client, student, professional or agency owner." },
      { property: "og:title", content: "Contact DTODOS" },
      { property: "og:description", content: "Book a consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  const pick = usePick();
  const [submitted, setSubmitted] = useState(false);

  const interests = pick({
    en: ["Financial Services", "Business Academy / TAX360", "DTODOS ADN (Agency Network)", "Other"],
    es: ["Servicios Financieros", "Academia / TAX360", "DTODOS ADN (Red de Agencias)", "Otro"],
  });

  return (
    <>
      <PageHero
        eyebrow={pick({ en: "Contact", es: "Contacto" })}
        title={pick({
          en: <>Let's map your <span className="text-gradient-gold italic">next move.</span></>,
          es: <>Tracemos tu <span className="text-gradient-gold italic">próximo paso.</span></>,
        })}
        description={pick({
          en: "Tell us where you are today — client, student, professional or future agency owner. We'll route you to the right advisor and schedule a 20-minute call.",
          es: "Dinos dónde estás hoy — cliente, estudiante, profesional o futuro dueño de agencia. Te conectamos con el asesor correcto y agendamos una llamada de 20 minutos.",
        })}
      />

      <section className="relative pb-32">
        <div className="container-x grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form
              className="glass-panel rounded-2xl p-8 sm:p-10 space-y-6"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label={pick({ en: "Full name", es: "Nombre completo" })} name="name" />
                <Field label={pick({ en: "Email", es: "Correo" })} name="email" type="email" />
                <Field label={pick({ en: "Phone", es: "Teléfono" })} name="phone" type="tel" />
                <Field label={pick({ en: "City", es: "Ciudad" })} name="city" />
              </div>

              <div>
                <label className="eyebrow mb-3 block">{pick({ en: "I'm interested in", es: "Me interesa" })}</label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <label key={i} className="cursor-pointer">
                      <input type="radio" name="interest" value={i} className="peer sr-only" />
                      <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-muted-foreground peer-checked:border-gold peer-checked:text-gold transition-colors block">
                        {i}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="eyebrow mb-3 block">{pick({ en: "Tell us more", es: "Cuéntanos más" })}</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder={pick({ en: "What are you looking to accomplish?", es: "¿Qué te gustaría lograr?" })}
                />
              </div>

              <button type="submit" className="btn-gold w-full sm:w-auto">
                {submitted
                  ? pick({ en: "Thanks — we'll be in touch", es: "Gracias — te contactaremos" })
                  : pick({ en: "Book my call", es: "Reservar mi llamada" })} <ArrowRight size={16} />
              </button>
              <p className="text-xs text-muted-foreground">
                {pick({
                  en: "This form will connect to GoHighLevel for scheduling and automation.",
                  es: "Este formulario se conectará a GoHighLevel para agendar y automatizar.",
                })}
              </p>
            </form>
          </Reveal>

          <Reveal delay={120} className="space-y-8">
            <div>
              <p className="eyebrow">{pick({ en: "Direct", es: "Directo" })}</p>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3"><Mail className="text-gold mt-0.5" size={16} /> hello@dtodosfinancial.com</li>
                <li className="flex items-start gap-3"><Phone className="text-gold mt-0.5" size={16} /> +1 (305) 000-0000</li>
                <li className="flex items-start gap-3"><MapPin className="text-gold mt-0.5" size={16} /> Miami · Houston · Orlando · {pick({ en: "Remote", es: "Remoto" })}</li>
              </ul>
            </div>
            <div className="glass-panel rounded-2xl p-6">
              <p className="eyebrow">{pick({ en: "Office hours", es: "Horario de oficina" })}</p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>{pick({ en: "Mon — Fri", es: "Lun — Vie" })}</span><span className="text-foreground">9:00 — 7:00</span></div>
                <div className="flex justify-between"><span>{pick({ en: "Saturday", es: "Sábado" })}</span><span className="text-foreground">10:00 — 3:00</span></div>
                <div className="flex justify-between"><span>{pick({ en: "Sunday", es: "Domingo" })}</span><span className="text-foreground">{pick({ en: "By appointment", es: "Con cita" })}</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block">{label}</span>
      <input
        type={type}
        name={name}
        className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
      />
    </label>
  );
}
