import express from 'express';
import { createData, deleteData, getData, getDataByID} from '../../controllers/trajectories.js';

const router = express.Router();


router
    .route('/')
    .post(createData)
    .delete(deleteData)
    .get(getData);
    
router
    .get('/:uid', getDataByID);

/*router
    .get('/:impactName', getDataByImpactName);

router
    .get('/:impactName', getDataByImpactName);*/

    //in order for this to work, i need to create another routes js file so i can use .get('/') without interference from the 'id' get.
    

export default router;
