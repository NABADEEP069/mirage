import React from 'react';

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  questions: Question[];
  selectedQuestionId: number | null;
  onSelectQuestion: (id: number) => void;
}

const QuestionList = ({ questions, selectedQuestionId, onSelectQuestion }: Props) => {
  return (
    <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg overflow-y-auto">
      <h2 className="text-lg text-center font-semibold mb-4 text-gray-200">Your Questions</h2>
      <ul>
        {questions.map((q) => (
          <li
            key={q.id}
            onClick={() => onSelectQuestion(q.id)}
            className={`p-3 rounded-md cursor-pointer transition-colors duration-200 ${
              selectedQuestionId === q.id
                ? 'bg-yellow-300 text-black'
                : 'hover:wheat-700'
            }`}
          >
            {q.question}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;