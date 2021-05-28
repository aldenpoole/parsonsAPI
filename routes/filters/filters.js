import express from 'express';
import { } from '../../controllers/filters.js';

const router = express.Router();


router
    .route('/')
    .post(createData)
    .delete(deleteData)
    .get(getData);
    
router
    .get('/:id', getDataByID);

export default router;
