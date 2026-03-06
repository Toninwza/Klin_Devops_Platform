import express from 'express';
import { getAllPerfumes, getPerfumeById } from '../controllers/perfumesController.js';

const router = express.Router();

router.get('/', getAllPerfumes);
router.get('/:id', getPerfumeById);

export default router;
