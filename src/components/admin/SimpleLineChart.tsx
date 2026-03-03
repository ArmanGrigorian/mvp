"use client";

interface SimpleLineChartProps {
  data: number[];
  labels: string[];
  color?: string;
}

export function SimpleLineChart({
  data,
  labels,
  color = "#CC9933",
}: SimpleLineChartProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  const height = 200;
  const width = 500;

  const points = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((val - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full overflow-visible"
        style={{ height: "auto" }}
      >
        <title>Impact chart showing monthly progress</title>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.15" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Area */}
        <polyline
          fill="url(#gradient)"
          stroke="none"
          points={`0,${height} ${points} ${width},${height}`}
          className="transition-all duration-1000"
        />

        {/* Glow Line */}
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
          filter="url(#glow)"
          className="translate-y-0.5 opacity-20"
        />

        {/* Main Line */}
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
          className="drop-shadow-sm transition-all duration-1000"
        />

        {/* Markers */}
        {data.map((val, i) => {
          const x = (i / (data.length - 1)) * width;
          const y = height - ((val - min) / range) * height;
          return (
            <g key={`${x}-${y}`} className="group cursor-pointer">
              <circle
                cx={x}
                cy={y}
                r="8"
                fill={color}
                className="opacity-0 transition-all duration-300 group-hover:opacity-20"
              />
              <circle
                cx={x}
                cy={y}
                r="4.5"
                fill="white"
                stroke={color}
                strokeWidth="2.5"
                className="transition-all duration-300 group-hover:scale-125"
              />
            </g>
          );
        })}
      </svg>

      <div className="mt-6 flex justify-between px-2 text-[9px] font-black tracking-[0.2em] text-gray-400 uppercase">
        {labels.map((label) => (
          <span
            key={label}
            className="hover:text-foundation-gold transition-all duration-300"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
