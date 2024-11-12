import { google } from 'googleapis';

const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_ID;
const CLIENT_EMAIL = import.meta.env.VITE_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = import.meta.env.VITE_GOOGLE_PRIVATE_KEY;

const isSheetsConfigured = SPREADSHEET_ID && CLIENT_EMAIL && PRIVATE_KEY;

let auth: any = null;
let sheets: any = null;

if (isSheetsConfigured) {
  auth = new google.auth.JWT({
    email: CLIENT_EMAIL,
    key: PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  sheets = google.sheets({ version: 'v4', auth });
}

export const appendToSheet = async (values: string[][]) => {
  if (!isSheetsConfigured) {
    console.warn('Google Sheets not configured. Skipping sheet update.');
    return null;
  }

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to append to sheet:', error);
    throw error;
  }
};