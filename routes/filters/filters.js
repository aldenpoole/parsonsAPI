import express from 'express';
import { } from '../../controllers/filters.js';

const router = express.Router();


router
    .route('/')
    .post()
    .delete()
    .get();
    
router
    .get('/:id');

export default router;
