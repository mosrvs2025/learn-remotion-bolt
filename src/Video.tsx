import { AbsoluteFill, Audio, Sequence, useVideoConfig } from 'remotion';
import { Timeline } from './types';
import { BigBang } from './sequences/BigBang';
import { Galaxies } from './sequences/Galaxies';
import { Earth } from './sequences/Earth';
import { Humanity } from './sequences/Humanity';
import { Future } from './sequences/Future';
import { Transition } from './components/Transition';

const SEQUENCE_DURATION = 300;

export const CosmicJourney: React.FC<{
  timeline: Timeline;
}> = ({ timeline }) => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="bg-black">
      <Audio src={timeline.musicUrl} />
      
      <Sequence from={0} durationInFrames={SEQUENCE_DURATION}>
        <BigBang />
      </Sequence>
      
      <Sequence from={SEQUENCE_DURATION - 30} durationInFrames={60}>
        <Transition />
      </Sequence>
      
      <Sequence from={SEQUENCE_DURATION} durationInFrames={SEQUENCE_DURATION}>
        <Galaxies />
      </Sequence>
      
      <Sequence from={SEQUENCE_DURATION * 2 - 30} durationInFrames={60}>
        <Transition />
      </Sequence>
      
      <Sequence from={SEQUENCE_DURATION * 2} durationInFrames={SEQUENCE_DURATION}>
        <Earth />
      </Sequence>
      
      <Sequence from={SEQUENCE_DURATION * 3 - 30} durationInFrames={60}>
        <Transition />
      </Sequence>
      
      <Sequence from={SEQUENCE_DURATION * 3} durationInFrames={SEQUENCE_DURATION}>
        <Humanity />
      </Sequence>
      
      <Sequence from={SEQUENCE_DURATION * 4 - 30} durationInFrames={60}>
        <Transition />
      </Sequence>
      
      <Sequence from={SEQUENCE_DURATION * 4} durationInFrames={SEQUENCE_DURATION}>
        <Future />
      </Sequence>
    </AbsoluteFill>
  );
};