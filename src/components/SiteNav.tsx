import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LangToggle, usePick } from "@/lib/i18n";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pick = usePick();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: pick({ en: "Home", es: "Inicio" }) },
    { to: "/financial-services", label: pick({ en: "Financial Services", es: "Servicios Financieros" }) },
    { to: "/business-academy", label: pick({ en: "Business Academy", es: "Academia de Negocios" }) },
    { to: "/agency-network", label: "DTODOS ADN" },
    { to: "/contact", label: pick({ en: "Contact", es: "Contacto" }) },
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="group" aria-label="DTODOS Financial Group home">
          <Logo size={36} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LangToggle />
          <Link to="/contact" className="btn-ghost !py-2 !px-4 text-[13px]">
            {pick({ en: "Book a call", es: "Reservar llamada" })}
          </Link>
          <Link to="/business-academy" className="btn-gold !py-2 !px-4 text-[13px]">
            {pick({ en: "Join TAX360", es: "Únete a TAX360" })}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LangToggle />
          <button
            aria-label="Menu"
            className="p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90 py-1"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-3 w-full">
              {pick({ en: "Book a call", es: "Reservar llamada" })}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
