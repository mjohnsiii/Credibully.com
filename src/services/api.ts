const API_URL = import.meta.env.VITE_API_URL;

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  formType: 'contact' | 'free-guide' | 'quiz';
  quizAnswers?: Record<string, string[]>;
}

export async function submitFormData(data: FormData) {
  try {
    const response = await fetch(`${API_URL}/api/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}