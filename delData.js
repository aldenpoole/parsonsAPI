import fetch from 'node-fetch'

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
       }
   }
  

   fetch('http://localhost:5000/trajectories/', getMethod) 
   .then(response => response.json())
   .then((responseJson) => {
    var i;
    for(i =0; i< (responseJson).length; i++){
        fetch('http://localhost:5000/trajectories/' + responseJson[i].id, deleteMethod)
    }})
   .catch(err => console.log(err))