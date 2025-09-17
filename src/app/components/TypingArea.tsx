'use client';
import React, { useState, useEffect, useRef } from 'react';
import WPMTracker from './WPMTracker';

interface Props {
  correctAnswer: string;
}

const TypingArea = ({ correctAnswer }: Props) => {
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const inputRef = useRef<HTMLInputElement>(null);

 
  useEffect(() => {
    setUserInput('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    inputRef.current?.focus();
  }, [correctAnswer]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!startTime) {
      setStartTime(Date.now());
    }

    let correctChars = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === correctAnswer[i]) {
        correctChars++;
      }
    }
    
    const currentAccuracy = (correctChars / value.length) * 100 || 100;
    setAccuracy(currentAccuracy);
    setUserInput(value);

    if (startTime) {
      const elapsedTime = (Date.now() - startTime) / 1000 / 60; 
      const wordsTyped = value.length / 5;
      const currentWpm = Math.round(wordsTyped / elapsedTime);
      setWpm(elapsedTime > 0 ? currentWpm : 0);
    }
  };

  const renderText = () => {
    return correctAnswer.split('').map((char, index) => {
      let color = 'text-gray-500'; 
      if (index < userInput.length) {
        color = char === userInput[index] ? 'text-green-400' : 'text-red-500';
      }
      return (
        <span key={index} className={color}>
          {char === '\n' ? '↵\n' : char}
        </span>
      );
    });
  };

  return (
    <div className="relative">
      <div
        className="font-mono text-xl p-4 bg-[#282a36] rounded-md tracking-wider leading-relaxed whitespace-pre-wrap"
        onClick={() => inputRef.current?.focus()}
      >
        {renderText()}
      </div>
      <input
        ref={inputRef}
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-default"
        autoFocus
      />
      <div className="mt-4">
        <WPMTracker wpm={wpm} accuracy={accuracy} />
      </div>
    </div>
  );
};

export default TypingArea;