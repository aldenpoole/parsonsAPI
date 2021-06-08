import express from 'express';
import { getData } from '../../controllers/filters.js';

const router = express.Router();


router
    .route('/')
    .post()
    .delete()
    .get(getData);
    
router
    .get('/:id');

export default router;
