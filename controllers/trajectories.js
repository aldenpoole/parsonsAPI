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
    res.send(trajectories);
}

export const getDataByID = (req, res) => {
    const { id } = req.params;

    const foundTrajectory = trajectories.find((trajectory)=> trajectory.id == id);
    res.send(foundTrajectory);
}

export const getDataByImpactName = (req, res) => {
    const { impactName } = req.params;
    var i = 0;
    var foundTrajectories = [];
    
    foundTrajectories = trajectories.filter(function(value){return value.impactName==impactName;});
    /*for(i =0; i < trajectories.length; i++){
        if(trajectories[i].impactName == impactName){
            foundTrajectories =+ trajectories[i];
        }
    }*/
    //const foundTrajectory = trajectories.find((trajectory)=> trajectory.type == stage);
    res.send(foundTrajectories);
}
