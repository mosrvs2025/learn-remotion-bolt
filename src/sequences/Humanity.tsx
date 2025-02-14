import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

const IMAGES = [
  'https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=1000', // Ancient civilization
  'https://images.unsplash.com/photo-1603488704611-c24b1b9b0f9c?q=80&w=1000', // Industrial revolution
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000', // Modern technology
];

export const Humanity: React.FC = () => {
  const frame = useCurrentFrame();
  
  const currentImageIndex = Math.floor(frame / 100) % IMAGES.length;
  const nextImageIndex = (currentImageIndex + 1) % IMAGES.length;
  
  const transition = (frame % 100) / 100;
  
  return (
    <AbsoluteFill className="bg-black">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${IMAGES[currentImageIndex]})`,
          backgroundSize: 'cover',
          opacity: 1 - transition,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${IMAGES[nextImageIndex]})`,
          backgroundSize: 'cover',
          opacity: transition,
        }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 to-transparent" />
    </AbsoluteFill>
  );
};