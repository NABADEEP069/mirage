'use client';
import React, { useState } from 'react';
import TypingArea from './TypingArea';

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  question: Question | null;
}

const AnswerPanel = ({ question }: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  if (!question) {
    return (
      <div className=" bg-black p-6 rounded-lg shadow-lg flex items-center justify-center">
        <p className="text-gray-400 text-lg">Select a question to start practicing!</p>
      </div>
    );
  }

  return (
    <div className=" bg-white p-6 rounded-lg shadow-lg flex flex-col gap-6">
      <div>
        <h3 className="font-mono text-lg text-gray-300 mb-2">
          {question.question}
        </h3>
        <TypingArea correctAnswer={question.answer} />
      </div>
      <div>
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
        {showAnswer && (
          <pre className="bg-[#282a36] p-4 rounded-md mt-4 whitespace-pre-wrap">
            <code className="text-green-400">{question.answer}</code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default AnswerPanel;