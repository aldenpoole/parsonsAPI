let systems = []

export const createData = (req, res) => {
    const system = req.body;
    systems.push(system);
    res.send(`System with ID ${system.id} added.`);
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