import { useState } from 'react';
import { submitForm } from '../services/formService';

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  formType: 'contact' | 'free-guide' | 'quiz';
  quizAnswers?: Record<string, string[]>;
}

export const useFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await submitForm(data);
      console.log('Form submission result:', result);
      return result.success;
    } catch (err) {
      console.error('Form submission error in hook:', err);
      setError(err instanceof Error ? err.message : 'Form submission failed');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmit,
    isSubmitting,
    error
  };
};