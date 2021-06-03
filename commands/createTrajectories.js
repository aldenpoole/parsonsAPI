//postData.js creates a specified number of fake data objects

import fetch from 'node-fetch'
import { nanoid } from 'nanoid'
import cliProgress from 'cli-progress'

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

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);


//define loop variables to determine how many objects are created
var i = 0;
var j = 5000;

bar1.start(j, 0);

//give each trajectory one of many names
let names = ['Kyoto', 'Patriot','Falcon','Viper','Bulldog','Jericho', 'SRAM']
let threatID = "MDEF";
let earthID = "WGS-";
let flightModes=["depressed","boost","midcourse", "midcourse"];
let points = [["NK","39.02, 125.77"],["Cuba","23.06, -82.17"],["Syria","36.16"],["Russia","59.86, 30.58"]];
let rotations = ['rotating','non rotating'];

//random number in range generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min; //The maximum is exclusive and the minimum is inclusive
}

function randomTime(start, end) {
  var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  var HH = d.getHours();
  var MM = d.getMinutes();
  var SS = d.getSeconds();

  return HH + ":" + MM + ":" + SS;
}


for(i = 0; i < j; i++){
    bar1.update(i+1);
    //create ids for each trajectory
    var traj_id = nanoid();

    var name = names[getRandomInt(0,7)];
    var threatTypeID = threatID + "" + (getRandomInt(0,100));
    var flightMode = flightModes[getRandomInt(0,4)];

    var gravModel = earthID + "" + getRandomInt(0,91);
    var shapeModel = gravModel;

    var point = [getRandomInt(0,4)];
    var lPointName = (points[point][0]);
    var lPoint = (points[point][1]);
    var lAzimuth = (getRandomArbitrary(0,360));
    lAzimuth = lAzimuth.toFixed(4);

    var apogeeAlt = (getRandomArbitrary(0,1000)); //altitude in km
    var apogeeTime = (getRandomArbitrary(0,1000)); //time in seconds

    apogeeAlt = apogeeAlt.toFixed(4);
    apogeeTime = apogeeTime.toFixed(4);

    var iPoint = [getRandomInt(0,4)];
    var iPointName =(points[iPoint][0]);
    var iPoint =(points[iPoint][1]);

    var lTime = randomTime(new Date(2012, 0, 1), new Date());
    var iTime = randomTime(new Date(2012, 0, 1), new Date());

    var rotation = rotations[getRandomInt(0,3)];
    var rotationFrame = 'ECI';


    var pbvs = getRandomInt(0,5), rvs = getRandomInt(0,5), objs = getRandomInt(0,5); 
  
    //use naming variables to cycle through phase names
  
        //assemble all variables and post to API
    const postMethod = {
        method: 'POST', 
        headers: {
         'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify({ 
          id: traj_id, 
          name: name, 
          threat: threatTypeID, 
          flightMode: flightMode, 
          launchVars:[
            {launchName: lPointName}, 
            {launchPoint: lPoint}, 
            {launchTime: lTime}, 
            {launchAzimuth:lAzimuth}
          ], 
          impactVars:[
            {impactName: iPointName},
            {impactPoint : iPoint}, 
            {impactTime: iTime}
          ], 
          apogeeVars:[
            {apogeeAltitude:apogeeAlt},
            {apogeeTime:apogeeTime}
          ], 
          earthVars:[
            {gravityModel:gravModel},
            {shapeModel:shapeModel}
          ], 
          rotationVars:[
            {rotation:rotation},
            {rotationCoordinateFrame:rotationFrame}
          ],
          missileUtilities:[
            {numberOfPBVs:pbvs},
            {numberOfRVs:rvs},
            {numberOfObjs:objs}
          ] 
        })
    }
    
    fetch(fetcher, postMethod);
    
    

   
}
bar1.stop();

