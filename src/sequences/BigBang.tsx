import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const BigBang: React.FC = () => {
  const frame = useCurrentFrame();
  
  const scale = interpolate(frame, [0, 60], [0, 20], {
    extrapolateRight: 'clamp',
  });
  
  const opacity = interpolate(frame, [0, 30, 60, 90], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill className="bg-black flex items-center justify-center">
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
        }}
        className="w-4 h-4 bg-white rounded-full blur-lg"
      />
      <div className="absolute inset-0 bg-gradient-radial from-yellow-500/30 to-transparent" 
        style={{ opacity: opacity * 0.5 }}
      />
    </AbsoluteFill>
  );
};