import express from 'express';

const router = express.Router();
var trajectories = []

router.post('/', (req, res) => {
    const trajectory = req.body;

    trajectories.push(trajectory);

    res.send(`Trajectory with ID ${trajectory.id} added.`);
});

router.delete('/', (req, res) => {
    //clear array
    trajectories =[];
    
});

router.get('/', (req, res) => {
    res.send(trajectories);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundTrajectory = trajectories.find((trajectory)=> trajectory.id == id);
    res.send(foundTrajectory);
});

export default router;
