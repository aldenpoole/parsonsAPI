import express from 'express';

const router = express.Router();
const trajectories = []

router.post('/', (req, res) => {
    const trajectory = req.body;

    trajectories.push(trajectory);

    res.send(`Trajectory with ID ${trajectory.id} added.`);
});

router.delete('/', (req, res) => {

        trajectories = [];
    
    
    res.send(`Trajectories have been deleted.`);
});

router.get('/', (req, res) => {
    res.send(trajectories);
});

export default router;