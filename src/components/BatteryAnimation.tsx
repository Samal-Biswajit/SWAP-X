"use client";

import { useEffect, useState } from "react";

export default function BatteryAnimation() {
  const [fillPercent, setFillPercent] = useState(15);
  const [isSwapping, setIsSwapping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapping(true);
      setFillPercent(15);

      // Animate fill up
      let current = 15;
      const fillInterval = setInterval(() => {
        current += 2;
        if (current >= 95) {
          clearInterval(fillInterval);
          setFillPercent(95);
          setTimeout(() => setIsSwapping(false), 500);
        } else {
          setFillPercent(current);
        }
      }, 30);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Glow ring */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-accent/10 animate-pulse-glow opacity-30" />
      <div className="absolute w-[350px] h-[350px] rounded-full border border-accent/5" style={{ animation: "rotate-slow 20s linear infinite" }} />

      {/* Battery body */}
      <div className="relative w-[180px] h-[280px] rounded-2xl border-2 border-accent/40 bg-[var(--sw-bg-card)] overflow-hidden flex flex-col items-center justify-end p-3">
        {/* Battery tip */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 rounded-t-lg bg-accent/30 border-2 border-accent/40 border-b-0" />

        {/* Fill level */}
        <div
          className="w-full rounded-xl transition-all duration-300 ease-out relative overflow-hidden"
          style={{
            height: `${fillPercent}%`,
            background: fillPercent > 80
              ? "linear-gradient(180deg, #00e87b, #00b4d8)"
              : fillPercent > 40
              ? "linear-gradient(180deg, #ffb800, #ff8c00)"
              : "linear-gradient(180deg, #ff4d6a, #ff2d55)",
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-30" style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s linear infinite",
          }} />
        </div>

        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-black text-white drop-shadow-lg">
            {fillPercent}%
          </span>
        </div>
      </div>

      {/* Status text */}
      <div className={`absolute -bottom-12 text-center transition-all duration-300 ${isSwapping ? "text-accent" : "text-secondary"}`}>
        <p className="text-sm font-bold uppercase tracking-wider">
          {isSwapping ? "⚡ Swapping..." : "✓ Ready to go"}
        </p>
      </div>
    </div>
  );
}
