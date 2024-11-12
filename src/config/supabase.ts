import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export type FormSubmission = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone?: string;
  form_type: 'contact' | 'free-guide' | 'quiz';
  quiz_answers?: Record<string, string[]>;
  status: 'pending' | 'processed' | 'failed';
};