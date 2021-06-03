import express from 'express';
import { createData, deleteData, getData, getDataByID } from '../../controllers/systems.js';

const router = express.Router();


router
    .route('/')
    .post(createData)
    .delete(deleteData)
    .get(getData);
    
router
    .get('/:uid', getDataByID);

export default router;
