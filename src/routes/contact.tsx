import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

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

const interests = ["Financial Services", "Business Academy / TAX360", "Agency Network", "Other"];

function Page() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's map your <span className="text-gradient-gold italic">next move.</span></>}
        description="Tell us where you are today — client, student, professional or future agency owner. We'll route you to the right advisor and schedule a 20-minute call."
      />

      <section className="relative pb-32">
        <div className="container-x grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form
              className="glass-panel rounded-2xl p-8 sm:p-10 space-y-6"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="City" name="city" />
              </div>

              <div>
                <label className="eyebrow mb-3 block">I'm interested in</label>
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
                <label className="eyebrow mb-3 block">Tell us more</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="What are you looking to accomplish?"
                />
              </div>

              <button type="submit" className="btn-gold w-full sm:w-auto">
                {submitted ? "Thanks — we'll be in touch" : "Book my call"} <ArrowRight size={16} />
              </button>
              <p className="text-xs text-muted-foreground">
                This form will connect to GoHighLevel for scheduling and automation.
              </p>
            </form>
          </Reveal>

          <Reveal delay={120} className="space-y-8">
            <div>
              <p className="eyebrow">Direct</p>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3"><Mail className="text-gold mt-0.5" size={16} /> hello@dtodosfinancial.com</li>
                <li className="flex items-start gap-3"><Phone className="text-gold mt-0.5" size={16} /> +1 (305) 000-0000</li>
                <li className="flex items-start gap-3"><MapPin className="text-gold mt-0.5" size={16} /> Miami · Houston · Orlando · Remote</li>
              </ul>
            </div>
            <div className="glass-panel rounded-2xl p-6">
              <p className="eyebrow">Office hours</p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>Mon — Fri</span><span className="text-foreground">9:00 — 7:00</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-foreground">10:00 — 3:00</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-foreground">By appointment</span></div>
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
