import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const Future: React.FC = () => {
  const frame = useCurrentFrame();
  
  const particles = Array.from({ length: 100 }).map((_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const speed = Math.random() * 2 + 1;
    
    return (
      <div
        key={i}
        className="absolute w-1 h-1 bg-blue-500 rounded-full"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: `translateY(${frame * speed}px)`,
          opacity: Math.random() * 0.5 + 0.5,
        }}
      />
    );
  });

  return (
    <AbsoluteFill className="bg-black">
      {particles}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl font-bold text-white text-center opacity-50">
          The Future Awaits
        </div>
      </div>
    </AbsoluteFill>
  );
};