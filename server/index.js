import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleSpreadsheet } from 'google-spreadsheet';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_ID);

async function initializeGoogleSheets() {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    await doc.loadInfo();
    console.log('Google Sheets connected successfully!');
  } catch (error) {
    console.error('Failed to initialize Google Sheets:', error);
  }
}

initializeGoogleSheets();

app.post('/api/submit', async (req, res) => {
  try {
    const { name, email, phone, formType, quizAnswers } = req.body;

    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone || '',
      formType,
      quizAnswers: JSON.stringify(quizAnswers || {}),
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to submit form data' 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});