import fetch from 'node-fetch'


const options = {
  method: 'POST',
  hostname: 'localhost',
  port: 5000,
  path: '/trajectories',
  headers: {
    'content-type': 'application/json',
  }
}




var i = 0;
let stage = ['launch', 'midcourse','final']
var stagecount = 1;
var stagename = 'launch';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

for(i = 0; i < 1000; i++){
    var traj_id = i+1;

    var veloc = getRandomArbitrary(3500, 4400);
    var ang = getRandomArbitrary(1,359);

    

    if(stagecount == 1){
        stagename = stage[0];
        stagecount++;
    }else if(stagecount == 2){
        stagename = stage[1];
        stagecount++;
    }else{
        stagename = stage[2];
        stagecount = 1;
    }
    const postMethod = {
        method: 'POST', 
        headers: {
         'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify({ id: traj_id, type: stagename, velocity: veloc, angle: ang })
    }

    fetch('http://localhost:5000/trajectories/', postMethod) 
    

   
}



