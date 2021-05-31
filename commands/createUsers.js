//postData.js creates a specified number of fake data objects

import fetch from 'node-fetch'
import { nanoid } from 'nanoid'

//create posting method

const fetcher = 'http://localhost:5000/users/'

const options = {
  method: 'POST',
  hostname: 'localhost',
  port: 5000,
  path: '/users',
  headers: {
    'content-type': 'application/json',
  }
}



//define loop variables to determine how many objects are created
var i = 0;
var j = 25;

//give each trajectory one of three launch phases
let firstNames = ['Alex', 'Geddy','Neil', 'Phil', 'Tony']
let lastNames = ['Lifeson', 'Lee','Peart', 'Collins', 'Banks', 'Gabriel', 'Rutherford', 'Daltrey', 'Howe', 'Anderson', 'Bruford', 'Squire', 'Wakeman']

//random number in range generator
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function randomDate(start, end) {
    var d = new Date(start.getTime() + Math.random() * (end.getTime() -                     start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

for(i = 0; i < j; i++){
    //create ids for each user
    //var traj_id = nanoid();

    var traj_id = i+1;
    

    var first = firstNames[getRandomInt(0,5)];
    var last = lastNames[getRandomInt(0,13)];

    console.log(first + " " + last + " -- added.\n");

    var birthday= randomDate(new Date(1950, 0, 1), new Date(2000, 0, 1));

    var userName = first + getRandomInt(100,999);


    const postMethod = {
        method: 'POST', 
        headers: {
         'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify({ id: traj_id, firstName: first, lastName: last, birthDate: birthday, userName: userName })
    }

    fetch(fetcher, postMethod) 
    

   
}



