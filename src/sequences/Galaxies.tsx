import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

const GALAXY_COUNT = 50;

export const Galaxies: React.FC = () => {
  const frame = useCurrentFrame();
  
  const galaxies = Array.from({ length: GALAXY_COUNT }).map((_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const rotation = interpolate(frame, [0, 300], [0, 360 + Math.random() * 720]);
    const scale = Math.random() * 0.5 + 0.5;
    
    return (
      <div
        key={i}
        className="absolute w-32 h-32 bg-white rounded-full blur-lg"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: `rotate(${rotation}deg) scale(${scale})`,
          opacity: 0.3,
        }}
      />
    );
  });

  return (
    <AbsoluteFill className="bg-black">
      {galaxies}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 to-transparent" />
    </AbsoluteFill>
  );
};