import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const Earth: React.FC = () => {
  const frame = useCurrentFrame();
  
  const rotation = interpolate(frame, [0, 300], [0, 360]);
  
  return (
    <AbsoluteFill className="bg-black flex items-center justify-center">
      <div
        className="w-64 h-64 rounded-full relative overflow-hidden"
        style={{
          transform: `rotate(${rotation}deg)`,
          background: 'url(https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000)',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30" />
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-transparent" />
    </AbsoluteFill>
  );
};