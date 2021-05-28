//delData.js deletes all objects stored in API

import fetch from 'node-fetch'
const fetcher = 'http://localhost:5000/trajectories/'

//GET method
const getMethod = {
    method: 'GET', 
    headers: {
     'Content-type': 'application/json; charset=UTF-8' 
    },

   }
//DELETE method
const deleteMethod = {
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json; charset=UTF-8' 
       }
   }
  
   //use GET method to loop through trajectory list and send
   //a DELETE method for each entry.
   fetch(fetcher, getMethod) 
   .then(response => response.json())
   .then((responseJson) => {
    var i;
    for(i =0; i< (responseJson).length; i++){
        //fetch statement not working??
        fetch(fetcher, deleteMethod)
        console.log((i+1) + " deleted.")
    }
    console.log("All entries deleted.")
    })
    
   .catch(err => console.log(err))

  
