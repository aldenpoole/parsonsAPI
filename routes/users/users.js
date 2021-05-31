import express from 'express';
import { createData, deleteData, getData, getDataByID } from '../../controllers/users.js';

const router = express.Router();


router
    .route('/')
    .post(createData)
    .delete(deleteData)
    .get(getData);
    
router
    .get('/:id', getDataByID);

export default router;
