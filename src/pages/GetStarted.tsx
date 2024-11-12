import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { questions } from '../types/questions';
import QuestionProgress from '../components/QuestionProgress';
import QuestionOptions from '../components/QuestionOptions';
import { useQuiz } from '../hooks/useQuiz';

const GetStarted = () => {
  const {
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
    handleSubmit
  } = useQuiz({ questions });

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-cream pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-16 h-16 text-brand-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-brand-gray mb-4">Thank You!</h2>
          <p className="text-xl text-brand-gray mb-8">
            Based on your responses, we'll create a personalized credit improvement plan for you.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-gray mb-4">
              Next Steps
            </h3>
            <div className="space-y-4">
              <a
                href="/products"
                className="block w-full bg-brand-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                View Recommended Products
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <QuestionProgress
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
          />

          <div className="relative min-h-[400px] overflow-hidden">
            <div
              key={currentQuestionIndex}
              className={`absolute w-full transition-all duration-300 ${
                isTransitioning ? (
                  slideDirection === 'left' ? 'animate-slide-left' : 'animate-slide-right'
                ) : 'translate-x-0'
              }`}
            >
              <h2 className="text-2xl font-bold text-brand-gray mb-6">
                {currentQuestion.text}
              </h2>

              <QuestionOptions
                question={currentQuestion}
                answers={answers}
                onAnswer={handleAnswer}
                onCheckboxChange={handleCheckboxChange}
                onOtherInput={handleOtherInput}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            {currentQuestionIndex > 0 && (
              <button
                onClick={goToPreviousQuestion}
                disabled={isTransitioning}
                className="px-6 py-3 text-brand-gray hover:text-brand-primary transition-colors duration-300 disabled:opacity-50"
              >
                Back
              </button>
            )}
            
            {!isLastQuestion ? (
              <button
                onClick={goToNextQuestion}
                disabled={!hasAnswer || isTransitioning}
                className={`ml-auto px-6 py-3 rounded-lg flex items-center ${
                  hasAnswer && !isTransitioning
                    ? 'bg-brand-primary text-white hover:bg-opacity-90'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                } transition-all duration-300`}
              >
                Next <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!hasAnswer || isTransitioning}
                className={`ml-auto px-6 py-3 rounded-lg flex items-center ${
                  hasAnswer && !isTransitioning
                    ? 'bg-brand-secondary text-white hover:bg-opacity-90'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                } transition-all duration-300`}
              >
                Submit <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;