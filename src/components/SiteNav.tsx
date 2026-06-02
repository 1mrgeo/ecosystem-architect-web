import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/financial-services", label: "Financial Services" },
  { to: "/business-academy", label: "Business Academy" },
  { to: "/agency-network", label: "Agency Network" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-gold text-ink font-bold text-sm shadow-gold">
            D
          </span>
          <span className="text-sm tracking-[0.22em] font-medium">
            DTODOS<span className="text-gold/80"> · </span>FINANCIAL
          </span>
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
          <Link to="/contact" className="btn-ghost !py-2 !px-4 text-[13px]">Book a call</Link>
          <Link to="/business-academy" className="btn-gold !py-2 !px-4 text-[13px]">Join TAX360</Link>
        </div>

        <button
          aria-label="Menu"
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-3 w-full">Book a call</Link>
          </div>
        </div>
      )}
    </header>
  );
}
