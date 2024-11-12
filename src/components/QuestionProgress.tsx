import React from 'react';

interface QuestionProgressProps {
  currentIndex: number;
  totalQuestions: number;
}

export default function QuestionProgress({ currentIndex, totalQuestions }: QuestionProgressProps) {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>Question {currentIndex + 1} of {totalQuestions}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-brand-primary h-2 rounded-full transition-all duration-700 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}