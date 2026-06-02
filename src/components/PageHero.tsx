import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-radial-gold opacity-50 pointer-events-none" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[900px] rounded-full blur-3xl opacity-25 glow-pulse"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl text-foreground">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
