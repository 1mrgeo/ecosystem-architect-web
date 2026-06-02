import mark from "@/assets/dtodos-mark.png.asset.json";

type Props = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

/**
 * DTODOS Financial Group lockup.
 * The mark is a transparent PNG of three gold figures — it composes natively
 * on dark surfaces without blend hacks, so it reads as part of the design
 * rather than a pasted asset. The wordmark sits beside it as a single
 * typographic unit.
 */
export function Logo({ className = "", showWordmark = true, size = 32 }: Props) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src={mark.url}
        alt="DTODOS Financial Group"
        width={size}
        height={size}
        className="object-contain shrink-0"
        style={{
          height: size,
          width: "auto",
          filter: "drop-shadow(0 6px 16px oklch(0.82 0.13 84 / 0.35))",
        }}
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[13px] tracking-[0.28em] font-semibold text-foreground">
            DTODOS
          </span>
          <span className="mt-1 text-[9px] tracking-[0.38em] text-gold/80">
            FINANCIAL GROUP
          </span>
        </span>
      )}
    </span>
  );
}
