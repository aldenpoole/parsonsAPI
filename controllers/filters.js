let filters = []

export const createData = (req, res) => {
    /*const trajectory = req.body;
    trajectories.push(trajectory);
    res.send(`Trajectory with ID ${trajectory.id} added.`);*/
}

export const deleteData = (req, res) => {
    //trajectories =[];
}

export const getData = (req, res) => {
    let filterData = {
        "Data":{
            "filters":[
                {
                    "name":"classification",
                    "values":[
                        "Secret",
                        "Not so secret"
                    ]
                },
                {
                    "name":"flightMode",
                    "values":[
                        "Lofted",
                        "Depressed",
                        "Min Energy"
                    ]
                },
                {
                    "name":"system",
                    "values":[
                        "NoDong",
                        "Taepo-Dong",
                        "Paektusan"
                    ]
                },
                {
                    "name":"launchRegion",
                    "values":[
                        "North America",
                        "South America",
                        "Europe",
                        "Africa",
                        "Asia",
                        "Australia",
                        "Antarctica"
                    ]
                },
                {
                    "name":"launchCountry",
                    "values":[
                        "Egypt",
                        "Iran",
                        "Iraq",
                        "Russia",
                        "China",
                        "Saudi Arabia",
                        "Germany",
                        "Brazil",
                        "Chile",
                        "Poland",
                        "Australia"
                    ]
                },
                {
                    "name":"aimPointName",
                    "values":[
                        "Egypt",
                        "Iran",
                        "Iraq",
                        "Russia",
                        "China",
                        "Saudi Arabia",
                        "Germany",
                        "Brazil",
                        "Chile",
                        "Poland",
                        "Australia"
                    ]
                },
                {
                    "name":"countermeasures",
                    "values":[
                        "Mortar",
                        "Bullet",
                        "Laser",
                        "KV"
                    ]
                },
                {
                    "name":"rotation",
                    "values":[
                        "Rotating",
                        "Non-rotating"
                    ]
                },
                {
                    "name":"trajectoryType",
                    "values":[
                        "ballistic1",
                        "ballistic2"
                    ]
                },
                {
                    "name":"smhrVersionNumber",
                    "values":[
                        "v1.13",
                        "v1.14",
                        "v1.15"
                    ]
                },
                {
                    "name":"applicationUsed",
                    "values":[
                        "TMSS",
                        "TGX"
                    ]
                },
                {
                    "name":"specification",
                    "values":[
                        "TMSSIRS"
                    ]
                },
                {
                    "name":"earthGravityModel",
                    "values":[
                        "wg84",
                        "wgs96",
                        "mmw23",
                        "rmw45"
                    ]
                },
                {
                    "name":"earthShapeModel",
                    "values":[
                        "Round",
                        "Elliptical"
                    ]
                },
                {
                    "name":"atmosphericModel",
                    "values":[
                        "Low",
                        "Medium",
                        "High"
                    ]
                },
                {
                    "name":"rotationCoordFrame",
                    "values":[
                        "ECF",
                        "ECI"
                    ]
                },
                {
                    "name":"launchPointName",
                    "values":[
                        "Egypt",
                        "Iran",
                        "Iraq",
                        "Russia",
                        "China",
                        "Saudi Arabia",
                        "Germany",
                        "Brazil",
                        "Chile",
                        "Poland",
                        "Australia"
                    ]
                },
                {
                    "name":"countryOfOrigin",
                    "values":[
                        "Egypt",
                        "Iran",
                        "Iraq",
                        "Russia",
                        "China",
                        "Saudi Arabia",
                        "Germany",
                        "Brazil",
                        "Chile",
                        "Poland",
                        "Australia"
                    ]
                },
                {
                    "name":"warheads",
                    "values":[
                        "Nuclear",
                        "Ballistic",
                        "Chemical"
                    ]
                }
            ]
        }
    }

res.send(filterData)
}

export const getDataByID = (req, res) => {
   /* const { id } = req.params;

    const foundTrajectory = trajectories.find((trajectory)=> trajectory.id == id);
    res.send(foundTrajectory);*/
}
