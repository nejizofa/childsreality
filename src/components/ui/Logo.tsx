interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const textFill = variant === "dark" ? "#2D1B4E" : "#FFFFFF";
  const subtitleFill = variant === "dark" ? "#6B6B80" : "rgba(255,255,255,0.7)";
  const gold = "#C9A96E";

  return (
    <svg
      viewBox="0 0 360 90"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Childs Real Estate"
    >
      {/* Icon mark — centered at 45,45 */}
      <g>
        {/* Outer circle ring */}
        <circle
          cx="45"
          cy="45"
          r="30"
          fill="none"
          stroke={gold}
          strokeWidth="2"
        />

        {/* Inner "C" arc — 300-degree open arc, gap facing right */}
        <path
          d={describeArc(45, 45, 22, 30, 330)}
          fill="none"
          stroke={gold}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Cardinal accent lines with dots */}
        {/* Top */}
        <line x1="45" y1="15" x2="45" y2="5" stroke={gold} strokeWidth="1.5" />
        <circle cx="45" cy="4" r="1.5" fill={gold} />
        {/* Bottom */}
        <line x1="45" y1="75" x2="45" y2="85" stroke={gold} strokeWidth="1.5" />
        <circle cx="45" cy="86" r="1.5" fill={gold} />
        {/* Left */}
        <line x1="15" y1="45" x2="5" y2="45" stroke={gold} strokeWidth="1.5" />
        <circle cx="4" cy="45" r="1.5" fill={gold} />
        {/* Right */}
        <line x1="75" y1="45" x2="85" y2="45" stroke={gold} strokeWidth="1.5" />
        <circle cx="86" cy="45" r="1.5" fill={gold} />

        {/* Diagonal L-shaped connectors for tech-luxury feel */}
        {/* Top-right */}
        <polyline
          points="66,24 74,16 82,16"
          fill="none"
          stroke={gold}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Top-left */}
        <polyline
          points="24,24 16,16 8,16"
          fill="none"
          stroke={gold}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bottom-right */}
        <polyline
          points="66,66 74,74 82,74"
          fill="none"
          stroke={gold}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bottom-left */}
        <polyline
          points="24,66 16,74 8,74"
          fill="none"
          stroke={gold}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Wordmark */}
      <text
        x="105"
        y="48"
        fill={textFill}
        fontFamily="'Playfair Display', serif"
        fontWeight="700"
        fontSize="32"
        letterSpacing="4"
      >
        CHILDS
      </text>
      <text
        x="107"
        y="68"
        fill={subtitleFill}
        fontFamily="'Inter', sans-serif"
        fontWeight="300"
        fontSize="13"
        letterSpacing="3"
      >
        REAL ESTATE
      </text>
    </svg>
  );
}

/** Helper: SVG arc path for an open circle segment */
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}
