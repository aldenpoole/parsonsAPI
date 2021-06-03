//postData.js creates a specified number of fake data objects

import fetch from 'node-fetch'
import { nanoid } from 'nanoid'
import cliProgress from 'cli-progress'

//create posting method

const fetcher = 'http://localhost:5000/systems/'

const options = {
  method: 'POST',
  hostname: 'localhost',
  port: 5000,
  path: '/systems',
  headers: {
    'content-type': 'application/json',
  }
}

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)


//define loop variables to determine how many objects are created
var i = 0
var j = 12

bar1.start(j, 0)

//give each trajectory one of many names
let names = ['nodong', 'hwasong','ghauri']
let fileSizeType ="mb"

//random number in range generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}




for(i = 0; i < j; i++){
    bar1.update(i+1);
    //create ids for each trajectory
    var uID = nanoid();

    var name = names[getRandomInt(0,4)];

    var lBand = getRandomInt(0,6) 
    var sBand = getRandomInt(0,6)
    var xBand = getRandomInt(0,6)
    var uhfBand = getRandomInt(0,11)

    var totalRCS = lBand + sBand + xBand + uhfBand

    var swir = getRandomInt(0,4)
    var mwir = getRandomInt(0,4)
    var lwir = getRandomInt(0,4)

    var totalIR = swir + mwir + lwir

    lBand = lBand +  "" + fileSizeType
    sBand = sBand + "" + fileSizeType
    xBand = xBand + "" + fileSizeType
    uhfBand = uhfBand + "" + fileSizeType
    totalRCS = totalRCS + "" + fileSizeType

    swir = swir + "" + fileSizeType
    mwir = mwir + "" + fileSizeType
    lwir = lwir + "" + fileSizeType
    totalIR = totalIR + "" + fileSizeType
    
  
    //use naming variables to cycle through phase names
  
        //assemble all variables and post to API
    const postMethod = {
        method: 'POST', 
        headers: {
         'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify({ 
          uid: uID, 
          name: name, 
          fileInformation:{
              totalSizeRCS:totalRCS,
              totalSizeIR:totalIR,
              objects:[{
                  rv:{
                      totalSizeRCS:totalRCS,
                      totalSizeIR:totalIR,
                      fileSizes:{
                          rf:{
                              lBand:lBand,
                              sBand:sBand,
                              xBand:xBand,
                              uhfBand:uhfBand
                          },
                          ir:{
                              swir:swir,
                              mwir:mwir,
                              lwir:lwir
                          }
                      }
                  }
              }]
          }
            
        })
    }
    
    fetch(fetcher, postMethod);
    
    

   
}
bar1.stop();

