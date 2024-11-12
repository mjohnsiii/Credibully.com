import { useState, useCallback } from 'react';
import { Question } from '../types/questions';

export interface QuizAnswers {
  [key: string]: {
    selectedOptions: string[];
    otherText?: string;
  };
}

interface UseQuizProps {
  questions: Question[];
}

export function useQuiz({ questions }: UseQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');
  const [submitted, setSubmitted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const hasAnswer = answers[currentQuestion.id]?.selectedOptions.length > 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswer = useCallback((questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        selectedOptions: [value],
        otherText: value === 'Other' ? '' : undefined
      }
    }));
  }, []);

  const handleOtherInput = useCallback((questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        otherText: value
      }
    }));
  }, []);

  const handleCheckboxChange = useCallback((questionId: string, option: string) => {
    setAnswers(prev => {
      const currentAnswers = prev[questionId]?.selectedOptions || [];
      let newSelectedOptions: string[];

      if (currentAnswers.includes(option)) {
        newSelectedOptions = currentAnswers.filter(a => a !== option);
      } else {
        newSelectedOptions = [...currentAnswers, option];
      }

      return {
        ...prev,
        [questionId]: {
          selectedOptions: newSelectedOptions,
          otherText: newSelectedOptions.includes('Other') ? (prev[questionId]?.otherText || '') : undefined
        }
      };
    });
  }, []);

  const goToNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1 && !isTransitioning && hasAnswer) {
      setIsTransitioning(true);
      setSlideDirection('left');
      
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentQuestionIndex, questions.length, isTransitioning, hasAnswer]);

  const goToPreviousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setSlideDirection('right');
      
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentQuestionIndex, isTransitioning]);

  const handleSubmit = useCallback(() => {
    if (hasAnswer) {
      setSubmitted(true);
    }
  }, [hasAnswer]);

  return {
    currentQuestion,
    currentQuestionIndex,
    answers,
    submitted,
    hasAnswer,
    isLastQuestion,
    slideDirection,
    isTransitioning,
    handleAnswer,
    handleCheckboxChange,
    handleOtherInput,
    goToNextQuestion,
    goToPreviousQuestion,
    handleSubmit,
    setSubmitted
  };
}