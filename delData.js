const fetch = require('node-fetch');

const getMethod = {
    method: 'GET', 
    headers: {
     'Content-type': 'application/json; charset=UTF-8' 
    },

   }
const deleteMethod = {
    method: 'DELETE', 
    headers: {
     'Content-type': 'application/json; charset=UTF-8' 
    },

   }
  

   fetch('http://localhost:3000/trajectories/', getMethod) 
   .then(response => response.json())
   .then((responseJson) => {
    var i;
    for(i =0; i< (responseJson).length; i++){
        console.log("ID: " + responseJson[i].id + " deleted.")
        fetch('http://localhost:3000/trajectories/' + responseJson[i].id, deleteMethod)
    }console.log("Delete succesful.");})
    
   //.then((responseJson) => {
    //console.log(responseJson);})
   .catch(err => console.log(err))
   
   





