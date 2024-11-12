import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { sendEmail } from './emailService';

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  formType: 'contact' | 'free-guide' | 'quiz';
  quizAnswers?: Record<string, string[]>;
}

export const submitFormData = async (data: FormData): Promise<{ success: boolean }> => {
  try {
    const submissionData = {
      ...data,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    // Add document to Firestore
    const docRef = await addDoc(collection(db, 'form_submissions'), submissionData);

    if (!docRef.id) {
      throw new Error('Failed to create document');
    }

    // Try to send email notification
    try {
      await sendEmail({
        to_email: import.meta.env.VITE_ADMIN_EMAIL,
        from_name: data.name,
        from_email: data.email,
        form_type: data.formType,
        message: JSON.stringify(data, null, 2)
      });
    } catch (emailError) {
      console.warn('Email notification failed:', emailError);
      // Continue execution even if email fails
    }

    return { success: true };
  } catch (error) {
    console.error('Form submission failed:', error);
    throw error;
  }
};