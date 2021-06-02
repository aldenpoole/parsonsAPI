//postData.js creates a specified number of fake data objects

import fetch from 'node-fetch'
import { nanoid } from 'nanoid'

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

//give each trajectory one of many names
let names = ['Kyoto', 'Patriot','Falcon','Viper','Bulldog','Jericho', 'SRAM']
let threatID = "MDEF";
let flightModes=["depressed","boost","midcourse", "midcourse"];
let points=[["NK","39.02, 125.77"],["Cuba","23.06, -82.17"],["Syria","36.16"],["Russia","59.86, 30.58"]];

//random number in range generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function randomTime(start, end) {
  var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  var HH = d.getHours();
  var MM = d.getMinutes();
  var SS = d.getSeconds();

  return HH + ":" + MM + ":" + SS;
}


for(i = 0; i < j; i++){
    //create ids for each trajectory
    var traj_id = nanoid();

    var name = names[getRandomInt(0,7)];
    var threatTypeID = threatID + "" + i;
    var flightMode = flightModes[getRandomInt(0,4)];

    var point = [getRandomInt(0,4)];
    var lPointName = (points[point][0]);
    var lPoint = (points[point][1]);

    var iPoint = [getRandomInt(0,4)];
    var iPointName =(points[iPoint][0]);
    var iPoint =(points[iPoint][1]);

    var lTime = randomTime(new Date(2012, 0, 1), new Date());
    var iTime = randomTime(new Date(2012, 0, 1), new Date());
    
    //use naming variables to cycle through phase names
  
        //assemble all variables and post to API
    const postMethod = {
        method: 'POST', 
        headers: {
         'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify({ id: traj_id, name: name, threat: threatTypeID, flightMode: flightMode, launchVars:[
           {launchName: lPointName}, {launchPoint: lPoint}, {launchTime: lTime}], impactName: iPointName,
          impactPoint : iPoint, impactTime: iTime })
    }

    fetch(fetcher, postMethod) 
    

   
}



