import express from 'express';
import { createData, deleteData, getData, getDataByID, getDataByImpactName } from '../../controllers/trajectories.js';

const router = express.Router();


router
    .route('/')
    .post(createData)
    .delete(deleteData)
    .get(getData);
    
router
    .get('/:id', getDataByID);
//??
router
    .get('/:impactName:', getDataByImpactName);

export default router;
