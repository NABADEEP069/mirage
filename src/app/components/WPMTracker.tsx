import React from 'react';

interface Props {
  wpm: number;
  accuracy: number;
}

const WPMTracker = ({ wpm, accuracy }: Props) => {
  return (
    <div className="flex gap-8 text-2xl font-mono">
      <div>
        <span className="text-gray-400">WPM: </span>
        <span className="text-cyan-400 font-bold">{wpm}</span>
      </div>
      <div>
        <span className="text-gray-400">Accuracy: </span>
        <span className="text-green-400 font-bold">{accuracy.toFixed(1)}%</span>
      </div>
    </div>
  );
};

export default WPMTracker;