import React from 'react';
import { Player } from '@remotion/player';
import { CosmicJourney } from './Video';

const defaultTimeline = {
  title: "A Journey Through Time",
  description: "From the Big Bang to the Future of Humanity",
  events: [
    {
      title: "The Big Bang",
      description: "The birth of our universe",
      year: "13.8 billion years ago"
    },
    {
      title: "Formation of Galaxies",
      description: "The cosmic dance begins",
      year: "13 billion years ago"
    },
    {
      title: "Birth of Earth",
      description: "Our planet takes shape",
      year: "4.5 billion years ago"
    },
    {
      title: "Rise of Humanity",
      description: "The dawn of consciousness",
      year: "300,000 years ago"
    },
    {
      title: "The Future",
      description: "A glimpse into tomorrow",
      year: "Yet to come"
    }
  ],
  voiceover: "A journey through time, from the cosmic explosion that birthed our universe to the infinite possibilities that lie ahead.",
  musicUrl: "https://remotion-music.s3.eu-central-1.amazonaws.com/wave.mp3"
};

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          {defaultTimeline.title}
        </h1>
        <div className="aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
          <Player
            component={CosmicJourney}
            durationInFrames={1500}
            fps={30}
            compositionWidth={1920}
            compositionHeight={1080}
            inputProps={{ timeline: defaultTimeline }}
            style={{
              width: '100%',
              height: '100%',
            }}
            controls
          />
        </div>
      </div>
    </div>
  );
}

export default App;
