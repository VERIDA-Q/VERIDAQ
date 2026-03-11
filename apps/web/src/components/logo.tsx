/**
 * VERIDAQ Logo System
 *
 * LogoMark  — the hexagonal badge icon only
 * LogoFull  — badge + "VERIDAQ" wordmark side by side
 *
 * variant="dark"  (default) — purple hex, white check — use on white / light backgrounds
 * variant="light"           — white hex, purple check — use on #520061 / dark backgrounds
 */

type Props = { className?: string };
type Variant = "dark" | "light";

/**
 * The standalone hexagonal badge mark.
 * A pointy-top hexagon (blockchain precision) with a bold V-check inside (verified).
 */
export function LogoMark({
  className,
  variant = "dark",
}: Props & { variant?: Variant }) {
  const hexFill = variant === "light" ? "#ffffff" : "#520061";
  const checkStroke = variant === "light" ? "#520061" : "#ffffff";

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Pointy-top hexagon — 6 vertices, circumradius 21, center (24,24) */}
      <polygon
        points="24,3 42,13 42,35 24,45 6,35 6,13"
        fill={hexFill}
      />
      {/* Bold V-check — left arm short, right arm long (canonical checkmark shape) */}
      <polyline
        points="12,24 20,34 36,15"
        stroke={checkStroke}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Full logo: hexagonal badge mark + "VERIDAQ" wordmark.
 */
export function LogoFull({
  className,
  variant = "dark",
  textSize = "lg",
}: Props & { variant?: Variant; textSize?: "sm" | "base" | "lg" }) {
  const textColor = variant === "light" ? "#ffffff" : "#520061";
  const sizeMap: Record<string, string> = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark
        className="h-8 w-auto shrink-0"
        variant={variant}
      />
      <span
        style={{ color: textColor }}
        className={`${sizeMap[textSize]} font-bold tracking-tight select-none`}
      >
        VERIDAQ
      </span>
    </div>
  );
}
