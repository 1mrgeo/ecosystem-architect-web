import logo from "@/assets/dtodos-logo.png.asset.json";

type Props = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

/**
 * DTODOS logo mark. The source PNG already has a black background and
 * gold artwork, so we use mix-blend-screen to drop the black and let the
 * gold sit naturally on the site's dark surfaces.
 */
export function Logo({ className = "", showWordmark = true, size = 32 }: Props) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logo.url}
        alt="DTODOS Financial Group"
        width={size}
        height={size}
        className="object-contain"
        style={{
          height: size,
          width: size,
          mixBlendMode: "screen",
          filter: "drop-shadow(0 4px 12px oklch(0.82 0.13 84 / 0.25))",
        }}
      />
      {showWordmark && (
        <span className="text-sm tracking-[0.22em] font-medium">
          DTODOS<span className="text-gold/80"> · </span>FINANCIAL
        </span>
      )}
    </span>
  );
}
