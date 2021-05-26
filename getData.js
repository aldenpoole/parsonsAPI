const fetch = require('node-fetch');

const getMethod = {
    method: 'GET', 
    headers: {
     'Content-type': 'application/json; charset=UTF-8' 
    },

   }

   fetch('http://localhost:3000/trajectories/', getMethod) 
   .then(response => response.json())
   .then((responseJson) => {
    var i;
    for(i =0; i< (responseJson).length; i++){
        console.log(responseJson[i])

    };})