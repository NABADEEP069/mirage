'use client';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import QuestionList from './components/QuestionList';
import AnswerPanel from './components/AnswerPanel';
import VirtualKeyboard from './components/VirtualKeyboard';
import questionsData from '../../data/questions.json';
import Footer from './components/Footer';


interface Question {
  id: number;
  question: string;
  answer: string;
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [activeKey, setActiveKey] = useState('');


  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setActiveKey(e.key);
    };
    const handleKeyUp = () => {
      setActiveKey('');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

 
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleSelectQuestion = (id: number) => {
    const question = questions.find((q) => q.id === id) || null;
    setSelectedQuestion(question);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto p-6 flex flex-col gap-2 ">
        <div className="flex-grow flex gap-6 py-1">
          <QuestionList
            questions={questions}
            selectedQuestionId={selectedQuestion?.id || null}
            onSelectQuestion={handleSelectQuestion}
          />
          <AnswerPanel question={selectedQuestion} />
        </div>
        <VirtualKeyboard activeKey={activeKey} />
        <Footer/>
      </main>
    </div>
  );
}