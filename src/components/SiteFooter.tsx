import { Link } from "@tanstack/react-router";

const groups = [
  {
    title: "Financial Services",
    items: ["Personal Taxes", "Corporate Taxes", "Bookkeeping", "Business Formation", "Health Insurance", "Life Insurance"],
  },
  {
    title: "Business Academy",
    items: ["TAX360", "TAX360 CORP", "SALES360", "Curriculum", "Mentorship", "Certification"],
  },
  {
    title: "Agency Network",
    items: ["Ownership Program", "Team Building", "Expansion", "Technology Stack", "DTODOS CRM", "Automation"],
  },
  {
    title: "Company",
    items: ["About MrGEO", "Press", "Careers", "Contact", "Legal", "Privacy"],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-0 bg-radial-gold opacity-40 pointer-events-none" />
      <div className="container-x relative py-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-gold text-ink font-bold shadow-gold">D</span>
              <span className="text-sm tracking-[0.22em] font-medium">DTODOS · FINANCIAL</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Taxes. Insurance. Business. Education. One ecosystem built to turn
              clients into financial professionals, and professionals into agency owners.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link to="/contact" className="btn-gold !py-2.5 !px-5 text-[13px]">Book a consultation</Link>
              <Link to="/agency-network" className="btn-ghost !py-2.5 !px-5 text-[13px]">Become an agent</Link>
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
            © {new Date().getFullYear()} DTODOS Financial Group. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Miami, FL · A modern financial services ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}
