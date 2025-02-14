import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const Transition: React.FC = () => {
  const frame = useCurrentFrame();
  
  const progress = interpolate(frame, [0, 60], [0, 100], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill 
      className="bg-black"
      style={{
        clipPath: `circle(${progress}% at center)`,
      }}
    />
  );
};