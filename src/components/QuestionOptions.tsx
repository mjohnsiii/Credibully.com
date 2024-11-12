import React from 'react';
import { Check } from 'lucide-react';
import { Question } from '../types/questions';
import { QuizAnswers } from '../hooks/useQuiz';

interface QuestionOptionsProps {
  question: Question;
  answers: QuizAnswers;
  onAnswer: (id: string, value: string) => void;
  onCheckboxChange: (id: string, option: string) => void;
  onOtherInput: (id: string, value: string) => void;
}

export default function QuestionOptions({ 
  question, 
  answers, 
  onAnswer, 
  onCheckboxChange,
  onOtherInput
}: QuestionOptionsProps) {
  const currentAnswers = answers[question.id]?.selectedOptions || [];
  const otherText = answers[question.id]?.otherText || '';
  const showOtherInput = currentAnswers.includes('Other');

  const renderOtherInput = () => {
    if (!showOtherInput) return null;

    return (
      <div className="mt-2 ml-8 animate-fade-in">
        <input
          type="text"
          value={otherText}
          onChange={(e) => onOtherInput(question.id, e.target.value)}
          placeholder="Please specify..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition-colors duration-200"
          autoFocus
        />
      </div>
    );
  };

  if (question.type === 'checkbox') {
    return (
      <div className="space-y-3">
        {question.options?.map((option) => (
          <div key={option}>
            <label 
              className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                currentAnswers.includes(option)
                  ? 'border-brand-primary bg-brand-cream text-brand-gray'
                  : 'border-gray-200 hover:border-brand-primary hover:bg-brand-cream/50'
              }`}
            >
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={currentAnswers.includes(option)}
                  onChange={() => onCheckboxChange(question.id, option)}
                  className="h-5 w-5 text-brand-primary focus:ring-brand-primary border-gray-300 rounded transition-all duration-200"
                />
                {currentAnswers.includes(option) && (
                  <Check className="absolute h-4 w-4 text-white transform translate-x-0.5 translate-y-0.5" />
                )}
              </div>
              <span className="ml-3 text-gray-700 flex-grow">{option}</span>
            </label>
            {option === 'Other' && currentAnswers.includes('Other') && renderOtherInput()}
          </div>
        ))}
      </div>
    );
  }

  if (question.type === 'radio') {
    return (
      <div className="space-y-3">
        {question.options?.map((option) => (
          <div key={option}>
            <label 
              className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                currentAnswers.includes(option)
                  ? 'border-brand-primary bg-brand-cream text-brand-gray'
                  : 'border-gray-200 hover:border-brand-primary hover:bg-brand-cream/50'
              }`}
            >
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={currentAnswers.includes(option)}
                  onChange={() => onAnswer(question.id, option)}
                  className="h-5 w-5 text-brand-primary focus:ring-brand-primary border-gray-300 transition-all duration-200"
                />
                {currentAnswers.includes(option) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
                  </div>
                )}
              </div>
              <span className="ml-3 text-gray-700 flex-grow">{option}</span>
            </label>
            {option === 'Other' && currentAnswers.includes('Other') && renderOtherInput()}
          </div>
        ))}
      </div>
    );
  }

  return (
    <select
      value={currentAnswers[0] || ''}
      onChange={(e) => onAnswer(question.id, e.target.value)}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary transition-all duration-200"
    >
      <option value="">Select an option</option>
      {question.options?.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}