import { collection, addDoc, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { QuizAnswers } from '../hooks/useQuiz';

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  formType: 'contact' | 'free-guide' | 'quiz';
  quizAnswers?: QuizAnswers;
}

export interface FormSubmission extends FormData {
  id: string;
  createdAt: Date;
  status: 'pending' | 'processed' | 'failed';
}

export async function submitForm(data: FormData): Promise<{ success: boolean }> {
  try {
    console.log('Submitting form to Firestore:', data);

    // Prepare submission data
    const submissionData = {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      formType: data.formType,
      quizAnswers: data.quizAnswers || {},
      status: 'pending',
      createdAt: Timestamp.now()
    };

    // Add to Firestore
    const submissionsRef = collection(db, 'form_submissions');
    const docRef = await addDoc(submissionsRef, submissionData);
    
    console.log('Document written with ID:', docRef.id);
    return { success: true };
  } catch (error) {
    console.error('Form submission failed:', error);
    throw error;
  }
}