import fs from 'fs'
let trajectories = []

export const createData = (req, res) => {
    const trajectory = req.body;
    trajectories.push(trajectory);
    res.send(`Trajectory with ID ${trajectory.id} added.`);
}

export const deleteData = (req, res) => {
    trajectories =[];
}

export const getData = (req, res) => {
    
    //res.json({html: "<a href='../'>Go Back</a><br>", data: trajectories});
    res.send(trajectories);
}

export const getDataByID = (req, res) => {
    const { id } = req.params;

    const foundTrajectory = trajectories.find((trajectory)=> trajectory.id == id);
    
   /*res.format({
        json: function () {
            var traj = JSON.stringify(foundTrajectory, null, 4)
            res.send(traj)
        }
    })*/
    
    
    res.send(foundTrajectory);
}

