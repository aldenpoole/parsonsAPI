let users = []

export const createData = (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(`User with ID ${user.id} added.`);
}

export const deleteData = (req, res) => {
    users =[];
}

export const getData = (req, res) => {
    res.send(users);
}

export const getDataByID = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user)=> user.id == id);
    res.send(foundUser);
}
