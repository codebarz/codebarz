export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <svg
        className="w-full h-full opacity-60"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 800 450"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="stroke-white/10 stroke-[0.5]">
          {/* Horizontal lines - Row 1 */}
          <line x1="100" x2="300" y1="100" y2="80" />
          <line x1="300" x2="500" y1="80" y2="120" />
          <line x1="500" x2="700" y1="120" y2="90" />
          {/* Horizontal lines - Row 2 */}
          <line x1="150" x2="350" y1="220" y2="200" />
          <line x1="350" x2="550" y1="200" y2="240" />
          <line x1="550" x2="750" y1="240" y2="210" />
          {/* Horizontal lines - Row 3 */}
          <line x1="80" x2="280" y1="350" y2="380" />
          <line x1="280" x2="480" y1="380" y2="360" />
          <line x1="480" x2="680" y1="360" y2="390" />
          {/* Vertical connections */}
          <line x1="100" x2="150" y1="100" y2="220" />
          <line x1="300" x2="150" y1="80" y2="220" />
          <line x1="300" x2="350" y1="80" y2="200" />
          <line x1="500" x2="350" y1="120" y2="200" />
          <line x1="500" x2="550" y1="120" y2="240" />
          <line x1="700" x2="550" y1="90" y2="240" />
          <line x1="700" x2="750" y1="90" y2="210" />
          <line x1="150" x2="80" y1="220" y2="350" />
          <line x1="150" x2="280" y1="220" y2="380" />
          <line x1="350" x2="280" y1="200" y2="380" />
          <line x1="350" x2="480" y1="200" y2="360" />
          <line x1="550" x2="480" y1="240" y2="360" />
          <line x1="550" x2="680" y1="240" y2="390" />
          <line x1="750" x2="680" y1="210" y2="390" />
          {/* Diagonal connections */}
          <line x1="100" x2="350" y1="100" y2="200" />
          <line x1="300" x2="550" y1="80" y2="240" />
          <line x1="500" x2="750" y1="120" y2="210" />
          <line x1="150" x2="480" y1="220" y2="360" />
          <line x1="350" x2="680" y1="200" y2="390" />
        </g>
        <g className="fill-white/10">
          {/* Node points */}
          <circle cx="100" cy="100" r="2" />
          <circle cx="300" cy="80" r="2" />
          <circle cx="500" cy="120" r="2" />
          <circle cx="700" cy="90" r="2" />
          <circle cx="150" cy="220" r="2" />
          <circle cx="350" cy="200" r="2" />
          <circle cx="550" cy="240" r="2" />
          <circle cx="750" cy="210" r="2" />
          <circle cx="80" cy="350" r="2" />
          <circle cx="280" cy="380" r="2" />
          <circle cx="480" cy="360" r="2" />
          <circle cx="680" cy="390" r="2" />
        </g>
      </svg>

      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scanline pointer-events-none z-20" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80 pointer-events-none" />
    </div>
  );
}
