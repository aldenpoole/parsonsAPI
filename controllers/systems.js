import { uuid } from 'uuidv4';

let systems = []

export const createData = (req, res) => {
    const body = req.body;

    let systems = []

    for(let i = 0;i<body.trajectories.length;i++){
        systems.push(createSystem())
    }

    res.send(systems);
}

export const deleteData = (req, res) => {
    systems =[];
}

export const getData = (req, res) => {
    res.send(systems);
}

export const getDataByID = (req, res) => {
    const { id } = req.params;
    const foundSystem = systems.find((system)=> system.id == id);
    res.send(foundSystem);
}

function createSystem() {
    let namesArray =["NoDong","ShortDong","LongDong"]

    let system ={
        "uid":uuid(),
        "name":namesArray[Math.floor(Math.random()*namesArray.length)],
        "fileSize":JSON.stringify(Math.floor(Math.random()*10))+"GB",
        "objects":createObjects()
    }

    return system
}

function createObjects(){
    let objects =[]

    let objectsArray =["RV","BoosterA","BoosterB","BoosterC"]
    let numObjects = Math.floor(Math.random()*objectsArray.length)
    let length = objectsArray.length

    for(let i = numObjects;i<length;i++){
        let object={
            "name":objectsArray[Math.floor(Math.random()*objectsArray.length)],
            "fileSize":JSON.stringify(Math.floor(Math.random()*10))+"mb",
            "artifactCategories":createCategories()
        }
        for(let i = 0;i<objectsArray.length;i++){
            if(object.name == objectsArray[i]){
                objectsArray.splice(i,1)
            }
        }
        objects.push(object)
    }
    return objects
}

function createCategories(){
    let artifactCategories =[
        {
            "name":"RCS",
            "fileSize":JSON.stringify(Math.floor(Math.random()*10))+"mb",
            "artifacts":createRCS()
        },
        {
            "name":"IR",
            "fileSize":JSON.stringify(Math.floor(Math.random()*10))+"mb",
            "artifacts":createIR()
        }
    ]
    return artifactCategories
}

function createRCS(){
    let rcsFiles=["x-band","y-band","z-band","uhef-band"]
    let length = rcsFiles.length

    let artifacts =[]

    for(let i = 0;i<length;i++){
        let artifact = {
            "name":rcsFiles[Math.floor(Math.random()*rcsFiles.length)],
            "fileSize":JSON.stringify(Math.floor(Math.random()*10))+"mb",
        }

        for(let i = 0;i<rcsFiles.length;i++){
            if(artifact.name == rcsFiles[i]){
                rcsFiles.splice(i,1)
            }
        }
        artifacts.push(artifact)
    }
    return artifacts
}

function createIR(){
    let irFiles =["SWIR","LWIR","MWIR"]
    let length = irFiles.length

    let artifacts =[]


    for(let i = 0;i<length;i++){
        let artifact = {
            "name":irFiles[Math.floor(Math.random()*irFiles.length)],
            "fileSize":JSON.stringify(Math.floor(Math.random()*10))+"mb",
        }

        for(let i = 0;i<irFiles.length;i++){
            if(artifact.name == irFiles[i]){
                irFiles.splice(i,1)
            }
        }
        artifacts.push(artifact)
    }
    return artifacts
}
