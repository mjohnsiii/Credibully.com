import { Request, Response } from 'express';
import { sheets } from '../config/sheets';
import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const FormDataSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  formType: z.enum(['contact', 'free-guide', 'quiz']),
  quizAnswers: z.record(z.array(z.string())).optional(),
});

export const submitFormData = async (req: Request, res: Response) => {
  try {
    const formData = FormDataSchema.parse(req.body);

    const row = [
      new Date().toISOString(),
      formData.name,
      formData.email,
      formData.phone || '',
      formData.formType,
      JSON.stringify(formData.quizAnswers || {}),
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid form data',
        details: error.errors 
      });
    }

    res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
};