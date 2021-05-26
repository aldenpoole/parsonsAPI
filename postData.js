const http = require('http')

const options = {
  method: 'POST',
  hostname: 'localhost',
  port: 3000,
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

    

    const req = http.request(options, res => {
        const chunks = []
      
        res.on('data', chunk => {
          chunks.push(chunk)
        })
      
        res.on('end', () => {
          const body = Buffer.concat(chunks)
          console.log(body.toString())
        })
      })

    req.write(JSON.stringify({ id: traj_id, type: stagename, velocity: veloc, angle: ang }))
    req.end()
    
}



