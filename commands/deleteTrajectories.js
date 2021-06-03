//delData.js deletes all objects stored in API

import fetch from 'node-fetch'
import cliProgress from 'cli-progress'

const fetcher = 'http://localhost:5000/trajectories/'

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

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
    bar1.start(responseJson.length, 0);
    var i;
    for(i =0; i< (responseJson).length; i++){
        //fetch statement not working??
        bar1.update(i+1);
        fetch(fetcher, deleteMethod)
    }
    bar1.stop();
    })
    
   .catch(err => console.log(err))

 
