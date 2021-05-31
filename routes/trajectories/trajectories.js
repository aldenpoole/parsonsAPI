import express from 'express';
import { createData, deleteData, getData, getDataByID, getDataByStage } from '../../controllers/trajectories.js';

const router = express.Router();


router
    .route('/')
    .post(createData)
    .delete(deleteData)
    .get(getData);
    
router
    .get('/:id', getDataByID);
//??
router.get('/?type=final', getDataByStage);

export default router;
