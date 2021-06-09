import express from 'express';
import {getData} from "../../controllers/downloads.js";


const router = express.Router();


router
    .route('/')
    .post(getData)
    .delete()
    .get();

router
    .get('/:id');

export default router;
