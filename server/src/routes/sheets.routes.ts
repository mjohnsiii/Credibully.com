import { Router } from 'express';
import { submitFormData } from '../controllers/sheets.controller';

const router = Router();

router.post('/submit', submitFormData);

export default router;