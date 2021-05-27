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
//get trajectories based on id number... working
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundTrajectory = trajectories.find((trajectory)=> trajectory.id == id);
    res.send(foundTrajectory);
});
//get trajectories based on launch phase... not working
router.get('/:type', (req, res) => {
    var { type } = req.params;

    var foundTrajectories = [] 
    var i =0;
    for(i = 0; i < trajectories.length;i++){
        if(toString(trajectories.type[i]) == toString(type)){
        foundTrajectories.push(trajectories[i]);
        }
    }
    res.send(foundTrajectories);
});

export default router;
