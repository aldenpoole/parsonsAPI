import fs from 'fs'
import { uuid } from 'uuidv4';

let trajectories = []
let total = 203323;

export const createData = (req, res) => {
    const trajectory = req.body;
    trajectories.push(trajectory);
    res.send(`Trajectory with ID ${trajectory.id} added.`);
}

export const deleteData = (req, res) => {
    trajectories =[];
}

export const getData = (req, res) => {

    // Going to generate some data based on the filters that have been supplied.
    const body = req.body;
    const filtersArr = body['filters'];
    const skip = body['skip'];
    const take = body['take'];
    if(filtersArr && filtersArr.length > 0){
        for(let i = 0; i < take; i++){
            const t = generateTrajectory(filtersArr);
            trajectories.push(t);
        }
        res.send(trajectories);
    }else{

        for(let i = 0; i < take; i++){
            const t = generateTrajectory(filtersArr);
            trajectories.push(t);
        }
        res.send(trajectories);
    }
}

export const getDataByID = (req, res) => {
    const { id } = req.params;

    const foundTrajectory = trajectories.find((trajectory)=> trajectory.id == id);
    
   /*res.format({
        json: function () {
            var traj = JSON.stringify(foundTrajectory, null, 4)
            res.send(traj)
        }
    })*/
    
    
    res.send(foundTrajectory);
}

export const generateTrajectories = (num, filters) => {
    const traj = [];

    for(let i = 0; i < num; i++){

    }

    return traj;
}

export const generateTrajectory = (filters) => {
    let sourceArray =['tmss','vcca','cnn']
    let classArray = ['Classified','Unclassified']
    let gravModArray = ['wg84','wgs96','mmw23','rmw45']
    let flightModArray = ['Lofted','Depressed','Min Energy']
    let earthShapeArray = ['Elliptical', 'Round']
    let atmosphericModeArray = ['Low','Medium','High']
    let rotationArray = ['Rotating','Non-rotating']
    let rotationFrameArray = ['ecf','eci']
    let weaponNamesArray = ['No Dong','Long Dong','Short Dong']
    let launchRegion = ['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia','Antarctica']
    let launchCountry = ['Egypt', 'Iran', 'Iraq', 'Russia', 'China','Saudi Arabia', 'Germany', 'Brazil', 'Chile','Poland','Australia']
    let warheadsArray = ['Nuclear','Bio','Standard']
    let countermeasuresArray =['Mortar','Bullet','Laser','KV']

    let selectedWarhead = warheadsArray[Math.floor(Math.random() * warheadsArray.length)];
    let selectedLaunchCountry = launchCountry[Math.floor(Math.random() * launchCountry.length)];

    filters.map(currentFilter => {

        const name = currentFilter['name'];
        if(name === 'warhead'){
            selectedWarhead = currentFilter['value']
        } else if(name === 'launchCountry'){
            selectedLaunchCountry = currentFilter['value']
        }
    })

    let id = uuid()
    let traj = {
        "uid": id, //random string
        "type": Math.floor(Math.random() * 90) + 1, //number
        "version": Math.floor(Math.random() * 90) + 1, //number
        "versionSpec": Math.floor(Math.random() * 90) + 1, // number
        "source": sourceArray[Math.floor(Math.random() * sourceArray.length)], // tmss, vcca, cnn
        "classification": classArray[Math.floor(Math.random() * classArray.length)], // unclass or classified
        "specification": "", // blank
        "gravityModel": gravModArray[Math.floor(Math.random() * gravModArray.length)], // wg84, wgs96, other
        "flightMode": flightModArray[Math.floor(Math.random() * flightModArray.length)], // depressed, lofted, min engery
        "earthShapeModel": earthShapeArray[Math.floor(Math.random() * earthShapeArray.length)], // ellipticaly or round
        "atmosphericMode": atmosphericModeArray[Math.floor(Math.random() * atmosphericModeArray.length)], // low, medium, high
        "rotation": rotationArray[Math.floor(Math.random() * rotationArray.length)], // rotating or non rotating
        "rotationFrame": rotationFrameArray[Math.floor(Math.random() * rotationFrameArray.length)], // eci,ecf
        "epochTime": "", //blank
        "weaponNameTMSS": weaponNamesArray[Math.floor(Math.random() * weaponNamesArray.length)], //nodong, longdong, shortdong
        "weaponNameGeneric": weaponNamesArray[Math.floor(Math.random() * weaponNamesArray.length)],//nodong, longdong, shortdong
        "weaponNameIntel": weaponNamesArray[Math.floor(Math.random() * weaponNamesArray.length)],//nodong, longdong, shortdong
        "numPBVs": Math.floor(Math.random() * 90) + 1,//number
        "numRVs": Math.floor(Math.random() * 90) + 1,//number
        "numObjects": Math.floor(Math.random() * 90) + 1,//number
        "groundRange": Math.floor(Math.random() * 90) + 1,//number
        "launchRegion": launchRegion[Math.floor(Math.random() * launchRegion.length)], // 1 of seven continents
        "launchCountry": selectedLaunchCountry, // random countries
        "launchLatitude": Math.floor(Math.random() * 90) + 1, //number
        "launchLongitude": Math.floor(Math.random() * 90) + 1, //number
        "launchAzimuth": Math.floor(Math.random() * 90) + 1, //number
        "launchObjectSets": Math.floor(Math.random() * 90) + 1, //number
        "impactTimeDay": Math.floor(Math.random() * 90) + 1, //number
        "impactTimeHour": Math.floor(Math.random() * 90) + 1, //number
        "impactTimeMinute": Math.floor(Math.random() * 90) + 1, //number
        "impactTimeSec": Math.floor(Math.random() * 90) + 1, //number
        "aimpointName": launchCountry[Math.floor(Math.random() * launchCountry.length)], // random country
        "aimpointLatitude": Math.floor(Math.random() * 90) + 1, //number
        "aimpointLongitude": Math.floor(Math.random() * 90) + 1, //number
        "flightTime": Math.floor(Math.random() * 90) + 1, //number
        "warhead": selectedWarhead, // nuclear, bio, standard
        "countermeasures": countermeasuresArray[Math.floor(Math.random() * countermeasuresArray.length)] // laser, mortar, kv, bullet
    }
    return traj
}
