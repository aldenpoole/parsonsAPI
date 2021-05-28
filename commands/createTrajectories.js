//postData.js creates a specified number of fake data objects

import fetch from 'node-fetch'

//create posting method

const fetcher = 'http://localhost:5000/trajectories/'

const options = {
  method: 'POST',
  hostname: 'localhost',
  port: 5000,
  path: '/trajectories',
  headers: {
    'content-type': 'application/json',
  }
}



//define loop variables to determine how many objects are created
var i = 0;
var j = 1000;

//give each trajectory one of three launch phases
let stage = ['launch', 'midcourse','final']
var stagecount = 1;
var stagename = 'launch';

//random number in range generator
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

for(i = 0; i < j; i++){
    //create ids for each trajectory
    var traj_id = i+1;
    //random numbers for velocity (mps), angle, and position (km)
    var veloc = getRandomArbitrary(1066, 1371);
    var ang = getRandomArbitrary(1,359);
    var xpos= getRandomArbitrary(-90, 90);
    var ypos= getRandomArbitrary(-180, 180);
    var zpos= getRandomArbitrary(500, 3400);
    
    //use naming variables to cycle through phase names
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
        //assemble all variables and post to API
    const postMethod = {
        method: 'POST', 
        headers: {
         'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify({ id: traj_id, type: stagename, velocity: veloc, theta: ang, xpos: xpos, ypos: ypos, zpos: zpos })
    }

    fetch(fetcher, postMethod) 
    

   
}

